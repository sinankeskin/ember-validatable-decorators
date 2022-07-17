import { Max } from 'class-validator';

export function vNumberMax(...args) {
  return Max(...args);
}

export { vNumberMax as numberMax, vNumberMax as validatableNumberMax };
