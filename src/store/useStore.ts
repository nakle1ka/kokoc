import axios from "axios";
import Cookies from "js-cookie";
import { create } from "zustand";

interface Match {
  id: number;
  name: string;
  date: string;
  attended: boolean;
}

interface Store {
  username: string;
  email: string;
  subscriptions: number;
  totalMatches: number;
  isPushNotificationsChecked: boolean;
  isMatchNotificationsChecked: boolean;
  matches: Match[];
  loadingMatches: boolean;

  setEmail: (email: string) => void;
  setUsername: (username: string) => void;
  setSubscriptions: (subscriptions: number) => void;
  setTotalMatches: (matches: number) => void;
  setIsPushNotificationsChecked: (isPushNotificationsChecked: boolean) => void;
  setIsMatchNotificationsChecked: (
    isMatchNotificationsChecked: boolean
  ) => void;
  fetchUserData: () => Promise<void>;
  fetchMatches: (page: number) => Promise<void>;
}

export const useStore = create<Store>((set) => ({
  username: localStorage.getItem("username") || "User Name",
  email: localStorage.getItem("email") || "user@example.com",
  subscriptions: 0,
  totalMatches: 0,
  isPushNotificationsChecked: false,
  isMatchNotificationsChecked: false,
  matches: [],
  loadingMatches: false,
  setEmail: (email) => set({ email }),
  setUsername: (username) => set({ username }),
  setSubscriptions: (subscriptions) => set({ subscriptions }),
  setTotalMatches: (totalMatches) => set({ totalMatches }),
  setIsPushNotificationsChecked: (isPushNotificationsChecked) =>
    set({ isPushNotificationsChecked }),
  setIsMatchNotificationsChecked: (isMatchNotificationsChecked) =>
    set({ isMatchNotificationsChecked }),

  fetchUserData: async () => {
    try {
      const access_token = Cookies.get("access_token");

      const response = await axios.get("https://34.0.251.246/auth/me", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (response.status === 200) {
        const data = response.data;

        set({
          username: data.username,
          email: data.email,
        });

        localStorage.setItem("username", data.username);
        localStorage.setItem("email", data.email);
      } else {
        throw new Error("Ошибка при получении данных пользователя");
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  },

  fetchMatches: async (page: number) => {
    set({ loadingMatches: true });
    try {
      const access_token = Cookies.get("access_token");
      const response = await axios.get(
        `https://34.0.251.246/api/matches?page=${page}&limit=5`,
        {
          // Загрузка 5 матчей
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        set((state) => ({
          matches: [...state.matches, ...data.matches],
          totalMatches: data.totalMatches,
        }));
      } else {
        throw new Error("Ошибка при получении матчей");
      }
    } catch (error) {
      console.error("Ошибка при загрузке матчей:", error);
    } finally {
      set({ loadingMatches: false });
    }
  },
}));
