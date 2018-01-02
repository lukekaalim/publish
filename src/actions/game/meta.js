export const EDIT_NAME = 'EDIT_NAME';

export const editName = (name) => ({
  type: EDIT_NAME,
  name,
  trackEdit: true,
  saveLocal: true,
});
