import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CR from "../reducer/rootReducer";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//   : compose;

const store = createStore(CR);

export default store;
// 으앙 나 아기 스토어

// ㅠㅠ 리덕주님.. 리덕스좀 제발.. 살려줘~~~~
