import { Button, Grid, Stack, Typography, useMediaQuery } from "@mui/material"
import React from "react"
import { theme } from "../theme"
import { useCustomNavigate } from "../utils/useCustomNavigate"
import { To } from "react-router-dom";

interface ProfileThumbnail  {
    image: string,
    name: string,
    role: string,
    linkToProfile: string | To
}

export const ProfileThumbnail: React.FC<ProfileThumbnail> = ({image, name, role, linkToProfile}) => {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const handleNavigate = useCustomNavigate();
    return (
        <Grid 
            item
            md={4}
        >
            <Stack
                sx={{
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: "5px",
                }}
            >
              <img
                src={image}
                alt={"Image not Available"}
                style={{
                    maxWidth: isSmallScreen 
                                ? "70vw" 
                                : isMediumScreen 
                                    ? "30vw" 
                                    : "15vw",  

                    maxHeight: isSmallScreen 
                                ? "70vw" 
                                : isMediumScreen 
                                    ? "30vw" 
                                    : "15vw",  

                    minWidth: isSmallScreen 
                                ? "60vw" 
                                : isMediumScreen 
                                    ? "40vw" 
                                    : "20vw",  

                    minHeight: isSmallScreen 
                                ? "60vw" 
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
                height: isSmallScreen ? '35px': '35px',
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
              Read Bio
            </Button>
            </Stack>
          </Grid>
    )
}
