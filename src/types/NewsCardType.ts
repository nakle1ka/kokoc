export type NewsCardType = {
    Date:string;
    ImageSrc:string;
    NameLogo:string;
    id:number;
    href:string
}

export type PlayerCardType = Omit<NewsCardType,'Date'> & {
    role: 'Нападающий' | 'Защитник' | 'Полузащитник' | 'Вратарь' | 'Ушли' | 'Тренер'
    NumberPlayer:number,
    
}