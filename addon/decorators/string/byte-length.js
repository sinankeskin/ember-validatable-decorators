import { IsByteLength } from 'class-validator';

export function vStringByteLength(...args) {
  return IsByteLength(...args);
}

export {
  vStringByteLength as stringByteLength,
  vStringByteLength as validatableStringByteLength,
};
