import { create } from 'zustand'

type TFilters = {
    date: boolean,
}

type Store = {
    filters: TFilters;
    setFilters: (newFields: any) => void;
}

export const useStore = create<Store>()((set) => ({
    filters: {
        date: false
    },
    setFilters: (newFields) => set((state) => ({ filters: {
        ...state,
        ...newFields
    } })),
}))