/**
 * title: 基础用法
 * description: 执行时长倒计时
 */

import React from 'react';
import { useCountDown } from '@fe-q/q-react-hooks';

export default () => {
  const [timeLeft, { seconds }] = useCountDown({
    leftTime: 60000,
  });
  return (
    <>
      <p>count down left {timeLeft} ms;</p>
      <p>count down left {seconds} s;</p>
    </>
  );
};
