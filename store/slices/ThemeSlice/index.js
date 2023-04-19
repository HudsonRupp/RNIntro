import { createSlice } from '@reduxjs/toolkit'
import {storeValue} from "../../../Helpers"

const themes = {
    dark: {
        name: "dark",
        background: "#36393F",
        backgroundAccent: "#292b2f",
        accent: "#858585",
        text: "#FFFFFF"
    },
    light: {
        name: "light",
        background: "#FFFFFF",
        backgroundAccent: "#DEE4E7",
        text: "#000000",
        accent: "#DEE4E7"
    },
    universal: {
        link: '#0b02f7'
    }
}


export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: themes.light
  },
  reducers: {
    toggle: (state, action) => {
        state.theme = (state.theme.name == themes.light.name) ? themes.dark : themes.light;
        storeValue("@theme", state.theme.name);
    },
    dark: (state) => {
        state.theme = themes.dark
    },
    light: (state) => {
        state.theme = themes.light
    }
  }
})


export const { toggle, dark, light } = themeSlice.actions

export default themeSlice.reducer