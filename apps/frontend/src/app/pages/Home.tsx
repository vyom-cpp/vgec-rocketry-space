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
import IsroVisitPhone from '/IsroVisitPhone.jpeg'
import Workshop from '/Workshop.jpeg'
import WorkshopPhone from '/WorkshopPhone.jpeg'
import Aflatoon from '/Aflatoon.jpeg'
import AflatoonLaunch from '/AflatoonLaunch.jpeg'
import AflatoonLaunchPhone from '/AflatoonLaunchPhone.jpeg'
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
                            xs: `url('${Aflatoon}')`,
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
                                    marginTop={isSmallScreen ? 3 : 15}
                                    marginLeft={isSmallScreen ? 4.5 : 12}
                                    marginRight={isSmallScreen ? 5 : 12}
                                >
                                    <Typography
                                        color={theme.palette.primary.dark}
                                        marginBottom={3.5}
                                        sx={{
                                            fontFamily: theme.typography.fontFamily,
                                            fontSize: isSmallScreen ? '45px' : '60px',
                                        
                                        }}
                                    >
                                        Learn. Build. Fly
                                    </Typography>
                                            <Typography
                                                color={theme.palette.primary.dark}
                                                textAlign="justify"
                                                sx={{
                                                    // marginBottom: -0.7,
                                                    fontFamily: theme.typography.fontFamily,
                                                    fontSize: isSmallScreen ? '26px' : '35px',
                                                }}
                                            >
                                                Why 
                                            </Typography>
                                            <Typography
                                                color={theme.palette.primary.dark}
                                                textAlign="justify"
                                                sx={{
                                                    marginBottom: 2,
                                                    fontFamily: theme.typography.fontFamily,
                                                    fontSize: isSmallScreen ? '16px' : '18px',
                                                }}
                                            >
                                             We believe a thriving global aerospace industry starts with inspiring students to imagine bold possibilities and work tirelessly to turn them into reality.
                                            </Typography>
                                            <Typography
                                                color={theme.palette.primary.dark}
                                                textAlign="justify"
                                                sx={{
                                                    // marginBottom: 1,
                                                    fontFamily: theme.typography.fontFamily,
                                                    fontSize: isSmallScreen ? '26px' : '35px',
                                                }}
                                            >
                                                How 
                                            </Typography>
                                            <Typography
                                                color={theme.palette.primary.dark}
                                                textAlign="justify"
                                                sx={{
                                                    marginBottom: 2,
                                                    fontFamily: theme.typography.fontFamily,
                                                    fontSize: isSmallScreen ? '16px' : '18px',
                                                }}
                                            >
                                                We inspire the next generation of aerospace engineers by giving them hands-on experience in rocketry and empowering them to bring their ideas to life.                                            </Typography>
                                            <Typography
                                                color={theme.palette.primary.dark}
                                                textAlign="justify"
                                                sx={{
                                                    // marginBottom: 1,
                                                    fontFamily: theme.typography.fontFamily,
                                                    fontSize: isSmallScreen ? '26px' : '35px',
                                                }}
                                            >
                                                What 
                                            </Typography>
                                            <Typography
                                                color={theme.palette.primary.dark}
                                                textAlign="justify"
                                                sx={{
                                                    marginBottom: 2,
                                                    fontFamily: theme.typography.fontFamily,
                                                    fontSize: isSmallScreen ? '16px' : '18px',
                                                }}
                                            >
                                                We build rockets! Learn more about us here.                                            
                                            </Typography>
                                        <Box
                                            display="flex"
                                            justifyContent="right"
                                            marginLeft={isSmallScreen ? 23 : 0}
                                            // marginRight={isSmallScreen ? 0 : 2}
                                            marginTop={4}
                                            >
                                            <Button
                                                variant="outlined"
                                                onClick={()=>handleNavigate('/about')}
                                                sx={{
                                                    borderColor: 'black',
                                                    color: theme.palette.primary.dark,
                                                    fontSize: isSmallScreen ? '12px' : '17px', 
                                                    height: isSmallScreen ? '30px': '35px',
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
                                    <HomePageUpdates isSmallScreen={isSmallScreen} smallScreenBG={IsroVisitPhone} largeScreenBG={IsroVisit} navigateTo={'/blog'} description={"Our Team's Visit to SAC, ISRO, Ahmedabad"}/>
                                    <HomePageUpdates isSmallScreen={isSmallScreen} smallScreenBG={WorkshopPhone} largeScreenBG={Workshop} navigateTo={'/blog'} description={"Rocketry Workshop Conducted by VRT"}/>
                                    <HomePageUpdates isSmallScreen={isSmallScreen} smallScreenBG={AflatoonLaunchPhone} largeScreenBG={AflatoonLaunch} navigateTo={'/blog'} description={"Aflatoon's latest Launch"}/>
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