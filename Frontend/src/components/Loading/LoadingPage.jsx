// import React from 'react'

import { Box } from "@mui/material";
import { logo } from "../../utils/constant";

const LoadingPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        zIndex: 9999999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <img src={logo} alt="logo" height={100} />
    </Box>
  );
};

export default LoadingPage;
