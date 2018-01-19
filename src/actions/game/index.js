import {
  buildPropertyActions,
  buildPropertyTypes,
} from '../../redux/property';

export const types = buildPropertyTypes('game');

export const {
  edit: editGame,
  reset: resetGame,
} = buildPropertyActions(types, { saveLocal: true });

export const {
  EDIT: EDIT_GAME,
  RESET: RESET_GAME,
} = types;
