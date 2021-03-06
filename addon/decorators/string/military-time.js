import { IsMilitaryTime } from 'class-validator';

export function vStringMilitaryTime(...args) {
  return IsMilitaryTime(...args);
}

export {
  vStringMilitaryTime as militaryTime,
  vStringMilitaryTime as stringMilitaryTime,
  vStringMilitaryTime as validatableStringMilitaryTime,
};
