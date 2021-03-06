import { ArrayMaxSize } from 'class-validator';

export function vArrayMaxSize(...args) {
  return ArrayMaxSize(...args);
}

export {
  vArrayMaxSize as maxSize,
  vArrayMaxSize as arrayMaxSize,
  vArrayMaxSize as validatableArrayMaxSize,
};
