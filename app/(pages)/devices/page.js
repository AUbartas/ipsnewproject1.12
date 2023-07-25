"use client"
import React from 'react';
import styles from "../../page.module.css";
import { Button, AutoComplete, Input, InputNumber } from 'antd';

const onChange = value => {
  console.log("changed", value)
}

const Devices = () => {
  return (
    <div>
      <div className={styles.pageInfoContainer}>
      <h1 className={styles.h1}>Devices page</h1>
      <Button>
    VERSIONS
   </Button>
      <Button>
    ACTIONS
   </Button>
    </div>
    <div className={styles.maincontainer}>
      <p>Customers</p>
      <AutoComplete
    style={{ width: 200 }}
    placeholder="Customer name"
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
    <p>Calibrated before</p>
    <InputNumber min={1} max={99} onChange={onChange} />
    <p>Calibration checked how many months ago</p>
    <InputNumber min={1} max={99} onChange={onChange} />
    <p>Metrology checked how many months ago</p>
    <InputNumber min={1} max={99} onChange={onChange} />
    <p>Device SN</p>
    <Input placeholder="Enter device serial no. fragment" />
    <p>Text</p>
    <Input placeholder="Name of the customer, device or processor" />
    <p>Partner</p>
    <Input placeholder="Partner name" />
    </div>
    </div>
    
  );
};
  
export default Devices;