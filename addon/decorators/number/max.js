import { Max } from 'class-validator';

export function vNumberMax(...args) {
  return Max(...args);
}

export {
  vNumberMax as max,
  vNumberMax as numberMax,
  vNumberMax as validatableNumberMax,
};
