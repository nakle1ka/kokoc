type TMatchItem = {
    date: string;
    name: string;
} & TTeam1 & TTeam2

type TTeam1 = {
    t1Logo: string;
    t1Name: string;
    t1Points: number;
}
type TTeam2 = {
    t2Logo: string;
    t2Name: string;
    t2Points: number;
}

function getStat(
    kokocNumber: number, kokocPoints: number,
    enemyPoints: number, enemyName: string, enemyLogo: string
): TTeam1 & TTeam2 {
    let enemyNumber;

    kokocNumber == 1
        ? enemyNumber = 2
        : enemyNumber = 1

    // технически всё верно) но чтобы ts не ругался надо дольше расписывать,
    // решил оставить так
    // @ts-ignore1
    return {
        [`t${kokocNumber}Logo`]: "/assets/Logo.png",
        [`t${kokocNumber}Name`]: "Кокос групп",
        [`t${kokocNumber}Points`]: kokocPoints,

        [`t${enemyNumber}Logo`]: enemyLogo,
        [`t${enemyNumber}Name`]: enemyName,
        [`t${enemyNumber}Points`]: enemyPoints,
    }
}

export const matchList: TMatchItem[] = [
    {
        date: "28.09.2024 (сб)",
        name: "15 тур",

        ...getStat(2, 2, 5, 'Пищевик', 'https://www.lfl.ru/photo/clubs/big-size/393_59f09b60f0fd7.png')
    },

    {
        date: "29.09.2024 (вс)",
        name: "24 тур",

        ...getStat(1, 5, 0, 'Антиспорт', 'https://www.lfl.ru/photo/clubs/big-size/435_63ff536a59447.png')
    },

    {
        date: "05.10.2024 (сб)",
        name: "25 тур",

        ...getStat(2, 4, 2, 'АФК Портер', 'https://www.lfl.ru/photo/clubs/big-size/554.png')
    },

    {
        date: "22.09.2024",
        name: "1/4 финала-II",

        ...getStat(1, 2, 0, 'ЛФК Тройка', 'https://www.lfl.ru/photo/clubs/big-size/314_5992e918558ae.png')
    },
    {
        date: "15.09.2024",
        name: "22 тур",

        ...getStat(1, 12, 1, 'Альпика групп', 'https://www.lfl.ru/photo/clubs/big-size/11066_65ca3c1d2b347.png')
    },
    {
        date: "05.10.2024 (сб)",
        name: "22 тур",

        ...getStat(2, 3, 5, 'Городок-17', 'https://www.lfl.ru/photo/clubs/big-size/893.png')
    },



    {
        date: "12.10.2024 (сб)",
        name: "26 тур",

        ...getStat(1, -1, -1, 'Городок-17', 'https://www.lfl.ru/photo/clubs/big-size/893.png')
    },

    {
        date: "13.10.2024 (вс)",
        name: "23 тур",

        ...getStat(2, -1, -1, 'Бавария', 'https://www.lfl.ru/photo/clubs/big-size/12178_6221c3ad601ce.png')
    },
    {
        date: "27.10.2024",
        name: "26 тур",

        ...getStat(1, -1, -1, 'Керосинка', 'https://www.lfl.ru/photo/clubs/big-size/378.png')
    },
    {
        date: "03.11.2024",
        name: "26 тур",

        ...getStat(2, -1, -1, 'Классико ЮЗ', 'https://www.lfl.ru/photo/clubs/big-size/4458.png')
    },
    {
        date: "10.11.2024 (вс)",
        name: "21 тур",

        ...getStat(2, -1, -1, 'Уралец', 'https://www.lfl.ru/photo/clubs/big-size/876_623dd0aa850ee.png')
    },
    {
        date: "17.11.2024",
        name: "30 тур",

        ...getStat(1, -1, -1, 'Пищевик', 'https://www.lfl.ru/photo/clubs/big-size/393_59f09b60f0fd7.png')
    },
]
