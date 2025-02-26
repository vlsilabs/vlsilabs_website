import {Grid} from '@mui/material';

import Banner from './banner'
import Vision from './vision'
import OurStory from './our_story';

export default function Home() {
    return(
        <Grid container>
            <Grid item xs={12}>
                <Banner />

                <Vision />

                <OurStory />
            </Grid>
        </Grid>
    )
}