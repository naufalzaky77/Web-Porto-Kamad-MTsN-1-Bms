// BAGIAN ATAS HALAMAN

import { Box } from "@mui/material";

export default function PageHead({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        gap: "1rem",
        mb: "1.5rem",
      }}
    >
      {children}
    </Box>
  );
}
