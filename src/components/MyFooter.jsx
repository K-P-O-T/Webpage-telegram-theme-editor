import React from 'react';
import cl from '../styles/MyFooter.module.css'
import Container from './Container';

const MyFooter = () => {

    return (
        <footer className={cl.footer}>
            {/* <Container> */}
            <div className={cl.footer__body}>
                <p>Made with ❤️ by KPOT</p>
            </div>
            {/* </Container> */}
        </footer>
    );
}

export default MyFooter;