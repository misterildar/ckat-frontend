import { useState, useEffect } from 'react';
import {
  MIN_DESKTOP_WIDTH,
  MAX_MOBILE_WIDTH,
  TDevice,
} from '../utils/constants';

const useDevice = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const resize = useDebounce(() => {
      setWidth(window.innerWidth);
    });

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  if (width >= MIN_DESKTOP_WIDTH) return TDevice.DESKTOP;
  if (width <= MAX_MOBILE_WIDTH) return TDevice.MOBILE;
  return TDevice.TABLET;
};

const useDebounce = <T extends (...args: any[]) => void>(
  func: T,
  milliseconds?: number
): ((...args: Parameters<T>) => void) => {
  const time = milliseconds || 400;
  let timer: NodeJS.Timeout;

  return (...args: Parameters<T>): void => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(func, time, ...args);
  };
};

export default useDevice;
