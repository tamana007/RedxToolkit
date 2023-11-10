// import store from "./app/store";

const store = require("./app/store");

console.log("initial state:", store.getState());

const unSubscribe = store.subscribe(() => {
  console.log("state changed", store.getState());
  // unSubscribe();
});

const { ordered, reStocked } = require('../features/cake/cakeSlice');

store.dispatch(ordered());
store.dispatch(ordered());
store.dispatch(ordered());
store.dispatch(reStocked());
