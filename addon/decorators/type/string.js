import { IsString } from 'class-validator';

export function vTypeString(...args) {
  return IsString(...args);
}

export {
  vTypeString as string,
  vTypeString as typeString,
  vTypeString as validatableTypeString,
};
