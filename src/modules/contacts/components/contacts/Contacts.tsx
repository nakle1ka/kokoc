import ContactCard from "../contactCard/ContactCard";
import FeedbackForm from "../feedbackForm/FeedbackForm";

import styles from "./contacts.module.scss";

const departmentContacts = [
  {
    title: "Пресс-служба",
    subtitle: null,
    contacts: [
      { type: "Телефон", value: "+123 456 789" },
      { type: "Email", value: "press@kokoc.fc" },
    ],
  },
  {
    title: "Коммерческий отдел",
    subtitle: null,
    contacts: [
      { type: "Телефон", value: "+123 456 789" },
      { type: "Email", value: "commerce@kokoc.fc" },
    ],
  },
  {
    title: "Техническая поддержка",
    subtitle: null,
    contacts: [
      { type: "Телефон", value: "+123 987 654" },
      { type: "Email", value: "support@kokoc.fc" },
    ],
  },
  {
    title: "СМИРНОВ ДМИТРИЙ ЮРЬЕВИЧ",
    subtitle: "Президент ЛФЛ",
    contacts: [
      { type: "Телефон", value: "+74956484485" },
      { type: "Email", value: "lfl@mail.ru" },
    ],
  },
  {
    title: "СМИРНОВ АРТЁМ ЮРЬЕВИЧ",
    subtitle: "Вице-президент ЛФЛ",
    contacts: [
      { type: "Телефон", value: "+79104365384" },
      { type: "Email", value: "smirnov.lfl@gmail.com" },
    ],
  },
  {
    title: "Бодров Денис",
    subtitle: "Секретарь ЛФЛ",
    contacts: [
      { type: "Телефон", value: "" },
      { type: "Email", value: "bodrov.denis@gmail.com" },
    ],
  },
  {
    title: "Павлов Владимир Николаевич",
    subtitle: "Судейский комитет",
    contacts: [
      { type: "Телефон", value: "+79168877770" },
      { type: "Email", value: "pavlovlfl@mail.ru" },
    ],
  },
  {
    title: "Рыженков Юрий Александрович",
    subtitle: "Руководство интернет-проектом lfl.ru",
    contacts: [
      { type: "Телефон", value: "" },
      { type: "Email", value: "admin@lfl.ru" },
    ],
  },
];

export const Contacts: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Контакты</h1>
      <div className={styles.fluid}>
        <div className={styles.cardList}>
          {departmentContacts.map((department) => {
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
        <div className={styles.feedback}>
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
};
