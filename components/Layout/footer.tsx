import { Typography, Grid} from '@mui/material';
import Link from 'next/link';

export default function Footer() {
    return(
        <>
            <Grid container sx={{ padding: '40px' }}>
                <Grid item xs={12}>
                    <Typography variant='body1' sx={{textAlign: 'center', color: '#333', marginTop: '20px'}}>
                        &#169; Worldwide Copyright Reserved |
                        Powered by Vlsilabs |&nbsp;
                        <Link href='/privacy_terms' target="_blank" style={{color: '#0072e5', textDecoration: 'none'}}>Privacy Terms of Service and Privacy Policy</Link>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}   
