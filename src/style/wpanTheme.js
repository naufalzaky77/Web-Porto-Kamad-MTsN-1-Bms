import { createTheme } from "@mui/material/styles";

// WARNA
export const colors = {
  primary: "#1874ff",
  hover: "#5395faa7",
  text: "#202124",
  muted: "#94979f",
  background: "#f7f7f7",
  white: "#ffffff",
  black: "#000000",
};

// KETEBALAN FONT
export const weight = {
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
};

// UKURAN FONT
export const size = {
  h0: "5.73rem",
  h1: "3.75rem",
  h2: "2.33rem",
  h3: "1.43rem",
  h4: "1.05rem",
  h5: "0.85rem",
  h6: "0.69rem",
};

// KELUARGA FONT
export const font = "'Plus Jakarta Sans', sans-serif";

// INJEKSI TEMA KE MUI
const wpanTheme = createTheme({
  typography: { fontFamily: font },
  palette: {
    primary: { main: colors.primary },
  },
});

export default wpanTheme;
