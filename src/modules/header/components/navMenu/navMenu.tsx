'use client'

import React from 'react';
import Link from 'next/link';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import type { TLink } from '../../helpers/comandItems';

import styles from "./navMenu.module.scss"

type Props = {
    name: string;
    links: TLink[]
    isMobile: boolean;
    className?: string;
}

export const NavMenu: React.FC<Props> = ({ name, links, className = "", isMobile }) => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>

                    <NavigationMenuTrigger id={isMobile? styles.mobileContainer : styles.container}>{name}</NavigationMenuTrigger>

                    <NavigationMenuContent className={styles.content}>

                        {links.map(l =>
                            <p className={styles.item} key={l.name}>
                                <Link
                                    href={l.href}
                                    className={`${styles.link} ${className}`}
                                >
                                    {l.name}
                                </Link>
                            </p>
                        )}

                    </NavigationMenuContent>

                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}