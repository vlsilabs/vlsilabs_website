import {Card, Grid, Typography, CardMedia, Box, CardContent, CardActions} from '@mui/material';

export default function Vision() {
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
                }}>Vision</Typography>
            </Grid>

            <Grid item xs={12} sx={{ marginBottom: '40px', flexDirection: 'row'}}>
                <Typography variant="h5">
                Vlsilabs envisions a future where every student seamlessly transitions from education to the real world, equipped with practical problem-solving skills and the confidence to excel in their careers, ultimately contributing to a dynamic and evolving global society.
                </Typography>
            </Grid>
        </Grid>
    )
}