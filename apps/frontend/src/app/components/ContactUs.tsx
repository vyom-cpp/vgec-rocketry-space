import { Box, Button, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import { theme } from "../theme"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import axios from 'axios';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState({ name: false, email: false, message: false }); // Validation state

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = () => {
        const nameError = name === '';
        const emailError = !emailRegex.test(email);
        const messageError = message === '';

        setErrors({ name: nameError, email: emailError, message: messageError });

        if (!nameError && !emailError && !messageError) {
            axios.post('https://discord.com/api/webhooks/1290707583195156561/niGX7p0C6VbGgYydzHapxVk9VCVXvHj77MQWbPtEDxb37coIJZ70tY710JSuJ6GYtEkY', {
                content: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            })
            .then(() => {
                setIsSuccess(true);
                setName('');
                setEmail('');
                setMessage('');
                setTimeout(() => setIsSuccess(false), 2000);

            })
            .catch((error) => {
                console.error('There was an error sending the message:', error);
            });
        } 
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
                    required
                    error={errors.name}
                    onChange={(e) => setName(e.target.value)}
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
                    required
                    error={errors.email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    required
                    rows={6}
                    error={errors.message}
                    onChange={(e) => setMessage(e.target.value)}
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
                            onClick={handleSubmit}
                            
                            sx={{
                                marginTop: isSmallScreen ? 2 : 4.5,
                                borderColor: isSuccess ? '' :'black',
                                color: theme.palette.primary.dark,
                                fontSize: isSmallScreen ? '14px' : '18px', // Custom font size
                                backgroundColor: isSuccess ? '#22BB33' : '',
                                '&:hover': {
                                    variant: 'contained', 
                                    backgroundColor: isSuccess ? 'green' : 'black',
                                    color: 'white', 
                                },
                                width: '100%'
                            }}
                        >
                            {isSuccess ? <CheckCircleIcon sx={{ marginRight: 1 }} /> : null} 
                            {isSuccess ? 'Sent' : 'Send'}
                    </Button>
            </Box>
        </Box>
    )
} 