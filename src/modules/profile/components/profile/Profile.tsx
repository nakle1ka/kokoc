'use client'

import React from "react";
import { Metadata } from "next";
import { ProfileContainer } from "@/components/profileContainer/ProfileContainer";
import ProfileHeader from "@/modules/profileHeader/ProfileHeader";
import UserInfoForm from "../userInfoForm/UserInfoForm";
import ProfileNav from "../../../profileNav/components/profileNav/ProfileNav";

import styles from "./profile.module.scss";

export const metadata: Metadata = {
  title: "История матчей, Кокос групп",
  description: "Управление вашим профилем и личной информацией.",
};

const Profile: React.FC = () => {
  return (
    <ProfileContainer>
      <ProfileHeader />
      <ProfileNav />
      <main className={styles.main}>
        <h1 className={styles.title}>Профиль</h1>
        <UserInfoForm />
      </main>
    </ProfileContainer>
  );
};

export default Profile;
