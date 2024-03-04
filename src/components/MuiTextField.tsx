import React, { ChangeEvent, useState } from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";

export const MuiTextField = () => {
    const [value, setValue] = useState("")
	return (
		<Stack spacing={4}>
			<Stack spacing={2} direction="row">
				<TextField label="Name" variant="outlined" />
				<TextField label="Name" variant="filled" />
				<TextField label="Name" variant="standard" />
			</Stack>

			<Stack spacing={2} direction="row">
				<TextField label="Small secondary" size="small" color="secondary" />
			</Stack>

			<Stack spacing={2} direction="row">
				<TextField 
                    label="Form Input" 
                    required 
                    value={value}
                    onChange={ (e) => setValue(e.target.value) }
                    error={!value}
                    helperText={ !value ? 'Required' : 'Do not share your password to anyone' }
                />
				<TextField
					label="Password"
					type="password"
					helperText="do not share your password"
					disabled
				/>
				<TextField label="Read only" inputProps={{ readOnly: true }} />
			</Stack>

			<Stack direction="row" spacing={2}>
				<TextField
					label="Amount"
                    InputProps={{
						startAdornment: <InputAdornment position="start">$</InputAdornment>,
					}}
				/>
				<TextField
					label="Weight"
					InputProps={{
						endAdornment: <InputAdornment position="end">kg</InputAdornment>,
					}}
				/>
			</Stack>
		</Stack>
	);
};
