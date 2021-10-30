import React from 'react'
import styles from './header.module.scss';

export const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.brand}>Next Courses</h1>
            <nav className={styles.nav}>
                <a className={styles.link} href="/about">about</a>
                <a className={styles.link} href="/courses">courses</a>
                <a className={styles.link} href="/contact">contact</a>
            </nav>
        </div>
    )
}
