import { ComponentStory, ComponentMeta } from '@storybook/react';
import DataTable from '../../components/molecules/DataTable';
import { IDataTableRepo } from '../../Interfaces/IDataTableRepo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/DataTable',
  component: DataTable,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof DataTable>;
const githubRows: IDataTableRepo = {
  total: 5,
  items: [
    {
      id: 1000,
      name: 'vscode',
      owner: 'microsoft',
      description: 'just a test',
      rate: 100000,
    },
    {
      id: 2000,
      name: 'game',
      owner: 'microsoft',
      description: 'just a test',
      rate: 3000,
    },
    {
      id: 3000,
      name: 'code',
      owner: 'microsoft',
      description: 'just a test',
      rate: 100000,
    },
    {
      id: 4000,
      name: 'mic',
      owner: 'microsoft',
      description: 'just a test',
      rate: 100000,
    },
    {
      id: 5000,
      name: 'vscode plugin',
      owner: 'microsoft',
      description: 'just a test',
      rate: 1000,
    },
  ],
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DataTable> = (args: any) => (
  <DataTable {...args} />
);

export const GithubData = Template.bind({});
GithubData.args = {
  rows: githubRows,
  page: 1,
  currentPageHandler: () => console.log('currentPageHandler'),
  loading: false,
};
