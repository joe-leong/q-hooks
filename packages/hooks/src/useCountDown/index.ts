import { useMemo, useState, useEffect } from 'react';
import dayjs from 'dayjs';
import useLatest from '../useLatest';
import { isNumber } from 'lodash-es';

export type TDate = dayjs.ConfigType;

export interface Options {
  leftTime?: number;
  targetDate?: number;
  interval?: number;
  onEnd?: () => void;
}

export interface FormattedRes {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

const calcLeft = (target?: TDate) => {
  if (!target) return 0;
  const diff = dayjs(target).valueOf() - Date.now();
  return diff < 0 ? 0 : diff;
};

const parseMs = (milliseconds: number): FormattedRes => {
  return {
    days: Math.floor(milliseconds / 86400000),
    hours: Math.floor(milliseconds / 3600000) % 24,
    minutes: Math.floor(milliseconds / 60000) % 60,
    seconds: Math.floor(milliseconds / 1000) % 60,
    milliseconds: Math.floor(milliseconds) % 1000,
  };
};

const useCountDown = (options: Options) => {
  const { leftTime, targetDate, interval = 1000, onEnd } = options || {};
  const target = useMemo<TDate>(() => {
    if ('leftTime' in options) {
      return isNumber(leftTime) && leftTime > 0 ? Date.now() + leftTime : undefined;
    } else {
      return targetDate;
    }
  }, [leftTime, targetDate]);

  const onEndRef = useLatest(onEnd);

  const [timeLeft, setTimeLeft] = useState(() => calcLeft(target));

  useEffect(() => {
    if (!target) {
      setTimeLeft(0);
      return;
    }

    setTimeLeft(calcLeft(target));
    const timer = setInterval(() => {
      const targetLeft = calcLeft(target);
      setTimeLeft(targetLeft);
      if (targetLeft === 0) {
        clearInterval(timer);
        onEndRef.current?.();
      }
    }, interval);
    return () => clearInterval(timer);
  }, [target, interval]);
  const formattedRes = useMemo(() => parseMs(timeLeft), [timeLeft]);
  return [timeLeft, formattedRes] as const;
};

export default useCountDown;
