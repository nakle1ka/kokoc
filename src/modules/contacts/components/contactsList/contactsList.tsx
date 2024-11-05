import React from 'react';
import ContactCard from './components/contactCard/ContactCard';
import { contactItems } from './helpers/contactItems';
import styles from './styles/contactsList.module.scss'

type Props = {

}

export const ContactsList: React.FC<Props> = ({ }) => {
    return (
        <div className={styles.cardList}>
            {contactItems.map((department) => {
                return (
                    <ContactCard
                        key={department.title}
                        title={department.title}
                        subtitle={department.subtitle}
                        contacts={department.contacts}
                    />
                );
            })}
        </div>
    );
}