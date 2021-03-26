import * as modalType from "../types/ModalType";
export const showModal = () => {
  return (dispatch) => {
    dispatch({
      type: modalType.SHOW_MODAL
    });
  };
};
export const hideModal = () => {
    return (dispatch) => {
      dispatch({
        type: modalType.HIDE_MODAL
      });
    };
  };