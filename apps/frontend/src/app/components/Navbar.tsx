import * as React from 'react';
import { useState } from 'react';
import { Box, Button, Color, Container, Drawer, Grid, Icon, IconButton, List, ListItem, ListItemText, Stack, SvgIcon, Typography, useMediaQuery } from '@mui/material';
import { theme } from '../theme';
import { To, useNavigate } from 'react-router-dom';
import {Link} from '@mui/joy';
import {motion} from "framer-motion"
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTheme } from '@emotion/react';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import { useCustomNavigate } from '../utils/useCustomNavigate';

const pages = [
    {
            name:"ABOUT",
            route:'/about'
        },
        {
            name:"BLOG",
            route:'/blog'
        },
        {
            name:"MISSIONS",
            route:'/missions'
        },
        {
            name:"SUPPORT US",
            route:'/support'
        },
    ]
    
    
    
    
export const Navbar: React.FC = () => {
        
    
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
    return (
        <motion.nav
        initial={{ y: '25%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <Container 
                maxWidth={false}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    // maxHeight: '100px'
                    marginTop: -0.4
                }}            
                >
            {isMobile 
                ? <NavbarSm/>
                : <NavbarXl/> 
            }
            </Container>
        </motion.nav>
    );
}

interface SocialLinkProps{
    color: String | undefined;
}
const SocialLinks: React.FC<SocialLinkProps> = (SocialLinkProps: SocialLinkProps) => {
    const handleNavigate = useCustomNavigate(); 
    return(
        <div>
        <IconButton onClick={()=>handleNavigate('https://x.com/vgecrocketry')}>
            <XIcon style={{ color: `${SocialLinkProps.color}` }}/>
        </IconButton>
        <IconButton onClick={()=>handleNavigate('https://www.youtube.com/@vgecrocketryteam3924')}>
            <YouTubeIcon style={{ color: `${SocialLinkProps.color}` }}/>
        </IconButton>
        <IconButton onClick={()=>handleNavigate('https://www.linkedin.com/company/vgec-rocketry-team/')}>
            <LinkedInIcon style={{ color: `${SocialLinkProps.color}`}}/>
        </IconButton>
        <IconButton onClick={()=>handleNavigate('https://www.instagram.com/vgecrocketry/')}>
            <InstagramIcon style={{ color: `${SocialLinkProps.color}`}}/>
        </IconButton>
    </div>
)
}

const NavbarXl = () => {
    
    let underline = "none"
    const handleUnderline = (page: String) =>{
        if(document.location.pathname.toString().includes(page.toString().toLocaleLowerCase().slice(0,4)) )
            return 'underline'
        else 
            return 'none'
    }

    const handleNavigate = useCustomNavigate();

return (
    <>
    <Grid
        container 
        direction="row" 
        alignItems='center'
        rowSpacing={2}
        justifyContent='left'
        spacing={0.2}
        alignContent="flex-end"
        marginTop={2.7}
        width="100%"
        
        xs='auto'
        sx={{
            mb: 3.6,
            ml: -4.3,
        }} 
        >
            {pages.map((page, key)=> (
                <Grid 
                item 
                    justifyContent="flex-start"
                    borderColor="black"
                    key={key}
                    >
                    <Button
                        onClick={() => handleNavigate(page.route)}
                    >
                        <Link
                            fontSize={18}
                            fontFamily={theme.typography.fontFamily}
                            fontWeight={500}
                            underline="hover" 
                            sx={{
                                color: "white",
                                textDecoration: handleUnderline(page.name),
                                textDecorationThickness: "2px",
                                textDecorationStyle: "solid",
                                textUnderlineOffset: "5px"
                            }}
                            >
                            {page.name}
                        </Link>
                    </Button>
                </Grid>
            ))}
            </Grid>
            <Box
                // mr={85}
                height={120}
                width={120}
                minHeight={120}
                minWidth={120}
                mt={2.5}
                mr={20}
                alignContent='center'
                >
                <img src='../../../public/logo.png' style={{ maxWidth: '100%', maxHeight: '100%' }} onClick={()=>handleNavigate('/home')}/>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    direction: "row",
                }}
                >
                <SocialLinks color='white'/>
            </Box>           
    </>
    );
} 


const NavbarSm: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    
    // const hand
    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleNavigate  = useCustomNavigate();

    return (
        <>
        <Grid 
            container
            display="flex"
            direction="row"
            justifyContent="space-between"
            width="100%"
        >
            <Grid 
                item
                marginLeft={-3}
                >
                <Box
                    // mr={85}
                    height={70}
                    width={70}
                    minHeight={80}
                    minWidth={80}
                    mt={2.5}
                    ml={2}
                    alignContent='center'
                >
                    <img src='../../../public/logo.png' style={{ maxWidth: '100%', maxHeight: '100%' }} onClick={()=>handleNavigate('/home')}/>
                </Box>
            </Grid>
            <Grid item>
                <Box                
                    sx={{ 
                        display: 'flex', 
                        justifyContent: 'flex-start', // Align items to the left
                        width: '100%', // Ensure the box takes full width
                        // p: 2,  
                        marginTop: 2.3
                    }}
                >

                    <IconButton
                        edge="start"
                        aria-label="menu"
                        onClick={toggleDrawer(!drawerOpen)}
                        sx={{ height: 40, width: 40, mt: 2}}
                    >
                        <DragHandleIcon style={{fontSize: '45', color: theme.palette.primary.contrastText}}/>
                    </IconButton>
                </Box>
            </Grid>
        </Grid>
        <Drawer 
            anchor="top" 
            open={drawerOpen} 
            onClose={toggleDrawer(false)}
            sx={{
                '& .MuiDrawer-paper': {
                    overflow: 'hidden',
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end', // Align items to the left
                    width: '100%', // Ensure the box takes full width
                    // p: 2,  
                    marginTop: 2.8,
                    marginLeft: -2.8
                }}
            >
                <IconButton
                    sx={{
                        // marginLeft: 1.5
                    }}
                    onClick={toggleDrawer(false)}
                >
                    <CloseIcon sx={{fontSize: "38px", color: theme.palette.primary.dark}}/>
                </IconButton>
            </Box>
            <Container
                sx={{
                    width: "100%",
                    height: "100vh",
                    display: 'flex',
                    direction: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center' 
                    // overflowY: 'hidden'
                }}
                
            >
                <Stack>
                    <Grid
                        container
                        direction='column'
                        justifyContent='center'
                        alignItems='center'
                        style={{ height: '75%'}}
                        spacing={2}
                        // style= {{width: '100%'}}
                        marginTop={15}
                    >
                        {pages.map((page, key) => (
                            <Grid item key={key}>
                                <a
                                    onClick={() => handleNavigate(page.route)}
                                >

                                    <Typography  
                                        variant='h4'
                                        
                                        >
                                        {page.name}
                                    </Typography>
                                </a>
                            </Grid>
                        ))}
                    </Grid>
                    <Box
                        display="flex"   // Ensure Box uses flexbox layout
                        alignItems='center'
                        justifyContent="center"
                        width='100%'
                        // height='100%'
                        marginTop={20}
                        style={{ position: 'relative' }} // Ensure proper positioning

                    >
                        <SocialLinks color="Black"/>
                    </Box>
                </Stack>
            </Container>
        </Drawer>
        </>
    )
}
