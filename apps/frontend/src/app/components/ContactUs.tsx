import { Box, Button, TextField, Typography } from "@mui/material"
import React from "react"
import { theme } from "../theme"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

interface ContactUs {
    isSmallScreen: boolean
}

export const ContactUs: React.FC<ContactUs> = ({isSmallScreen}) => {
    
    const { ref: contactTitleRef, inView: contacTitleView } = useInView({
        triggerOnce: true,
        threshold: isSmallScreen ? 0.001 : 0.1,
    });  
    const { ref: credentialRef, inView: credentialView } = useInView({
        triggerOnce: true,
        threshold: isSmallScreen ? 0.001 : 0.1,
    });  
    const { ref: messageRef, inView: messageView } = useInView({
        triggerOnce: true,
        threshold: isSmallScreen ? 0.001 : 0.1,
    });  

    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8} },
    };
    return (
        <Box
          width='100%'
          height='100%'
          display='flex'
          flexDirection='column'
          justifyContent='start'
          alignItems='center'
          marginTop={isSmallScreen ? 5 : 5}
          marginBottom={isSmallScreen ? 10 :10}
        >
            <Typography
                ref={contactTitleRef}
                component={motion.div}
                initial='hidden'
                animate={contacTitleView ? 'visible' : 'hidden'}
                variants={fadeInVariants}
                color={theme.palette.primary.dark}
                sx={{
                    marginBottom: 4,
                    fontFamily: theme.typography.fontFamily,
                    fontSize: isSmallScreen ? '35px' : '55px',
                    fontWeight: 500
                    // color: 'black'
                }}
            >
                Contact Us 
            </Typography>
            <Box
                display='flex'
                flexDirection={isSmallScreen ? 'column' : 'row'}
                justifyContent='space-around'
                alignItems='center'
                maxWidth={isSmallScreen ? '330px' : '900px'}
                width={isSmallScreen ? '330px' : '900px'}
                ref={credentialRef}
                component={motion.div}
                initial='hidden'
                animate={credentialView ? 'visible' : 'hidden'}
                variants={fadeInVariants}
            >
                <TextField 
                    id="outlined-basic" 
                    label="Name" 
                    variant="outlined"
                    fullWidth
                    sx={{
                        borderWidth: '2px',
                        marginRight: isSmallScreen ? 0 : 4,
                        marginBottom: isSmallScreen ? 2 : 0,
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: 'black',
                            },
                            '&.Mui-focused input::placeholder': {
                                color: 'black',
                                opacity: 1, // Ensure the color is fully applied
                            },
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: 'black',
                        },
                
                    }}    
                />

                <TextField 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    fullWidth
                        sx={{
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: 'black',
                            },
                            '&.Mui-focused input::placeholder': {
                                color: 'black',
                                opacity: 1, // Ensure the color is fully applied
                            },
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: 'black',
                        },
                    }}  
                />
            </Box>
            <Box
                display='flex'
                flexDirection='column'
                // justifyContent='space-around'
                alignItems='center'    
                maxWidth={isSmallScreen ? '330px' : '900px'}
                width={isSmallScreen ? '330px' : '900px'}
                ref={messageRef}
                component={motion.div}
                initial='hidden'
                animate={messageView ? 'visible' : 'hidden'}
                variants={fadeInVariants} 
            >

                <TextField 
                    id="outlined-basic" 
                    label="Message" 
                    variant="outlined" 
                    multiline
                    rows={6}
                    sx={{
                        marginTop: isSmallScreen ? 2 : 4,
                        width: '100%',
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: 'black',
                            },
                            '&.Mui-focused input::placeholder': {
                                color: 'black',
                                opacity: 1, // Ensure the color is fully applied
                            },
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: 'black',
                        },
                    }}
                        fullWidth
                    />
                    <Button
                            variant="outlined"
                            // onClick={()=>handleNavigate('/about')}
                            
                            sx={{
                                marginTop: isSmallScreen ? 2 : 4.5,
                                borderColor: 'black',
                                color: theme.palette.primary.dark,
                                fontSize: isSmallScreen ? '14px' : '18px', // Custom font size
                                '&:hover': {
                                    variant: 'contained', 
                                    backgroundColor: 'black',
                                    color: 'white', 
                                },
                                width: '100%'
                            }}
                        >
                            Send
                    </Button>
            </Box>
        </Box>
    )
} 