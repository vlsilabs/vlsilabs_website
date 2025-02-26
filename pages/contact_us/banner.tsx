import {Box, Typography, Button} from '@mui/material';
import Image from 'next/image';

export default function Banner() {
    const content = (
    <>
        <Box sx={{position: 'relative', display: 'flex', mr: 1,
        flexDirection: 'column', alignItems: 'center', height: 'calc(100vw*0.3)',
        justifyContent: 'center'}}>
            <Typography variant='body1' sx={{
                fontWeight: 800,
                fontSize: '3.5vw',
                color: '#fff',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
            }}>Contact Us</Typography>
            <Typography variant='body2' sx={{
                fontSize: '2.5vw',
                color: '#fff',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
            }}>Have a question? We&apos;re here to provide the answer!</Typography>
        </Box>
    </>)

    return (
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
    </Box>)
}