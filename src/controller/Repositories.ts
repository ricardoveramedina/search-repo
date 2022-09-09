import GitHubRepo from '../services/GitHubRepo';
const GIT_TOKEN = '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';

/* const container = {
          id: item.id,
          name: item.name,
          owner: item.owner?.login,
          url: item.html_url,
          description: item.description,
          language: item.language,
          rate: item.stargazers_count
        }; */
export default class Repositories {
  githubRepo: GitHubRepo;
  perPage: number;
  constructor(perPage: number) {
    this.githubRepo = new GitHubRepo(GIT_TOKEN);
    this.perPage = perPage;
  }
  async search(page: number, searchDescription: string, name?: string) {
    const response = await this.githubRepo.searchRepo(
      searchDescription,
      name,
      page,
      this.perPage
    );
    //console.log('response', response.data.items);
    let formated;
    if (response.data.items) {
      const items = response.data.items.map((item) => {
        const container = {
          id: item.id,
          name: item.name,
          owner: item.owner?.login,
          description: item.description,
        };
        return container;
      });
      formated = {
        total: response.data.total_count,
        items,
      };
    }
    console.log('formated', formated);
    return formated;
  }
}

//expect(response.data.items[0].id).toBe(41881900);

/* const data = {
  id: 41881900,
  name: 'vscode',
  owner: {
    login: 'microsoft',
  },
  html_url: 'https://github.com/microsoft/vscode',
  description: 'Visual Studio Code',
  size: 535730,
  stargazers_count: 136146,
  language: 'TypeScript',
  topics: [
    'editor',
    'electron',
    'microsoft',
    'typescript',
    'visual-studio-code',
  ],
  visibility: 'public',
};
 */
