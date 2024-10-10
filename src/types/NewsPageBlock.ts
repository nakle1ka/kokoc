export type NewsBlocksPageType = {
	
	NewsMainImage: string
	NewsLogotype: string
	Blocks: Record<'BlockImage' | 'BlockText',string>[]
    
}
export type NewsBlockType = {
    BlockText:string;
    BlockImage:string;
}

export type NewsBlockHeaderType = {
    NewsMainImage:NewsBlocksPageType['NewsMainImage'];
    NewsLogotype:NewsBlocksPageType['NewsLogotype']
}