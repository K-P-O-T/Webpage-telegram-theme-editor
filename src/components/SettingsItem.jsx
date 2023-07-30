import React from 'react';
import cl from '../styles/SettingsItem.module.css'

const SettingsItem = ({ setting, onChangeSettings }) => {


    // const numberToHex = (number) => {
    //     if(number.toString())
    //     console.log(number.toString())
    // }

    // const handleOnChangeSettings = (e) => {
    //     // settings.value = setSettings(e.target.value)
    //     const newSettings = e.target.value

    //     onChangeSettings(newSettings)
    // }



    const changeSettings = (e) => {
        onChangeSettings(e.target.value)
    }



    return (

        <div className={cl.settings__item}>
            <span className={cl.settings__text}>{setting.name}</span>
            {/* {true
                ? <p>numberToHex(-235235234)</p>
                : <p>NO</p>
            } */}
            <input
                type="number"
                onChange={changeSettings}
                // onChange={e => setSettings(e.target.value)}
                className={cl.settings__value}
                value={setting.value}>
            </input>
        </div>
    );
}

export default SettingsItem;