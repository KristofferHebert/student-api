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
            <aside className="pure-u-1-3">
                <nav>
                    <ul>
                        <li><Link href="/" as="/"><a>Home</a></Link></li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default Header