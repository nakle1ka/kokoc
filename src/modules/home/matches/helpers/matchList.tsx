type TMatchItem = {
    date: string;
    name: string;
} & TTeam1 & TTeam2

type TTeam1 = {
    t1logo: string;
    t1name: string;
    t1points: number;
}
type TTeam2 = {
    t2logo: string;
    t2name: string;
    t2points: number;
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
        [`t${kokocNumber}logo`]: "/assets/logo.png",
        [`t${kokocNumber}name`]: "Кокос групп",
        [`t${kokocNumber}points`]: kokocPoints,

        [`t${enemyNumber}logo`]: enemyLogo,
        [`t${enemyNumber}name`]: enemyName,
        [`t${enemyNumber}points`]: enemyPoints,
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
        date: "10.11.2024 (вс)",
        name: "21 тур",

        ...getStat(2, -1, -1, 'Уралец', 'https://www.lfl.ru/photo/clubs/big-size/876_623dd0aa850ee.png')
    },

    {
        date: "13.10.2024 (вс)",
        name: "23 тур",

        ...getStat(2, -1, -1, 'Бавария', 'https://www.lfl.ru/photo/clubs/big-size/12178_6221c3ad601ce.png')
    },

    {
        date: "12.10.2024 (сб)",
        name: "26 тур",

        ...getStat(1, -1, -1, 'Городок-17', 'https://www.lfl.ru/photo/clubs/big-size/893.png')
    },
]