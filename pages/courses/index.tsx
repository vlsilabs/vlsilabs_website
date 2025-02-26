import {Grid} from '@mui/material';
import Industries from './industries';

export default function Home() {
    return(
        <Grid container>
            <Grid item xs={12}>
                <Industries />
            </Grid>
        </Grid>
    )
}