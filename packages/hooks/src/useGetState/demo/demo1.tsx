/**
 * title: 打开控制台查看输出
 * desc: 计数器每 3 秒打印一次值
 */

import React, { useEffect } from 'react';
import { useGetState } from '@fe-q/q-react-hooks';

export default () => {
  const [count, { setState, getState }] = useGetState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('interval count', getState());
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <button onClick={() => setState((count) => count + 1)}>count: {count}</button>;
};
