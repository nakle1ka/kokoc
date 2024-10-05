import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { MobileNavMenu } from './components/mobileNavMenu/mobileNavMenu';
import { HeaderNavigate } from './components/headerNavigate/headerNavigate';
import { User } from 'lucide-react';

import styles from "./styles/header.module.scss"

type Props = {

}

export const Header: React.FC<Props> = ({ }) => {
    return (
        <div className={styles.header} >
            <div className={styles.leftSide}>
                <Link href="/">
                    <Image
                        src="/assets/logo.png"
                        alt="Kokoc group"
                        className={styles.logo}
                        width={50}
                        height={50}
                    />
                </Link>

                <nav className={styles.headerNav}>
                    <HeaderNavigate classNameForItems={styles.navItem} />
                </nav>
            </div>

            <div className={styles.rightSide}>
                <Button asChild>
                    <Link href={"/profile"}>
                        <User />
                    </Link>
                </Button>

                <MobileNavMenu />
            </div>
        </div>
    );
}