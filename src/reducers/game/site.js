import property from '../higherOrder/property';
import { combineReducers } from 'redux';

export const LANDING_MODES = ['basic', 'countdown'];

export const useGameNameAsTitle = property('use game name as title', false);
export const landingMode = property('landing mode', 0);
export const title = property('title', '');
export const subtitle = property('subtitle', '');

export default combineReducers({
  useGameNameAsTitle: useGameNameAsTitle.reducer,
  title: title.reducer,
  subtitle: subtitle.reducer,
  landingMode: landingMode.reducer,
});
