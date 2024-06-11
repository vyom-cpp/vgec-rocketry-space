import React, { useEffect, useState } from "react" 
import { Navbar } from "../components/Navbar"
import { Box, Button, Container, Grid, ListItem, Stack, TextField, Typography, useMediaQuery} from "@mui/material"
import {AnimatePresence, color, motion} from "framer-motion"
import { theme } from "../theme"
import { useCustomNavigate } from "../utils/useCustomNavigate"
import DhairyaWorkingVideo from '/DhairyaWorking2.mp4'
import BurningLeftFuel from '/FuelFlame.jpeg'
import { useInView } from "react-intersection-observer"
import AnantaArrow from "/AnantaArrow.mp4"
import AnantaArrow2 from "/AnataArrow2.mp4"
import IsroVisit from '/IsroMeet.jpeg'
import SpaceAndApplicationsCenter from '../../../public/SpaceAndApplicationsCenter.jpeg'
import { HomePageUpdates } from "../components/HomePageUpdates"
import { ContactUs } from "../components/ContactUs"
import { Footer } from "../components/Footer"
export const HomePage: React.FC = () => {

    useEffect(()=>{
        document.title = "HOME | VRT"
        setTimeout(() => {
            setShowComponent(false);
        }, 1500);

        setTimeout(()=>{
            setSmallScreenBackgroundVideo(AnantaArrow2)
        },20*1000)
    }, [])
    
    const [showComponent, setShowComponent] = useState(true);

    const [smallScreenBackgroundVideo, setSmallScreenBackgroundVideo] = useState<string | undefined>(AnantaArrow);

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const { ref: gridRef, inView: gridView } = useInView({
        triggerOnce: true,
        threshold: isSmallScreen ? 0.001 : 0.1,
    });

    const { ref: updateTitleRef, inView: updateTitleView } = useInView({
        triggerOnce: true,
        threshold: isSmallScreen ? 0.001 : 0.1,
    });  
    const { ref: ourVisionImageRef, inView: ourVisionImageView } = useInView({
        triggerOnce: true,
        threshold: isSmallScreen ? 0.001 : 0.1,
    });  

    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8} },
    };

    const handleNavigate = useCustomNavigate();
    return (
        <>
            <Container maxWidth={false}
                    sx={{
                        backgroundImage:{ 
                            xs: "url('../../public/Aflatoon.jpeg')",
                            md: 'none'
                        },
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: "100vh",
                        width: '100%',
                    }}
                >
                <video
                    autoPlay={!isSmallScreen} 
                    // autoPlay
                    loop 
                    muted
                    playsInline={isSmallScreen}
                    style={{
                        position: 'absolute',
                        display: isSmallScreen ? 'none' : 'block',
                        // display: 'block',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -1,
                    }}
                        // src={isSmallScreen ? smallScreenBackgroundVideo : DhairyaWorkingVideo}
                        src={DhairyaWorkingVideo}
                />
                <Navbar/> 
                </Container>
                    <Container
                        disableGutters
                        maxWidth={false}
                        sx={{
                            height: '100vh',
                            width: '100%',
                        }}
                    >
                        <Grid
                            container
                            direction='row'
                            justifyContent='space-between'
                            width='100%'
                            height='100vh'
                            spacing={0}
                            marginTop={1}
                        >
                            <Grid
                                item
                                maxWidth={isSmallScreen ? '100%' : '50%'}
                                width={isSmallScreen ? '100%' : '50%'}
                                justifyContent='center'
                                component={motion.div}
                                ref={gridRef}
                                initial="hidden"
                                animate={gridView ? "visible" : "hidden"}
                                variants={fadeInVariants}
                            >
                                <Box
                                    marginTop={isSmallScreen ? 4 : 23}
                                    marginLeft={isSmallScreen ? 4.5 : 12}
                                    marginRight={isSmallScreen ? 5 : 12}
                                >
                                    <Typography 
                                        color={theme.palette.primary.dark}
                                        fontWeight={650}
                                        sx={{
                                            marginBottom: 3,
                                            fontFamily: theme.typography.fontFamily,
                                            fontSize: isSmallScreen ? '20px' : '20px',
                                        }}
                                    >
                                        OUR VISION: 
                                    </Typography>
                                    <Typography
                                        color={theme.palette.primary.dark}
                                        marginBottom={4}
                                        sx={{
                                            fontFamily: theme.typography.fontFamily,
                                            fontSize: isSmallScreen ? '45px' : '60px',
                                        
                                        }}
                                    >
                                        Learn. Build. Fly
                                    </Typography>
                                    <Typography
                                        color={theme.palette.primary.dark}
                                        sx={{
                                            marginBottom: 4,
                                            fontFamily: theme.typography.fontFamily,
                                            fontSize: isSmallScreen ? '16px' : '18px'
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros tellus, posuere quis felis vitae, consequat dictum nisi. Sed gravida rutrum lacus a molestie. Nunc finibus libero leo, vel tincidunt nulla imperdiet et. Praesent sed erat ipsum. Morbi elit purus, imperdiet vitae magna eget, semper egestas magna. Sed a vestibulum enim. Nullam imperdiet diam metus, ac blandit arcu rhoncus at.                            </Typography>
                                        <Box
                                            display="flex"
                                            justifyContent="center"
                                            marginLeft={isSmallScreen ? 23 : 0}
                                            marginTop={3}
                                        >
                                            <Button
                                                variant="outlined"
                                                onClick={()=>handleNavigate('/about')}
                                                sx={{
                                                    borderColor: 'black',
                                                    color: theme.palette.primary.dark,
                                                    fontSize: isSmallScreen ? '14px' : '18px', // Custom font size
                                                    '&:hover': {
                                                        variant: 'contained', 
                                                        backgroundColor: 'black',
                                                        color: 'white', 
                                                    },
                                                }}
                                            >
                                                Learn More
                                            </Button>
                                        </Box>
                                </Box>
                            </Grid>
                            <Grid
                                item
                                maxWidth={isSmallScreen ? '100%' :  '50%' }
                                marginTop={isSmallScreen ? 5 : -0.6}
                                width={isSmallScreen ? '100%' : '50%'}
                                component={motion.div}
                                ref={ourVisionImageRef}
                                initial="hidden"
                                animate={ourVisionImageView ? "visible" : "hidden"}
                                variants={fadeInVariants}
                            >
                                    <img src={BurningLeftFuel}
                                        
                                        style={{
                                            backgroundSize: 'cover',
                                            height: isSmallScreen ? '50vh' : '100vh',
                                            width: isSmallScreen ? '100%' : '100%',
                                        }}
                                    />
                            </Grid>
                            <Grid
                                item 
                                minWidth='100%'
                                marginTop={isSmallScreen ? -1 : -1}
                                sx={{
                                    backgroundColor: theme.palette.primary.dark
                                }}
                            >
                                <Box
                                    display='flex'
                                    flexDirection='column'
                                    justifyContent='center'
                                    marginTop={isSmallScreen ? 4 : 5}
                                    component={motion.div}
                                    ref={updateTitleRef}
                                    initial="hidden"
                                    animate={updateTitleView ? "visible" : "hidden"}
                                    variants={fadeInVariants}
                                >
                                    <Typography
                                        textAlign='center'
                                        marginBottom={isSmallScreen ? 1 : 2}
                                        sx={{
                                            fontFamily: theme.typography.fontFamily,
                                            color: "white",
                                            fontSize: isSmallScreen ? '35px' : '45px'
                                        }}
                                        >
                                        NEWS + UPDATES
                                    </Typography>
                                    <Typography
                                        textAlign='center'
                                        sx={{
                                            fontFamily: theme.typography.fontFamily,
                                            color: "#A2A2A2",
                                            fontSize: isSmallScreen ? '15px' : '17px'
                                        }}
                                    >
                                        STAY UPDATED ON OUR LATEST NEWS AND BLOGS
                                    </Typography>
                                </Box>
                                <Grid
                                    container
                                    direction='row'
                                    justifyContent='center'
                                    width='100%'
                                    spacing={0}
                                    marginTop={isSmallScreen ? 4 : 5}
                                >    
                                    <HomePageUpdates isSmallScreen={isSmallScreen} smallScreenBG={SpaceAndApplicationsCenter} largeScreenBG={IsroVisit} navigateTo={'/blog'} description={"Our Team's Visit to SAC, ISRO, Ahmedabad"}/>
                                    <HomePageUpdates isSmallScreen={isSmallScreen} smallScreenBG={''} largeScreenBG={''} navigateTo={'/placeToVisit'} description={"This is a Placeholder Updates Soon"}/>
                                    <HomePageUpdates isSmallScreen={isSmallScreen} smallScreenBG={''} largeScreenBG={''} navigateTo={'/placeToVisit'} description={"This is a Placeholder Updates Soon"}/>
                                    <HomePageUpdates isSmallScreen={isSmallScreen} smallScreenBG={''} largeScreenBG={''} navigateTo={'/placeToVisit'} description={"This is a Placeholder Updates Soon"}/>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                maxWidth='100%'
                                width='100%'
                            >
                                <ContactUs isSmallScreen={isSmallScreen}/>
                            </Grid>
                            <Grid
                                item
                                maxWidth='100%'
                                width='100%'
                                height={isSmallScreen ? '70vh': '80vh'}
                                maxHeight={isSmallScreen ? '70vh' : '80vh'}
                                // height='100%'
                                sx={{
                                    backgroundColor: theme.palette.primary.dark
                                }}
                            >
                                <Footer isSmallScreen={isSmallScreen}/>
                            </Grid>
                        </Grid>
                    </Container>
        </>
    )
}