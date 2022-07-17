import { IsAscii } from 'class-validator';

export function vStringAscii(...args) {
  return IsAscii(...args);
}

export {
  vStringAscii as ascii,
  vStringAscii as stringAscii,
  vStringAscii as validatableStringAscii,
};
