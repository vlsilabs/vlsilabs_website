import React, {useState} from 'react'
import {AppBar, Slide, useScrollTrigger, Toolbar, Typography, CssBaseline, Container
    , Box, IconButton, Menu, MenuItem, Button} from '@mui/material';
import {Menu as MenuIcon} from '@mui/icons-material'
import Image from 'next/image';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { withRouter } from 'next/router'


import { PAGES } from '@/constants'


const CustomizedLink = styled(Link)(() => ({
    color: "#211B28",
    textDecoration: "none",
    '&:hover': {
        color: '#0692c980 !important'
    }
}))

interface Props {
    window?: () => Window;
    children?: React.ReactElement;
    router: any;
}

function Navbar(props: Props) {
    const {router, window} = props
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
      });

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return(
        <>
            <CssBaseline />

            <Slide appear={false} direction="down" in={!trigger}>
                <AppBar sx={{backgroundColor: '#0056b3', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Box
                                sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, 
                                color: '#fff', textDecoration: 'none' }}
                                component={Link}
                                href='/'
                            >
                                <Image
                                    src="/assets/logo/logo_orignal_white.png"
                                    height={40}
                                    width={40}
                                    alt="VLSILABS"
                                />
                                <Typography variant="h4" style={{
                                    fontWeight: 600,
                                    marginLeft: 15,
                                    lineHeight: '40px',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
                                }}>VLSILABS</Typography>
                            </Box>
                            
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    sx={{ color: '#fff'}}
                                >
                                    <MenuIcon />
                                </IconButton>

                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                {PAGES.map((page) => (
                                    <MenuItem key={page.key} onClick={handleCloseNavMenu}>
                                        <CustomizedLink href={page.path} target={page.new_tab ? '_blank' : '' }>
                                            <Typography variant="h6" textAlign="center" 
                                            style={{ color: '#333', textDecoration: router.pathname === page.path ? 'underline': 'none' }}
                                            >{page.name}</Typography> 
                                        </CustomizedLink>
                                    </MenuItem>
                                ))}
                                </Menu>
                            </Box>

                            <Box
                                sx={{ mr: 1,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1 }}
                            >
                                <Image
                                    src="/assets/logo/logo_orignal_white.png"
                                    height={40}
                                    width={40}
                                    alt="VLSILABS"
                                />
                                <Typography variant="h4" style={{
                                    fontWeight: 600,
                                    marginLeft: 15,
                                    lineHeight: '40px',
                                }}>VLSILABS</Typography>
                            </Box>

                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right' }}>
                                {PAGES.map((page) => (
                                    <CustomizedLink href={page.path} key={page.key}
                                        target={page.new_tab ? '_blank' : '' }
                                        sx={{ color: '#fff', 
                                        '&:hover':{
                                            color: '#fff !important',
                                            textDecoration: 'underline'
                                        }, textDecoration: router.pathname === page.path ? 'underline' : 'none',
                                        }}
                                        >
                                        <Button
                                            sx={{ my: 2, display: 'block', color: 'inherit', 
                                            fontWeight: 800, paddingBottom: '5px' }}
                                        >
                                            {page.name}
                                        </Button>
                                    </CustomizedLink>
                                ))}
                            </Box>

                        </Toolbar>
                    </Container>
                </AppBar>
            </Slide>

            <Toolbar />
        </>
    )
}

export default withRouter(Navbar)
