import { IndustryCard } from '@/components/industry_card';
import {Card, Grid, Typography, Button, Box, CardContent, CardMedia} from '@mui/material';
import CourseCard from '@/components/course_card';
import {SOFTWARE_COURSES, INDUSTRIES_PAGES} from '@/constants'
import CustomBreadcrumb from '@/components/custom_breadcrumb';

export default function Software() {
    return (
        <Grid container spacing={4} sx={{padding: '40px 4vw 0'}}>
            <Grid item xs={12}>
                <CustomBreadcrumb
                    label="Industries"
                    options={INDUSTRIES_PAGES}
                    selectedOption={INDUSTRIES_PAGES[1]}
                    /> 
            </Grid>

            {SOFTWARE_COURSES.map((course, index) => (
                <Grid item key={course.id} xs={12} sm={6} md={4}>
                    <CourseCard key={index} {...course} />
                </Grid>
            ))}
        </Grid>
    )
}