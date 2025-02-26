import { IndustryCard } from '@/components/industry_card';
import {Card, Grid, Link, Breadcrumbs, CardMedia} from '@mui/material';
import CustomBreadcrumb from '@/components/custom_breadcrumb';
import CourseCard from '@/components/course_card';
import {SEMICONDUCTOR_COURSES, INDUSTRIES_PAGES} from '@/constants'


export default function Semiconductor() {
    return (
        <Grid container spacing={4} sx={{padding: '40px 4vw 0'}}>
            <Grid item xs={12}>
                <CustomBreadcrumb
                label="Industries"
                options={INDUSTRIES_PAGES} 
                selectedOption={INDUSTRIES_PAGES[0]}
                /> 
            </Grid>

            {SEMICONDUCTOR_COURSES.map((course, index) => (
                <Grid item key={course.id} xs={12} sm={6} md={4} sx={{justifyContent: 'center'}}>
                    <CourseCard key={index} {...course} />
                </Grid>
            ))}
        </Grid>
    )
}