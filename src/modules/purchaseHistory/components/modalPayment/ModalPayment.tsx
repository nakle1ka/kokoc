import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../paymentForm/PaymentForm";

import styles from "./modalPayment.module.scss";

const stripePromise = loadStripe("your-publishable-key-here");

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  transaction: {
    id: number;
    name: string;
    price: number;
    size: string | null;
  } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, transaction }) => {
  if (!isOpen || !transaction) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose}>
          Закрыть
        </button>
        <Elements stripe={stripePromise}>
          <PaymentForm transaction={transaction} />
        </Elements>
      </div>
    </div>
  );
};

export default Modal;
