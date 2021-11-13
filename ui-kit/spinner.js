import React from "react";
import styles from "./spinner.module.scss";

export const Spinner = ({ isLoading = true, type='spinnerDefault' }) => {
  return (
    <div>
      {isLoading && (
        <div className={styles.spinnerContainer}>
          <div className={styles[type] ? styles[type]  : styles.spinnerDefault}></div>
        </div>
      )}
    </div>
  );
};
