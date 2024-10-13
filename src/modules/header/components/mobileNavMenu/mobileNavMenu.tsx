import React from 'react';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { HeaderNavigate } from '../headerNavigate/headerNavigate';

import styles from "./MobileNavMenu.module.scss"

type Props = {

}

export const MobileNavMenu: React.FC<Props> = ({ }) => {
    return (
        <div className={styles.container}>
            <Sheet>
                <SheetTrigger className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md">
                    Меню
                </SheetTrigger>

                <SheetContent id={styles.content}>
                    <SheetHeader>
                        <SheetTitle id={styles.title}>Навигация</SheetTitle>
                        <SheetDescription>
                            <HeaderNavigate classNameForItems={styles.item} isMobile={true}/>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
}