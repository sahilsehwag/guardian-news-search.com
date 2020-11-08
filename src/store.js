import { combineReducers, applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { startLoader, endLoader } from "middlewares";
// import { composeWithDevTools } from 'redux-devtools-extension';

import common from "common/reducer";
import articles from "articles/articles";

const rootReducer = combineReducers({
  common,
  articles
});

const middlewares = applyMiddleware(
  startLoader,
  thunk,
  createLogger(),
  endLoader
);

// export default createStore(rootReducer, composeWithDevTools(middlewares))
export default createStore(rootReducer, middlewares);
