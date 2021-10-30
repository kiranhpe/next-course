import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

import styles from "./accordian-card.module.scss";
export const AccordianCard = ({title='test', children, handleExpand, extraData=null}) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className={styles.accordian}>
      <div
        className={styles.accordianHeader}
        onClick={() => {setIsOpen(!isOpen); if(!isOpen) handleExpand(extraData)} }
      >
        <div className={styles.accordianHeaderIcon}>
          {isOpen ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        <div className={styles.accordianHeaderTitle}>
          <h3>{title}</h3>
        </div>
      </div>
        {isOpen && <div className={styles.accordianContent}>{children}</div>}
    </div>
  );
};
