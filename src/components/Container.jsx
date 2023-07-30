import React from 'react';
import cl from '../styles/Container.module.css'

const Container = (props) => {

    return (
        <div className={cl.container}>
            {props.children}
        </div>
    );
}

export default Container;