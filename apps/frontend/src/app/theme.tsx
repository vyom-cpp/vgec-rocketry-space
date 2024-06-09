import { createTheme, responsiveFontSizes } from "@mui/material";
import "@fontsource/open-sans"
import "@fontsource/roboto"
import "@fontsource/barlow-condensed"
export const theme = responsiveFontSizes(
  createTheme({

    spacing: 4,
    breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
    typography: {
      fontFamily: ['Barlow Condensed','Roboto', 'Open Sans'].join(','),
      h1: {
        fontSize: '5rem',
        fontFamily: 'Raleway',
      },
      h2: {
        fontSize: '3.5rem',
        fontFamily: 'Open Sans',
        fontStyle: 'bold',
      },
      h3: {
        fontSize: '2.5rem',
        fontFamily: 'Roboto',
      },
    },
    palette: {

      background: {
        default: '#009900', // green
      },
      error: {
        main: '#D72A2A', // red
      },
      warning: {
        main: '#FC7B09', // orange
      },
      info: {
        main: '#6B7D6A', // gray
      },
      success: {
        main: '#09FE00', // green
      },
      text: {
        primary: '#000000', // black
        secondary: '#FFFFFF', // white
      },
      primary: {
        main: "#5F85DB", //blue
        dark: "#26282B",  //dark black
        light: "#90B8F8", // light blue
        contrastText: "#353941", // gray black
    },
  },
  })
);