// NAVBAR (BAGIAN ATAS) VERSI DESKTOP

import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

import { navbarSx, navItemSx } from "../style/formStyles";

import { navItems } from "../constant/navItems";

const Navbar = () => {
  return (
    <Box component="nav" aria-label="Navigasi utama" sx={navbarSx}>
      {navItems.map(({ label, ...props }) => (
        <Box key={props.to} component={NavLink} {...props} sx={navItemSx}>
          {label}
        </Box>
      ))}
    </Box>
  );
};

export default Navbar;
