import { IsLatLong } from 'class-validator';

export function vLatLong(...args) {
  return IsLatLong(...args);
}

export { vLatLong as latLong, vLatLong as validatableLatLong };
