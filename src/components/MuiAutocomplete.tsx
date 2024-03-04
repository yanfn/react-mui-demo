import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

export const MuiAutocomplete = () => {
  type Skill = {
    id: number;
    label: string;
  };

  const skills = ["HTML", "CSS", "Javascript", "Typescript", "React"];

  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);

  const skillsOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
  }));
  console.log({skill});
  return (
    <Stack spacing={2}>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};
