import {Grid} from '@mui/material';

import Banner from './banner';
import SuccessStories from './success_stories';
import WhyChooseUs from './why_choose_us';
import Courses from './courses';

export default function Home() {
    return(
        <Grid container>
            <Grid item xs={12}>
                <Banner/>

                <WhyChooseUs />

                <Courses />

                <SuccessStories />

            </Grid>
        </Grid>
    )
}