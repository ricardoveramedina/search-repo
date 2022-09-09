import GitHubRepo from './GitHubRepo';
const GIT_TOKEN: string = '' as string;
const githubRepo = new GitHubRepo(GIT_TOKEN);

test('search repos global', async () => {
  const response = await githubRepo.searchRepo('vs code', 'VS code');
  console.log('response', response, response.data.items[0]);
  expect(response.data.items[0].id).toBe(41881900);
});

test('search repos by description and name', async () => {
  const response = await githubRepo.searchRepo('jisho.com', 'word');
  console.log('response', response, response.data.items);
  expect(response.data.total_count).toBe(1);
}, 10000);

test('check throttling', async () => {
  let totalCount = 0;
  for (let index = 0; index < 11; index++) {
    const response = await githubRepo.searchRepo('jisho.com', 'word');
    totalCount = response.data.total_count;
  }
  expect(totalCount).toBe(1);
}, 60000);
