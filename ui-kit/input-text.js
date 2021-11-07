import React from 'react'
import styles from './input-text.module.scss';
export const InputText = ({placeholder, onTextChange, type='text'}) => {
    return (
        <div>
            <input type={type} className={styles.inputText}placeholder={placeholder} onChange={onTextChange}/>
        </div>
    )
}
