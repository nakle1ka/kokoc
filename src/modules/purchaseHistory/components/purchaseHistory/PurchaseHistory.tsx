"use client";

import React, { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useShopStore } from "@/store/useShopStore";
import { ProfileContainer } from "@/components/profileContainer/ProfileContainer";
import ProfileHeader from "@/modules/profileHeader/ProfileHeader";
import ProfileNav from "@/modules/profileNav/components/profileNav/ProfileNav";
import PurchaseTable from "../purchaseTable/PurchaseTable";

import styles from "./purchaseHistory.module.scss";
import { Spinner } from "@/components/ui/spinner";

const PurchaseHistory: React.FC = () => {
  const { transactions, getTransactionsData, setTransactions } = useShopStore();
  const { loading } = useShopStore();

  useEffect(() => {
    if (transactions.length === 0) {
      getTransactionsData();
    }
  }, [transactions.length, getTransactionsData]);

  const deleteFromCart = async (
    id: number,
    size: string | null | undefined
  ) => {
    const transactionToDelete = transactions.find(
      (transaction) => transaction.id === id && transaction.size === size
    );

    if (transactionToDelete) {
      const access_token = Cookies.get("access_token");

      try {
        // await axios.delete(`url/${transactionToDelete.id}`, {
        //   headers: {
        //     Authorization: `Bearer ${access_token}`,
        //   },
        // });

        // Обновите состояние в сторе
        const newTransactions = transactions.filter(
          (transaction) => transaction.id !== id || transaction.size !== size
        );
        setTransactions(newTransactions);
      } catch (error) {
        console.error("Не удалось удалить транзакцию:", error);
      }
    }
  };

  return (
    <ProfileContainer>
      <ProfileHeader />
      <ProfileNav />
      <main className={styles.main}>
        <h1 className={styles.title}>История транзакций</h1>
        {loading ? (
          <Spinner />
        ) : transactions.length === 0 ? (
          <p className={styles.emptyMessage}>
            Ваша история транзакций пуста...
          </p>
        ) : (
          <PurchaseTable
            onDeleteFromCart={deleteFromCart}
            transactions={transactions}
          />
        )}
      </main>
    </ProfileContainer>
  );
};

export default PurchaseHistory;
