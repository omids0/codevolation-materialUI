import { Stack, Grid, Box } from "@mui/material";
import React from "react";

//2 no grid  darim, yeki container va item ha,
//barae item ba estefade az xs,sm,md,lg,... mitoonim nesbate 12 ro tanzim konim
//dakhele grid container mitoonim barae raayate fasele barabar az spacing stefade konim

export default function MuiGrid() {
  return (
    <Stack p={4}>
      <Grid container my={4} rowSpacing={1} columnSpacing={4}>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}
