import React from 'react';
import { Button } from 'antd';
import { getLoginQrCKey } from './api';

export default function App() {
  const fn = () => {
    getLoginQrCKey()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Button type="primary" onClick={fn}>
      按钮
    </Button>
  );
}
