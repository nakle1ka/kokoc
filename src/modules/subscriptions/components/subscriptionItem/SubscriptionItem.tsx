import React from "react";

import styles from "./subscriptionItem.module.scss";

interface SubscriptionCheckboxProps {
  label: string;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
}

const SubscriptionCheckbox: React.FC<SubscriptionCheckboxProps> = ({
  label,
  isChecked,
  onChange,
}) => {
  return (
    <div className={styles.subscription}>
      <label className={styles.subscriptionText}>{label}</label>
      <div className={styles.checkboxWrapper}>
        <label className={styles.switch}>
          <input
            className={styles.checkbox}
            type="checkbox"
            onChange={(e) => onChange(e.target.checked)}
            checked={isChecked}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
};

export default SubscriptionCheckbox;
