import { IsInt } from 'class-validator';

export function vTypeInt(...args) {
  return IsInt(...args);
}

export { vTypeInt as int, vTypeInt as typeInt, vTypeInt as validatableTypeInt };
