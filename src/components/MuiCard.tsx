import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import React from "react";

export const MuiCard = () => {
  return (
    <Box sx={{ width: "300px" }}>
      <Card>
        <CardMedia
          component='img'
          image="https://source.unsplash.com/random"
          height='140'
          alt="unsplash image"
        >

        </CardMedia>
        <CardContent>
          <Typography component="div" variant="h5" gutterBottom>
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React is Javascript library for building user interfaces. React can
            be used as a base in development of single-page or mobile
            applications.
          </Typography>
        </CardContent>
        <CardActions>
            <Button>Share</Button>
            <Button>Learn more</Button>
          </CardActions>
      </Card>
    </Box>
  );
};
