"use client";

import React, { useEffect } from "react";
import { useShopStore } from "@/store/useShopStore";
import ShopPanel from "../shopPanel/ShopPanel";
import ProductList from "../productList/ProductList";

import styles from "./shop.module.scss";

export const metadata = {
  title: "Магазин, Кокос групп",
  description: "Магазин, Кокос групп.",
};

const Shop: React.FC = () => {
  const { transactions, getTransactionsData } = useShopStore();

  useEffect(() => {
    if (transactions.length === 0) {
      getTransactionsData();
    }
  }, []);

  return (
    <div className={styles.shopContainer}>
      <ShopPanel />
      <ProductList />
    </div>
  );
};

export default Shop;
