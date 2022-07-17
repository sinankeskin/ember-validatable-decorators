import { IsIP } from 'class-validator';

export function vStringIP(...args) {
  return IsIP(...args);
}

export {
  vStringIP as ip,
  vStringIP as stringIP,
  vStringIP as validatableStringIP,
};
