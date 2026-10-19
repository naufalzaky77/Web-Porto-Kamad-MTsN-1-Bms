import { colors } from "./wpanTheme";

export function resetStyle(theme) {
  return {
    "*, *::before, *::after": { boxSizing: "border-box", margin: 0 },
    html: { scrollBehavior: "smooth" },
    body: {
      fontFamily: theme.typography.fontFamily,
      fontSize: "1.0625rem",
      lineHeight: 1.6,
      color: colors.text,
      background: colors.background,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    },
    a: { color: "inherit" },
    ul: { listStyle: "none", padding: 0, margin: 0 },
    button: {
      font: "inherit",
      color: "inherit",
      cursor: "pointer",
      background: "none",
      border: 0,
      padding: 0,
    },
    ":focus-visible": {
      outline: `3px solid ${theme.palette.primary.main}`,
      outlineOffset: 3,
      borderRadius: 6,
    },
  };
}
