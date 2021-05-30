import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { ButtonGroup } from "./ButtonGroup";

describe("Button", () => {
    test("renders a list of buttons", async () => {
        render(
            <ButtonGroup>
                <Button>Click me</Button>
                <Button>Click me</Button>
                <Button>Click me</Button>
            </ButtonGroup>
        );

        expect(screen.getAllByText("Click me")).toBeTruthy();
    });
    test("renders a group with role attribute", async () => {
        render(
            <ButtonGroup role="group">
                <Button>Click me 1</Button>
                <Button>Click me 2</Button>
                <Button>Click me 3</Button>
            </ButtonGroup>
        );

        expect(screen.getAllByRole("group")).toBeTruthy();
    });
});
