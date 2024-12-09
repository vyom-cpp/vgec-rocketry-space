import { Button, Grid, Stack, Typography, useMediaQuery } from "@mui/material"
import React from "react"
import { theme } from "../theme"
import { useCustomNavigate } from "../utils/useCustomNavigate"
import { To } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface ProfileThumbnail  {
    image: string,
    name: string,
    role: string,
    linkToProfile: string | To
}

export const ProfileThumbnail: React.FC<ProfileThumbnail> = ({image, name, role, linkToProfile}) => {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

    const { ref: profileThumbnailRef, inView: profileThumbnailView } = useInView({
        triggerOnce: true,
        threshold: isSmallScreen ? 0.001 : 0.1,
    });  

    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8} },
    };

    const handleNavigate = useCustomNavigate();
    return (
        <Grid 
            item
            md={4}
        >
            <Stack
                component={motion.div}
                sx={{
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: "5px",
                }}
                initial="hidden"
                ref={profileThumbnailRef}
                animate={profileThumbnailView ? "visible" : 'hidden'}
                variants={fadeInVariants} 
            >
              <img
                src={image}
                alt={"Image not Available"}
                style={{
                    maxWidth: isSmallScreen 
                                ? "85vw" 
                                : isMediumScreen 
                                    ? "30vw" 
                                    : "15vw",  

                    maxHeight: isSmallScreen 
                                ? "85vw" 
                                : isMediumScreen 
                                    ? "30vw" 
                                    : "15vw",  

                    minWidth: isSmallScreen 
                                ? "75vw" 
                                : isMediumScreen 
                                    ? "40vw" 
                                    : "20vw",  

                    minHeight: isSmallScreen 
                                ? "75vw" 
                                : isMediumScreen 
                                    ? "40vw" 
                                    : "20vw", 
                    aspectRatio: "1 / 1",                  
                    objectFit: "cover",  
                    fontFamily: theme.typography.fontFamily,
                    borderRadius: "5px",
                }}
              />
            <Typography
              style={{
                // fontFamily: theme.typography.fontFamily,
                fontFamily: "Nova Square",
                fontSize:  30,
                textAlign: "center",
                marginTop: 12
                
              }}
            >
              {name}
            </Typography>

            <Typography
              variant="h6"
              color="textSecondary"
              whiteSpace="pre-wrap"
              style={{
                // fontFamily: theme.typography.fontFamily,
                fontFamily: "Nova Square",
                textAlign: "center",
              }}
              marginBottom={2}
            >
              {role}
            </Typography>
            <Button
              variant="outlined"
              onClick={()=>handleNavigate(linkToProfile)}
              sx={{
                backgroundColor: "white",
                display: "flex",
                borderColor: "black",
                color: theme.palette.primary.dark,
                fontSize: isSmallScreen ? '15px' : '17px', 
                // boxSizing: isSmallScreen ? '35px': '10px',
                padding: isSmallScreen ? "4px 12px" :"1px 9px", 
                "&:hover": {
                    variant: 'contained', 
                    backgroundColor: 'black',
                    borderColor: "black",
                    color: 'white', 
                },
              }}
              style={{
                fontFamily: theme.typography.fontFamily,
              }}
            >
              Connect
            </Button>
            </Stack>
          </Grid>
    )
}
