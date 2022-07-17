import { ArrayMinSize } from 'class-validator';

export function vArrayMinSize(...args) {
  return ArrayMinSize(...args);
}

export {
  vArrayMinSize as minSize,
  vArrayMinSize as arrayMinSize,
  vArrayMinSize as validatableArrayMinSize,
};
