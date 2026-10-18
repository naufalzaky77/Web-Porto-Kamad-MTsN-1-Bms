import { createTheme } from "@mui/material";

// WARNA
export const colors = {
  primary: "#1874ff",
  hover: "#5395faa7",
  text: "#202124",
  muted: "#797c86",
  background: "#e0e1e4",
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
  h0: "3.75rem",
  h01: "3.03rem",
  h02: "2.45rem",
  h1: "2.33rem",
  h11: "1.99rem",
  h12: "1.61rem",
  h2: "1.43rem",
  h21: "1.3rem",
  h22: "1.05rem",
  h3: "0.89rem",
  h31: "0.69rem",
  h4: "0.55rem",
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
