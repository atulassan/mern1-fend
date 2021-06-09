import { combineReducers } from 'redux';

import auth from "./Auth";
import message from "./Message";
const rootReducer = combineReducers({  //<RootState>
  client: auth,
  messages:message
});

export default rootReducer;