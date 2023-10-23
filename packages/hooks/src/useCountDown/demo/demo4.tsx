/**
 * title: 同时传入leftTime targetDate
 */

import React, { useState } from 'react';
import { useCountDown } from '@fe-q/q-react-hooks';

export default () => {
  const [timeLeft, { days, hours, minutes, seconds, milliseconds }] = useCountDown({
    targetDate: Date.now() + 6000,
    leftTime: 7000,
  });
  return (
    <>
      <p>
        time left {days} days {hours} hours {minutes} minutes {seconds} seconds {milliseconds}{' '}
        milliseconds
      </p>
    </>
  );
};
