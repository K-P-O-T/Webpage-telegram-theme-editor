import React from "react";
import cl from '../styles/MyHeader.module.css'
import Container from "./Container";

const MyHeader = () => {

    return (
        <header className={cl.header}>
            {/* <Container> */}
            <div className={cl.header__body}>
                <div className={cl.header__logo_part}>
                    <div className={cl.header__logo} />
                    <p className={cl.header__logo_text}>Theme editor</p>
                </div>
                <div className={cl.header__menu_part}>
                    <nav className={cl.header__menu}>
                        <ul className={cl.header__list}>
                            <li className={cl.header__link}>Другие проекты</li>
                            <li className={cl.header__link}>Контакты</li>
                            <li className={cl.header__link}>О нас</li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* </Container> */}
        </header>
    )
}

export default MyHeader