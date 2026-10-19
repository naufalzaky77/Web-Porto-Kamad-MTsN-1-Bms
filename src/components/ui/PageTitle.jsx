// BAGIAN JUDUL HALAMAN

import { Box } from "@mui/material";
import PropTypes from "prop-types";

import { pageTitleSx } from "../../style/sxStyles";

const PageTitle = ({ children }) => {
  return (
    <Box component="h2" sx={pageTitleSx}>
      {children}
    </Box>
  );
};

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTitle;
