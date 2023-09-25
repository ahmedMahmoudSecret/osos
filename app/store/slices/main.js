import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    darkMode: false,
    direction: Cookies.get('direction') || 'ltr',
    preloader: true,
    sidebar: 1,
  },
  reducers: {
    directionFun: (state, action) => {
      state.direction = action.payload
    },
    changeMode: (state, action) => {
      state.darkMode = action.payload
      Cookies.set('dark', action.payload)
    },
    changePreloader: (state, action) => {
      state.preloader = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { directionFun, changePreloader, changeMode, addToHistory } =
  mainSlice.actions
export default mainSlice.reducer