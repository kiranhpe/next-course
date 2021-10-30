import React from "react";
import styles from "./header.module.scss";

import Link from "next/link";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <h1 className={styles.brand}>Next Courses</h1>
      </Link>
      <nav className={styles.nav}>
        <Link className={styles.link} href="/courses">
          courses
        </Link>
      </nav>
    </div>
  );
};
