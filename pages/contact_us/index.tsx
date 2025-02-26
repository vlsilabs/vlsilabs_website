import {Grid} from '@mui/material';
import ContactForm from './contact_form';
import Banner from './banner';

export default function Home() {
    return(
        <Grid container>
            <Grid item xs={12}>
                <Banner />

                <ContactForm />
            </Grid>
        </Grid>
    )
}