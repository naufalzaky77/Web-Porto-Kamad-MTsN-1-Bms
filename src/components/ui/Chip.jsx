// KAPSUL BADGE

import { Box } from "@mui/material";

import { colors, size, weight } from "../../style/wpanTheme";

export default function Chip({ active = false, children, ...rest }) {
  return (
    <Box
      component="button"
      type="button"
      {...rest}
      sx={{
        px: "1.1rem",
        py: "0.45rem",
        borderRadius: "999px",
        border: `1.5px solid ${active ? colors.primary : colors.background}`,
        background: active ? colors.primary : "transparent",
        color: active ? colors.white : colors.text,
        fontWeight: weight.medium,
        transition: "border-color 0.2s, background 0.2s, color 0.2s",
        "&:hover": { borderColor: colors.primary },
      }}
    >
      {children}
    </Box>
  );
}

export function Chips({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        mb: "2.5rem",
      }}
    >
      {children}
    </Box>
  );
}
