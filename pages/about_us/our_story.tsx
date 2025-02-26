import {Card, Grid, Typography, CardMedia, Box, CardContent, CardActions} from '@mui/material';

export default function OurStory() {
    return (
        <Grid container spacing={4} sx={{padding: '80px 15vw 0'}}>
            <Grid item xs={12}>
                <Typography variant='h3' sx={{
                    fontWeight: 800,
                    color: '#333',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                    marginBottom: '20px',
                    paddingBottom: '5px',
                    textAlign: 'center'
                }}>Our Story</Typography>
            </Grid>

            <Grid item xs={12} sx={{ marginBottom: '40px', flexDirection: 'row'}}>
                <Typography variant="h5">
                Vlsilabs was born from the collective experiences of a dedicated group of alumni from prestigious institutions like IIT and NIT, each with professional expertise. Our journey began with a shared understanding of the challenges we faced while navigating the complex landscape of career development during our own learning journeys.
                </Typography>
                <br />
                <Typography variant="h5">
                These challenges, though formidable, ignited a passion within us to provide a different, fact-driven, and research-oriented approach to support individuals on their path to success. Vlsilabs is the culmination of our commitment to empower and guide the next generation with the knowledge and tools they need to thrive in their careers. We are driven by a simple yet profound vision: to make learning and career growth a seamless and fulfilling experience for all.
                </Typography>
            </Grid>
        </Grid>
    )
}