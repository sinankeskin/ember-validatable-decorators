import { IsLatitude } from 'class-validator';

export function vLatitude(validationOptions) {
  return IsLatitude(validationOptions);
}

export { vLatitude as latitude, vLatitude as validatableLatitude };
