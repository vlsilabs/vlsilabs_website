// IndustryDropdown.js
import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const IndustryDropdown = ({ onIndustryChange }: any) => {
  const [industry, setIndustry] = useState('');

  const handleIndustryChange = (event: any) => {
    const selectedIndustry = event.target.value;
    setIndustry(selectedIndustry);
    onIndustryChange(selectedIndustry);
  };

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel htmlFor="industry-dropdown">Select Industry</InputLabel>
      <Select
        label="Select Industry"
        value={industry}
        onChange={handleIndustryChange}
        inputProps={{
          name: 'industry',
          id: 'industry-dropdown',
        }}
      >
        <MenuItem value="Semiconductor">Semiconductor</MenuItem>
        <MenuItem value="Software">Software</MenuItem>
      </Select>
    </FormControl>
  );
};

export default IndustryDropdown;
