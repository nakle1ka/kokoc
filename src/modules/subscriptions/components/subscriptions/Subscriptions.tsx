import React from "react";
import axios from "axios";
import { useStore } from "@/store/useStore";
import { ProfileContainer } from "@/components/profileContainer/ProfileContainer";
import ProfileHeader from "@/modules/profileHeader/ProfileHeader";
import ProfileNav from "../../../profileNav/components/profileNav/ProfileNav";
import SubscriptionCheckbox from "../subscriptionItem/SubscriptionItem";
import { MainButton } from "@/components/ui/mainButton/mainButton";
import { subscribeToPushNotifications } from "../../utils/pushNotifications";

import styles from "./subscriptions.module.scss";

const pushServerPublicKey = "PUBLIC_KEY";

const Subscriptions: React.FC = () => {
  const {
    isPushNotificationsChecked,
    isMatchNotificationsChecked,
    setIsMatchNotificationsChecked,
    setIsPushNotificationsChecked,
  } = useStore();

  const requestNotificationPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      throw new Error("Разрешение на уведомления не было получено");
    }
  };

  const handleSave = async () => {
    try {
      await requestNotificationPermission();

      // await subscribeToPushNotifications(pushServerPublicKey);

      const dataToSave = {
        isPushNotificationsChecked,
        isMatchNotificationsChecked,
      };

      // const response = await axios.post("url", dataToSave, {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });

      // console.log("Ответ сервера:", response.data);
    } catch (error) {
      console.error("Ошибка при подписке на уведомления:", error);
    }
  };

  return (
    <ProfileContainer>
      <ProfileHeader />
      <ProfileNav />
      <main className={styles.main}>
        <h1 className={styles.title}>Подписки</h1>
        <div className={styles.checkboxContainer}>
          <SubscriptionCheckbox
            label="Получать push-уведомления"
            isChecked={isPushNotificationsChecked}
            onChange={setIsPushNotificationsChecked}
          />
          <SubscriptionCheckbox
            label="Уведомлять о матчах и событиях"
            isChecked={isMatchNotificationsChecked}
            onChange={setIsMatchNotificationsChecked}
          />
          <MainButton text="Сохранить" onClick={handleSave} />
        </div>
      </main>
    </ProfileContainer>
  );
};

export default Subscriptions;
