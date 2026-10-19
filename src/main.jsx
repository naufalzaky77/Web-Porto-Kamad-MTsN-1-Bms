import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";

import wpanTheme from "./style/wpanTheme";
import { resetStyle } from "./style/resetStyle";
import App from "./App";

import "./style/font/fontPJS.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={wpanTheme}>
      <GlobalStyles styles={resetStyle} />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
