import { IsSurrogatePair } from 'class-validator';

export function vStringSurrogatePair(validationOptions) {
  return IsSurrogatePair(validationOptions);
}

export {
  vStringSurrogatePair as stringSurrogatePair,
  vStringSurrogatePair as validatableStringSurrogatePair,
};
