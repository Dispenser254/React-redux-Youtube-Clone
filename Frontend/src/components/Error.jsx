/* eslint-disable react/prop-types */
// import React from 'react'

import { Box } from "@mui/material";
import { MdOutlineError } from "react-icons/md";

const Error = ({ error }) => {
  return (
    <Box
      sx={{
        height: "92vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "red,",
      }}
    >
      {error.message}
      <MdOutlineError />
    </Box>
  );
};

export default Error;
