export const EDIT_ID = 'EDIT_ID';
export const EDIT_SECRET = 'EDIT_SECRET';
export const EDIT_BUCKET = 'EDIT_BUCKET';

export const editID = (newId) => ({
  type: EDIT_ID,
  id: newId,
  saveLocal: true,
});

export const editSecret = (newSecret) => ({
  type: EDIT_SECRET,
  secret: newSecret,
  saveLocal: true,
});
