/**
 * title: targetDate控制
 */

import React, { useState } from 'react';
import { useCountDown } from '@fe-q/q-react-hooks';

export default () => {
  const [time, setTime] = useState<number>();
  const [timeLeft, { days, hours, minutes, seconds, milliseconds }] = useCountDown({
    targetDate: time,
  });
  return (
    <>
      <button onClick={() => setTime(Date.now() + 6000)} disabled={seconds !== 0}>
        start
      </button>
      <button onClick={() => setTime(undefined)} style={{ marginLeft: '8px' }}>
        stop
      </button>
      <p>
        time left {days} days {hours} hours {minutes} minutes {seconds} seconds {milliseconds}{' '}
        milliseconds
      </p>
    </>
  );
};
