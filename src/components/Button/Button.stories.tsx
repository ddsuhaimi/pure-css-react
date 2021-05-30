import { Story, Meta } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from "./Button";

export default {
    title: "Button",
    component: Button,
    description: `A button.`,
    // argTypes: {
    //     primary: { control: "boolean" },
    // },
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args}>Click me</Button>;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};

export const Active = Template.bind({});
Active.args = {
    active: true,
};

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
};

// export const CustomBackground = Template.bind({});
// CustomBackground.args = {
//   backgroundColor: '#A78BFA',
// };

// export const CustomFontColor = Template.bind({});
// CustomFontColor.args = {
//   color: '#1E40AF',
// };

// export const OnClick = Template.bind({});
// OnClick.args = {
//   // eslint-disable-next-line no-alert
//   onClick: () => alert('Clicked the button!'),
// };
