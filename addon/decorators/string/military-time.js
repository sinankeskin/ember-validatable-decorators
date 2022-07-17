import { IsMilitaryTime } from 'class-validator';

export function vStringMilitaryTime(validationOptions) {
  return IsMilitaryTime(validationOptions);
}

export {
  vStringMilitaryTime as stringMilitaryTime,
  vStringMilitaryTime as validatableStringMilitaryTime,
};
