import { IsLatitude } from 'class-validator';

export function vLatitude(...args) {
  return IsLatitude(...args);
}

export { vLatitude as latitude, vLatitude as validatableLatitude };
