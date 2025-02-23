import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  width: 100,
  height: 100,
  backgroundColor: 'red',
  shape: "0%",
  padding: 50,
  mRight: 0,
  mLeft: 0,
  mTop: 0,
  mBottom: 0,
}

export const boxSlice = createSlice({
  name: 'box',
  initialState,
  reducers: {
    incrementWidth: (state) => {
      state.width += 10
    },
    incrementHeight: (state) => {
      state.height += 10
    },
    ChangeBackgroundColor: (state) => {
      let R = Math.floor(Math.random() * 256);
      let G = Math.floor(Math.random() * 256);
      let B = Math.floor(Math.random() * 256);
      let randomcolor = `rgb(${R}, ${G}, ${B})`; 
      state.backgroundColor = randomcolor;
    },
    resize: (state) => {
      state.width = 100;
      state.height = 100;
      state.shape = "0%";
      state.padding = 50;
    },
    changeShape: (state) => {
      state.shape = '50%';
    }, 
    increasePadding: (state, action) => {
      state.padding += action.payload || 5;
    },
    marginRight: (state, action) => {
      state.mRight += action.payload || 5;
    },
    marginLeft: (state, action) => {
      state.mLeft += action.payload || 5;
    },
    marginTop: (state, action) => {
      state.mTop += action.payload || 5;
    },
    marginBottom: (state, action) => {
      state.mBottom += action.payload || 5;
    }
  },
})

export const { incrementWidth, incrementHeight, ChangeBackgroundColor, resize, changeShape, increasePadding, marginRight, marginLeft, marginTop, marginBottom } = boxSlice.actions

export default boxSlice.reducer