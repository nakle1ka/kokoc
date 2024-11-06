import React, { forwardRef } from "react";
import Label from "./components/label/Label";

import styles from "./input.module.scss";

interface Props {
  type?: string;
  placeholder?: string;
  value?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  htmlFor?: string;
  inputClassName?: string;
  labelClassName?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      type = "text",
      placeholder,
      value,
      label,
      onChange,
      htmlFor,
      inputClassName,
      labelClassName,
      ...props
    },
    ref
  ) => {
    return (
      <>
        <input
          ref={ref}
          id={htmlFor}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${styles.input} ${inputClassName}`}
          {...props}
        />
        {label && (
          <Label text={label} htmlFor={htmlFor} className={labelClassName} />
        )}
      </>
    );
  }
);

export default Input;
