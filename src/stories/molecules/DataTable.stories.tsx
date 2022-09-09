import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DataTable from '../../components/molecules/DataTable';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/DataTable',
  component: DataTable,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DataTable>;

const githubRows = {
  total: 1,
  items: [
    {
      id: 1000,
      name: 'vscode',
      owner: 'microsoft',
      description: 'just a test',
    },
  ],
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DataTable> = (args: any) => (
  <DataTable {...args} />
);
/* 
export const GithubData = Template.bind({});
GithubData.args = {
  rows: githubRows,
  isLoading: false,
}; */