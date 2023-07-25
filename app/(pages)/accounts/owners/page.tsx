"use client"
import React from 'react';
import styles from "../../../page.module.css"
import { Menu } from 'antd';
import { useState } from 'react';
import Link from 'next/link'
import type { MenuProps } from 'antd';

const items: MenuProps['items'] = [
  {
    label: (
      <Link href="/accounts" >
        Partner accounts
      </Link>
    ),
    key: 'a',
  },
  {
    label: (
        <Link href="/accounts/customer" >
          Customer accounts
        </Link>
      ),
      key: 'b',
  },
  {
    label: (
        <Link href="/accounts/owners" >
          Owner accounts
        </Link>
      ),
      key: 'c',
  },
];


const Accounts: React.FC = () => {

const [current, setCurrent] = useState('c');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div>
      <div className={styles.pageInfoContainer}>
        <h1 className={styles.h1}>Owners accounts</h1><Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </div>
      <div>
      

      </div>
      <div className={styles.maincontainer}></div>
    </div>
  );
};

export default Accounts;

