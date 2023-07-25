"use client"

import React from 'react';
import styles from "../../page.module.css"
import { Button, AutoComplete } from 'antd';
import style from "./Customer.module.css"

const Customers = () => {
  return (
    <div><div className={styles.pageInfoContainer}>
      <h1 className={styles.h1}>Customers page</h1>
    </div>
    <div className={styles.maincontainer}>
      <div className={style.up}>
    <div>
    <AutoComplete
    style={{ width: 200 }}
    placeholder="Customer name"
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
   <Button>
    SEARCH
   </Button>
   </div>
   <div >
    <Button>NEW CUSTOMER</Button>
   </div>
   <div>
    <Button>
        CHECK EMPLOYEE RFID VALIDITY
      </Button>
      </div>
   <div>
    <Button>
        COMPANIES EXCEL
      </Button>
      </div>
    </div>
    </div>
    </div>
  );
};
  
export default Customers;