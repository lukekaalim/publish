import { spaceToAllCapsUnderscore } from './string';

const buildTypeName = (verb, noun) =>
  `${spaceToAllCapsUnderscore(verb)}_${spaceToAllCapsUnderscore(noun)}`;

export {
  buildTypeName,
};
