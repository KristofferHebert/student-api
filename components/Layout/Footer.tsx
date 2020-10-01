import React from 'react'

export const Footer: React.FC = () => (
    <footer className="container pure-g">
        <div className="pure-u-5-5">
            <p>Copyright © {new Date().getFullYear()}, All rights reserved.</p>
        </div>
    </footer>
)

export default Footer