export type TLink = {
    name: string;
    href: string;
}

export const comandItems: TLink[] = [
    {
        name: "Матчи", 
        href: "/matches"
    },
    {
        name: "Состав",
        href: "/team"
    },
    {
        name: "О клубе",
        href: "/about-club"
    },
    {
        name: "Контакты",
        href: "/contacts"
    }
]