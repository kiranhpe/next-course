import React from "react";
import Link from "next/link";
import styles from "./link-button.module.scss";

export const LinkButton = ({ href, text }) => {
  return (
    <button className={styles.linkButton}>
      <Link href={href}>{text}</Link>
    </button>
  );
};
