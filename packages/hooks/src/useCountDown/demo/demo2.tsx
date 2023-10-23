/**
 * title: 手动控制
 * description：手动控制倒计时时长
 */

import React, { useState } from 'react';
import { useCountDown } from '@fe-q/q-react-hooks';

export default () => {
  const [targetCountDown, setTargetCountDown] = useState<number>();
  const [timeLeft, { seconds }] = useCountDown({
    leftTime: targetCountDown,
  });
  return (
    <>
      <button onClick={() => setTargetCountDown(6 * 1000)} disabled={timeLeft !== 0}>
        {seconds === 0 ? 'Start Interval' : `Reset After ${seconds}s`}
      </button>
      <button
        onClick={() => {
          setTargetCountDown(undefined);
        }}
        style={{ marginLeft: 8 }}
      >
        stop
      </button>
    </>
  );
};
