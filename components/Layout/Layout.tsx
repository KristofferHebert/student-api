import React, {ReactNode} from 'react'

import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
    title: string;
    children?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => (
    <div className="container pure-g">
        <Header title={title} />
        <main className="pure-u-2-3">
            {children}
        </main>
        <Footer />
    </div>
)

export default Layout