"use client";

import React, { useState } from "react";
import Pagination from "@/modules/pagination/Pagination";
import styles from "./purchaseTable.module.scss";

interface Transaction {
  id: number;
  name: string;
  date: string;
  status: string;
  cost: number | null;
  type: string;
}

interface Props {
  transactions: Transaction[];
}

const PurchaseTable: React.FC<Props> = ({ transactions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = transactions.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  return (
    <div className={styles.scroll}>
      <table className={styles.purchaseTable}>
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
              <td>{transaction.name}</td>
              <td>{transaction.date}</td>
              <td>{transaction.status}</td>
              <td>{transaction.cost ? transaction.cost : "N/A"}</td>
              <td>{transaction.type === "purchase" ? "Покупка" : "Заказ"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PurchaseTable;
