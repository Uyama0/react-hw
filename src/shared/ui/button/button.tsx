import { ButtonHTMLAttributes, FC } from "react";
import classNames from "classnames";

import styles from "./button.module.css";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly children?: React.ReactNode | string;
  readonly variant?: string;
}

export const Button: FC<IButton> = ({
  children,
  variant,
  disabled = false,
  onClick = () => {},
}) => {
  const buttonClasses = classNames(styles.button, {
    [styles.primary]: variant === "primary",
    [styles.secondary]: variant === "secondary",
  });

  return (
    <button disabled={disabled} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};
