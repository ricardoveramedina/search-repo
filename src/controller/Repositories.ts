import GitHubRepo from '../services/GitHubRepo';
const GIT_TOKEN: string = (process.env.REACT_APP_GIT_TOKEN as string) || '';

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
    let formated;
    if (response.data.items) {
      const items = response.data.items.map((item) => {
        const container = {
          id: item.id,
          name: item.name,
          owner: item.owner?.login,
          description: item.description,
          rate: item.stargazers_count,
        };
        return container;
      });
      formated = {
        total: response.data.total_count,
        items,
      };
    }
    return formated;
  }
}
