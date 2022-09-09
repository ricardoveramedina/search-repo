import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchBar from '../../components/atoms/SearchBar';
//import { repoColumns } from '../../components/molecules/DataTable/repoColumns';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/SearchBar',
  component: SearchBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SearchBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchBar> = (args: any) => (
  <SearchBar {...args} />
);
export const GithubData = Template.bind({});
GithubData.args = {};
