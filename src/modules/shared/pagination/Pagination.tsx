import React, { useEffect } from "react";
import styles from "./pagination.module.scss";
import { MainButton } from "@/components/ui/mainButton/mainButton";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsCount?: number;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsCount,
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

  useEffect(() => {
    if (itemsCount === 0) {
      onPageChange(1);
    }
  }, [itemsCount, onPageChange]);

  if (totalPages === 0) {
    return null;
  }

  return (
    <div className={styles.pagination}>
      <MainButton
        text="Назад"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      />
      <span>
        Страница {currentPage} из {totalPages}
      </span>
      <MainButton
        text="Вперёд"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      />
    </div>
  );
};

export default Pagination;
