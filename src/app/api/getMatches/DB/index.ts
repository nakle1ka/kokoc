import {TMatch as TMatchItem} from '@/types/matchType'

function getStat(
    kokocNumber: number, kokocPoints: number,
    enemyPoints: number, enemyName: string, enemyLogo: string
): Omit<TMatchItem, 'date' | 'name' | 'time' | 'id' | 'city'> {
    
    let enemyNumber;
    kokocNumber == 1
        ? enemyNumber = 2
        : enemyNumber = 1

    //@ts-ignore
    return {
        [`t${kokocNumber}logo`]: "/assets/Logo.png",
        [`t${kokocNumber}name`]: "Кокос групп",
        [`t${kokocNumber}points`]: kokocPoints,

        [`t${enemyNumber}logo`]: enemyLogo,
        [`t${enemyNumber}name`]: enemyName,
        [`t${enemyNumber}points`]: enemyPoints,
    }
}

export const matchList: TMatchItem[] = [
    {
        id: 'a987f42b-0321-4567-b98f-234567890123', 
        date: "28.09.2024",
        name: "15 тур",
        time: "14:00", 
        city: "Москва",
        ...getStat(2, 2, 5, 'Пищевик', 'https://www.lfl.ru/photo/clubs/big-size/393_59f09b60f0fd7.png')
    },

    {
        id: 'b2345678-9012-4345-ab01-234567890123', 
        date: "29.09.2024",
        name: "24 тур",
        time: "16:00", 
        city: "Санкт-Петербург",
        ...getStat(1, 5, 0, 'Антиспорт', 'https://www.lfl.ru/photo/clubs/big-size/435_63ff536a59447.png')
    },

    {
        id: 'c7654321-0123-4567-89ab-234567890123', 
        date: "05.10.2024 ",
        name: "25 тур",
        time: "13:00", 
        city: "Екатеринбург",
        ...getStat(2, 4, 2, 'АФК Портер', 'https://www.lfl.ru/photo/clubs/big-size/554.png')
    },

    {
        id: 'd1234567-8901-4321-ab01-234567890123', 
        date: "22.09.2024",
        name: "1/4 финала-II",
        time: "17:00", 
        city: "Нижний Новгород",
        ...getStat(1, 2, 0, 'ЛФК Тройка', 'https://www.lfl.ru/photo/clubs/big-size/314_5992e918558ae.png')
    },
    {
        id: 'e0123456-7890-4321-ab01-234567890123', 
        date: "15.09.2024",
        name: "22 тур",
        time: "15:00", 
        city: "Новосибирск",
        ...getStat(1, 12, 1, 'Альпика групп', 'https://www.lfl.ru/photo/clubs/big-size/11066_65ca3c1d2b347.png')
    },
    {
        id: 'f1234567-8901-4321-ab01-234567890123', 
        date: "05.10.2024",
        name: "22 тур",
        time: "12:00", 
        city: "Красноярск",
        ...getStat(2, 3, 5, 'Городок-17', 'https://www.lfl.ru/photo/clubs/big-size/893.png')
    },



    {
        id: 'g1234567-8901-4321-ab01-234567890123', 
        date: "12.10.2024",
        name: "26 тур",
        time: "18:00", 
        city: "Челябинск",
        ...getStat(1, -1, -1, 'Городок-17', 'https://www.lfl.ru/photo/clubs/big-size/893.png')
    },

    {
        id: 'h1234567-8901-4321-ab01-234567890123', 
        date: "13.10.2024",
        name: "23 тур",
        time: "12:00", 
        city: "Казань",
        ...getStat(2, -1, -1, 'Бавария', 'https://www.lfl.ru/photo/clubs/big-size/12178_6221c3ad601ce.png')
    },
    {
        id: 'i1234567-8901-4321-ab01-234567890123', 
        date: "27.10.2024",
        name: "26 тур",
        time: "15:00", 
        city: "Самара",
        ...getStat(1, -1, -1, 'Керосинка', 'https://www.lfl.ru/photo/clubs/big-size/378.png')
    },
    {
        id: 'j1234567-8901-4321-ab01-234567890123', 
        date: "03.11.2024",
        name: "26 тур",
        time: "16:00", 
        city: "Омск",
        ...getStat(2, -1, -1, 'Классико ЮЗ', 'https://www.lfl.ru/photo/clubs/big-size/4458.png')
    },
    {
        id: 'k1234567-8901-4321-ab01-234567890123', 
        date: "18.11.2024",
        name: "21 тур",
        time: "13:00", 
        city: "Ростов-на-Дону",
        ...getStat(2, -1, -1, 'Уралец', 'https://www.lfl.ru/photo/clubs/big-size/876_623dd0aa850ee.png')
    },
    {
        id: 'l1234567-8901-4321-ab01-234567890123', 
        date: "17.11.2024",
        name: "30 тур",
        time: "14:00", 
        city: "Краснодар",
        ...getStat(1, -1, -1, 'Пищевик', 'https://www.lfl.ru/photo/clubs/big-size/393_59f09b60f0fd7.png')
    },
]