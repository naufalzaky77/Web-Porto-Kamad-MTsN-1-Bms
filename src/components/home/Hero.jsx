// BAGIAN HOME PAGE
// Pecahan Home.jsx untuk bagian nama dan foto

import { Box } from "@mui/material";

import { colors } from "../../style/wpanTheme";
import { homeGridSx, heroPhotoWrapSx, heroPhotoSx } from "../../style/sxStyles";

import { profile } from "../../constant/profile";

const Hero = () => {
  return (
    <Box
      component="section"
      sx={{ ...homeGridSx, alignItems: "center", pt: "21px" }}
    >
      <Box>
        <Box>
          {profile.name.map((item, i) => (
            <Box
              key={i}
              component="span"
              sx={{
                display: "block",
                color: item.color === "primary" ? colors.primary : colors.text,
                fontWeight: item.weight,
                fontSize: item.size,
                letterSpacing: item.spacing,
                wordSpacing: item.word,
                lineHeight: "clamp(3.5rem, 8vw, 7rem)",
              }}
            >
              {item.text}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={heroPhotoWrapSx}>
        <Box
          component="img"
          src={profile.photo}
          alt="Foto Profil"
          sx={heroPhotoSx}
        />
      </Box>
    </Box>
  );
};

export default Hero;
