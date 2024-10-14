"use client";

import Cookies from "js-cookie";
import axios from "axios";
import Link from "next/link";
import { Metadata } from "next";
import { useState } from "react";
import router from "next/router";
import { useForm } from "react-hook-form";
import { useStore } from "@/store/useStore";
import Input from "@/modules/input/Input";
import { MainButton } from "@/components/ui/mainButton/mainButton";

import styles from "./loginForm.module.scss";

export const metadata: Metadata = {
  title: "Вход, Авторизация, Кокос групп",
  description: "Форма входа в приложение.",
};

export const LoginForm: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { fetchUserData } = useStore();

  const onSubmit = async (data: any) => {
    if (!data.username || !data.password) {
      setErrors({ error: "Пожалуйста, заполните все поля" });
      return;
    }
    try {
      const response = await axios.post(
        "https://34.0.251.246/auth/login",
        data
      );
      if (response.status === 200) {
        const responseData = response.data;
        Cookies.set("access_token", responseData.access_token, {
          secure: true,
        });
        Cookies.set("refresh_token", responseData.refresh_token, {
          secure: true,
        });
        Cookies.set("token_type", responseData.token_type, {
          secure: true,
        });

        await fetchUserData();

        router.push("/profile");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 422) {
            const validationErrors = error.response.data.detail;
            validationErrors.forEach((errorDetail: any) => {
              console.error(`${errorDetail.msg} (тип: ${errorDetail.type})`);
              alert(`${errorDetail.msg}`);
            });
          } else if (error.response.status === 401) {
            setErrors((prevState) => ({
              ...prevState,
              error: "Неверный логин или пароль",
            }));
          } else {
            console.error("Ошибка при входе:", error.response.data);
          }
        } else {
          console.error("Сетевая ошибка:", error.message);
        }
      } else {
        console.error("Ошибка:", error);
      }
    }
  };

  const handleButtonClick = handleSubmit(onSubmit);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Вход</h1>
      <form className={styles.form}>
        <header>
          <span>Общая информация</span>
          <Link href="/register">Регистрация</Link>
        </header>
        <main>
          <div className={styles.inputContainer}>
            {errors.error && <p className={styles.error}>{errors.error}</p>}
            <Input label="Логин" {...register("username")} />
          </div>
          <div className={styles.inputContainer}>
            <Input label="Пароль" type="password" {...register("password")} />
          </div>
          <p className={styles.privacyPolicy}>
            Нажимая продолжить, Вы соглашаетесь с Политикой в отношении
            обработки персональных данных
          </p>
          <div className={styles.submitContainer}>
            <MainButton text="Продолжить" onClick={handleButtonClick} />
          </div>
        </main>
      </form>
    </div>
  );
};
