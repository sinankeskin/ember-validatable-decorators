import { IsVariableWidth } from 'class-validator';

export function vStringVariableWidth(...args) {
  return IsVariableWidth(...args);
}

export {
  vStringVariableWidth as stringVariableWidth,
  vStringVariableWidth as validatableStringVariableWidth,
};
