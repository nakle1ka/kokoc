"use client";

import React, { useState, useEffect } from "react";
import ProfileHeader from "@/modules/profileHeader/ProfileHeader";
import UserInfoForm from "../userInfoForm/UserInfoForm";
import ProfileNav from "../../../profileNav/ProfileNav";

import styles from "./profile.module.scss";
import { url } from "inspector";

const Profile: React.FC = () => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [username, setUsername] = useState("");
  const [biography, setBiography] = useState("");
  const [password, setPassword] = useState("");

  const fetchUserData = async () => {
    try {
      const response = await fetch("ref");
      if (!response.ok) {
        throw new Error("Ошибка при получении данных");
      }

      const data = await response.json();
      setAvatarUrl(data.avatar_url);
      setUsername(data.user_name);
      setBiography(data.biography);
      //хэширование???
      setPassword(data.password);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  useEffect(() => {
    // fetchUserData();
    // setAvatarUrl(
    //   "url"
    // );
    setUsername("Jason");
    setBiography("I am a professional soccer player");
    setPassword("1234pass");
  }, []);

  return (
    <div className={styles.profileContainer}>
      <ProfileHeader />
      <ProfileNav />
      <main className={styles.main}>
        <h1 className={styles.title}>Профиль</h1>
        <UserInfoForm
          oldAvatar={avatarUrl}
          oldUsername={username}
          oldPassword={password}
          oldBiography={biography}
        />
      </main>
    </div>
  );
};

export default Profile;
