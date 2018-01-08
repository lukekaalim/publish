// todo: think of better names

const textField = (func) => (event) => func(input.target.value);
const checkbox = (func) => (event) => func(input.target.checked);

export {
  textField,
  checkbox,
};
