import { IsNotEmpty } from 'class-validator';

export function vNotEmpty(...args) {
  return IsNotEmpty(...args);
}

export { vNotEmpty as notEmpty, vNotEmpty as validatableNotEmpty };
