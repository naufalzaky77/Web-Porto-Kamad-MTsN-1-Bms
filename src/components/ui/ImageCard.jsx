// REUSEABLE KARTU UNTUK MENAMPILKAN FOTO

import { Box } from "@mui/material";
import PropTypes from "prop-types";

import {
  imageCardSx,
  imageCardImgSx,
  imageCardImgMasonrySx,
  imageCardTitleSx,
  imageCardSubSx,
  imageCardDateSx,
} from "../../style/sxStyles";

const ImageCard = ({ img, title, issuer, date, onClick, variant = "grid" }) => {
  const imgSx = variant === "masonry" ? imageCardImgMasonrySx : imageCardImgSx;

  return (
    <Box component="button" type="button" onClick={onClick} sx={imageCardSx}>
      <Box component="img" src={img} alt={title} sx={imgSx} />

      <Box sx={{ pb: "21px" }}>
        <Box
          component="strong"
          sx={{ ...imageCardTitleSx, display: "block", pt: "21px" }}
        >
          {title}
        </Box>

        <Box component="div" sx={imageCardSubSx}>
          {issuer}
        </Box>
        {date && (
          <Box component="div" sx={imageCardDateSx}>
            {date}
          </Box>
        )}
      </Box>
    </Box>
  );
};

ImageCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  issuer: PropTypes.string,
  date: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["grid", "masonry"]),
};

export default ImageCard;
