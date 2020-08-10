import ModalActionTypes from './modal.types';
import { ModalAction } from './modal.actions';

const INITIAL_STATE = {
  on: false,
  title: '',
  content: '',
  callback: () => {}
};

const modalReducer = (state = INITIAL_STATE, action: ModalAction) => {
  switch (action.type) {
    case ModalActionTypes.OPEN_MODAL:
      return {
        on: true,
        title: action.payload?.title,
        content: action.payload?.content,
        callback: action.payload?.content
      };
    case ModalActionTypes.CLOSE_MODAL:
      return {
        on: false,
        title: '',
        content: '',
        callback: () => {}
      };
    default:
      return state;
  }
};

export default modalReducer;
