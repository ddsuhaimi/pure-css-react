import { Story, Meta } from "@storybook/react/types-6-0";
import { Button } from "./Button";
import { ButtonGroup, ButtonGroupProps } from "./ButtonGroup";

export default {
    title: "Button Group",
    component: ButtonGroup,
    description: `A button group.`,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonGroupProps> = (args) => (
    <ButtonGroup {...args}>
        <Button>Click Me 1</Button>
        <Button>Click Me 2</Button>
        <Button>Click Me 3</Button>
    </ButtonGroup>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
