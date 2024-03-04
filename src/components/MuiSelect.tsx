import { Box, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log({countries});
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCountries( typeof value === 'string' ? value.split('') : value );
  }

  return (
    <Box width='250px'>
        <TextField 
          label='Select Country'
          select
          value={countries}
          onChange={handleChange}
          SelectProps={{
            multiple: true,
          }}
          fullWidth
          size='small'
          color='secondary'
          error
        >
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='AU'>Autrilia</MenuItem>
            {/* {
                ["India", "USA", "Austrilia"].map((value) => (
                    <MenuItem 
                        key={value}
                        value={value}
                    >
                        {value}
                    </MenuItem>
                ))
            } */}
        </TextField>

    </Box>
  )
}
