"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "../productCard/ProductCard";
import { useShopStore } from "@/store/useShopStore";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { Spinner } from "@/components/ui/spinner";

import styles from "./productList.module.scss";

interface Transaction {
  id: number;
  name: string;
  size: string | null;
  date: string;
  price: number;
  status: "Ожидание" | "Отменено" | "Завершено" | "В корзине";
  type: "Покупка" | "Заказ";
}

const ProductList: React.FC = () => {
  const { products, fetchProducts, setTransactions } = useShopStore();
  const [loading] = useInfiniteScroll(fetchProducts, false);
  const router = useRouter();

  const handleAddToCart = async (transaction: Transaction) => {
    try {
      setTransactions(transaction);
    } catch (error) {
      console.error("Ошибка авторизации:", error);
      router.push("/login");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ul className={styles.productList}>
      {products.length === 0 ? (
        <div className={styles.loaderContainer}>
          <Spinner className={styles.loaderIcon} />
        </div>
      ) : (
        <>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={handleAddToCart}
            />
          ))}
          {loading && (
            <div className="flex w-full justify-center">
              <Spinner className={styles.loaderIcon} />
            </div>
          )}
        </>
      )}
    </ul>
  );
};

export default ProductList;
