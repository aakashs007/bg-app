import { combineReducers } from "@reduxjs/toolkit";
import { appReducer } from "./app";

const rootReducer = combineReducers({
  app: appReducer,
})

export default rootReducer;