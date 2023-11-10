const { createSlice } = require("redux");

const initialState = {
  numOfCakes: 1,
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    reStocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

exports.ordered = cakeSlice.actions.ordered;
exports.reStocked = cakeSlice.actions.reStocked;
module.exports = cakeSlice.reducer;