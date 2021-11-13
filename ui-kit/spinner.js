import React from "react";
import styles from "./spinner.module.scss";

export const Spinner = ({ isLoading = true }) => {
  return (
    <div>
      {isLoading && (
        <div className={styles.spinnerContainer}>
          <div className={styles.spinner}></div>
        </div>
      )}
    </div>
  );
};
