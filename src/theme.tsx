import { PaletteColor, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { colors } from "@mui/material";

const tools = createTheme();
// white
const primary = tools.palette.augmentColor({ color: { main: "#FFFFFF" } });
// light chavivo
const secondary = tools.palette.augmentColor({ color: { main: "#a4d8d9" } });
// purple
const highlight = tools.palette.augmentColor({ color: { main: "#624CAB" } });
// black
const font = tools.palette.augmentColor({ color: { main: "#000000" } });

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary,
    secondary,
    highlight,
    font,
    error: {
      main: red.A400,
    },
    background: {
      default: primary.main,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: primary.main,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "League Spartan",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: primary.dark,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "League Spartan",
          textTransform: "initial",
          fontWeight: "bold",
          color: "black",
          "&:hover": {
            color: "#624cab",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#624cab",
          },
        },
      },
    },
  },
});

export default theme;

declare module "@mui/material/styles" {
  interface Palette {
    highlight: PaletteColor;
    font: PaletteColor;
  }
  interface PaletteOptions {
    highlight?: PaletteOptions["primary"];
    font?: PaletteOptions["primary"];
  }
}
