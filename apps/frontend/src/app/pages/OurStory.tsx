import React, { useEffect } from "react";
import {
    Container,
    Typography,
    Box,
    useMediaQuery,
    Button,
    Stack
} from "@mui/material";
import { Navbar } from "../components/Navbar";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { theme } from "../theme";
import { Footer } from "../components/Footer"
import Fun from "/Fun.jpeg";
import MissionsCover from '/MissionsCover.jpeg'
import FirstMotorTest from '/FirstMotorTest.jpeg'
import FirstEjectionTest from '/FirstEjectionTest.png'
import IronOxideGrains from '/IronOxideGrains.jpeg'
import RocketMotorWebinar from '/RocketMotorWebinar.jpeg'
import AflatoonLaunch from '/AflatoonLaunch.jpeg'
import Workshop2 from '/Workshop2.jpeg'
import SoundingRocket from '/SoundingRocket.jpeg'
import AflatoonFlying from '/AflatoonFlying.jpeg'
import MaxThrustF from '/MaxThrustF.png'
import AflatoonLaunchPhone from '/AflatoonLaunchPhone2.png'
import ThirdAnanta from '/3rdAnanta.png'
import AnantaOnStand from '/AnantaOnStand.jpeg'
import { useCustomNavigate } from "../utils/useCustomNavigate";

const storyLineImages = [
    {
        date: `3ʳᵈ October, 2022`,
        title: "Foundation",
        description: "Pavitra and his batchmates founded VGEC Rocketry Team",
        image: MissionsCover
    },
    {
        date: "21ˢᵗ November, 2022",
        title: "First motor test",
        description: "Team tested it's 1ˢᵗ in-house manufactured Rocket Motor",
        image: FirstMotorTest
    },
    {
        date: "3ʳᵈ April, 2023",
        title: "First ejection test",
        description: "The parachute ejection mechanism was tested successfully for the first time",
        image: FirstEjectionTest
    },
    {
        date: "8ᵗʰ May, 2023",
        title: "Iron oxide grains test",
        description: "Team tested a motor with iron-oxide for the 1ˢᵗ time. We achieved a thrust of 950gm",
        image: IronOxideGrains
    },
    {
        date: "27ᵗʰ May, 2023",
        title: "First Launch",
        description: "We launched our very first rocket Ananta",
        image: AnantaOnStand
    },
    {
        date: "8ᵗʰ June, 2023",
        title: "Maximum Thrust",
        description: "We achieved highest thrust of 2700gm in our class-F motor",
        image: MaxThrustF
    },
    {
        date: "11ᵗʰ June, 2023",
        title: "Webinar on Solid Rocket Fuel",
        description: "A webinar was conducted by team on solid rocket fuel. The audience was also given an introduciton on the same for amature rocketry",
        image: RocketMotorWebinar
    },
    {
        date: "16ᵗʰ September, 2023",
        title: "Workshop on Rocket and Subsytems",
        description: "7 hour offline workshop conducted by team Subsystems of the Model Rocket. The attendees were given an introduction to Rocket Systems in general and how they are realised on a model scale was demonstrated.",
        image: Workshop2
    },
    {
        date: "1ˢᵗ February, 2024",
        title: "First successful launch of Ananta",
        description: "This launch we achieved a maximum height of 183m for the first time",
        image: ThirdAnanta
    },
    {
        date: "8ᵗʰ March, 2024",
        title: "First launch of Aflatoon",
        description: "First launch of our 2nd rocket Aflatoon, when it came back in three pieces",
        image: AflatoonLaunch
    },
    {
        date: "5ᵗʰ May, 2024",
        title: "Manufactured Sounding Rocket",
        description: "Team designed and manufactured Soundng rocket for an International Rocket Competition Tecknofest in Turkey",
        image: SoundingRocket
    },
    {
        date: "13ᵗʰ October, 2024",
        title: "Highest altitude recorded by Aflatoon",
        description: "Aflatoon achieved the highest altitude of 702 meter, with 175 m/s",
        image: AflatoonFlying
    },
];

export const OurStory: React.FC = () => {
    useEffect(() => {
        document.title = "OUR | STORY";
        window.scrollTo(0, 0);
    });

    const hanldleNavigate  = useCustomNavigate();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div style={{ overflow: "hidden" }}>
            <Box sx={{ position: 'relative', height: '101vh', width: '100%' }}>
                <Box
                    component="img"
                    src={isSmallScreen ? AflatoonLaunchPhone: Fun}
                    alt="Company Timeline"
                    sx={{
                        height: '100%',
                        width: '100%',
                        backgroundSize: 'cover',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: -2,
                    }}
                />
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust transparency
                            zIndex: -1, // Above the image but below everything else
                        }}
                    />
                    <Stack spacing={4} direction='column'>
                        <Navbar />
                        <Box
                            sx={{
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                // padding: 2,    
                                marginTop: isSmallScreen ? -20 : '-19vh'                 
                            }}   
                        >
                            <Typography
                                style={{
                                    position: "absolute",
                                    top: "50%",       
                                    left: "50%",      
                                    transform: "translate(-50%, -50%)", 
                                    color: "white",   
                                    fontSize: isSmallScreen ? "3rem" : "6rem", 
                                    // fontWeight: "bold",
                                    fontFamily: 'Nova Square',
                                    textAlign: "center",
                                    zIndex: 1,     
                                }}
                                >
                                Our Story    
                            </Typography>
                        </Box>
                    </Stack>
            </Box>
            

            <Container maxWidth={false} sx={{ paddingTop: "100px", paddingLeft: isSmallScreen ? '4px' : '10px'}}>
                <VerticalTimeline
                    layout={isSmallScreen ? "1-column-left" : "2-columns"}
                    lineColor="#000"
                >
                    {storyLineImages.map((item, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: "transparent",
                                padding: "0px",
                                boxShadow: "none",
                                borderRadius: "0px"
                            }}
                            contentArrowStyle={{
                                display: "none"
                            }}
                            iconStyle={{
                                background: "transparent",
                                color: "transparent",
                                boxShadow: "none"
                            }}
                            icon={<span style={{ display: "none" }}></span>}
                        >
                            <Typography 
                                variant="overline" 
                                fontSize={isSmallScreen ? 15 : 16}
                                fontFamily={theme.typography.fontFamily}
                                component="h5"
                            >
                                {item.date}
                            </Typography>

                            <Typography 
                                variant={isSmallScreen ? "h4" : "h2"} 
                                component="h1" 
                                // fontWeight="bold" 
                                fontFamily={theme.typography.fontFamily}
                                // fontFamily='Nova Square'

                                sx={{ 
                                    marginTop: "-5px",
                                    marginBottom: "-12px"
                                }}
                            >
                                {item.title}
                            </Typography>

                            <Typography 
                                component="p"
                                // fontFamily='Nova Square'
                                fontFamily={theme.typography.fontFamily}
                            >
                                {item.description}
                            </Typography>

                            <Box
                                component="img"
                                src={item.image}
                                alt={item.title}
                                sx={{
                                    width: "100%",
                                    height: isSmallScreen ? '22vh' : '40vh',
                                    marginTop: "10px",
                                    borderRadius: "0px",
                                    boxShadow: "none",
                                    backgroundSize: 'cover',
                                    objectFit: 'cover'
                                }}
                            />
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </Container>

            <Typography
                sx={{
                    display: "flex",
                    color: "black",
                    fontFamily: theme.typography.fontFamily,
                    fontSize: isSmallScreen ? 45 : 80,
                    alignItem: "center",
                    textAlign: "center",
                    justifyContent: "center",
                    marginTop: isSmallScreen ? "12vh" :"20vh",
                    marginBottom: isSmallScreen ? "4vh" :"4vh",
                    marginInline: isSmallScreen ? "3vw" : ""
                }}
            >
                AND WE'RE JUST GETTING STARTED
            </Typography>

            <Button
                variant="outlined"
                onClick={()  =>  hanldleNavigate('/blog#')}
                sx={{
                    marginTop: "112px",
                    backgroundColor: "white",
                    display: 'flex',
                    margin: '0 auto',
                    color: theme.palette.primary.dark,
                    borderColor:
                        "black",
                    '&:hover': {
                        variant: 'contained',
                        backgroundColor: 'black',
                        color: 'white',
                    },

                    marginBottom: "200px"
                }}
                style={{
                    fontFamily: theme.typography.fontFamily
                }}
            >
                See the latest News
            </Button>

            <Footer isSmallScreen={isSmallScreen} />
        </div>
    );
};
