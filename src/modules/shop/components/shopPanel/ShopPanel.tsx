"use client";

import React, { useEffect, useState } from "react";
import { useShopStore } from "@/store/useShopStore";
import FilterCategory from "../filterCategory/filterCategory";
import FilterSortPrice from "../filterSortPrice/FilterSortPrice";
import Cart from "../cart/Cart";
import { Menu } from "lucide-react";

import styles from "./shopPanel.module.scss";

const ShopPanel: React.FC = () => {
  const { currentCartSize, setCurrentCartSize, transactions } = useShopStore();
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);

  useEffect(() => {
    setCurrentCartSize();
  }, [transactions]);

  return (
    <div className={styles.panelContainer}>
      <button
        className={`${styles.burger} ${
          isPanelOpen ? styles.panelOpen : styles.panelClosed
        }`}
        onClick={() => setIsPanelOpen((prevState) => !prevState)}
      >
        <Menu className={styles.burgerIcon} strokeWidth={1.3} color="#fff" />
      </button>
      <div
        className={`${styles.panel} ${
          isPanelOpen ? styles.panelOpen : styles.panelClosed
        }`}
      >
        <div className={styles.filters}>
          <h3>Фильтры:</h3>
          <FilterCategory />
          <FilterSortPrice />
        </div>
        <Cart productCount={currentCartSize} />
      </div>
    </div>
  );
};

export default ShopPanel;
