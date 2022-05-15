import { createTheme } from "@mui/material";
import { color_bg_dark, color_bg_white, color_text_dark, color_text_light } from "./colors.ts";

export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: color_bg_dark
      },
      secondary: {
        main: color_bg_white
      },
      text: {
        primary: color_text_dark
      }
    },
    shape: {
      borderRadius: 8
    },
  });;
  
export const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
    shape: {
      borderRadius: 8
    }
  });;
