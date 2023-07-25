"use client"

import React from 'react';
import styles from "../../../page.module.css"
import {Button, DatePicker, Space, AutoComplete, Checkbox} from 'antd';

const onChange = (date, dateString) => {
  console.log(date, dateString)
}

export default function Servicedesk() {
  return (
    <div>
      <div className={styles.pageInfoContainer}>
      <h1 className={styles.h1}>New ticket</h1>
    </div>
    <div className={styles.maincontainer}>
      <p>Ticket type</p>
      <AutoComplete
    style={{ width: 200 }}
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
      <p>Ticket level</p>
      <AutoComplete
    style={{ width: 200 }}
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
      <p>Area</p>
      <AutoComplete
    style={{ width: 200 }}
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
      <p>Date</p>
      <Space direction="vertical"> 
    <DatePicker onChange={onChange} />
      </Space>

      <p>Customer</p>
        <AutoComplete
      style={{ width: 200 }}
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    />
      <p>Inform customer</p>
      <Checkbox onChange={onChange}></Checkbox>
      <p>Device</p>
      <AutoComplete
    style={{ width: 200 }}
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
      <p>Problem/task</p>
      <AutoComplete
    style={{ width: 200 }}
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
      <p>Agent</p>
      <AutoComplete
    style={{ width: 200 }}
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
      <p>Supervisor</p>
      <AutoComplete
    style={{ width: 200 }}
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
      <div><Button>SAVE</Button></div>
    </div>
    </div>
    
  );
}
