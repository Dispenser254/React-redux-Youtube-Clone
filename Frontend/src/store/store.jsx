/* eslint-disable no-undef */
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./rooReducer";

const middlewares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean);

const combineReducers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, combineReducers);
