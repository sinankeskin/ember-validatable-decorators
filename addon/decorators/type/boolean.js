import { IsBoolean } from 'class-validator';

export function vTypeBoolean(...args) {
  return IsBoolean(...args);
}

export {
  vTypeBoolean as boolean,
  vTypeBoolean as typeBoolean,
  vTypeBoolean as validatableTypeBoolean,
};
