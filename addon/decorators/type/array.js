import { IsArray } from 'class-validator';

export function vTypeArray(...args) {
  return IsArray(...args);
}

export {
  vTypeArray as array,
  vTypeArray as typeArray,
  vTypeArray as validatableTypeArray,
};
