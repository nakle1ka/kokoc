"use client";

import React, { useState } from "react";
import ProfileHeader from "@/modules/profileHeader/ProfileHeader";
import ProfileNav from "../../../profileNav/ProfileNav";
import SubscriptionCheckbox from "../subscriptionItem/SubscriptionItem";
import styles from "./subscriptions.module.scss";

const Subscriptions: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.profileContainer}>
      <ProfileHeader />
      <ProfileNav />
      <main className={styles.main}>
        <h1 className={styles.title}>Подписки</h1>

        <SubscriptionCheckbox
          label="Подписка на новости"
          isChecked={isChecked}
          onChange={setIsChecked}
        />
      </main>
    </div>
  );
};

export default Subscriptions;
