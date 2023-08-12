import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button = ({ text, ...restProps }: ButtonProps) => {
  return (
    <button className={styles["button__group"]} {...restProps}>
      {text}
    </button>
  );
};
