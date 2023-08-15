import * as React from "react";

import styles from "./input.module.scss";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  helperText?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, helperText, ...props }, ref) => {
    return (
      <div>
        <input
          type={type}
          className={styles["input__content"]}
          ref={ref}
          {...props}
        />
        {helperText && (
          <span className={styles["input__helper-text"]}>{helperText}</span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
