import BookmarkBorder from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";

export const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState<boolean>(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.log(skills);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
  };

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else if (!event.target.checked) {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept the terms and conditions"
          control={
            <Checkbox
              size="small"
              color="secondary"
              disableRipple
              checked={acceptTnC}
              onChange={handleChange}
            />
          }
        />
      </Box>

      <Box>
        <Checkbox icon={<BookmarkBorder />} checkedIcon={<BookmarkIcon />} />
      </Box>

      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>

          <FormGroup>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  disableRipple
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  disableRipple
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="JS"
              control={
                <Checkbox
                  disableRipple
                  value="js"
                  checked={skills.includes("js")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>

          <FormHelperText>Please select a skill</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};
