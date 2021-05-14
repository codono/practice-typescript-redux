import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { 으앙스, reducer } from "./action/action";
import CR from "./reducer/rootReducer";

interface state {
  reducer1: {
    items: [];
  };
}

function App() {
  let state = useSelector((state: state) => state.reducer1);
  let dispatch = useDispatch();
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(으앙스());
        }}
      >
        똥떵덩동덩동덩띵떵똥뚱
      </button>
      {console.log(state.items)}
    </div>
  );
}

export default App;
