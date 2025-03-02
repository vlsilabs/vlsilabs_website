import {Card, Grid, Typography, Button, Box, CardContent, CardActions} from '@mui/material';
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

import { TESTIMONIALS } from '@/constants'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default function SuccessStories() {
    return (
        <Grid container spacing={4} sx={{padding: '80px 4vw 0'}}>
            <Grid item xs={12}>
                <Typography variant='h3' sx={{
                    fontWeight: 800,
                    color: '#333',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                    marginBottom: '20px',
                    paddingBottom: '5px',
                    textAlign: 'center'
                }}>Success Stories</Typography>
            </Grid>

            <Grid item xs={12} sx={{ marginBottom: '40px'}}>
                <Carousel responsive={responsive} 
                autoPlaySpeed={50} 
                autoPlay={true} 
                infinite={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                transitionDuration={6500}>
                    {TESTIMONIALS.map(testimonial => (
                        <Card key={testimonial.key} sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            border: '2px solid #0056b3',
                            boxShadow: 'none',
                            borderRadius: 4,
                            margin: '0 10px'
                        }}>
                            <CardContent sx={{flex: 1}}>
                                <Typography sx={{ 
                                position: 'relative', padding: '20px 20px 0', userSelect: 'none',
                                }} variant='body1'>
                                    <span style={{
                                        fontSize: '4rem',
                                        color: '#0056b3',
                                        position: 'absolute',
                                        left: '-5px',
                                        lineHeight: 0
                                    }}>&ldquo;</span>
                                    {testimonial.content}
                                    <span style={{
                                        fontSize: '4rem',
                                        color: '#0056b3',
                                        position: 'absolute',
                                        right: '-5px',
                                        lineHeight: 0,
                                        bottom: '-20px'
                                    }}>&rdquo;</span>
                                </Typography>
                            </CardContent>
                            <Box sx={{ flex: 0, userSelect: 'none', flexDirection: 'column', padding: '0 36px 20px 36px'}}>
                                <Typography variant="body1">
                                    {testimonial.author + '(Alumi From '} 
                                    <span style={{color: '#0056b3', fontWeight: 'bold'}}>NIT KKR</span> 
                                    {')'}
                                </Typography>
                                <Typography variant="body1" sx={{ marginLeft: 0, fontWeight: 'bold', color: '#0056b3'}}>
                                    {testimonial.current_company}
                                </Typography>
                            </Box>
                        </Card>
                    ))}
                </Carousel>
            </Grid>
        </Grid>
    )
}