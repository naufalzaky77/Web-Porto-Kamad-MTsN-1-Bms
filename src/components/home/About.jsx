// BAGIAN HOME PAGE
// Pecahan Home.jsx untuk bagian deskripsi dan info

import { Box } from "@mui/material";

import { colors, weight } from "../../style/wpanTheme";
import { homeGridSx, desTextSx, aboutRowSx } from "../../style/sxStyles";

import { profile } from "../../constant/profile";

const About = () => {
  return (
    <Box
      sx={{
        ...homeGridSx,
        alignItems: "start",
        pt: "35px",
        mt: "84px",
        borderTop: `2px solid ${colors.black}10`,
      }}
    >
      <Box>
        {profile.bio.map((text) => (
          <Box
            key={text}
            sx={{
              ...desTextSx,
              maxWidth: "60ch",
              "& + &": { pt: "28px" },
              fontWeight: weight.regular,
              color: colors.text,
            }}
          >
            {text}
          </Box>
        ))}
      </Box>

      <Box>
        {profile.info.map(({ label, value }) => (
          <Box key={label} sx={aboutRowSx}>
            <Box
              sx={{
                ...desTextSx,
                fontWeight: weight.bold,
                color: colors.primary,
              }}
            >
              {label}
            </Box>
            <Box
              sx={{
                ...desTextSx,
                fontWeight: weight.medium,
                color: colors.text,
              }}
            >
              {value}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default About;
