"use client";

import { useState } from "react";
import { Metadata } from "next";
import Cookies from "js-cookie";
import { useStore } from "@/store/useStore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import Input from "@/modules/input/Input";
import { MainButton } from "@/components/ui/mainButton/mainButton";
import TextArea from "@/modules/textArea/TextArea";

import {
  validateUsername,
  validateEmail,
  validatePassword,
  validateBiography,
} from "@/utils/validation";

import styles from "./registerForm.module.scss";

export const metadata: Metadata = {
  title: "Регистрация, аккаунт, Кокос групп",
  description: "Регистрация профиля.",
};

interface Props {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  biography: string;
}

export const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { setUsername, setEmail } = useStore();
  const { handleSubmit, setValue } = useForm<Props>();

  const onSubmit = async (data: Props) => {
    const newErrors: { [key: string]: string } = {};

    const usernameError = validateUsername(data.username);
    if (typeof usernameError === "string") {
      newErrors.username = usernameError;
    }

    const emailError = validateEmail(data.email);
    if (typeof emailError === "string") {
      newErrors.email = emailError;
    }

    const newPasswordError = validatePassword(data.password);
    if (typeof newPasswordError === "string") {
      newErrors.password = newPasswordError;
    }
    if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = "Пароли не совпадают";
    }

    if (data.biography) {
      const biographyError = validateBiography(data.biography);
      console.log(data.biography);
      if (typeof biographyError === "string") {
        newErrors.biography = biographyError;
      }
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post(
          "https://34.0.251.246/auth/register",
          {
            username: data.username,
            email: data.email,
            password: data.password,
          }
        );
        if (response.status === 200) {
          const responseData = response.data;
          Cookies.set("username", responseData.username, { secure: true });
          Cookies.set("email", responseData.email, { secure: true });
          Cookies.set("access_token", responseData.access_token, {
            secure: true,
          });
          Cookies.set("refresh_token", responseData.refresh_token, {
            secure: true,
          });
          Cookies.set("role", responseData.role, { secure: true });

          setUsername(data.username);
          setEmail(data.email);
          router.push("/profile");
        }
      } catch (error) {
        console.error("Ошибка при регистрации:", error);
      }
    }
  };

  const handleSubmitClick = handleSubmit(onSubmit);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Регистрация</h1>
      <form className={styles.form}>
        <header>
          <span>Общая информация</span>
          <Link href="/login">Вход с паролем</Link>
        </header>
        <main>
          <div className={styles.inputContainer}>
            {errors.username && (
              <p className={styles.error}>{errors.username}</p>
            )}
            <Input
              label="Логин"
              onChange={(e) => setValue("username", e.target.value)}
            />
          </div>

          <div className={styles.inputContainer}>
            {errors.email && <p className={styles.error}>{errors.email}</p>}
            <Input
              label="Email"
              type="email"
              onChange={(e) => setValue("email", e.target.value)}
            />
          </div>

          <div className={styles.inputContainer}>
            {errors.password && (
              <p className={styles.error}>{errors.password}</p>
            )}
            <Input
              label="Пароль"
              type="password"
              onChange={(e) => setValue("password", e.target.value)}
            />
          </div>

          <div className={styles.inputContainer}>
            {errors.confirmPassword && (
              <p className={styles.error}>{errors.confirmPassword}</p>
            )}
            <Input
              label="Подтвердите пароль"
              type="password"
              onChange={(e) => setValue("confirmPassword", e.target.value)}
            />
          </div>

          <div className={styles.inputContainer}>
            {errors.biography && (
              <p className={styles.error}>{errors.biography}</p>
            )}
            <TextArea
              id="biography"
              placeholder="Введите вашу биографию..."
              className={styles.textarea}
              label="Расскажите пару слов о себе"
              onChange={(e) => setValue("biography", e.target.value)}
            />
          </div>

          <p className={styles.privacyPolicy}>
            Нажимая продолжить, Вы соглашаетесь с Политикой в отношении
            обработки персональных данных
          </p>

          <div className={styles.submitContainer}>
            <MainButton text="Продолжить" onClick={handleSubmitClick} />
          </div>
        </main>
      </form>
    </div>
  );
};
