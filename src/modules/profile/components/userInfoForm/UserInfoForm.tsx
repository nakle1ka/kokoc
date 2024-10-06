"use client";

import React, { useState, useRef, useEffect } from "react";
import Label from "../label/Label";
import Input from "../input/Input";
import { User, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  validateUsername,
  validatePassword,
  validateBiography,
} from "../../utils/validation";

import styles from "./userInfoForm.module.scss";

interface Props {
  oldAvatar: string;
  oldUsername: string;
  oldBiography: string;
  oldPassword: string;
}

const UserInfoForm: React.FC<Props> = ({
  oldAvatar,
  oldUsername,
  oldBiography,
  oldPassword,
}) => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(oldAvatar);
  const [username, setUsername] = useState(oldUsername);
  const [biography, setBiography] = useState(oldBiography);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [avatar, setAvatar] = useState<File | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [enteredOldPassword, setEnteredOldPassword] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setAvatarUrl(oldAvatar);
    setUsername(oldUsername);
    setBiography(oldBiography);
  }, [oldAvatar, oldUsername, oldBiography]);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setAvatar(file);
      setAvatarUrl(null);
    }
  };

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    const usernameError = validateUsername(username);
    if (typeof usernameError === "string") newErrors.username = usernameError;

    if (enteredOldPassword !== oldPassword && enteredOldPassword !== "") {
      newErrors.password = "Старый пароль неверен";
    }

    if (newPassword) {
      const newPasswordError = validatePassword(newPassword);
      if (typeof newPasswordError === "string") {
        newErrors.newPassword = newPasswordError;
      }
    }

    const biographyError = validateBiography(biography);
    if (typeof biographyError === "string")
      newErrors.biography = biographyError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("Данные формы корректны!");

      const dataToSend: any = {};

      if (username !== oldUsername) {
        dataToSend.username = username;
      }
      if (biography !== oldBiography) {
        dataToSend.biography = biography;
      }
      if (newPassword) {
        dataToSend.newPassword = newPassword;
      }
      if (avatar) {
        dataToSend.avatar = avatar;
      }

      if (Object.keys(dataToSend).length !== 0) {
        // Отправка данных на сервер
        // try {
        //   const response = await fetch("ref", {
        //     method: "PATCH",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(dataToSend),
        console.log(dataToSend);
        //   });

        //   if (response.ok) {
        //     const data = await response.json();
        //     console.log("Профиль обновлен:", data);
        //     // запихнуть сюда очиску формы
        //   } else {
        //     const errorData = await response.json();
        //     setErrors({ form: errorData.message });
        //   }
        // } catch (err) {
        //   console.error("Ошибка при отправке данных:", err);
        //   setErrors({ form: "Ошибка при отправке данных" });
        // }

        setNewPassword("");
        setEnteredOldPassword("");
        setErrors({});
      }
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.imageContainer}>
        {avatar ? (
          <img
            src={URL.createObjectURL(avatar)}
            alt="Аватарка"
            className={styles.icon}
          />
        ) : avatarUrl ? (
          <Image
            src={avatarUrl}
            alt="Аватарка"
            width={150}
            height={150}
            className={styles.icon}
          />
        ) : (
          <User className={styles.icon} />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <Camera className={styles.editIcon} onClick={handleCameraClick} />
      </div>

      <div className={styles.inputContainer}>
        {errors.username && <p className={styles.error}>{errors.username}</p>}
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
        <Label text="Имя пользователя" />
      </div>

      <div className={styles.inputContainer}>
        {errors.password && <p className={styles.error}>{errors.password}</p>}
        <Input
          type="password"
          value={enteredOldPassword}
          onChange={(e) => setEnteredOldPassword(e.target.value)}
        />
        <Label text="Старый пароль" />
      </div>

      <div className={styles.inputContainer}>
        {errors.newPassword && (
          <p className={styles.error}>{errors.newPassword}</p>
        )}
        <Input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Label text="Новый пароль" />
      </div>

      <div className={styles.inputContainer}>
        {errors.biography && <p className={styles.error}>{errors.biography}</p>}
        <textarea
          id="biography"
          value={biography}
          placeholder="Введите вашу биографию..."
          className={styles.textarea}
          onChange={(e) => setBiography(e.target.value)}
        ></textarea>
        <Label text="Расскажите пару слов о себе" />
      </div>

      <Button className={styles.submit} type="submit">
        Сохранить
      </Button>
      {errors.form && <p className={styles.error}>{errors.form}</p>}
    </form>
  );
};

export default UserInfoForm;
