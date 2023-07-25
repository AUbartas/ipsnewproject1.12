"use client"
import React from 'react';
import styles from "../../page.module.css"
import { Button, AutoComplete } from 'antd';

const Partners = () => {
  return (
    <div>
      <div className={styles.pageInfoContainer}>
      <h1 className={styles.h1}>Partners page</h1>
    </div>
    <div className={styles.maincontainer}>
    <AutoComplete
    style={{ width: 200 }}
    placeholder="Partner name"
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
    <Button>
    SEARCH BY PARTNER
   </Button>
    <Button href='/partners/new'>
    CREATE A NEW PARTNER
   </Button>
    </div>
    </div>
    
  );
};
  
export default Partners;