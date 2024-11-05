export type TPlayer = {
    role?:
      | 'Нападающий'
      | 'Защитник'
      | 'Полузащитник'
      | 'Вратарь'
      | 'Ушли'
      | 'Тренер';
    NumberInClub?:number;
    player_id: string;
    FullName: string;
    Weight?: number;
    Height?: number;
    DateOfBirth: string;
    Biography?: string;
    Goals:number;
    MatchesPlayed:number;
    Age: number;
    Photo: string;
  }