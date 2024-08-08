import {
    Container,
    Grid,
    TextField,
    Typography,
    useMediaQuery,
    Button,
    Box,
    // imageListClasses
} from "@mui/material"
import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer";
import DhairyaWorkingVideo from "/DhairyaWorking2.mp4";
import { motion } from "framer-motion";
import AnantaArrow from "/AnantaArrow.mp4"
import AnantaArrow2 from "/AnataArrow2.mp4"
import Aflatoon from '/Aflatoon.jpeg'
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { theme } from "../theme";

const blogPosts = [
    {
        title: "HERMEUS NAMES ZACH SHORE AS CHIEF REVENUE OFFICER",
        date: "January 19, 2023",
        image: "/path-to-image1.jpg",
        link: "#"
    },
    {
        title: "QUARTERHORSE MK 0 BEGINS TESTING",
        date: "October 12, 2023",
        image: "/path-to-image2.jpg",
        link: "#"
    },
    {
        title: "QUARTERHORSE WIND TUNNEL TESTING",
        date: "February 27, 2023",
        image: "/path-to-image3.jpg",
        link: "#"
    },
    {
        title: "QUARTERHORSE WIND TUNNEL TESTING",
        date: "February 27, 2023",
        image: "/path-to-image3.jpg",
        link: "#"
    }
];

const blogNews = [
    {
        title: "Could this be the nest Air Force One",
        date: "February 29, 2024",
        image: "/path-to-image4.jpg",
        link: "#"
    },
    {
        title: "Could this be the nest Air Force One",
        date: "February 29, 2024",
        image: "/path-to-image4.jpg",
        link: "#"
    },
    {
        title: "Could this be the nest Air Force One",
        date: "February 29, 2024",
        image: "/path-to-image4.jpg",
        link: "#"
    },
    {
        title: "Could this be the nest Air Force One",
        date: "February 29, 2024",
        image: "/path-to-image4.jpg",
        link: "#"
    },
];


export const Blog: React.FC = () => {

    useEffect(() => {
        document.title = "Blog | VRT"
        setTimeout(() => {
            setShowComponent(false);
        }, 1500);

        setTimeout(() => {
            setSmallScreenBackgroundVideo(AnantaArrow2)
        }, 20 * 1000)
    }, [])

    const [showComponent, setShowComponent] = useState(true);

    const [smallScreenBackgroundVideo, setSmallScreenBackgroundVideo] = useState<string | undefined>(AnantaArrow);

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const { ref: updateRef, inView: updateInView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    const { ref: newsRef, inView: newsInView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    const { ref: touchRef, inView: touchInView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (

        <div style={{ overflow: "hidden" }}>
            <Container maxWidth={false}
                sx={{
                    backgroundImage: {
                        xs: `url('${Aflatoon}')`,
                        md: 'none'
                    },
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: "100vh",
                    width: "100%"
                }}
            >
                <video
                    autoPlay={!isSmallScreen}
                    loop
                    muted
                    playsInline={isSmallScreen}
                    style={{
                        position: 'absolute',
                        display: isSmallScreen ? 'none' : 'block',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -1
                    }}
                    src={DhairyaWorkingVideo}
                />
                <Navbar />
            </Container>


            {/* Updates Section */}
            <Container
                maxWidth="lg"
                component={motion.div}
                ref={updateRef}
                initial="hidden"
                animate={updateInView ? "visible" : "hidden"}
                variants={fadeInVariants}
                sx={{ paddingTop: 20, paddingBottom: 8 }}>
                <Typography
                    variant="h4"
                    sx={{ fontFamily: theme.typography.fontFamily, fontSize: isSmallScreen ? 70 : 95, marginBottom: 14 }}
                >Updates
                </Typography>
                <Grid
                    container
                    spacing={6}>
                    {blogPosts.map((post, index) => (
                        <Grid item xs={12} md={3} key={index}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    height: '100%'
                                }}
                            >
                                <Box
                                    sx={{ width: '100%', height: '100px', overflow: 'hidden', marginBottom: 2 }}>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </Box>

                                <Typography
                                    variant="h6"
                                    sx={{ fontFamily: theme.typography.fontFamily, marginTop: 2 }}
                                >{post.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    sx={{ fontFamily: theme.typography.fontFamily }}
                                >{post.date}
                                </Typography>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    href={post.link}
                                    sx={{ marginTop: 2, backgroundColor: theme.palette.primary.main, fontFamily: theme.typography.fontFamily }}
                                >Learn More
                                </Button>
                            </Box>

                        </Grid>
                    ))}
                </Grid>
            </Container>


            {/* In the news */}
            <Container
                maxWidth="lg"
                component={motion.div}
                ref={newsRef}
                initial="hidden"
                animate={newsInView ? "visible" : "hidden"}
                variants={fadeInVariants}
                sx={{ paddingTop: 20, paddingBottom: 8 }}>
                <Typography
                    variant="h4"
                    sx={{ fontFamily: theme.typography.fontFamily, fontSize: isSmallScreen ? 70 : 95, marginBottom: 14 }}
                >In the news
                </Typography>
                <Grid
                    container
                    spacing={6}>
                    {blogNews.map((post, index) => (
                        <Grid item xs={12} md={3} key={index}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    height: '100%'
                                }}
                            >
                                <Box
                                    sx={{ width: '100%', height: '100px', overflow: 'hidden', marginBottom: 2 }}>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </Box>

                                <Typography
                                    variant="h6"
                                    sx={{ fontFamily: theme.typography.fontFamily, marginTop: 2 }}
                                >{post.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    sx={{ fontFamily: theme.typography.fontFamily }}
                                >{post.date}
                                </Typography>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    href={post.link}
                                    sx={{ marginTop: 2, backgroundColor: theme.palette.primary.main, fontFamily: theme.typography.fontFamily }}
                                >Learn More
                                </Button>
                            </Box>

                        </Grid>
                    ))}
                </Grid>
            </Container>


            {/* Get in touch */}
            <Container
                maxWidth="lg"
                component={motion.div}
                ref={touchRef}
                initial="hidden"
                animate={touchInView ? "visible" : "hidden"}
                variants={fadeInVariants}
                sx={{ paddingTop: 20, paddingBottom: 8 }}
            >
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography
                            sx={{ fontFamily: theme.typography.fontFamily, fontSize: isSmallScreen ? 70 : 95, marginBottom: 25 }}
                        >
                            STAY IN TOUCH
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                maxWidth: 400,
                                marginLeft: 'auto'
                            }}
                        >
                            <TextField
                                label="First Name"
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                                label="Last Name"
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                                label="Email Address"
                                variant="outlined"
                                fullWidth
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ backgroundColor: theme.palette.primary.main }}
                            >
                                Sign Up
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>


            {/* Footer */}
            <Footer isSmallScreen={isSmallScreen} />
        </div>
    )
}