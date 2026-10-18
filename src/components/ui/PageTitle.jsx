// BAGIAN JUDUL HALAMAN

import { Box } from "@mui/material";

import { colors, size, weight } from "../../style/wpanTheme";

export default function PageTitle({ children }) {
  return (
    <Box
      component="h2"
      sx={{
        fontWeight: weight.bold,
        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
        lineHeight: 1,
        letterSpacing: "-0.04em",
        color: colors.text,
      }}
    >
      {children}
    </Box>
  );
}
