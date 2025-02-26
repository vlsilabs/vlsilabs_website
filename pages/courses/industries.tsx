import { IndustryCard } from '@/components/industry_card';
import {Card, Grid, Typography, Button, Box, CardContent, CardMedia} from '@mui/material';

import { INDURSTRIES } from '@/constants'

export default function Industries() {
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
                }}>Select Industry</Typography>
            </Grid>

            {INDURSTRIES.map((industry, index) => (
                <Grid item key={industry.id} xs={12} sm={6} md={4} sx={{justifyContent: 'center'}}>
                    <IndustryCard key={index} {...industry} />
                </Grid>
            ))}
        </Grid>
    )
}