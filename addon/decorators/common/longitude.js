import { IsLongitude } from 'class-validator';

export function vLongitude(...args) {
  return IsLongitude(...args);
}

export { vLongitude as longitude, vLongitude as validatableLongitude };
