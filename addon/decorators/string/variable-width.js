import { IsVariableWidth } from 'class-validator';

export function vStringVariableWidth(validationOptions) {
  return IsVariableWidth(validationOptions);
}

export {
  vStringVariableWidth as stringVariableWidth,
  vStringVariableWidth as validatableStringVariableWidth,
};
