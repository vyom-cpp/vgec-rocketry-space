import { Box, Container, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
// import { motion } from "framer-motion";
import Rocket from "/rocket-demo.jpeg";
import { Navbar } from "../components/Navbar";
import { theme } from "../theme";
import { Footer } from "../components/Footer";
// import { useInView } from "react-intersection-observer";

export const SupportUs: React.FC = () => {

    useEffect(() => {
        document.title = "SUPPORT US | VRT";
    }, []);

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    // const { ref: storyRef, inView: storyInView } = useInView({
    //     triggerOnce: true,
    //     threshold: 0.1
    // });

    // const fadeInVariants = {
    //     hidden: { opacity: 0, y: 20 },
    //     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    // };

    return (
        <div style={{ overflow: "hidden" }}>

            <Container maxWidth={false}
                sx={{
                    backgroundColor: "black",
                    height: "500px",
                    width: "100%",
                    backgroundSize: "cover",
                    objectFit: "cover"
                }}
            >
                <Navbar />

                <Typography
                    sx={{
                        color: "white",
                        fontFamily: theme.typography.fontFamily,
                        fontSize: isSmallScreen ? "70px" : "90px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        marginTop: "70px"
                    }}
                >
                    Invest in the future.
                </Typography>

                <Typography
                    sx={{
                        color: "white",
                        fontFamily: theme.typography.fontFamily,
                        fontSize: isSmallScreen ? "45px" : "60px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                    }}
                >
                    Contribute today to empower the next generation.
                </Typography>
            </Container>

            {/* Quote */}
            <Container
                maxWidth={false}
                sx={{
                    backgroundColor: "white",
                    width: "100%",
                    height: "200px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginBottom: "0px",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    border: "none"
                }}
            >
                <Typography
                    sx={{
                        color: "black",
                        fontFamily: theme.typography.fontFamily,
                        fontSize: isSmallScreen ? "30px" : "50px"
                    }}
                >
                    “Rockets are cool. There's no getting around them”
                    <br />
                    ~Elon Musk
                </Typography>
            </Container>

            {/* Tab line */}
            <Container
                maxWidth={false}
                sx={{
                    marginTop: "64px",
                    marginBottom: "64px",
                    boxSizing: "border-box",
                    minWidth: 0,
                    position: "relative",
                    width: "100%",
                    textAlign: "center",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        left: "10%",
                        right: "10%",
                        bottom: 0,
                        borderBottom: "1px solid #000",
                        width: "80%",
                        margin: "0 auto"
                    },
                }}
            />

            <Container
                maxWidth={false}
                sx={{
                    marginTop: isSmallScreen ? "100px" : "230px",
                    marginBottom: "64px",
                    padding: 0,
                    textAlign: "center",
                    width: "100%"
                }}
            >
                <Typography
                    sx={{
                        color: "black",
                        fontFamily: theme.typography.fontFamily,
                        fontSize: isSmallScreen ? "50px" : "80px",
                        marginBottom: "32px"
                    }}
                >
                    Our Rockets
                </Typography>

                <Stack
                    direction="row"
                    spacing={isSmallScreen ? 2 : 20}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box sx={{ textAlign: "center" }}>
                        <img
                            src={Rocket}
                            alt="Ananta"
                            style={{ width: isSmallScreen ? "80%" : "350px", height: "auto" }}
                        />
                        <Typography
                            sx={{
                                color: "black",
                                fontFamily: theme.typography.fontFamily,
                                fontSize: isSmallScreen ? "18px" : "24px",
                                marginTop: "8px"
                            }}
                        >
                            Ananta
                            <br />
                            Height: 180m
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: "center" }}>
                        <img
                            src={Rocket}
                            alt="Aflatoon"
                            style={{ width: isSmallScreen ? "80%" : "350px", height: "auto" }}
                        />
                        <Typography
                            sx={{
                                color: "black",
                                fontFamily: theme.typography.fontFamily,
                                fontSize: isSmallScreen ? "18px" : "24px",
                                marginTop: "8px"
                            }}
                        >
                            Aflatoon
                            <br />
                            Height: 240m
                        </Typography>
                    </Box>
                </Stack>
            </Container>

            {/* Sponsor */}
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: "16px",
                    marginBottom: "64px"
                }}
            >
                <Button
                    variant="outlined"
                    sx={{
                        width: isSmallScreen ? "80%" : "80%",
                        maxWidth: "500px",
                        padding: "10px 20px",
                        borderColor: 'black',
                        color: 'black',
                        fontSize: isSmallScreen ? '14px' : '18px', // Custom font size
                        '&:hover': {
                            backgroundColor: 'black',
                            color: 'white',
                        },
                    }}
                    href="mailto:vrt@gmail.com?subject=Sponsoring"
                >
                    Support Us
                </Button>
            </Container>

            <Footer isSmallScreen={isSmallScreen} />
        </div>
    );
};
