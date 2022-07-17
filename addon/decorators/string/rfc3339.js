import { IsRFC3339 } from 'class-validator';

export function vStringRFC3339(...args) {
  return IsRFC3339(...args);
}

export {
  vStringRFC3339 as stringRFC3339,
  vStringRFC3339 as validatableStringRFC3339,
};
