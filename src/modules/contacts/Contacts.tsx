import { ContactsList } from "./components/contactsList/contactsList";
import FeedbackForm from "./components/feedbackForm/FeedbackForm";

import styles from "./styles/contacts.module.scss";

export const Contacts: React.FC = () => {
  return (
    <div className={styles.fluid}>
      <ContactsList />
      <FeedbackForm />
    </div>
  );
};
