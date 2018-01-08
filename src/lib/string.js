const isUpperCase = (input) => input === input.toUpperCase();

const spacedToCamelCase = (input) => (
  [...input].reduce((output, char, index, array) => {
    if (index === 0)
      return output + char.toLowerCase();
    if (char === ' ')
      return output;
    if (array[index - 1] === ' ')
      return output + char.toUpperCase();
    return output + char.toLowerCase();
  }, '')
);

const spaceToAllCapsUnderscore = (input) => (
  [...input].map(char => char === ' ' ? '_' : char.toUpperCase()).join('')
);

export {
  isUpperCase,
  spaceToAllCapsUnderscore,
  spacedToCamelCase,
};
