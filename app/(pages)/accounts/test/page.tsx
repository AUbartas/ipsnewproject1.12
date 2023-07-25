"use client"
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link'



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
        <Link href="/accounts/test" >
          Customer accounts
        </Link>
      ),
      key: 'b',
  },
  {
    label: (
        <Link href="/accounts/test" >
          Owner accounts
        </Link>
      ),
      key: 'c',
  },
];

const Test: React.FC = () => {
  const [current, setCurrent] = useState('b');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Test;