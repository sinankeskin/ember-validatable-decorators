import { ArrayMaxSize } from 'class-validator';

export function vArrayMaxSize(max, validationOptions) {
  return ArrayMaxSize(max, validationOptions);
}

export {
  vArrayMaxSize as arrayMaxSize,
  vArrayMaxSize as validatableArrayMaxSize,
};
