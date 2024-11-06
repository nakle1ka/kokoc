"use client";

import React, { useState } from "react";
import { Metadata } from "next";
import Pagination from "@/modules/shared/pagination/Pagination";
import ModalPayment from "../modalPayment/ModalPayment";

import styles from "./purchaseTable.module.scss";

export const metadata: Metadata = {
  title: "История покупок, Кокос групп",
  description: "Таблица с историей транзакций пользователя.",
};

interface Transaction {
  id: number;
  name: string;
  size: string | null;
  date: string;
  status: string;
  price: number;
  type: string;
}

interface Props {
  transactions: Transaction[];
  onDeleteFromCart: (id: number, size: string | null | undefined) => void;
}

const PurchaseTable: React.FC<Props> = ({ transactions, onDeleteFromCart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = transactions.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const handleDeleteFromCart = (id: number, size: string | null) => {
    onDeleteFromCart(id, size);
    if (currentItems.length === 1 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.scroll}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Название</th>
            <th>Дата</th>
            <th>Статус</th>
            <th>Сумма</th>
            <th>Тип</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((transaction) => (
            <tr key={transaction.id}>
              <td>
                {transaction.size
                  ? `${transaction.name} (${transaction.size})`
                  : transaction.name}
              </td>
              <td>{transaction.date}</td>
              <td>
                {transaction.status === "В корзине" ? (
                  <>
                    <button
                      className={styles.payBtn}
                      onClick={() => {
                        setSelectedTransaction(transaction);
                        setIsPaymentModalOpen(true);
                      }}
                    >
                      Оплатить
                    </button>
                    <button
                      className={styles.cancelBtn}
                      onClick={() =>
                        handleDeleteFromCart(transaction.id, transaction.size)
                      }
                    >
                      Отменить
                    </button>
                  </>
                ) : (
                  <span
                    className={`${styles.status} ${
                      transaction.status === "Ожидание"
                        ? styles.pending
                        : transaction.status === "Отменено"
                        ? styles.cancelled
                        : styles.completed
                    }`}
                  >
                    {transaction.status}
                  </span>
                )}
              </td>
              <td>{transaction.price}</td>
              <td>{transaction.type === "purchase" ? "Покупка" : "Заказ"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        itemsCount={transactions.length}
      />

      <ModalPayment
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        transaction={selectedTransaction}
      />
    </div>
  );
};

export default PurchaseTable;
