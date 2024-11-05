"use client";

import React, { useState } from "react";
import axios from "axios";
import { validateEmail } from "@/utils/validation";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CustomSelect } from "@/components/ui/customSelect/customSelect";

import styles from "./feedbackForm.module.scss";
import { fetchFeedback } from "../../api/fetchFeedback";

const messageTypes = ["Жалоба", "Предложение", "Вопрос"];

const departments = [
  "Пресс-служба",
  "Коммерческий отдел",
  "Техническая поддержка",
];

const FeedbackForm: React.FC = ({ }) => {
  const [department, setDepartment] = useState("");
  const [messageType, setMessageType] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  

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
      fetchFeedback(formData);
      console.log("Отправка формы", formData);
    }
  };

  return (
    <form className={styles.feedbackForm}>
      <h2 className={styles.feedbackTitle}>Форма обратной связи</h2>

      <div className={styles.field}>
        <label htmlFor="department">Отдел:</label>
        {errors.department && (
          <p className={styles.error}>{errors.department}</p>
        )}
        <CustomSelect
          trigger="Выберите отдел"
          items={departments}
          onChange={(newValue) => setDepartment(newValue)}
          value={department}
        />
      </div>

      <div className={styles.field}>
        <label>Тип обращения:</label>
        {errors.messageType && (
          <p className={styles.error}>{errors.messageType}</p>
        )}
        <CustomSelect
          trigger="Выберите тип обращения"
          items={messageTypes}
          onChange={(newValue) => setMessageType(newValue)}
          value={messageType}
        />
      </div>

      <div className={styles.field}>
        <label>Сообщение:</label>
        {errors.message && <p className={styles.error}>{errors.message}</p>}
        <Textarea
          // id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Введите ваше сообщение"
        />
      </div>

      <div className={styles.field}>
        <label>Email для связи:</label>
        {errors.email && <p className={styles.error}>{errors.email}</p>}
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Введите ваш email"
        />
      </div>

      <Button onClick={(e) => handleSubmit(e)} >Отправить</Button>
    </form>
  );
};

export default FeedbackForm;
