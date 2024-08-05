import { Box, Divider, Icon, Link, Typography } from "@mui/material";
import React from "react";
import { useCustomNavigate } from "../utils/useCustomNavigate";
import { theme } from "../theme";
import { SocialLinks } from "./SocialLinks";
import CopyrightIcon from '@mui/icons-material/Copyright';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logo from '/logo.png'
interface Footer {
    isSmallScreen: boolean
}
export const Footer: React.FC<Footer> = ({isSmallScreen}) => {
    const handleNavigate = useCustomNavigate();
    const links = [
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

    const { ref: dividerRef, inView: dividerView } = useInView({
        triggerOnce: true,
        threshold: isSmallScreen ? 0.001 : 0.1,
    });  
    const { ref: footerRef, inView: footerView } = useInView({
        triggerOnce: true,
        threshold: isSmallScreen ? 0.001 : 0.1,
    });  
    
    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8} },
    };
    return(
        <>
        <Divider 
            variant="middle" 
            color="white"
            component={motion.div}
            ref={dividerRef}
            initial="hidden"
            animate={dividerView ? 'visible' : 'hidden'}
            variants={fadeInVariants}
            sx={{
                backgroundColor:'white',
                height: '2px',
                '&::before, &::after': {
                    borderColor: 'white',
                },
                marginTop: isSmallScreen ? 2.5 : 3.2
            }}
        />
        <Box
            width="100%"
            height='auto'
            marginTop={isSmallScreen ? 3 : 3}
            display='flex'
            flexDirection='column'
            justifyContent='start'
            alignItems='center'
            component={motion.div}
            ref={footerRef}
            initial="hidden"
            animate={footerView ? 'visible' : 'hidden'}
            variants={fadeInVariants}
            sx={{
            backgroundColor: "#26282b",
            paddingBottom: isSmallScreen ? 2 : 3,
            opacity: 1,
            }}                
        >
            <Box
                height={isSmallScreen ? 150 :270}
                width={isSmallScreen ? 150 : 270}
                alignContent='center'
                marginTop={2}
            >
                <img src={logo} style={{ maxWidth: '100%', maxHeight: '100%' }} onClick={()=>handleNavigate('/home')}/>
            </Box>
                <Box
                    display='flex'
                    flexDirection='row'
                    marginTop={isSmallScreen ? 3 : 4}
                    // height='100%'
                >
                    {links.map((link, index) => (
                        <React.Fragment key={link.route}>
                            <Link
                                href={link.route}
                                sx={{
                                    color: 'white',
                                    textUnderlineOffset: '2px',
                                    textDecorationColor: "white",
                                    fontFamily: theme.typography.fontFamily,
                                    fontSize: isSmallScreen ? '14px' : '16px'
                                }}
                            >
                                {link.name}
                            </Link>
                            {index !== links.length - 1 && (
                                <Typography component="span" mt={isSmallScreen ? '0px' : '2px'} mx={1} color="white">
                                    |
                                </Typography>
                            )}
                        </React.Fragment>
                    ))}
                </Box>
                <Box
                    marginTop={isSmallScreen ? 3 : 4}
                    maxWidth={isSmallScreen  ?'200px': '300px'}
                >
                    <SocialLinks color='white' fontSize={isSmallScreen ? '17px': '18px'}/>
                </Box>
                <Box
                    marginTop={isSmallScreen ? 2 :3}
                    marginBlock={isSmallScreen ? 3 : 3}
                    justifyContent='center'
                    alignItems='center'
                    display='flex'
                    flexDirection='column'
                >
                    <Typography
                        fontFamily='Roboto'
                        fontSize={isSmallScreen ? '12px' : '16px'}
                        color="white"
                        fontWeight='bold'
                        width='100%'
                        >
                        VGEC ROCKETRY TEAM
                    </Typography>
                    <Typography
                        marginRight={isSmallScreen ? 1.7 : 0}
                        component="address"
                        fontFamily='Roboto'
                        fontSize={isSmallScreen ? '12px' : '14px'}
                        color="#A2A2A2"
                        fontStyle="normal"
                    >
                        Mechanical Workshop <br />
                        Vishwakarma College<br />
                        Chandkheda, Gujarat<br />
                        382424<br />
                    </Typography>
                </Box>
                <Box
                    display='flex'
                    flexDirection='row'
                    marginTop={isSmallScreen ?2: 3}
                    sx={{
                    backgroundColor: "#26282b",
                    paddingBottom: isSmallScreen ? 2 : 3,
                    opacity: 1,
                    }}
                >
                    <CopyrightIcon
                        style={{
                            color: 'white', 
                            fontSize: '11px', 
                            marginTop: isSmallScreen ? 2 : 3,
                            marginRight: 3.5,
                            marginLeft: 3,
                        }}
                    />
                    <Typography
                        fontFamily='Arial'
                        color='white'
                        fontSize='12px'
                    >
                        2024 VGEC ROCKETRY TEAM. ALL RIGHTS RESERVED 
                    </Typography>
                </Box>
        </Box>
        </>
    )
}