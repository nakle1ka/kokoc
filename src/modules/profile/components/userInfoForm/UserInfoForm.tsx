"use client";

import React, { useState, useRef, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Input from "@/modules/input/Input";
import { MainButton } from "@/components/ui/mainButton/mainButton";
import { useStore } from "@/store/useStore";
import TextArea from "@/modules/textArea/TextArea";
import { Spinner } from "@/components/ui/spinner";
import { Camera, User } from "lucide-react";
import Image from "next/image";
import {
  validateUsername,
  validatePassword,
  validateBiography,
} from "@/utils/validation";

import styles from "./userInfoForm.module.scss";

interface Props {
  className?: string;
}

const UserInfoForm: React.FC<Props> = ({ className }) => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>();
  const [avatar, setAvatar] = useState<File | null>(null);
  const [oldUsername, setOldUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [password, setPassword] = useState<string>();
  const [newPassword, setNewPassword] = useState("");
  const [enteredOldPassword, setEnteredOldPassword] = useState("");
  const [oldBiography, setOldBiography] = useState<string>("");
  const [newBiography, setNewBiography] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true);

  const { username, setUsername } = useStore();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const getUserData = async () => {
    try {
      const access_token = Cookies.get("access_token");

      const response = await axios.get("url", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (response.status === 200) {
        const data = response.data;

        setAvatarUrl(data.avatar_url);
        setOldUsername(data.user_name);
        setNewUsername(data.user_name);
        setOldBiography(data.biography);
        setNewBiography(data.biography);
        // хэширование???
        setPassword(data.password);
      } else {
        throw new Error("Ошибка при получении данных");
      }
    } catch (error) {
      console.error("Ошибка:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // getUserData();
    setAvatarUrl("");
    setOldUsername(username);
    setNewUsername(username);
    setOldBiography("I am a professional soccer player");
    setNewBiography("I am a professional soccer player");
    setPassword("1234pass");
    setLoading(false);
  }, []);

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

    const usernameError = validateUsername(newUsername);
    if (typeof usernameError === "string") newErrors.username = usernameError;

    if (enteredOldPassword !== password && enteredOldPassword !== "") {
      newErrors.password = "Старый пароль неверен";
    }

    if (newPassword) {
      const newPasswordError = validatePassword(newPassword);
      if (typeof newPasswordError === "string") {
        newErrors.newPassword = newPasswordError;
      }
    }

    const biographyError = validateBiography(newBiography);
    if (typeof biographyError === "string")
      newErrors.biography = biographyError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (validateForm()) {
      const dataToSend: any = {};

      if (avatarUrl) {
        dataToSend.newAvatar = avatarUrl;
      }
      if (oldUsername !== newUsername) {
        dataToSend.username = newUsername;
      }
      if (oldBiography !== newBiography) {
        dataToSend.biography = newBiography;
      }
      if (newPassword) {
        dataToSend.newPassword = newPassword;
      }
      if (avatar) {
        dataToSend.avatar = avatar;
      }

      if (Object.keys(dataToSend).length !== 0) {
        setNewPassword("");
        setEnteredOldPassword("");
        setErrors({});
        setUsername(newUsername);
      }
    }
  };

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <Spinner className={styles.loaderIcon} />
      </div>
    );
  }

  return (
    <form
      className={`${styles.formContainer} ${className}`}
      onSubmit={handleSubmit}
    >
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
          <User className={styles.icon} strokeWidth={1} />
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
        <Input
          value={newUsername}
          label="Имя пользователя"
          onChange={(e) => setNewUsername(e.target.value)}
        />
      </div>

      <div className={styles.inputContainer}>
        {errors.password && <p className={styles.error}>{errors.password}</p>}
        <Input
          type="password"
          value={enteredOldPassword}
          label="Старый пароль"
          onChange={(e) => setEnteredOldPassword(e.target.value)}
        />
      </div>

      <div className={styles.inputContainer}>
        {errors.newPassword && (
          <p className={styles.error}>{errors.newPassword}</p>
        )}
        <Input
          type="password"
          value={newPassword}
          label="Новый пароль"
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>

      <div className={styles.inputContainer}>
        {errors.biography && <p className={styles.error}>{errors.biography}</p>}
        <TextArea
          id="biography"
          value={newBiography}
          placeholder="Введите вашу биографию..."
          className={styles.textarea}
          label="Расскажите пару слов о себе"
          onChange={(e) => setNewBiography(e.target.value)}
        />
      </div>

      <MainButton text="Сохранить" onClick={() => handleSubmit} />
      {errors.form && <p className={styles.error}>{errors.form}</p>}
    </form>
  );
};

export default UserInfoForm;
