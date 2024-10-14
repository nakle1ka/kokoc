import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import styles from "./filterSortPrice.module.scss";

const categories = [
  { value: "ascending", label: "По возрастанию" },
  { value: "descending", label: "По убыванию" },
];

const FilterSortPrice: React.FC = () => {
  return (
    <div className={styles.filterContainer}>
      <Select>
        <SelectTrigger className={styles.select}>
          <SelectValue placeholder="По цене" />
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

export default FilterSortPrice;
