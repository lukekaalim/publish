export const ADD_SESSION = 'ADD_SESSION';
export const REMOVE_SESSION = 'REMOVE_SESSION';
export const EDIT_SESSION = 'EDIT_SESSION';

export const addSession = (session) => ({
  type: ADD_SESSION,
  session,
  saveLocal: true,
  trackEdit: true,
});

export const removeSession = (index) => ({
  type: REMOVE_SESSION,
  index,
  saveLocal: true,
  trackEdit: true,
});

export const editSession = (index, session) => ({
  type: EDIT_SESSION,
  session,
  index,
  saveLocal: true,
  trackEdit: true,
});
