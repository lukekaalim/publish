// todo: think of better names

const passTargetValue = (func) => (event) => func(event.target.value);
const passTargetChecked = (func) => (event) => func(event.target.checked);

export {
  passTargetValue,
  passTargetChecked,
};
