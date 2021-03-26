import {SHOW_MODAL,HIDE_MODAL} from "../types/ModalType";
const initialState = {
  isModal: false,
};
function modalReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        isModal: true,
      };
    case HIDE_MODAL:
      return {
        isModal: false,
      };
    default:
      return state;
  }
}
export default modalReducer;
