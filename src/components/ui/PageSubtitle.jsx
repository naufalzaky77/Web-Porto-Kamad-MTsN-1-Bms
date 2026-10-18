// BAGIAN ISI HALAMAN

import { Box } from "@mui/material";

import { colors, size, weight } from "../../style/wpanTheme";

export default function PageSubtitle({ children }) {
  return (
    <Box component="p" sx={{ color: colors.muted }}>
      {children}
    </Box>
  );
}
