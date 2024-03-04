import { Box, Divider, Grid, Paper, Stack } from "@mui/material";
import React from "react";

export const MuiLayout = () => {
  return (
    <Paper sx={{ padding: '32px' }} elevation={4} >
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Codevolution
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        ></Box>
      </Stack>
      <Grid container direction='row' my={4} rowSpacing={2} columnSpacing={4} >
        <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Item 1</Box></Grid>
        <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Item 2</Box></Grid>
        <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Item 3</Box></Grid>
        <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Item 4</Box></Grid>

      </Grid>

    </Paper>
  );
};
