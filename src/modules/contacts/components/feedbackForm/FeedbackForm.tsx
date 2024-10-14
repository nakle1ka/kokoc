"use client";

import React, { useState } from "react";
import axios from "axios";
import Input from "@/modules/input/Input";
import TextArea from "@/modules/textArea/TextArea";
import { MainButton } from "@/components/ui/mainButton/mainButton";
import { validateEmail } from "@/utils/validation";

import styles from "./feedbackForm.module.scss";

const messageTypes = ["Жалоба", "Предложение", "Вопрос"];

const departments = [
  "Пресс-служба",
  "Коммерческий отдел",
  "Техническая поддержка",
];

const FeedbackForm: React.FC = ({}) => {
  const [department, setDepartment] = useState("");
  const [messageType, setMessageType] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const onSubmit = async (formData: any) => {
    try {
      const access_token = localStorage.getItem("access_token");

      const response = await axios.post("/api/feedback", formData, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      setMessage("");
      console.log("Данные успешно отправлены:", response.data);
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Валидация полей
    const newErrors: { [key: string]: string } = {};
    if (!department) newErrors.department = "Пожалуйста, выберите отдел";
    if (!messageType)
      newErrors.messageType = "Пожалуйста, выберите тип обращения";
    if (!message) newErrors.message = "Пожалуйста, введите сообщение";
    if (!email) {
      newErrors.email = "Пожалуйста, введите email";
    } else {
      const emailError = validateEmail(email);
      if (typeof emailError === "string") {
        newErrors.email = emailError;
      }
    }

    setErrors(newErrors);

    // Отправка данных, если ошибок нет
    if (Object.keys(newErrors).length === 0) {
      const formData = {
        department,
        messageType,
        message,
        email,
      };
      onSubmit(formData);
      console.log("Отправка формы", formData);
    }
  };

  return (
    <div className={styles.feedbackContainer}>
      <form className={styles.feedbackForm} onSubmit={handleSubmit}>
        <h2 className={styles.feedbackTitle}>Форма обратной связи</h2>

        <div className={styles.field}>
          <label htmlFor="department">Отдел:</label>
          {errors.department && (
            <p className={styles.error}>{errors.department}</p>
          )}
          <select
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="">Выберите отдел</option>
            {departments.map((dept, index) => (
              <option key={index} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="messageType">Тип обращения:</label>
          {errors.messageType && (
            <p className={styles.error}>{errors.messageType}</p>
          )}
          <select
            id="messageType"
            value={messageType}
            onChange={(e) => setMessageType(e.target.value)}
          >
            <option value="">Выберите тип обращения</option>
            {messageTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="message">Сообщение:</label>
          {errors.message && <p className={styles.error}>{errors.message}</p>}
          <TextArea
            rows={1}
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Введите ваше сообщение"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email для связи:</label>
          {errors.email && <p className={styles.error}>{errors.email}</p>}
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите ваш email"
          />
        </div>

        <MainButton text="Отправить" onClick={() => handleSubmit} />
      </form>
    </div>
  );
};

export default FeedbackForm;
