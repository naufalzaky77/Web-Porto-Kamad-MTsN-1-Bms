// REUSEABLE POPUP PREVIEW UNTUK MENAMPILKAN FOTO

import { Box, Dialog } from "@mui/material";
import PropTypes from "prop-types";

import { colors } from "../../style/wpanTheme";
import { imageCardTitleSx, imageCardSubSx } from "../../style/sxStyles";

const ImageModal = ({ open, onClose, img, title, issuer, date }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <Box sx={{ position: "relative" }}>
        <img
          src={img}
          alt={title}
          style={{
            display: "block",
            width: "100%",
            maxHeight: "80vh",
            objectFit: "contain",
          }}
        />
      </Box>

      <Box sx={{ py: "14px", px: "28px", background: colors.background }}>
        <Box component="h3" sx={imageCardTitleSx}>
          {title}
        </Box>

        <Box sx={imageCardSubSx}>
          <Box component="p">
            {issuer} - {date}
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
