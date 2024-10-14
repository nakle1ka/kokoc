"use client";

import React from "react";
import styles from "./mainButton.module.scss";

type Props = {
  text: string;
  onClick: () => void;
  id?: string;
  disabled?: boolean;
};

export const MainButton: React.FC<Props> = ({
  text,
  onClick,
  id = "",
  disabled = false,
}) => {
  return (
    <button
      id={id}
      className={styles.btn}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles.text}>{text}</span>
    </button>
  );
};
