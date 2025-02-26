import React from 'react';
import {Card, Button, Box} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import MemoryIcon from '@mui/icons-material/Memory';
import CodeIcon from '@mui/icons-material/Code';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { faMicrochip, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const CourseCard = ({ char, title, description, tenure, online, industry_type }: any) => {
  const is_software_industry = industry_type === 'SOFTWARE'
  
  return (
    <Card sx={{ 
      
    position: 'relative' }}>
      <div
        style={{
          backgroundColor: is_software_industry ? "#0083e0" : '#00b395',
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" style={{ color: "#fff" }}>
          {char}
        </Typography>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="body1" color="text.secondary">
          {description}
        </Typography>
        <Typography gutterBottom variant="h6" color="text.secondary">
          Tenure: {tenure}
        </Typography>
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Chip icon={is_software_industry ? <CodeIcon style={{ color: '#fff' }} />: <MemoryIcon style={{color: '#fff'}} />
          
        } label={industry_type} sx={{
          backgroundColor: is_software_industry ? "#0083e0" : '#00b395',
          color: '#fff', fontWeight: 600
        }} />
        
        <Chip
          label={!online ? 'Online' : 'Offline'}
          color={!online ? 'primary' : 'secondary'}
          variant="outlined"
        />
        </Box>
        
      </CardContent>
      {/* <Box sx={{ display: "flex", justifyContent: "center"}}>
        <Button variant="contained" color="primary">
            View More
        </Button>
      </Box> */}
    </Card>
  );
};

export default CourseCard;
