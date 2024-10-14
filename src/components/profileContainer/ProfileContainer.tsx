import React from "react";
import styles from "./profileContainer.module.scss";

type Props = {
  id?: string;
};

export const ProfileContainer: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  id = "",
}) => {
  return (
    <div className={styles.profileContainer} id={id}>
      {children}
    </div>
  );
};
