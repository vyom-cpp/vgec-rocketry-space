import * as React from 'react';
import { Box, Button, Container, Grid, Icon, IconButton, SvgIcon } from '@mui/material';
import { theme } from '../theme';
import { To, useNavigate } from 'react-router-dom';
import {Link} from '@mui/joy';
import {motion} from "framer-motion"
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Navbar: React.FC = () => {
    let underline = "none"
    // const pages = ['ABOUT', 'BLOG', 'MISSIONS', 'SUPPORT US', 'SPONSORS'];
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
    const handleUnderline = (page: String) =>{
        if(document.location.pathname.toString().includes(page.toString().toLocaleLowerCase().slice(0,4)) )
            return 'underline'
        else 
            return 'none'
    }

    let navigate = useNavigate();
    const handleClick = (to: To) =>{
        console.log(navigate);
        navigate(to);
    }

    console.log(underline)
        
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
                maxWidth={500}
                // maxHeight={200}
                // flexGrow={1}
                xs='auto'
                sx={{
                    mb: 3.6,
                    ml: -4.3,
                    // flex: 2,
                    // overflow: 'auto'

                }} 
                >
                    {pages.map((page, key)=> (
                        <Grid 
                            item 
                            // alignContent="flex-start"
                            justifyContent="flex-start"
                            // xs={12} 
                            // md={3.1}   
                            // margin={1}
                            borderColor="black"
                            key={key}
                            >
                            <Button
                                onClick={() => handleClick(page.route)}
                                >
                                <Link
                                    fontSize={18}
                                    fontFamily={theme.typography.fontFamily}
                                    fontWeight={500}
                                    underline="hover" 
                                    // onClick={handleClick(page.route)}
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
                        // ml={5}
                        alignContent='center'
                        sx={{
                            display: 'flex',
                            justifySelf: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignContent: 'center',
                            flexGrow: 1,
                        }} 
                        >
                        <img src='../../../public/logo.png' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            direction: "row",
                        }}
                    >
                        <IconButton>
                            <XIcon style={{ color: 'white'}}/>
                        </IconButton>
                        <IconButton>
                            <YouTubeIcon style={{ color: 'white'}}/>
                        </IconButton>
                        <IconButton>
                            <LinkedInIcon style={{ color: 'white'}}/>
                        </IconButton>
                        <IconButton>
                            <InstagramIcon style={{ color: 'white'}}/>
                        </IconButton>
                    </Box>
            </Container>
        </motion.nav>
    );
}
