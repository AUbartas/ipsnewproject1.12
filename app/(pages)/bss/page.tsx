import React from 'react';
import styles from "../../page.module.css"

const Bss: React.FC = () => {
  return (
    <div>
      <div className={styles.pageInfoContainer}>
        <h1 className={styles.h1}>BSS page</h1>
      </div>
      <div className={styles.maincontainer}></div>
    </div>
  );
};

export default Bss;