import { FC, InputHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

import styles from "./styles.module.css";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  readonly label?: string;
  readonly leftIcon?: ReactNode;
  readonly rightIcon?: ReactNode;
}

export const Input: FC<IInput> = ({
  onChange,
  value,
  label,
  placeholder,
  required,
  className,
  leftIcon,
  rightIcon,
}) => {
  return (
    <div className={styles.input_wrapper}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span>*</span>}
        </label>
      )}
      <div className={styles.input_wrapper}>
        {leftIcon && <span className={styles.left_icon}>{leftIcon}</span>}
        <input
          className={classNames(
            styles.input,
            className,
            leftIcon && styles.input_with_left_icon
          )}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
