import React from "react";
import Link from "next/link";
import Image from "next/image";

import { footerContent } from "./helpers/footerContent";

import logo from "@/../public/assets/logo.png";

import styles from "./styles/footer.module.scss";

type Props = {};

export const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <Image src={logo} alt="" />
        <p>Официальный сайт Футбольного клуба «Кокос групп»</p>
      </div>

      <ul className={styles.links}>
        {footerContent.map((i) => (
          <li className={styles.item} key={i.name}>
            <Link href={i.href}>{i.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};
