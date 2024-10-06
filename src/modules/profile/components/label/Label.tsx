import React from "react";
import styles from "./label.module.scss";

interface Props {
  text: string;
  htmlFor?: string;
  className?: string;
}

const Label: React.FC<Props> = ({ text }) => {
  return <label className={styles.label}>{text}</label>;
};

export default Label;
