import { IsLongitude } from 'class-validator';

export function vLongitude(validationOptions) {
  return IsLongitude(validationOptions);
}

export { vLongitude as longitude, vLongitude as validatableLongitude };
