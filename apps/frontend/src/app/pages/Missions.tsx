import {
  Container,
  Stack,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";
import CardGrid from "../components/Cards";
import { theme } from "../theme";
import Aflatoon from "/Aflatoon.jpeg";
import { useInView } from "react-intersection-observer";
import { Footer } from "../components/Footer";
import EventClass from "/EventClass.jpg";
import Soldering from "/Soldering.mp4";
import FuelFlame from "/FuelFlame.jpeg";
import '@fontsource/nova-square'

export const Missions: React.FC = () => {
  useEffect(() => {
    document.title = "MISSIONS | VRT";
  }, []);

  const cardsDataForLaunch = [
    {
      name: "Metal Casing and Nozzle for smaller motors",
      content:
        "Currently we are redesigning our F-class motors with a stainless steel casing and nozzle, aluminum end caps, and retainer rings.",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/2022-11/Cover%20Photo%20-%20Space%20-%20as%20a%20GIF.gif?VersionId=fCsg8LCoWUqcb7NruvrFKp_c0M44y4W_",
      link: "/",
    },
    {
      name: "Venessa 3.0",
      content:
        "Soon, we will have the third launch of Venessa",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/2022-11/Cover%20Photo%20-%20Space%20-%20as%20a%20GIF.gif?VersionId=fCsg8LCoWUqcb7NruvrFKp_c0M44y4W_",
      link: "/",
    },
    {
      name: "Aflatoon's 6th Launch",
      content:
        "Also, soon we will be launching Aflatoon again",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/2022-11/Cover%20Photo%20-%20Space%20-%20as%20a%20GIF.gif?VersionId=fCsg8LCoWUqcb7NruvrFKp_c0M44y4W_",
      link: "/",
    }
  ];

  const cardDataForPrograms = [
    {
      name: "Ananta's 1st Launch",
      content:
          "Ananta was our first rocket, after we perfected our rocket motor design, we quickly moved to developing Ananta, whoes design was alrealy in process by that time.",
      image: "https://cdn.mos.cms.futurecdn.net/xKkFJqojdSd8vJuvCLs5mU.jpg",
      link: "/",
    },
    {
      name: "Ananta's Successful Launch",
      content:
        "After much trial and error especially with the ejection system, and design improvments with each consicutive launch. Ananta's 5th launch was finally successful achieving the height of 183m.",
      image:
        "https://science.nasa.gov/wp-content/uploads/2023/06/sun-h1180-jpg.webp?w=1920",
      link: "/",
    },
    {
      name: "Recruits' 1st Launch",
      content: "The 2023 batch of recruits were divided into two teams and given the task to build and launch their rockets",
      image:
        "https://img.jagranjosh.com/images/2022/November/1112022/what-are-stars-how-are-they-born-and-how-do-they-die-compressed-(1).webp",
      link: "/",
    },
    {
      name: "Aflatoon's 1st Launch",
      content: "Aflatoon is our second rocket, with a much powerfull motor. First launch was incredible, the rocket ascended upto around 300m but unfortunately went through RUD, during parachute ejection event.",
      image:
        "https://img.jagranjosh.com/images/2022/November/1112022/what-are-stars-how-are-they-born-and-how-do-they-die-compressed-(1).webp",
      link: "/",
    },
    {
      name: "Aflatoon's 2nd Launch",
      content: "Ananta our first ever rocket was launched on 27th May, 2023",
      image:
        "https://img.jagranjosh.com/images/2022/November/1112022/what-are-stars-how-are-they-born-and-how-do-they-die-compressed-(1).webp",
      link: "/",
    },
    {
      name: "Venessa's 1st Launch",
      content: "Venessa's is a two stage demonstrator that we are building. The first launch didn't bring in any data as the motor underperformed and hence, even the 'liftoff threshold crossed' event didn't trigger",
      image:
        "https://img.jagranjosh.com/images/2022/November/1112022/what-are-stars-how-are-they-born-and-how-do-they-die-compressed-(1).webp",
      link: "/",
    },
    {
      name: "Aflatoon's 4th Launch",
      content: "Ananta our first ever rocket was launched on 27th May, 2023",
      image:
        "https://img.jagranjosh.com/images/2022/November/1112022/what-are-stars-how-are-they-born-and-how-do-they-die-compressed-(1).webp",
      link: "/",
    },
    {
      name: "High Powered Rocket manufacuted for Tecknofest Competition",
      content: "As part of the competition, we were tasked with designing a rocket that achieves the maximum possible apogee using the motor provided for the competition.",
      image:
        "https://img.jagranjosh.com/images/2022/November/1112022/what-are-stars-how-are-they-born-and-how-do-they-die-compressed-(1).webp",
      link: "/",
    },
    {
      name: "Scientific Payload dessign for Tecknofest competition",
      content: "As part of the competition, we designed a rocket-borne scientific payload to measure and transmit temperature, humidity, and pressure data to the ground station.",
      image:
        "https://img.jagranjosh.com/images/2022/November/1112022/what-are-stars-how-are-they-born-and-how-do-they-die-compressed-(1).webp",
      link: "/",
    },
    {
      name: "Avionics subsystems devloped for Tecknofest competition",
      content: "We developed an indigenous avionics system for the rocket to measure pressure, inertial, and GPS data and transmit it continuously to the ground station, adhering to all competition committee rules.",
      image:
        "https://img.jagranjosh.com/images/2022/November/1112022/what-are-stars-how-are-they-born-and-how-do-they-die-compressed-(1).webp",
      link: "/",
    },
    {
      name: "Aflatoon's 5th Launch",
      content: "This was one of our best launches to date. Aflatoon reached an impressive altitude of 703 meters with a maximum speed of 145 m/s. While the ejection system was triggered, a mechanical failure prevented the parachute from deploying.",
      image:
        "https://img.jagranjosh.com/images/2022/November/1112022/what-are-stars-how-are-they-born-and-how-do-they-die-compressed-(1).webp",
      link: "/",
    },
    {
      name: "Solid Rocket Motors design and developments",
      content: "We take pride in designing and manufacturing our own rocket motors.We have refined our propellant prepration and manufacturing processes through many iterations. Our top achievements are H-class and I-class motors.",
      image:
        "https://img.jagranjosh.com/images/2022/November/1112022/what-are-stars-how-are-they-born-and-how-do-they-die-compressed-(1).webp",
      link: "/",
    },
  ];

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  
  const { ref: titleRef, inView: titleRefView } = useInView({
      triggerOnce: true,
      threshold: isSmallScreen ? 0.001 : 0.1,
  });
  const { ref: title2Ref, inView: title2RefView } = useInView({
      triggerOnce: true,
      threshold: isSmallScreen ? 0.001 : 0.1,
  });

  const fadeInVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8} },
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          backgroundImage: {
            xs: `url('${Aflatoon}')`,
            md: `none`,         
          },
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "101vh",
          width: "100%",
          padding: 0,
          marging: 0,
          backgroundPosition: {
            md: "center -45rem"
          },
          zIndex: -2
        }}
      >
      {!isSmallScreen && <video
          autoPlay={!isSmallScreen}
          loop
          muted
          playsInline={isSmallScreen}
          style={{
            position: "absolute",
            display: isSmallScreen ? "none" : "block",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
          src={Soldering}
        />
      }
        <Box
          style={{
            // position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: isSmallScreen ? "rgba(0, 0, 0, 0.65)" : "rgba(0, 0, 0, 0.7)", 
            zIndex: -1,
          }}
          >
          <Navbar />
            <Typography
              style={{
                position: "absolute",
                top: "50%",       
                left: "50%",      
                transform: "translate(-50%, -50%)", 
                color: "white",   
                fontSize: isSmallScreen ? "3.5rem" : "7rem", 
                // fontWeight: "bold",
                fontFamily: 'Nova Square',
                textAlign: "center",
                zIndex: 0
              }}
              >
              Our Projects    
            </Typography>
        </Box>
      </Container>
      <Stack
        // spacing={3}
        sx={{
          alignItems: "center",
          backgroundColor: "black",
          width: "100%",
        }}
      >
        <Typography
          // variant="h2"
          sx={{
            display: "flex",
            color: "white",
            fontFamily: theme.typography.fontFamily,
            fontSize: isSmallScreen ? 45 : 80,
            alignItem: "center",
            textAlign: "center",
            justifyContent: "center",
            padding: "25px 20px",
            paddingBottom: "7px"
          }}
          component={motion.div}
          ref={title2Ref}
          initial="hidden"
          animate={title2RefView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          Previous Projects
        </Typography>
        <CardGrid cards={cardDataForPrograms} isDarkMode={true} isFuturePlans={false}/>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "white",
        }}
      >
         <Typography
          // variant="h2"
          sx={{
            display: "flex",
            color: "black",
            fontFamily: theme.typography.fontFamily,
            fontSize: isSmallScreen ? 45 : 80,
            alignItem: "center",
            textAlign: "center",
            justifyContent: "center",
            padding: "25px 20px",
            paddingBottom: "7px"
          }}
          component={motion.div}
          ref={titleRef}
          initial="hidden"
          animate={titleRefView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          Future Plans
        </Typography>
        <CardGrid cards={cardsDataForLaunch} isDarkMode={false} isFuturePlans={true} />
      </Stack>
        <Footer isSmallScreen={isSmallScreen} />
    </div>
  );
};
