import { Favorite, FavoriteBorder, Star } from "@mui/icons-material";
import { Rating, Stack } from "@mui/material";
import { useState } from "react";

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    console.log(_event);
    console.log({ newValue });
    setValue(newValue);
  };
  return (
    <Stack>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<Favorite color="error" fontSize="inherit" />}
        emptyIcon={<FavoriteBorder fontSize="inherit" />}
        highlightSelectedOnly
      />
    </Stack>
  );
};
