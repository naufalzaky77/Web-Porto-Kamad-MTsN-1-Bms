// REUSEABLE POPUP PREVIEW UNTUK MENAMPILKAN FOTO

import { Box, Dialog } from "@mui/material";
import PropTypes from "prop-types";

import { colors } from "../../style/wpanTheme";
import { imageCardTitleSx, imageCardSubSx } from "../../style/sxStyles";

const ImageModal = ({ open, onClose, img, title, issuer, date }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      sx={{
        "& .MuiDialog-paper": {
          background: "transparent",
          boxShadow: "none",
          overflow: "hidden",
          m: 2,
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: colors.black,
            borderRadius: "12px 12px 0 0",
            overflow: "hidden",
          }}
        >
          <img
            src={img}
            alt={title}
            style={{
              display: "block",
              maxWidth: "90vw",
              maxHeight: "75vh",
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>

        <Box
          sx={{
            py: "clamp(7px, 2vw, 14px)",
            px: "clamp(14px, 4vw, 28px)",
            background: colors.background,
            borderRadius: "0 0 12px 12px",
            maxWidth: "90vw",
          }}
        >
          <Box component="h3" sx={imageCardTitleSx}>
            {title}
          </Box>

          <Box sx={imageCardSubSx}>
            <Box component="p">
              {[issuer, date].filter(Boolean).join(" - ")}
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

ImageModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  img: PropTypes.string,
  title: PropTypes.string,
  issuer: PropTypes.string,
  date: PropTypes.string,
};

export default ImageModal;
