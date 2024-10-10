import { NewsBlocksPageType } from '@/types/NewsPageBlock'
import { create } from 'zustand'

type NewsPageBlocksStoreType = {
	Block: NewsBlocksPageType
}

const NewsPageBlocksStore = create<NewsPageBlocksStoreType>(set => ({
	Block: {
		NewsMainImage: '',
		NewsLogotype:
			' goal messi messi messi goal goal aogoggoal messi messi messi goal goal aogoggoal messi messi messi goal goal aogog',
		Blocks: [
			{
				BlockText:
					'dsng sdkg kndskgn ksdklgn kdsgk nskdgnkns ndskgn ksndgnknsdkdngdkngk ndksngksdlg nldsngdsng sdkg kndskgn ksdklgn kdsgk nskdgnkns ndskgn ksndgnknsdkdngdkngk ndksngksdlg nldsngdsng sdkg kndskgn ksdklgn kdsgk nskdgnkns ndskgn ksndgnknsdkdngdkngk ndksngksdlg nldsngdsng sdkg kndskgn ksdklgn kdsgk nskdgnkns ndskgn ksndgnknsdkdngdkngk ndksngksdlg nldsng',
				BlockImage: '',
			},
			{
				BlockText:
					'dsng sdkg kndskgn ksdklgn kdsgk nskdgnknsdsng sdkg kndskgn ksdklgn kdsgk nskdgnknsdsng sdkg kndskgn ksdklgn kdsgk nskdgnkns ndskgn ksndgnknsdkdngdkngk ndksngksdlg nldsngdsng sdkg kndskgn ksdklgn kdsgk nskdgnkns ndskgn ksndgnknsdkdngdkngk ndksngksdlg nldsngdsng sdkg kndskgn ksdklgn kdsgk nskdgnkns ndskgn ksndgnknsdkdngdkngk ndksngksdlg nldsngdsng sdkg kndskgn ksdklgn kdsgk nskdgnkns ndskgn ksndgnknsdkdngdkngk ndksngksdlg nldsng',
				BlockImage: '',
			},
			{
				BlockText:
					'dsng sdkg kndskgn ksdklgn kdsgk nskdgnkns ndskgn ksndgnknsdkdngdkngk ndksngksdlg nldsngdsng sdkg kndskgn ksdklgn kdsgk nskdgnkns ndskgn ksndgnknsdkdngdkngk ndksngksdlg nldsngdsng sdkg kndskgn ksdklgn kdsgk nskdgnkns ndskgn ksndgnknsdkdngdkngk ndksngksdlg nldsngdsng sdkg kndskgn ksdklgn kdsgk nskdgnkns ndskgn ksndgnknsdkdngdkngk ndksngksdlg nldsng',
				BlockImage: '',
			},
		],
	},
}))
export default NewsPageBlocksStore
