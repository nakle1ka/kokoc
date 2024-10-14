import React from "react";
import { useStore } from "@/store/useStore";
import { useShopStore } from "@/store/useShopStore";

import styles from "./profileHeader.module.scss";

const ProfileHeader: React.FC = () => {
  const { username, subscriptions, totalMatches } = useStore();
  const { transactions, getTransactionsData } = useShopStore();

  // const getProfileHeaderData = useStore((state) => state.getProfileHeaderData);

  // useEffect(() => {
  //   getProfileHeaderData();
  //   if (transactions.length === 0) {
  //     getTransactionsData();
  //   }
  // }, [username]);

  return (
    <div className={styles.introuduceContainer}>
      <div className={styles.userInfoStatsContainer}>
        <div>
          <p className={styles.userName}>{username}</p>
        </div>

        <ul className={styles.statsInfoContainer}>
          <li className={styles.statsInfoBlock}>
            <p className={styles.title}>Подписок</p>
            <p className={styles.stats}>{subscriptions}</p>
          </li>
          <li className={styles.statsInfoBlock}>
            <p className={styles.title}>Транзакций</p>
            <p className={styles.stats}>{transactions.length}</p>
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
