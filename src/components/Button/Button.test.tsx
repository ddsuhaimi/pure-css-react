import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
    test("renders a default button with text", async () => {
        render(<Button disabled={true}>Click me</Button>);

        expect(screen.getByText("Click me")).toBeInTheDocument();
    });
    test("renders a disabled button", async () => {
        render(<Button disabled>Click me</Button>);

        expect(screen.getByText("Click me")).toHaveClass("pure-button-disabled");
    });
    test("renders an active button", async () => {
        render(<Button active>Click me</Button>);

        expect(screen.getByText("Click me")).toHaveClass("pure-button-active");
    });
    test("renders a primary button", async () => {
        render(<Button primary>Click me</Button>);

        expect(screen.getByText("Click me")).toHaveClass("pure-button-primary");
    });

    test("handles onClick", async () => {
        const mockOnClick = jest.fn();
        render(<Button onClick={mockOnClick}>Click me</Button>);
        fireEvent.click(screen.getByText("Click me"));

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    test("adds customClass", async () => {
        render(<Button customClass="customClassToTest">Click me</Button>);

        expect(screen.getByText("Click me")).toHaveClass("customClassToTest");
    });
});
