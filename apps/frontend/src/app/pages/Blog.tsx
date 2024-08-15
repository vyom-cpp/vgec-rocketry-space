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
import Carousel from "react-carousel-mui";
import { useInView } from "react-intersection-observer";
import DhairyaWorkingVideo from "/DhairyaWorking2.mp4";
import Rocket from "/rocket-demo.jpeg";
import { motion } from "framer-motion";
import { useCustomNavigate } from "../utils/useCustomNavigate"
import AnantaArrow from "/AnantaArrow.mp4"
import AnantaArrow2 from "/AnataArrow2.mp4"
import Aflatoon from '/Aflatoon.jpeg'
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { theme } from "../theme";

const blogPosts = [
    {
        title: "Title 1",
        date: "January 19, 2023",
        image: Rocket,
        link: "#"
    },
    {
        title: "Title 2",
        date: "October 12, 2023",
        image: Rocket,
        link: "#"
    },
    {
        title: "Title 3",
        date: "February 27, 2023",
        image: Rocket,
        link: "#"
    },
    {
        title: "Title 4",
        date: "February 27, 2023",
        image: Rocket,
        link: "#"
    }
];

const blogNews = [
    {
        title: "Title 1",
        date: "February 29, 2024",
        image: Rocket,
        link: "#"
    },
    {
        title: "Title 2",
        date: "February 29, 2024",
        image: Rocket,
        link: "#"
    },
    {
        title: "Title 3",
        date: "February 29, 2024",
        image: Rocket,
        link: "#"
    },
    {
        title: "Title 4",
        date: "February 29, 2024",
        image: Rocket,
        link: "#"
    },
];


export const Blog: React.FC = () => {

    useEffect(() => {
        document.title = "BLOG | VRT"
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
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const handleNavigate = useCustomNavigate();

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
                    width: "100%",

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
                maxWidth={false}
                component={motion.div}
                ref={updateRef}
                initial="hidden"
                animate={updateInView ? "visible" : "hidden"}
                variants={fadeInVariants}
                sx={{
                    paddingTop: 15,
                    paddingBottom: 8,
                    width: isSmallScreen ? "80%" : "70%"
                }}>
                <Typography
                    sx={{ fontFamily: theme.typography.fontFamily, fontSize: isSmallScreen ? 70 : 95, marginBottom: 4 }}
                >Updates
                </Typography>
                <Carousel
                    items={blogPosts}
                    defaultItemWidthMobile={300}
                    itemsPerPage={{
                        xs: 1,
                        sm: 1,
                        tablet: 2,
                        md: 3,
                        lg: 3,
                        xl: 3
                    }}
                    itemRenderer={(post) => (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                // alignItems: 'center',
                                // textAlign: 'center',
                                minHeight: "100%",
                                width: "100%",
                                // padding: 2
                            }}
                        >
                            <Box
                                sx={{ width: '100%', height: '300px', marginBottom: 1 }}
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                            </Box>
                            <Typography
                                variant="h5"
                                sx={{ fontFamily: theme.typography.fontFamily, marginTop: 1 }}
                            >
                                {post.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                sx={{ fontFamily: theme.typography.fontFamily }}
                            >
                                {post.date}
                            </Typography>
                            <Button
                                variant="outlined"
                                onClick={() => handleNavigate('/blogPage')}
                                href={post.link}
                                sx={{
                                    marginTop: 2,
                                    fontFamily: theme.typography.fontFamily,
                                    color: 'black',
                                    fontSize: '20px',
                                    backgroundColor: 'white',
                                    borderColor: "black",
                                    // color: theme.palette.primary.dark,
                                    // fontSize: isSmallScreen ? '14px' : '18px', // Custom font size
                                    '&:hover': {
                                        variant: 'contained',
                                        backgroundColor: 'black',
                                        color: 'white',

                                    }
                                }}
                            >
                                Read
                            </Button>
                        </Box>
                    )}
                    maxContainerWidth={theme.breakpoints.values["lg"]}
                />
            </Container>



            {/* Blogs section */}
            <Container
                maxWidth={false}
                component={motion.div}
                ref={newsRef}
                initial="hidden"
                animate={newsInView ? "visible" : "hidden"}
                variants={fadeInVariants}
                sx={{ paddingTop: 20, paddingBottom: 8, width: isSmallScreen ? "80%" : "70%" }}>
                <Typography
                    sx={{ fontFamily: theme.typography.fontFamily, fontSize: isSmallScreen ? 70 : 95, marginBottom: 4 }}
                >Blogs
                </Typography>
                <Carousel
                    items={blogNews}
                    defaultItemWidthMobile={300}
                    itemsPerPage={{
                        xs: 1,
                        sm: 1,
                        tablet: 2,
                        md: 3,
                        lg: 3,
                        xl: 3
                    }}
                    itemRenderer={(post) => (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                // alignItems: 'center',
                                // alignContent: 'left',
                                // textAlign: 'center',
                                // height: '20vh',
                                minHeight: "100%",
                                // width: "100%",
                                minWidth: "100%"
                                // padding: 2
                            }}
                        >
                            <Box
                                sx={{ width: '100%', height: '300px', overflow: 'hidden', marginBottom: 1 }}
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                            </Box>
                            <Typography
                                variant="h5"
                                sx={{ fontFamily: theme.typography.fontFamily, marginTop: 1, textAlign: 'left' }}
                            >
                                {post.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                sx={{ fontFamily: theme.typography.fontFamily, textAlign: 'left' }}
                            >
                                {post.date}
                            </Typography>
                            <Button
                                variant="outlined"
                                onClick={() => handleNavigate('/blogPage')}
                                href={post.link}
                                sx={{
                                    marginTop: 2,
                                    fontFamily: theme.typography.fontFamily,
                                    color: 'black',
                                    backgroundColor: 'white',
                                    fontSize: '20px',
                                    borderColor: "black",
                                    // color: theme.palette.primary.dark,
                                    // fontSize: isSmallScreen ? '14px' : '18px', // Custom font size
                                    '&:hover': {
                                        variant: 'contained',
                                        backgroundColor: 'black',
                                        color: 'white',

                                    }
                                }}
                            >
                                Read
                            </Button>
                        </Box>
                    )}
                    maxContainerWidth={theme.breakpoints.values["lg"]}
                />
            </Container>


            {/* Get in touch */}
            <Container
                maxWidth={false}
                component={motion.div}
                ref={touchRef}
                initial="hidden"
                animate={touchInView ? "visible" : "hidden"}
                variants={fadeInVariants}
                sx={{ paddingTop: 20, paddingBottom: 8, width: '70%' }}
            >
                <Grid container spacing={2} alignItems="center" alignContent="center" >
                    <Grid item xs={12} md={6} sm={4} >
                        <Typography
                            sx={{ fontFamily: theme.typography.fontFamily, fontSize: isSmallScreen ? 70 : 95, marginBottom: isSmallScreen ? 6 : 25, }}
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
                                variant="outlined"
                                sx={{
                                    marginTop: 2,
                                    fontFamily: theme.typography.fontFamily,
                                    color: 'black',
                                    backgroundColor: 'white',
                                    borderColor: "black",
                                    fontSize: '20px',
                                    // color: theme.palette.primary.dark,
                                    // fontSize: isSmallScreen ? '14px' : '18px', // Custom font size
                                    '&:hover': {
                                        variant: 'contained',
                                        backgroundColor: 'black',
                                        color: 'white',

                                    }
                                }}
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