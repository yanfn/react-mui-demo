import {
  Box,
  FormControlLabel,
  Switch,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import React, { useState } from "react";

export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  const [themes, setThemes] = useState<string[]>([]);
  console.log(themes);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = themes.indexOf(event.target.value);

    if (index === -1) {
      setThemes([...themes, event.target.value]);
    } else if (!event.target.checked) {
        setThemes(themes.filter((theme) => theme !== event.target.value))
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="Dark Mode"
          control={
            <Switch
              size="small"
              color="secondary"
              checked={checked}
              onChange={handleChange}
            />
          }
        />
      </Box>

      <Box>
        <FormControl>
          <FormLabel>Select theme</FormLabel>

          <FormGroup>
            <FormControlLabel
              label="Dark Mode"
              control={
                <Switch
                  size='medium'
                  color='info'
                  value="dark"
                  checked={themes.includes('dark')}
                  onChange={handleThemeChange}
                />
              }
            />
            <FormControlLabel
              label="Light Mode"
              control={
                <Switch
                  size='medium'
                  color='secondary'
                  value="light"
                  checked={themes.includes('light')}
                  onChange={handleThemeChange}
                />
              }
            />
            <FormControlLabel
              label="Main Mode"
              control={
                <Switch
                  size='medium'
                  color='error'
                  value="main"
                  checked={themes.includes('main')}
                  onChange={handleThemeChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
