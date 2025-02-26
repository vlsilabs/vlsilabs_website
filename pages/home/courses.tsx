import {Card, Grid, Typography, CardMedia, Box, CardContent, CardActions} from '@mui/material';

import CourseCard from '@/components/course_card';
import {SEMICONDUCTOR_COURSES} from '@/constants'

export default function Courses() {
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
                }}>Explore Our Courses</Typography>
            </Grid>

            {[...SEMICONDUCTOR_COURSES].map((course, index) => (
                <Grid item key={course.id} xs={12} sm={6} md={4}>
                    <CourseCard key={index} {...course} />
                </Grid>
            ))}
        </Grid>
    )
}