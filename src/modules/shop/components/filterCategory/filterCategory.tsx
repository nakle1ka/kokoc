import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import styles from "./filterCategory.module.scss";

const categories = [
  { value: "all", label: "Все" },
  { value: "clothing", label: "Одежда" },
  { value: "accessories", label: "Аксессуары" },
  { value: "souvenirs", label: "Сувениры" },
  { value: "shoes", label: "Обувь" },
  { value: "headwear", label: "Головные уборы" },
  { value: "bags", label: "Сумки" },
  { value: "equipment", label: "Экипировка" },
];

const FilterCategory: React.FC = () => {
  return (
    <div className={styles.filterContainer}>
      <Select>
        <SelectTrigger className={styles.select}>
          <SelectValue placeholder="Выберите категорию" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem
              key={category.value}
              value={category.value}
              className={styles.option}
            >
              {category.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterCategory;
