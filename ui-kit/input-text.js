import React from 'react'
import styles from './input-text.module.scss';
export const InputText = ({placeholder, onTextChange}) => {
    return (
        <div>
            <input type="text" className={styles.inputText}placeholder={placeholder} onChange={onTextChange}/>
        </div>
    )
}
