import React from 'react';
import Link from 'next/link';

import { NavMenu } from '../navMenu/navMenu';
import { comandItems } from '../../helpers/comandItems';

import styles from './headerNavigate.module.scss'

type Props = {
    classNameForItems: string;
    isMobile?: boolean;
}

export const HeaderNavigate: React.FC<Props> = ({ classNameForItems, isMobile = false }) => {
    return (
        <ul className={styles.navList}>
            <li className={styles.li}>
                <Link href="/"
                    className={classNameForItems}
                >Главная</Link>
            </li>

            <li className={styles.li}>
                <Link href="/news"
                    className={classNameForItems}
                >Новости</Link>
            </li>

            <li className={styles.li}>
                <NavMenu
                    name='Команда'
                    links={comandItems}
                    className={classNameForItems}
                    isMobile={isMobile}
                />
            </li>

            <li className={styles.li}>
                <Link href="/shop"
                    className={classNameForItems}
                >Магазин</Link>
            </li>
        </ul>
    );
}