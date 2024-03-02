import { Box, Stack } from "@mui/material";
// import React from 'react'
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { logo } from "../../utils/constant";

const Navbar = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        backgroundColor: "#000",
        top: "0",
        zIndex: 111,
      }}
    >
      <Stack
        direction="row"
        alignItems={{ sx: "center" }}
        p={2}
        sx={{
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" height={45} />
        </Link>
        <SearchBar />
      </Stack>
    </Box>
  );
};

export default Navbar;
