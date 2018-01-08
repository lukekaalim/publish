export const SET_LANDING_MODE = 'SET_LANDING_MODE';

export const setLandingMode = (newLandingMode) => ({
  type: SET_LANDING_MODE,
  landingMode: newLandingMode,
  trackEdit: true,
  saveLocal: true,
});
