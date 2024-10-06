import React from "react";
import styles from "./input.module.scss";

interface Props {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  );
};

export default Input;
