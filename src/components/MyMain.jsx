import React from 'react';
import cl from '../styles/MyMain.module.css'
import Container from './Container';
import SettingsItem from './SettingsItem';

const MyMain = ({ settings, onChangeSettings}) => {

    const changeSettings = (newSettings) => {
        onChangeSettings(newSettings)
    }


    return (
        <main className={cl.main}>
            {/* <Container> */}
            <div className={cl.main__body}>
                <div className={cl.main__theme_preview}>

                    <div className={cl.preview__body}>
                        <div className={cl.preview__phone}></div>
                    </div>

                </div>
                <div className={cl.main__theme_settings}>
                    <div className={cl.settings__body}>
                        <div className={cl.settings__list}>
                            {settings.map((setting, index) =>
                                // <div className={cl.settings__item}>
                                //     <span className={cl.settings__text}>{setting.name}</span>
                                //     <input className={cl.settings__value}  value={setting.value}></input>
                                // </div>
                                <SettingsItem onChangeSettings={changeSettings} setting={setting} key={index}></SettingsItem>
                            )}
                        </div>
                        <div className={cl.settings__copy}>
                            <button className={cl.settings__btn}>Copy</button>
                        </div>
                    </div>

                </div>
            </div>
            {/* </Container> */}
        </main>
    );
}

export default MyMain;