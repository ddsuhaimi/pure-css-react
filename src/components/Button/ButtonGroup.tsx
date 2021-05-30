import * as React from "react";
import cx from "classnames";
import "purecss";

export interface ButtonGroupProps {
    customClass?: string;
    children: React.ReactNode;
    role?: string;
    ariaLabel?: string;
}

export const ButtonGroup = ({ customClass, children, role, ariaLabel }: ButtonGroupProps): JSX.Element => {
    const classNames = cx(customClass, "pure-button-group");
    return (
        <div className={classNames} role={role} aria-label={ariaLabel}>
            {children}
        </div>
    );
};
