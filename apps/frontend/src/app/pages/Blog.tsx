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
import axios from "axios";
import React, { useEffect, useState } from "react"
import Carousel from "react-carousel-mui";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import "../styles.css";
import { useInView } from "react-intersection-observer";
import DhairyaWorkingVideo from "/DhairyaWorking2.mp4";
import Rocket from "/rocket-demo.jpeg";
import { motion } from "framer-motion";
import { useCustomNavigate } from "../utils/useCustomNavigate"
import AnantaArrow from "/AnantaArrow.mp4"
import AnantaArrow2 from "/AnataArrow2.mp4"
import Aflatoon2 from "/Aflatoon2.jpeg"
import Rumination from "/Rumination.jpeg"
import RecruitsFirstLaunch from "/RecruitsFirstLaunch.jpeg"
import AflatoonOnPad from "/AflatoonOnPad.jpeg"
import CarbNosecone from "/CarbNosecone.jpeg"
import TurkAvionics from "/TurkAvionics.jpeg"
import BigRocket from "/BigRocket.jpeg"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { theme } from "../theme";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

const newsPosts = [
    {
        title: "Aflatoon's 5th Launch",
        date: "13ᵗʰ October, 2024",
        image: Aflatoon2,
        link: "#"
    },
    {
        title: "Vennesa Lunch",
        date: "17ᵗʰ August, 2024",
        image: Rocket,
        link: "#"
    },
    {
        title: "Aflatoon's 4th Launch",
        date: "23ʳᵈ June, 2024",
        image: AflatoonOnPad,
        link: "#"
    },
    {
        title: "Recruits' First Launch",
        date: "25ᵗʰ June, 2024",
        image: RecruitsFirstLaunch,
        link: "#"
    },
    {
        title: "Testing Tecknofet Rocket's Subsystems",
        date: "18ᵗʰ May, 2024",
        image: BigRocket,
        link: "#"
    },
    // {
    //     title: "",
    //     date: "",
    //     image: "",
    //     link: "#"
    // },
];

const blogPosts = [
    {
        title: "Carbon Fiber Nosecone",
        description: "Desigining and manufacturing process of a carbon fiber nosecone with a steel tip",
        image: CarbNosecone,
        link: "#"
    },
    {
        title: "Telescopic Ejection Mechanism",
        description: "Design philosophy and manufacturing process of an Telescopic Ejection mechanism with carbon fiber composite",
        image: Rocket,
        link: "#"
    },
    {
        title: "Parachute Desiging",
        description: "Desigining Drogue and Main prachutes for high powered rocketry",
        image: Rocket,
        link: "#"
    },
    {
        title: "Avionics subsystem system",
        description: "How we designed, developed and tested our indegenious avionics system for an International Rocketry Competition ",
        image: TurkAvionics,
        link: "#"
    },
    {
        title: "Airframe and Fins",
        description: "Desiging, manufacturing and testing Airframe and Fins for a high powered rocket",
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
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.persist();

        const formElement = event.target as HTMLFormElement;
        const formData = new FormData(event.target as HTMLFormElement);
        const firstName = formData.get('firstname')?.toString() || '';
        const lastName = formData.get('lastname')?.toString() || '';
        const email = formData.get('email')?.toString() || '';

        console.log(event.target, "sfjsl")
        // Validate required fields
        if (!firstName || !lastName || !email) {
            alert('Please fill in all required fields');
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Process form data
        const userData = {
            firstName,
            lastName,
            email
        };

        // Send data to server (replace with actual API endpoint)
        // console.log('Form submitted:', userData);
        axios.post('https://discord.com/api/webhooks/1092854760136245289/HlAT6CkbSIZFT1COaAbkJOWyq_IXrBpneCew68NaPnrxxDjurc8GqDVTpDNFzNM0L9TB', {
            content: `**Wants to Stay in Touch**\nName: ${firstName}\nLast Name: ${lastName}\nEmail: ${email} \n`,
        })
            .then((res) => {
                if (res.status === 204) {
                    // alert('Form submitted successfully!');
                    setIsSuccess(true)
                    formElement.reset(); // Reset the form
                }
            })
            .catch((error) => {
                console.error('Error submitting form:', error);
                alert('Failed to submit the form. Please try again.');
            });
        // console.log(donorCreds)
    };

    return (

        <div style={{ overflow: "hidden" }}>
            <Container maxWidth={false}
                sx={{
                    backgroundImage: {
                        xs: `url('${Rumination}')`,
                        md: 'none'
                    },
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: "100vh",
                    width: "100%",

                }}
            >
                <video
                    // autoPlay={!isSmallScreen}
                    autoPlay={true}
                    loop
                    muted
                    playsInline={isSmallScreen}
                    style={{
                        position: 'absolute',
                        display: 'block',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -1
                    }}
                    src={isSmallScreen ? AnantaArrow2 : DhairyaWorkingVideo}
                />
                <Navbar />
            </Container>


            {/* Updates Section */}
            <Container
                disableGutters
                maxWidth={false}
                component={motion.div}
                ref={updateRef}
                initial="hidden"
                animate={updateInView ? "visible" : "hidden"}
                variants={fadeInVariants}
                sx={{
                    paddingTop: isSmallScreen ? 5 : 10,
                    paddingBottom: isSmallScreen ? 3 : 7,
                    width: isSmallScreen ? "80%" : "80%"
                }}
            >
                <Typography
                    sx={{
                        fontFamily: theme.typography.fontFamily,
                        fontSize: isSmallScreen ? 70 : 95,
                        marginBottom: 4
                    }}
                >
                    Updates
                </Typography>
                <Carousel
                    items={newsPosts}
                    itemGap={isSmallScreen ? 25 : 40}
                    itemsPerPage={{
                        xs: 1,
                        sm: 2,
                        tablet: 3,
                        md: 3,
                        lg: 3,
                        xl: 3
                    }}
                    itemRenderer={(post) => (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                maxHeight: "50vh",
                                minWidth: isSmallScreen ? "80vw" : "24vw",
                            }}
                        >
                            <Box
                                sx={{
                                    // width: '100%', 
                                    // height: '100%',
                                    minHeight: isSmallScreen ? "23vh" : "25vh",
                                    minWidth: isSmallScreen ? "80vw" : "24vw",
                                    overflow: 'hidden',
                                    backgroundImage: `url(${post.image})`,
                                    marginBottom: 1,
                                    backgroundSize: "cover",
                                }}
                            />
                            <Typography
                                sx={{
                                    fontFamily: theme.typography.fontFamily,
                                    fontSize: isSmallScreen ? 25 : 27,
                                    marginTop: 1
                                }}
                            >
                                {post.title}
                            </Typography>
                            <Typography
                                // variant="subtitle1"
                                sx={{
                                    fontFamily: theme.typography.fontFamily,
                                    fontSize: isSmallScreen ? 15 : 16,
                                }}
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
                                    width: '100%',
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
                disableGutters
                ref={newsRef}
                initial="hidden"
                animate={newsInView ? "visible" : "hidden"}
                variants={fadeInVariants}
                sx={{
                    paddingTop: 10,
                    width: isSmallScreen ? "80%" : "80%"
                }}
            >
                <Typography
                    sx={{ fontFamily: theme.typography.fontFamily, fontSize: isSmallScreen ? 70 : 95, marginBottom: 4 }}
                >
                    Blogs
                </Typography>
                <Carousel
                    items={blogPosts}
                    itemGap={isSmallScreen ? 25 : 40}
                    itemsPerPage={{
                        xs: 1,
                        sm: 2,
                        tablet: 3,
                        md: 3,
                        lg: 3,
                        xl: 3
                    }}
                    itemRenderer={(post) => (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                maxHeight: "50vh",
                                minWidth: isSmallScreen ? "80vw" : "24vw",
                            }}
                        >
                            <Box
                                sx={{
                                    // width: '100%', 
                                    // height: '100%',
                                    minHeight: isSmallScreen ? "23vh" : "25vh",
                                    minWidth: isSmallScreen ? "80vw" : "24vw",
                                    overflow: 'hidden',
                                    backgroundImage: `url(${post.image})`,
                                    marginBottom: 1,
                                    backgroundSize: "cover",
                                }}
                            />
                            <Typography
                                sx={{
                                    fontFamily: theme.typography.fontFamily,
                                    fontSize: isSmallScreen ? 25 : 27,
                                    marginTop: 1
                                }}
                            >
                                {post.title}
                            </Typography>
                            <Typography
                                // variant="subtitle1"
                                sx={{
                                    fontFamily: theme.typography.fontFamily,
                                    fontSize: isSmallScreen ? 15 : 16,
                                }}
                            >
                                {post.description}
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
                                    width: '100%',
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
                <Grid
                    container
                    spacing={isSmallScreen ? 8 : -3}
                    direction={isSmallScreen ? "column" : "row"}
                    // alignItems="flex-start" 
                    // alignContent="flex-start" 
                    sx={{
                        marginBottom: isSmallScreen ? 6 : 25,
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sm={4}
                    >
                        <Typography
                            sx={{
                                fontFamily: theme.typography.fontFamily,
                                fontSize: isSmallScreen ? 80 : 95,
                                // marginBottom: isSmallScreen ? 6 : 25, 
                            }}
                        >
                            STAY IN TOUCH
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit}
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
                                name="firstname"
                                id="firstname"
                                variant="outlined"
                                fullWidth
                                required
                            />
                            <TextField
                                label="Last Name"
                                name="lastname"
                                id="lastname"
                                variant="outlined"
                                fullWidth
                                required
                            />
                            <TextField
                                label="Email Address"
                                name="email"
                                id="email"
                                variant="outlined"
                                fullWidth
                                required
                            />
                            {/* <Button
                                variant="outlined"
                                type="submit"
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
                            </Button> */}
                            <Button
                                type="submit"
                                variant="outlined"
                                sx={{
                                    fontFamily: theme.typography.fontFamily,
                                    marginTop: isSmallScreen ? 2 : 4.5,
                                    borderColor: isSuccess ? '' : 'black',
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
                                {isSuccess ? 'Send' : 'Sign Up'}
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