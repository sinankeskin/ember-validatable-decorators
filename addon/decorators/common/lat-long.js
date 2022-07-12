import { IsLatLong } from 'class-validator';

export function vLatLong(validationOptions) {
  return IsLatLong(validationOptions);
}

export { vLatLong as latLong, vLatLong as validatableLatLong };
