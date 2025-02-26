import React, { useState } from 'react';
import { faMicrochip, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CodeIcon from '@mui/icons-material/Code';
import MemoryIcon from '@mui/icons-material/Memory';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Breadcrumbs, Link, Typography, Chip, Menu, MenuItem } from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const CustomBreadcrumb = ({ label, options, selectedOption } : any) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const {pathname} = useRouter();
  const router = useRouter();
  // Split the pathname by '/'
  const parts = pathname.split('/');

  // Get the last part of the route (after the last '/')
  const lastPart = parts[parts.length - 1];

  const is_software_industry = lastPart === 'software'

  const handleChipClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOptionSelect = (path: any) => {
    router.push(path)
    handleMenuClose();
  };

  return (
    <>
    <Breadcrumbs sx={{color: '#333'}} aria-label="breadcrumb">
      <Link component={NextLink} underline="hover" color="inherit" 
      href="/courses" >
      {label}
      </Link>
      <Chip
        label={selectedOption.label}
        onClick={handleChipClick}
        sx={{ backgroundColor: is_software_industry ? "#0083e0" : '#00b395',
        '&:hover': {
          backgroundColor: is_software_industry? '#005aa6': '#008270'
        }, 
        color: '#fff' }}
        icon={is_software_industry ? <CodeIcon style={{ color: '#fff' }} />: <MemoryIcon style={{color: '#fff'}} />
        }
        deleteIcon={<ExpandMoreIcon />}
      />
      
      <Typography color="text.primary">Courses</Typography>
    </Breadcrumbs>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {options.map((option: any) => (
          <MenuItem key={option} selected={lastPart === option.label.toLowerCase()} onClick={() => handleOptionSelect(option.path)}>
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default CustomBreadcrumb;
