import React from "react";
import styles from "./profileHeader.module.scss";
import { useStore } from "@/store/useStore";

const ProfileHeader: React.FC = () => {
  const { username, subscriptions, totalPurchases, totalMatches } = useStore();

  return (
    <div className={styles.introuduceContainer}>
      <div className={styles.userInfoStatsContainer}>
        <p className={styles.userName}>{username}</p>
        <ul className={styles.statsInfoContainer}>
          <li className={styles.statsInfoBlock}>
            <p className={styles.title}>Подписок</p>
            <p className={styles.stats}>{subscriptions}</p>
          </li>
          <li className={styles.statsInfoBlock}>
            <p className={styles.title}>Транзакций</p>
            <p className={styles.stats}>{totalPurchases}</p>
          </li>
          <li className={styles.statsInfoBlock}>
            <p className={styles.title}>Посещенных матчей</p>
            <p className={styles.stats}>{totalMatches}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileHeader;
