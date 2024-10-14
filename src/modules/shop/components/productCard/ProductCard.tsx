"use client";

import React, { useEffect, useState } from "react";
import { MainButton } from "@/components/ui/mainButton/mainButton";
import { Shirt } from "lucide-react";
import { Undo2 } from "lucide-react";

import styles from "./productCard.module.scss";

interface Transaction {
  id: number;
  name: string;
  size: string | null;
  date: string;
  price: number;
  status: "Ожидание" | "Отменено" | "Завершено" | "В корзине";
  type: "Покупка" | "Заказ";
}

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  amount: number;
  imageUrl: string;
  sizes: string[];
  onAddToCart: (product: Transaction) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  amount,
  imageUrl,
  sizes,
  onAddToCart,
}) => {
  const [isSizeTableOpen, setIsSizeTableOpen] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("");

  function getFormattedDate() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  const selectSize = (size: string | null) => {
    if (typeof size === "string") {
      setSelectedSize(size);
    }
  };

  useEffect(() => {
    sizes.length > 0 && setSelectedSize(sizes[0]);
  }, []);

  const addToCartWithSize = () => {
    const transaction: Transaction = {
      id: id,
      name: name,
      size: selectedSize,
      date: getFormattedDate(),
      price: price,
      status: "В корзине",
      type: "Заказ",
    };
    onAddToCart(transaction);
  };

  return (
    <div
      className={`${styles.card} ${isSizeTableOpen && styles.clearOverflow} `}
    >
      <div className={styles.cardContent}>
        {imageUrl != "" ? (
          <img src={imageUrl} alt="Изображение" className={styles.image} />
        ) : (
          <Shirt className={styles.image} strokeWidth={0.2} />
        )}
        <div className={styles.descriptionCard}>
          <span className={styles.price}>${price.toFixed(2)}</span>
          <h2 className={styles.title}>{name}</h2>
          {amount > 0 ? (
            <h2 className={`${styles.amount} ${styles.available}`}>
              Есть на складе
            </h2>
          ) : (
            <h2 className={`${styles.amount} ${styles.noAvailable}`}>
              Нет на складе
            </h2>
          )}
          <MainButton
            text="Размеры"
            onClick={() => setIsSizeTableOpen((prevState) => !prevState)}
          />
        </div>
      </div>

      <div
        className={`${styles.cardContent} ${
          !isSizeTableOpen ? styles.sizeTableClosed : styles.sizeTableOpened
        }`}
      >
        <div className={styles.sizeTable}>
          <h1>Размеры:</h1>
          <ul className={styles.sizeList}>
            {sizes.length > 0 ? (
              sizes.map((size) => (
                <li key={size} className={styles.size}>
                  <button
                    onClick={() => selectSize(size)}
                    className={`${selectedSize === size && styles.selected}`}
                  >
                    {size}
                  </button>
                </li>
              ))
            ) : (
              <li className={`${styles.size} ${styles.empty}`}>Нет размеров</li>
            )}
          </ul>
          <section className={styles.description}>
            <article>
              <h3>
                <b>Описание</b>
              </h3>
              <span>{description}</span>
            </article>
          </section>
          {amount > 0 ? (
            <MainButton
              id="addToCart"
              text="В корзину"
              onClick={() => addToCartWithSize()}
            />
          ) : (
            <MainButton
              id="addToCart"
              aria-disabled="true"
              disabled={true}
              text="В корзину"
              onClick={() => {}}
            />
          )}
          <div className={styles.returnContainer}>
            <Undo2
              className={styles.return}
              strokeWidth={1.6}
              color="#fff"
              onClick={() => setIsSizeTableOpen((prevState) => !prevState)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
