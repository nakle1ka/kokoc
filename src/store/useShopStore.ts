import axios from "axios";
import Cookies from "js-cookie";
import { create } from "zustand";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  amount: number;
  imageUrl: string;
  sizes: string[];
}

interface Transaction {
  id: number;
  name: string;
  size: string | null;
  date: string;
  price: number;
  status: "Ожидание" | "Отменено" | "Завершено" | "В корзине";
  type: "Покупка" | "Заказ";
}

const fakeProducts: Product[] = [
  {
    id: 1,
    name: "Клубная футболка",
    description: "Удобная футболка с логотипом клуба.",
    price: 25.99,
    amount: 0,
    imageUrl: "https://example.com/image1.jpg",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Клубная куртка",
    description: "Стильная куртка для болельщиков.",
    price: 59.99,
    amount: 50,
    imageUrl: "https://example.com/image2.jpg",
    sizes: ["M", "L", "XL", "XXL"],
  },
  {
    id: 3,
    name: "Клубный шарф",
    description: "Шарф с клубной символикой.",
    price: 15.99,
    amount: 100,
    imageUrl: "https://example.com/image3.jpg",
    sizes: [],
  },
  {
    id: 4,
    name: "Клубная кепка",
    description: "Кепка с логотипом клуба.",
    price: 19.99,
    amount: 75,
    imageUrl: "https://example.com/image4.jpg",
    sizes: [],
  },
  {
    id: 5,
    name: "Клубная толстовка",
    description: "Теплая толстовка для прохладной погоды.",
    price: 45.99,
    amount: 20,
    imageUrl: "https://example.com/image5.jpg",
    sizes: ["M", "L", "XL"],
  },
  {
    id: 6,
    name: "Клубные перчатки",
    description: "Зимние перчатки с клубным логотипом.",
    price: 12.99,
    amount: 150,
    imageUrl: "https://example.com/image6.jpg",
    sizes: ["S", "M", "L"],
  },
  {
    id: 7,
    name: "Клубная бутылка для воды",
    description: "Бутылка для воды с символикой клуба.",
    price: 9.99,
    amount: 80,
    imageUrl: "https://example.com/image7.jpg",
    sizes: [],
  },
  {
    id: 8,
    name: "Клубный рюкзак",
    description: "Удобный рюкзак для болельщиков.",
    price: 39.99,
    amount: 10,
    imageUrl: "https://example.com/image8.jpg",
    sizes: [],
  },
  {
    id: 9,
    name: "Клубный значок",
    description: "Металлический значок с логотипом клуба.",
    price: 5.99,
    amount: 200,
    imageUrl: "https://example.com/image9.jpg",
    sizes: [],
  },
  {
    id: 10,
    name: "Клубная кружка",
    description: "Кружка с символикой клуба.",
    price: 8.99,
    amount: 120,
    imageUrl: "https://example.com/image10.jpg",
    sizes: [],
  },
  {
    id: 11,
    name: "Клубная футболка черная",
    description: "Удобная футболка черного цвета с логотипом клуба.",
    price: 25.99,
    amount: 60,
    imageUrl: "https://example.com/image11.jpg",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 12,
    name: "Клубный чехол для телефона",
    description: "Чехол для телефона с символикой клуба.",
    price: 14.99,
    amount: 90,
    imageUrl: "https://example.com/image12.jpg",
    sizes: [],
  },
  {
    id: 13,
    name: "Клубные носки",
    description: "Носки с логотипом клуба.",
    price: 7.99,
    amount: 250,
    imageUrl: "https://example.com/image13.jpg",
    sizes: [],
  },
  {
    id: 14,
    name: "Клубная маска",
    description: "Маска для лица с клубной символикой.",
    price: 4.99,
    amount: 300,
    imageUrl: "https://example.com/image14.jpg",
    sizes: [],
  },
  {
    id: 15,
    name: "Клубная подушка",
    description: "Подушка с логотипом клуба.",
    price: 19.99,
    amount: 40,
    imageUrl: "https://example.com/image15.jpg",
    sizes: [],
  },
  {
    id: 16,
    name: "Клубная футболка женская",
    description: "Женская футболка с логотипом клуба.",
    price: 25.99,
    amount: 30,
    imageUrl: "https://example.com/image16.jpg",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 17,
    name: "Клубные шорты",
    description: "Спортивные шорты с логотипом клуба.",
    price: 29.99,
    amount: 15,
    imageUrl: "https://example.com/image17.jpg",
    sizes: ["M", "L"],
  },
  {
    id: 18,
    name: "Клубный брелок",
    description: "Брелок с символикой клуба.",
    price: 3.99,
    amount: 400,
    imageUrl: "https://example.com/image18.jpg",
    sizes: [],
  },
  {
    id: 19,
    name: "Клубные наручные часы",
    description: "Наручные часы с логотипом клуба.",
    price: 49.99,
    amount: 5,
    imageUrl: "https://example.com/image19.jpg",
    sizes: [],
  },
  {
    id: 20,
    name: "Клубная спортивная сумка",
    description: "Спортивная сумка с символикой клуба.",
    price: 34.99,
    amount: 25,
    imageUrl: "https://example.com/image20.jpg",
    sizes: [],
  },
  {
    id: 21,
    name: "Клубные кроссовки",
    description: "Кроссовки с логотипом клуба.",
    price: 59.99,
    amount: 10,
    imageUrl: "https://example.com/image21.jpg",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 22,
    name: "Клубный рюкзак 2",
    description: "Рюкзак с логотипом клуба.",
    price: 45.99,
    amount: 8,
    imageUrl: "https://example.com/image22.jpg",
    sizes: [],
  },
  {
    id: 23,
    name: "Клубная куртка зимняя",
    description: "Зимняя куртка с символикой клуба.",
    price: 99.99,
    amount: 20,
    imageUrl: "https://example.com/image23.jpg",
    sizes: ["M", "L", "XL", "XXL"],
  },
  {
    id: 24,
    name: "Клубный зонт",
    description: "Зонт с логотипом клуба.",
    price: 14.99,
    amount: 50,
    imageUrl: "https://example.com/image24.jpg",
    sizes: [],
  },
  {
    id: 25,
    name: "Клубная кружка 2",
    description: "Кружка с символикой клуба (другой дизайн).",
    price: 9.99,
    amount: 110,
    imageUrl: "https://example.com/image25.jpg",
    sizes: [],
  },
  {
    id: 26,
    name: "Клубная толстовка с капюшоном",
    description: "Толстовка с капюшоном для прохладной погоды.",
    price: 54.99,
    amount: 15,
    imageUrl: "https://example.com/image26.jpg",
    sizes: ["M", "L", "XL", "XXL"],
  },
  {
    id: 27,
    name: "Клубная термокружка",
    description: "Термокружка с символикой клуба.",
    price: 15.99,
    amount: 60,
    imageUrl: "https://example.com/image27.jpg",
    sizes: [],
  },
  {
    id: 28,
    name: "Клубная рубашка поло",
    description: "Рубашка поло с логотипом клуба.",
    price: 35.99,
    amount: 35,
    imageUrl: "https://example.com/image28.jpg",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 29,
    name: "Клубная кружка 3",
    description: "Кружка с альтернативным дизайном.",
    price: 8.99,
    amount: 100,
    imageUrl: "https://example.com/image29.jpg",
    sizes: [],
  },
  {
    id: 30,
    name: "Клубный браслет",
    description: "Силиконовый браслет с логотипом клуба.",
    price: 2.99,
    amount: 500,
    imageUrl: "https://example.com/image30.jpg",
    sizes: [],
  },
  // Повторим товары с изменением id и описания для увеличения до 50
  {
    id: 31,
    name: "Клубная майка",
    description: "Спортивная майка с логотипом клуба.",
    price: 23.99,
    amount: 40,
    imageUrl: "https://example.com/image31.jpg",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 32,
    name: "Клубная футболка белая",
    description: "Удобная белая футболка с логотипом клуба.",
    price: 25.99,
    amount: 70,
    imageUrl: "https://example.com/image32.jpg",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 33,
    name: "Клубный коврик для мыши",
    description: "Коврик для мыши с логотипом клуба.",
    price: 9.99,
    amount: 120,
    imageUrl: "https://example.com/image33.jpg",
    sizes: [],
  },
  {
    id: 34,
    name: "Клубная толстовка 2",
    description: "Теплая толстовка с клубной символикой.",
    price: 46.99,
    amount: 35,
    imageUrl: "https://example.com/image34.jpg",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 35,
    name: "Клубные носки 2",
    description: "Носки с альтернативным дизайном.",
    price: 7.99,
    amount: 150,
    imageUrl: "https://example.com/image35.jpg",
    sizes: [],
  },
  {
    id: 36,
    name: "Клубные перчатки 2",
    description: "Перчатки для зимы с клубным логотипом.",
    price: 13.99,
    amount: 100,
    imageUrl: "https://example.com/image36.jpg",
    sizes: ["S", "M", "L"],
  },
  {
    id: 37,
    name: "Клубная бейсболка",
    description: "Кепка-бейсболка с клубной символикой.",
    price: 19.99,
    amount: 85,
    imageUrl: "https://example.com/image37.jpg",
    sizes: [],
  },
  {
    id: 38,
    name: "Клубный рюкзак 3",
    description: "Рюкзак для спортивных болельщиков.",
    price: 39.99,
    amount: 12,
    imageUrl: "https://example.com/image38.jpg",
    sizes: [],
  },
  {
    id: 39,
    name: "Клубные перчатки 3",
    description: "Зимние перчатки с эмблемой клуба.",
    price: 14.99,
    amount: 90,
    imageUrl: "https://example.com/image39.jpg",
    sizes: ["S", "M", "L"],
  },
  {
    id: 40,
    name: "Клубная толстовка с капюшоном 2",
    description: "Толстовка с капюшоном для болельщиков.",
    price: 53.99,
    amount: 25,
    imageUrl: "https://example.com/image40.jpg",
    sizes: ["M", "L", "XL", "XXL"],
  },
  {
    id: 41,
    name: "Клубный шарф 2",
    description: "Шарф с клубной символикой и дизайном.",
    price: 16.99,
    amount: 50,
    imageUrl: "https://example.com/image41.jpg",
    sizes: [],
  },
  {
    id: 42,
    name: "Клубная кружка 4",
    description: "Кружка с новой символикой клуба.",
    price: 9.99,
    amount: 70,
    imageUrl: "https://example.com/image42.jpg",
    sizes: [],
  },
  {
    id: 43,
    name: "Клубная термокружка 2",
    description: "Термокружка для болельщиков клуба.",
    price: 16.99,
    amount: 30,
    imageUrl: "https://example.com/image43.jpg",
    sizes: [],
  },
  {
    id: 44,
    name: "Клубные шорты 2",
    description: "Спортивные шорты с новым логотипом.",
    price: 31.99,
    amount: 40,
    imageUrl: "https://example.com/image44.jpg",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 45,
    name: "Клубный рюкзак 4",
    description: "Рюкзак для болельщиков с новым дизайном.",
    price: 49.99,
    amount: 20,
    imageUrl: "https://example.com/image45.jpg",
    sizes: [],
  },
  {
    id: 46,
    name: "Клубный зонт 2",
    description: "Зонт с клубной символикой нового образца.",
    price: 17.99,
    amount: 35,
    imageUrl: "https://example.com/image46.jpg",
    sizes: [],
  },
  {
    id: 47,
    name: "Клубная маска 2",
    description: "Маска с новым логотипом клуба.",
    price: 5.99,
    amount: 180,
    imageUrl: "https://example.com/image47.jpg",
    sizes: [],
  },
  {
    id: 48,
    name: "Клубная футболка 3",
    description: "Футболка для болельщиков нового дизайна.",
    price: 28.99,
    amount: 55,
    imageUrl: "https://example.com/image48.jpg",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 49,
    name: "Клубная футболка женская 2",
    description: "Женская футболка нового образца.",
    price: 27.99,
    amount: 60,
    imageUrl: "https://example.com/image49.jpg",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 50,
    name: "Клубная кружка 5",
    description: "Кружка с логотипом клуба нового дизайна.",
    price: 11.99,
    amount: 50,
    imageUrl: "https://example.com/image50.jpg",
    sizes: [],
  },
];

interface Store {
  currentCartSize: number;
  transactions: Transaction[];
  products: Product[];
  currentPage: number;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setCurrentCartSize: () => void;
  setTransactions: (transactions: Transaction[] | Transaction) => void;
  getTransactionsData: () => Promise<void>;
  fetchProducts: () => Promise<void>;
}

export const useShopStore = create<Store>((set, get) => ({
  currentCartSize: 0,
  transactions: [],
  products: [],
  currentPage: 1,
  loading: false,
  setLoading: (loading: boolean) => set({ loading }),
  setTransactions: (transactions: Transaction[] | Transaction) => {
    if (Array.isArray(transactions)) {
      set({ transactions: transactions });
    } else {
      set((state) => ({
        transactions: [...state.transactions, transactions],
      }));
    }
  },
  setCurrentCartSize: () => {
    const currentCartSize = get().transactions.filter(
      (transaction) => transaction.status === "В корзине"
    ).length;
    set({ currentCartSize });
  },

  fetchProducts: async () => {
    try {
      const { currentPage, products } = get();
      const access_token = Cookies.get("access_token");

      set({ loading: true });

      // const response = await axios.get(
      //   `url/products?page=${currentPage}&limit=10`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${access_token}`,
      //     },
      //   }
      // );

      const startIndex = (currentPage - 1) * 10;
      const endIndex = startIndex + 10;
      set({
        products: [...products, ...fakeProducts.slice(startIndex, endIndex)],
        currentPage: currentPage + 1,
      });
      // if (response.status === 200) {
      //   const newProducts = response.data;
      //   set({
      //     products: [...products, ...newProducts],
      //     currentPage: currentPage + 1,
      //   });
      // } else {
      //   throw new Error("Ошибка при получении данных");
      // }
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    } finally {
      set({ loading: false });
    }
  },

  getTransactionsData: async () => {
    const { setLoading, setTransactions } = get();

    setLoading(true);

    const access_token = Cookies.get("access_token");

    try {
      const response = await axios.post("url", {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      if (response.status == 200) {
        const data = response.data;
        const transactions: Transaction[] = data.map((item: any) => ({
          id: item.id,
          name: item.name,
          size: item.size,
          date: item.date,
          status: item.status,
          cost: item.cost,
          type: item.type,
        }));
        setTransactions(transactions);
      } else {
        throw new Error("Ошибка при получении данных");
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    } finally {
      setLoading(false);
    }
  },
}));
