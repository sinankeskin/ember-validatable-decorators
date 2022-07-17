import { IsSurrogatePair } from 'class-validator';

export function vStringSurrogatePair(...args) {
  return IsSurrogatePair(...args);
}

export {
  vStringSurrogatePair as surrogatePair,
  vStringSurrogatePair as stringSurrogatePair,
  vStringSurrogatePair as validatableStringSurrogatePair,
};
