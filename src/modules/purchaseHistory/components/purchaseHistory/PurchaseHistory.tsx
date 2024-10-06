"use client";

import React from "react";
import ProfileHeader from "@/modules/profileHeader/ProfileHeader";
import PurchaseTable from "../purchaseTable/PurchaseTable";

import styles from "./purchaseHistory.module.scss";
import ProfileNav from "@/modules/profileNav/ProfileNav";

const PurchaseHistory: React.FC = () => {
  const transactions = [
    {
      id: 1,
      name: "Покупка товара A",
      date: "2024-09-01",
      status: "Завершено",
      cost: 150,
      type: "purchase",
    },
    {
      id: 2,
      name: "Заказ товара B",
      date: "2024-09-02",
      status: "Ожидание",
      cost: 200,
      type: "order",
    },
    {
      id: 3,
      name: "Покупка товара C",
      date: "2024-09-03",
      status: "Завершено",
      cost: 300,
      type: "purchase",
    },
    {
      id: 4,
      name: "Заказ товара D",
      date: "2024-09-04",
      status: "Отменено",
      cost: 200,
      type: "order",
    },
    {
      id: 5,
      name: "Покупка товара E",
      date: "2024-09-05",
      status: "Завершено",
      cost: 250,
      type: "purchase",
    },
    {
      id: 6,
      name: "Заказ товара F",
      date: "2024-09-06",
      status: "Завершено",
      cost: 100,
      type: "order",
    },
    {
      id: 7,
      name: "Покупка товара G",
      date: "2024-09-07",
      status: "Ожидание",
      cost: 50,
      type: "purchase",
    },
    {
      id: 8,
      name: "Заказ товара H",
      date: "2024-09-08",
      status: "Завершено",
      cost: 400,
      type: "order",
    },
    {
      id: 9,
      name: "Покупка товара I",
      date: "2024-09-09",
      status: "Завершено",
      cost: 90,
      type: "purchase",
    },
    {
      id: 10,
      name: "Заказ товара J",
      date: "2024-09-10",
      status: "Ожидание",
      cost: 220,
      type: "order",
    },
    {
      id: 11,
      name: "Покупка товара K",
      date: "2024-09-11",
      status: "Завершено",
      cost: null,
      type: "purchase",
    },
    {
      id: 12,
      name: "Заказ товара L",
      date: "2024-09-12",
      status: "Отменено",
      cost: 200,
      type: "order",
    },
    {
      id: 13,
      name: "Покупка товара M",
      date: "2024-09-13",
      status: "Завершено",
      cost: 170,
      type: "purchase",
    },
    {
      id: 14,
      name: "Заказ товара N",
      date: "2024-09-14",
      status: "Завершено",
      cost: null,
      type: "order",
    },
    {
      id: 15,
      name: "Покупка товара O",
      date: "2024-09-15",
      status: "Ожидание",
      cost: 120,
      type: "purchase",
    },
    {
      id: 16,
      name: "Заказ товара P",
      date: "2024-09-16",
      status: "Завершено",
      cost: null,
      type: "order",
    },
  ];

  return (
    <div className={styles.profileContainer}>
      <ProfileHeader />
      <ProfileNav />
      <main className={styles.main}>
        <h1 className={styles.title}>История транзакций</h1>
        <PurchaseTable transactions={transactions} />
      </main>
    </div>
  );
};

export default PurchaseHistory;
