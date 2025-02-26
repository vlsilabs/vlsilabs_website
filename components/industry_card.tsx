import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, Box } from '@mui/material';

export const IndustryCard = ({ title, image_url, href_link }: any) => {
  return (
    <Card sx={{
      position: 'relative',
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          image={image_url}
          height="300"
        />
        <Box sx={{ backgroundColor: 'rgb(0, 0, 0, 60%)', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}} />
        <CardContent sx={{ position: 'absolute', top: '50%', left: '50%', 
        transform: 'translate(-50%, -50%)',
        padding: 2, borderRadius: 1, textAlign: 'center', background: 'none' }}>
          <Typography variant="h4" component="div" sx={{ color: '#fff'
        , textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', marginBottom: '10px', fontWeight: 600}}>
            {title}
          </Typography>
          <Button component={Link} href={href_link} variant="contained" sx={{ 
            backgroundColor: '#ffffffcc',
            '&:hover': {
              backgroundColor: '#fff',
            }, 
          color: '#333'}}>
            Explore Courses
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
