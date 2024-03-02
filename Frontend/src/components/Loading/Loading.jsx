// import React from 'react'
import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        height: "92vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <CircularProgress color="secondary" />
    </Box>
  );
};

export default Loading;
