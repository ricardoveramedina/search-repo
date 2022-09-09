import GitHubRepo from './GitHubRepo';
//const GIT_TOKEN: string = process.env.REACT_APP_GIT_TOKEN as string;
const GIT_TOKEN = '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';
const githubRepo = new GitHubRepo(GIT_TOKEN);

test.skip('search repos global', async () => {
  const response = await githubRepo.searchRepo('vs code', 'VS code');
  console.log('response', response, response.data.items[0]);
  expect(response.data.items[0].id).toBe(41881900);
});

test.skip('search repos by description and name', async () => {
  const response = await githubRepo.searchRepo('jisho.com', 'word');
  console.log('response', response, response.data.items);
  expect(response.data.total_count).toBe(1);
}, 10000);

test('check throttling', async () => {
  //const test = await githubRepo.searchRepo('jisho.com', 'word');
  //jest.setTimeout(100000);
  let callCounter: number = 0;
  for (let index = 0; index < 31; index++) {
    const test = await githubRepo.searchRepo('jisho.com', 'word');
    if (test) {
      callCounter++;
      if (callCounter === 31) {
        return;
      }
    }
  }
  expect(callCounter).toBe(31);
}, 50000);
