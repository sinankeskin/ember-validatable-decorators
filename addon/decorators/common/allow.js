import { Allow } from 'class-validator';

export function vAllow(...args) {
  return Allow(...args);
}

export { vAllow as allow, vAllow as validatableAllow };
