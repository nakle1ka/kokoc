import axios from "axios";

export const subscribeToPushNotifications = async (publicKey: string) => {
  try {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: publicKey,
    });

    const response = await axios.post("url", {
      token: subscription.endpoint,
    });

    console.log("Токен отправлен на сервер:", response.data);
  } catch (error) {
    console.error("Ошибка при подписке на уведомления:", error);
  }
};
