"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { ShoppingBasket } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import styles from "./cart.module.scss";

interface CartProps {
  productCount: number;
}

const Cart: React.FC<CartProps> = ({ productCount }) => {
  const router = useRouter();

  const handleCartClick = () => {
    router.push("profile/user/purchase_history");
  };

  return (
    <div className={styles.cartContent}>
      <div className={styles.cart}>
        <button className={styles.checkoutButton} onClick={handleCartClick}>
          <ShoppingBasket className={styles.cart} strokeWidth={1.5} />
          <Badge className={styles.badge}>
            {productCount >= 100 ? "99+" : productCount}
          </Badge>
        </button>
      </div>
    </div>
  );
};

export default Cart;
