import Sidebar from '@/modules/admin/sidebar/sidebar'
import { FC, PropsWithChildren } from 'react'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Sidebar />
			{children}
		</>
	)
}

export default Layout
