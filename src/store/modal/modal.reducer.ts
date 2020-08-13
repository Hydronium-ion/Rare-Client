import ModalActionTypes from './modal.types';
import { ModalAction } from './modal.actions';

const INITIAL_STATE = {
  on: false,
  modalType: 'default',
  callback: () => {}
};

const modalReducer = (state = INITIAL_STATE, action: ModalAction) => {
  switch (action.type) {
    case ModalActionTypes.OPEN_MODAL:
      return {
        on: true,
        modalType: action.payload?.modalType
      };
    case ModalActionTypes.CLOSE_MODAL:
      return {
        on: false,
        modalType: 'default'
      };
    default:
      return state;
  }
};

export default modalReducer;
