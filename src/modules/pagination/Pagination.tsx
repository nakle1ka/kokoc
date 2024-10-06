import React from "react";
import styles from "./pagination.module.scss";
import { Button } from "@/components/ui/button";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Назад
      </Button>
      <span>
        Страница {currentPage} из {totalPages}
      </span>
      <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Вперёд
      </Button>
    </div>
  );
};

export default Pagination;
