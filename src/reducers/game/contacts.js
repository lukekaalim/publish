import { ADD_CONTACT, EDIT_CONTACT } from '../../actions/game/contacts';

const INITAL_STATE = [
  
];

const contacts = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [
        ...state,
        {
          name: action.name,
          question: action.question,
          answer: action.answer,
        },
      ];
    case EDIT_CONTACT:
      const newState = [
        ...state,
      ];
      newState[action.index] = {
        name: action.name,
        question: action.question,
        answer: action.answer,
      };
      return newState;
    default:
      return state;
  }
}

export default contacts;
