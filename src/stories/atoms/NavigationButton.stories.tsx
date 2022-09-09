import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavigationButton from '../../components/atoms/NavigationButton';
import { IPageNavigation } from '../../Interfaces/IPageNavigation';
import { ButtonDirection } from '../../components/atoms/NavigationButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/NavigationButton',
  component: NavigationButton,
} as ComponentMeta<typeof NavigationButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavigationButton> = (args: any) => (
  <NavigationButton {...args} />
);
export const Back = Template.bind({});
Back.args = {
  variant: ButtonDirection.LEFT,
  handleClick: () => console.log(IPageNavigation.BACK),
  disabled: false,
};
export const Next = Template.bind({});
Next.args = {
  variant: ButtonDirection.RIGHT,
  handleClick: () => console.log(IPageNavigation.NEXT),
  disabled: false,
};
