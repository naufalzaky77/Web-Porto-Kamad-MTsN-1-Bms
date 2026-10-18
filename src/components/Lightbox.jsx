import { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { colors, size, weight } from "../style/wpanTheme";

const navBtnSx = {
  position: "fixed",
  top: "50%",
  transform: "translateY(-50%)",
  minWidth: "3rem",
  width: "3rem",
  height: "3rem",
  borderRadius: "50%",
  background: colors.white,
  border: `1px solid ${colors.background}`,
  color: colors.text,
  fontSize: "1.6rem",
  padding: 0,
  boxShadow: "0 6px 20px rgba(0,0,0,.1)",
  "&:hover": { background: colors.white },
};

export default function Lightbox({ items, index, onClose, onNavigate }) {
  const item = items[index];
  const hasPrev = index > 0;
  const hasNext = index < items.length - 1;

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onNavigate(index - 1);
      if (e.key === "ArrowRight" && hasNext) onNavigate(index + 1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, hasPrev, hasNext, onClose, onNavigate]);

  return (
    <Dialog
      open
      onClose={onClose}
      maxWidth={false}
      fullWidth
      slotProps={{
        paper: {
          sx: {
            background: "transparent",
            boxShadow: "none",
            overflow: "visible",
            width: "min(860px, 100%)",
            mx: "auto",
          },
        },
      }}
    >
      <Box sx={{ maxHeight: "100%", overflow: "auto" }}>
        <Box
          component="img"
          src={item.img}
          alt={item.title}
          sx={{
            display: "block",
            width: "100%",
            maxHeight: "68vh",
            objectFit: "contain",
            borderRadius: "16px",
            background: colors.background,
          }}
        />
        <Box sx={{ pt: "1rem" }}>
          <Box
            component="h3"
            sx={{
              fontWeight: weight.bold,
              fontSize: "1.6rem",
              letterSpacing: "-0.02em",
              color: colors.text,
            }}
          >
            {item.title}
          </Box>
          <Box component="p" sx={{ color: colors.muted }}>
            {item.issuer || item.desc}
          </Box>
        </Box>
      </Box>

      <Button
        onClick={onClose}
        sx={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          px: "1.2rem",
          py: "0.6rem",
          borderRadius: "999px",
          background: colors.text,
          color: colors.white,
          fontWeight: weight.medium,
          "&:hover": { background: colors.text },
        }}
      >
        Tutup
      </Button>

      {hasPrev && (
        <Button
          onClick={() => onNavigate(index - 1)}
          aria-label="Sebelumnya"
          sx={{ ...navBtnSx, left: "1rem" }}
        >
          ‹
        </Button>
      )}
      {hasNext && (
        <Button
          onClick={() => onNavigate(index + 1)}
          aria-label="Berikutnya"
          sx={{ ...navBtnSx, right: "1rem" }}
        >
          ›
        </Button>
      )}
    </Dialog>
  );
}
