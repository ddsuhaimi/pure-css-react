import * as React from "react";
import cx from "classnames";
import "purecss";

export interface ButtonProps {
    customClass?: string;
    children: React.ReactNode;
    disabled?: boolean;
    active?: boolean;
    primary?: boolean;
    onClick?: () => void;
}

export const Button = ({ customClass, children, disabled, active, primary, onClick }: ButtonProps): JSX.Element => {
    const classNames = cx(customClass, "pure-button", {
        "pure-button-disabled": disabled,
        "pure-button-active": active,
        "pure-button-primary": primary,
    });
    return (
        <button className={classNames} onClick={onClick}>
            {children}
        </button>
    );
};
