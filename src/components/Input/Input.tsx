import { InputHTMLAttributes } from "react";

import styles from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
  placeholder: string;
}

export const Input = ({ label, placeholder, ...restProps }: InputProps) => {
  return (
    <div className="input-container">
      {label && <label className={styles["input__label"]}>{label}</label>}
      <input {...restProps} className={styles["input__content"]} />
    </div>
  );
};
