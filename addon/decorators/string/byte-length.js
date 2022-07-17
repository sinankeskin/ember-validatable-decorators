import { IsByteLength } from 'class-validator';

export function vStringByteLength(min, max, validationOptions) {
  return IsByteLength(min, max, validationOptions);
}

export {
  vStringByteLength as stringByteLength,
  vStringByteLength as validatableStringByteLength,
};
