import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchBar from '../../components/atoms/SearchBar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchBar> = (args: any) => (
  <SearchBar {...args} />
);
export const Primary = Template.bind({});
Primary.args = {
  searchHandler: () => console.log('searching...'),
};
