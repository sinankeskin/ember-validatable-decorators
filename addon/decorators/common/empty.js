import { IsEmpty } from 'class-validator';

export function vEmpty(...args) {
  return IsEmpty(...args);
}

export { vEmpty as empty, vEmpty as validatableEmpty };
