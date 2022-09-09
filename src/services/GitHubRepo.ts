import { Octokit } from '@octokit/core';
import { throttling } from '@octokit/plugin-throttling';

export default class GitHubRepo {
  octokit: Octokit;
  constructor(token: string) {
    //console.log('GIT_TOKEN', token);
    const MyOctokit = Octokit.plugin(throttling);
    this.octokit = new MyOctokit({
      auth: token,
      throttle: {
        onRateLimit: (
          retryAfter: any,
          options: { method: any; url: any; request: { retryCount: number } }
        ) => {
          this.octokit.log.warn(
            `Request quota exhausted for request ${options.method} ${options.url}`
          );

          // Retry twice after hitting a rate limit error, then give up
          if (options.request.retryCount <= 2) {
            console.log(`Retrying after ${retryAfter} seconds!`);
            return true;
          }
        },
        onAbuseLimit: (options: { method: any; url: any }) => {
          // does not retry, only logs a warning
          this.octokit.log.warn(
            `Abuse detected for request ${options.method} ${options.url}`
          );
        },
      },
    });
  }

  async getUsers() {
    const result = await this.octokit.request('/user');
    console.log('result', result);
    return result;
  }
  async searchRepo(
    searchDescription: string,
    name?: string,
    page?: number,
    per_page?: number
  ) {
    let q = '';
    q += name && `${name} in:name `;
    q += searchDescription && `${searchDescription} in:description `;

    const result = await this.octokit.request('GET /search/repositories', {
      q,
      sort: 'stars',
      direction: 'desc',
      page,
      per_page,
    });
    return result;
  }
}
