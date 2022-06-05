import { Stack, Box } from "@mui/material";
import React from "react";

export default function MuiResponsive() {
  return (
    <Stack
      spacing={{ xs: 1, md: 2 }}
      p={2}
      direction={{ xs: "column", md: "row" }}
    >
      <Box
        sx={{
          width: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "250px",
          bgcolor: { xs: "#ff0000", md: "#33cc33" },
        }}
      >
        box 1
      </Box>
      <Box
        sx={{
          width: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "250px",
          bgcolor: { md: "#ff0000", xs: "#33cc33" },
        }}
      >
        box 2
      </Box>
      <Box
        sx={{
          width: "250px",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          display: 'flex',
          height: "250px",
          bgcolor: { xs: "#ff0000", md: "#33cc33" },
        }}
      >
        box 3
      </Box>
    </Stack>
  );
}
