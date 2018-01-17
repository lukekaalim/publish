export const SWITCH_VIEW = 'SWITCH_VIEW';
export const SET_DRAWER_OPEN = 'SET_DRAWER_OPEN';

export const switchIndex = (newIndex) => ({
  type: SWITCH_VIEW,
  index: newIndex,
  saveLocal: true,
});

export const setDrawerOpen = (isDrawOpen) => ({
  type: SET_DRAWER_OPEN,
  isDrawOpen,
});
