import { Box, Button, Grid, Typography } from "@mui/material"
import React from "react"
import { theme } from "../theme"
import { useCustomNavigate } from "../utils/useCustomNavigate"
import { To } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"


type HomePageUpdates = {
    isSmallScreen: boolean,
    smallScreenBG: String | undefined,
    largeScreenBG: String | undefined,
    navigateTo: To ,
    description: String | undefined,
}

export const HomePageUpdates: React.FC<HomePageUpdates> = ({isSmallScreen, smallScreenBG, largeScreenBG, navigateTo, description}) => {
    
    const handleNavigate = useCustomNavigate();
    
    const { ref: descriptionRef, inView: descriptionView } = useInView({
        triggerOnce: true,
        threshold: isSmallScreen ? 0.001 : 0.1,
    });  

    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8} },
    };
    return (
        <Grid
            item
            display='flex'
            justifyContent='center'
            direction='column'
            maxHeight={isSmallScreen ? '500px' : '400px'}
            maxWidth={isSmallScreen ? '350px' : '1500px'}
            height={isSmallScreen ? '500px' : '400px'}
            width={isSmallScreen ? '350px' : '1500px'}
            marginBottom={isSmallScreen ? 2 : 3}

            sx={{
                backgroundImage: isSmallScreen ? `url('${smallScreenBG}')` : `url('${largeScreenBG}')`,
                backgroundSize: 'cover',
            }}

        >
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // alignContent: 'center',
                    color: 'white',
                }}
                >
                    <Box
                        component={motion.div}
                        ref={descriptionRef}
                        initial='hidden'
                        animate={descriptionView ? "visible" : 'hidden'}
                        variants={fadeInVariants} 
                        justifyContent='center'
                        display='flex'
                        flexDirection='column'
                        alignContent='center'
                        alignItems='center'
                    >

                    <Typography variant="h4"
                        textAlign='center'
                        sx={{
                            fontFamily: theme.typography.fontFamily,
                            color: 'white'
                            }}
                            marginBottom={isSmallScreen ? 4: 4}
                            marginTop={isSmallScreen ? 2 : 7}
                            marginLeft={isSmallScreen ? 4.5 : 0}
                            marginRight={isSmallScreen ? 4.5 : 0}
                            justifyContent='center'
                            >
                        {description}
                    </Typography>
                    <Button
                        variant="outlined"
                        onClick={() => handleNavigate(navigateTo)}
                        
                        sx={{
                            borderColor: theme.palette.primary.main,
                            color: theme.palette.primary.main,
                            fontSize: isSmallScreen ? '14px' : '18px', // Custom font size
                            borderWidth: '2.4px',
                            '&:hover': {
                                variant: 'contained',
                                backgroundColor: theme.palette.primary.light,
                                color: 'white',
                                },
                                }}
                                >
                    <Typography
                        fontFamily='Open Sans'
                        fontSize='20px'
                        >
                            Read
                    </Typography>
                    </Button>
                    </Box>
                </Box>
        </Grid>
    )
}