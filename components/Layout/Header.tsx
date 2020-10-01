import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


interface HeadProps {
    title: string;
}

export const Header: React.FC<HeadProps> = ({ title }) => {
    return (
        <>
            <Head>
                <title> {title} | Student API</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <aside className="pure-menu">
                <nav>
                    <span>MENU</span>
                    <ul className="pure-menu-list">
                        <li className="pure-menu-item"><Link href="/" as="/"><a className="pure-menu-link">Home</a></Link></li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default Header