import { IsSurrogatePair } from 'class-validator';

export function vStringSurrogatePair(...args) {
  return IsSurrogatePair(...args);
}

export {
  vStringSurrogatePair as stringSurrogatePair,
  vStringSurrogatePair as validatableStringSurrogatePair,
};
