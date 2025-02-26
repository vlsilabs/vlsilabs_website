import {Card, Grid, Typography, CardMedia, Box, CardContent, CardActions} from '@mui/material';

import CircularIconWithText from '@/components/circular_icon_with_text';
import { REASONS_TO_CHOOSE } from '@/constants'

export default function WhyChooseUs() {
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
                }}>Why Choose Us</Typography>
            </Grid>

            <Grid container spacing={4} sx={{ marginBottom: '40px', flexDirection: 'row', margin: 'auto'}}>
                {REASONS_TO_CHOOSE.map((reason, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <CircularIconWithText
                            icon={reason.icon} // Use the imported circular icon
                            header={reason.title}
                            description={reason.content}
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}