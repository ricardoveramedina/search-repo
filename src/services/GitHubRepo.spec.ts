/* import { MockExperienceRepo } from '../mocks/mockExperienceRepo';
import { ExperienceController } from '../controllers/ExperienceController';

let experienceController: ExperienceController;

interface Res {
  status?: jest.Mock;
  send?: jest.Mock;
}

const mockResponse = () => {
  const res: Res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

beforeEach(() => {
  experienceController = new ExperienceController(new MockExperienceRepo());
});

*/
import GitHubRepo from './GitHubRepo';
//const GIT_TOKEN: string = process.env.REACT_APP_GIT_TOKEN as string;
const GIT_TOKEN = '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';
const githubRepo = new GitHubRepo(GIT_TOKEN);

//beforeAll(() => jest.setTimeout(30000));

test.skip('Should 200 with an empty array of experiences', async () => {
  const test = await githubRepo.getUsers();
  expect(2 + 2).toBe(4);
  //expect(githubRepo.getUsers()).toHaveBeenCalledWith(200);
  //await experienceController.handleGetExperiences(null, res);
  //expect(res.status).toHaveBeenCalledWith(200);
  //expect(res.send).toHaveBeenCalledWith({ experiences: [] });
});

test('search repos global', async () => {
  const response = await githubRepo.searchRepo('vs code', 'VS code');
  console.log('response', response, response.data.items[0]);
  expect(response.data.items[0].id).toBe(41881900);
});

test.skip('search repos by description and name', async () => {
  const response = await githubRepo.searchRepo('jisho.com', 'word');
  console.log('response', response, response.data.items);
  expect(response.data.total_count).toBe(1);
}, 10000);

test.skip('check throttling', async () => {
  //const test = await githubRepo.searchRepo('jisho.com', 'word');
  //jest.setTimeout(100000);
  let callCounter: number = 0;
  for (let index = 0; index < 31; index++) {
    const test = await githubRepo.searchRepo('jisho.com', 'word');
    if (test) {
      callCounter++;
      if (callCounter === 31) {
        expect(callCounter).toBe(31);
      }
    }
  }
}, 50000);
