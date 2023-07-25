"use client"

import React from 'react';
import styles from "../../page.module.css"
import {Button, AutoComplete, DatePicker, Space} from 'antd';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

const onRangeChange = (dates, dateStrings) => {
  if (dates) {
    console.log("From: ", dates[0], ", to: ", dates[1])
    console.log("From: ", dateStrings[0], ", to: ", dateStrings[1])
  } else {
    console.log("Clear")
  }
}

const rangePresets = [
  { label: "Last 7 Days", value: [dayjs().add(-7, "d"), dayjs()] },
  { label: "Last 14 Days", value: [dayjs().add(-14, "d"), dayjs()] },
  { label: "Last 30 Days", value: [dayjs().add(-30, "d"), dayjs()] },
  { label: "Last 90 Days", value: [dayjs().add(-90, "d"), dayjs()] }
]

export default function Servicedesk() {
  return (
    <div>
      <div className={styles.pageInfoContainer}>
      <h1 className={styles.h1}>Servicedesk page </h1>
      <Button shape="round" href='/servicedesk/new'>New ticket</Button>
      <Button shape="round">Settings</Button>
      <Button shape="round">Reports</Button>
    </div>
     
    <div className={styles.maincontainer}>
    <p>Customers</p>
    <AutoComplete
    style={{ width: 200 }}
    placeholder="Select customer"
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
    <p>Partner</p>
    <AutoComplete
    style={{ width: 200 }}
    placeholder="Partner"
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
    <p>Incident time</p>
    <Space direction="vertical" size={12}>
    <RangePicker presets={rangePresets} onChange={onRangeChange} />
  </Space>

    <p>Level</p>
    <AutoComplete
    style={{ width: 200 }}
    placeholder="Level"
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
    <p>Ticket type</p>
    <AutoComplete
    style={{ width: 200 }}
    placeholder="Ticket type"
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
    <p>Status</p>
    <AutoComplete
    style={{ width: 200 }}
    placeholder="Status"
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
    </div>
    </div>
    
  );
}
