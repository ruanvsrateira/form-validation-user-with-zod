import { InputHTMLAttributes } from "react";

import styles from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
}

export const Input = ({ label, ...restProps }: InputProps) => {
  return (
    <div className="input-container">
      {label && <label className={styles["input__label"]}>{label}</label>}
      <input {...restProps} className={styles["input__content"]} />
    </div>
  );
};
