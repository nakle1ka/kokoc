import React from "react";
import styles from "./contactCard.module.scss";

interface Contact {
  type: string;
  value: string;
}

interface ContactsProps {
  title: string;
  subtitle?: string | null;
  contacts: Contact[];
}

const ContactCard: React.FC<ContactsProps> = ({
  title,
  subtitle,
  contacts,
}) => {
  return (
    <section className={styles.cardContainer}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}{" "}
      <div className={styles.body}>
        {contacts.map((contact) => (
          <p key={contact.value} className={styles.contact}>
            <span>{contact.type}: </span>
            <span>
              <b>{contact.value}</b>
            </span>
          </p>
        ))}
      </div>
    </section>
  );
};

export default ContactCard;
