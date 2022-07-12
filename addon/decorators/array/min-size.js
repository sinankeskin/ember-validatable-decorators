import { ArrayMinSize } from 'class-validator';

export function vArrayMinSize(min, validationOptions) {
  return ArrayMinSize(min, validationOptions);
}

export {
  vArrayMinSize as arrayMinSize,
  vArrayMinSize as validatableArrayMinSize,
};
