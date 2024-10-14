"use client";

import React, { useState } from "react";
import Pagination from "../../../pagination/Pagination";

import styles from "./matchesTable.module.scss";

interface Match {
  id: number;
  name: string;
  date: string;
  attended: boolean;
}

interface Props {
  matches: Match[];
}

const MatchesTable: React.FC<Props> = ({ matches }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = matches.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(matches.length / itemsPerPage);

  return (
    <div className={styles.scroll}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Название</th>
            <th>Дата</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((match) => (
            <tr key={match.id}>
              <td>{match.name}</td>
              <td>{match.date}</td>
              <td>{match.attended ? "Посещен" : "Не посещен"}</td>
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

export default MatchesTable;
