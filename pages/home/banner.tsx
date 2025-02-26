import {Box, Typography, Container} from '@mui/material';
import Image from 'next/image';

export default function Banner() {
    const content = (
    <>
        <Container maxWidth="xl">
            <Box sx={{position: 'relative', display: 'flex', mr: 1,
            flexDirection: 'column', alignItems: 'center', height: 'calc(100vw*0.3)',
            justifyContent: 'center'}}>
                <Typography variant='body1' sx={{
                    fontWeight: 800,
                    fontSize: '3.4vw',
                    color: '#fff',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
                }}>Unlock Your Potential</Typography>
                <Typography variant='body2' sx={{
                    fontSize: '2.5vw',
                    color: '#fff',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
                }}>Bridging Education to Excellence</Typography>
            </Box>
        </Container>
        
    </>)

    return (<>

    <Box sx={{
        position: 'relative',
        width: '100vw',
        height: 'calc(100vw*0.3)'}}>
            <Box sx={{zIndex: -1}}>
                <Image
                    src="/assets/transit.png"
                    fill
                    style={{objectFit:"cover", backgroundColor: '#0056b3', justifyContent: "bottom"}}
                    alt="Banner"
                />
                {content}
            </Box>
    </Box>

    {/* <Box sx={{mr: 2, backgroundColor: '#333', marginRight: 0, zIndex: 1, position: 'relative'}}>
                <Typography variant='body1' sx={{fontWeight: 400, color: '#fff', fontSize: '2vw', display: 'flex',
                justifyContent: 'center', padding: '0.5rem 0'}}>
                Experience world-class mentoring through our exclusive mentor group.
                </Typography>
            </Box> */}
    </>)
}