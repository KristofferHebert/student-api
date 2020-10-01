import React, {ReactNode} from 'react'

import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
    title: string;
    children?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => (
    <>
        <div id="main-container">
            <Header title={title} />
            <main>
                {children}
            </main>
        </div>
        <Footer />
    </>
)

export default Layout