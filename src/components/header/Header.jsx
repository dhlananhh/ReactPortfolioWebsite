import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
// import ME from '../../assets/profile-me.png'
import HeaderSocials from './HeaderSocials'

export const Header = () => {
    return (
        // <div>Header</div>
        <header>
            <div className="container header__container">
                <h5>Hello! I'm</h5>
                <h1>Kandace Kingsley</h1>
                <h5 className="text-light">
                    Fullstack Developer
                </h5>

                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="Me" />
                </div>

                <a href="#contact" className='scroll__down'>
                    Scroll Down
                </a>
            </div>
        </header>
    )
}
