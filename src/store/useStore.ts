import { create } from "zustand";

interface Store {
  username: string;
  subscriptions: number;
  totalPurchases: number;
  totalMatches: number;
  setUsername: (username: string) => void;
  setSubscriptions: (subscriptions: number) => void;
  setTotalPurchases: (total: number) => void;
  setTotalMatches: (matches: number) => void;
}

export const useStore = create<Store>((set) => ({
  username: "User Name",
  subscriptions: 0,
  totalPurchases: 0,
  totalMatches: 0,
  setUsername: (username) => set({ username }),
  setSubscriptions: (subscriptions) => set({ subscriptions }),
  setTotalPurchases: (total) => set({ totalPurchases: total }),
  setTotalMatches: (matches) => set({ totalMatches: matches }),
}));
