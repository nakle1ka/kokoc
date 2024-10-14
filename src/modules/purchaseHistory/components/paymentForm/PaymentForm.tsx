import React, { useState } from "react";
import Cookies from "js-cookie";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

import styles from "./paymentForm.module.scss";

interface Transaction {
  id: string;
  paymentMethodId: string;
  name: string;
  size: string | null;
  date: string;
  price: number;
  status: "Оплачено" | "Отменено" | "Завершено" | "В корзине";
  type: "Покупка" | "Заказ";
}

interface PaymentFormProps {
  transaction: Transaction;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ transaction }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setError("Не удалось получить элемент карты");
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error.message || "Ошибка при обработке платежа");
      setSuccess(false);
    } else {
      setError(null);
      setSuccess(true);
      console.log("PaymentMethod создан:", paymentMethod);
      console.log(
        `Оплата за товар: ${transaction.name}, Цена: ${transaction.price}`
      );

      try {
        const access_token = Cookies.get("access_token");

        const transactionData: Transaction = {
          id: transaction.id,
          paymentMethodId: paymentMethod.id,
          name: transaction.name,
          size: transaction.size,
          date: transaction.date,
          price: transaction.price,
          status: "Оплачено",
          type: "Заказ",
        };

        const response = await axios.post("/api/charge", transactionData, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
      } catch (error) {
        console.error("Ошибка при отправке данных на сервер:", error);
        setError("Ошибка при отправке данных на сервер");
      }
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        color: "#ffffffb3",
        fontSize: "16px",
        "::placeholder": {
          color: "#aaa",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Оплата товара: {transaction.name}</h2>
      <p className={styles.price}>Цена: {transaction.price} ₽</p>
      {transaction.size && (
        <p className={styles.size}>Размер: {transaction.size}</p>
      )}

      <CardElement options={cardElementOptions} />
      {error && <div className={styles.error}>{error}</div>}
      {success && <div className={styles.success}>Оплата прошла успешно!</div>}
      <button type="submit" disabled={!stripe} className={styles.button}>
        Оплатить
      </button>
    </form>
  );
};

export default PaymentForm;
