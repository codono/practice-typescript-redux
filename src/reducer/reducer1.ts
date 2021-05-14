import { reducer } from "../action/action";

let reduxName = { items: ["리덕스", "리덕주님", "리액트-리덕주님"] };

let reducer1 = (state = reduxName, action: reducer) => {
  if (action.type === "으앙") {
    let copy = { ...reduxName };
    copy.items.push("타입-리덕주님");
    return copy;
  } else {
    return state;
  }
};

export default reducer1;
