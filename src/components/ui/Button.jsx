// TOMBOL

import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import { colors, size, weight } from "../../style/wpanTheme";

export default function Button({
  variant = "outline",
  to,
  href,
  children,
  ...rest
}) {
  const solid = variant === "solid";
  const linkProps = to
    ? { component: Link, to }
    : href
      ? { component: "a", href }
      : { component: "button", type: "button" };

  return (
    <Box
      {...linkProps}
      {...rest}
      sx={{
        display: "inline-block",
        px: "1.4rem",
        py: "0.75rem",
        borderRadius: "999px",
        border: `1.5px solid ${solid ? colors.primary : colors.text}`,
        textDecoration: "none",
        fontWeight: weight.medium,
        background: solid ? colors.primary : "transparent",
        color: solid ? colors.white : colors.text,
        transition: "transform 0.2s",
        "&:hover": { transform: "translateY(-2px)" },
      }}
    >
      {children}
    </Box>
  );
}
