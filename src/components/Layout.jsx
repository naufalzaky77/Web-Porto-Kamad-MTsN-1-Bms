// WRAPPER LAYOUT KESELURUHAN

import { Box } from "@mui/material";
import PropTypes from "prop-types";

import Navbar from "./Navbar";
import useScrollToTop from "../hook/useScrollToTop";

export default function Layout({ children }) {
  useScrollToTop();

  return (
    <>
      <Navbar />
      <Box
        component="main"
        sx={{
          width: "80%",
          mx: "auto",
          pt: "7.5rem",
          pb: "4rem",
          minHeight: "100vh",
          // --- LAYAR HP ---
          "@media (max-width: 900px)": {
            width: "92%",
          },
        }}
      >
        {children}
      </Box>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
