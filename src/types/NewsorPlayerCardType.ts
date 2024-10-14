export type NewsCardType = {
	news_id: string
	title: string
	content: string
	category: string
	published_at: string
	author: string
	media: []
	reactions: []
	comments: []
	tags: []
}




export type PlayerCardType = {
	role:
		| 'Нападающий'
		| 'Защитник'
		| 'Полузащитник'
		| 'Вратарь'
		| 'Ушли'
		| 'Тренер'
	NumberInClub: number
	player_id: string
	FullName: string
	Weight: number
	Height: number
	DateOfBirth: string
	Biography: string
	Goals: number
	MatchesPlayed: number
}
