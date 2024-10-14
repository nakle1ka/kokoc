import React, { TextareaHTMLAttributes, forwardRef } from "react";
import Label from "./components/label/Label";

import styles from "./textArea.module.scss";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  htmlFor?: string;
  textareaClassName?: string;
  labelClassName?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, htmlFor, className, labelClassName, ...props }, ref) => {
    return (
      <>
        <textarea
          id={htmlFor}
          ref={ref}
          className={`${styles.textarea} ${className}`}
          {...props}
        />
        {label && (
          <Label text={label} htmlFor={htmlFor} className={labelClassName} />
        )}
      </>
    );
  }
);

export default TextArea;
