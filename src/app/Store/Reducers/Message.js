import { SET_MESSAGE, CLEAR_MESSAGE } from "../Types";

const initialState = {message:'', variant:'success',show:false};

const Message = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      return { ...payload, show:true };

    case CLEAR_MESSAGE:
      return { message: "", show:false };

    default:
      return state;
  }
}

export default Message;