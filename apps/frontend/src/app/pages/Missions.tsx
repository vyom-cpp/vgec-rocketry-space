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
import { useInView } from "react-intersection-observer";
import { Footer } from "../components/Footer";
import Mission from "../../../public/Mission.png";

export const Missions: React.FC = () => {
  useEffect(() => {
    document.title = "MISSIONS | VRT";
  }, []);

  const cardsDataForLaunch = [
    {
      name: "Mission 1",
      content:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/2022-11/Cover%20Photo%20-%20Space%20-%20as%20a%20GIF.gif?VersionId=fCsg8LCoWUqcb7NruvrFKp_c0M44y4W_",
      link: "/",
    },
    {
      name: "Mission 2",
      content:
        "Chameleons are known for their distinct color-changing abilities, which they use for communication and camouflage.",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/2022-11/Cover%20Photo%20-%20Space%20-%20as%20a%20GIF.gif?VersionId=fCsg8LCoWUqcb7NruvrFKp_c0M44y4W_",
      link: "/",
    },
    {
      name: "Mission 3",
      content:
        "Iguanas are herbivorous lizards native to tropical areas of Mexico, Central America, South America, and the Caribbean.",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/2022-11/Cover%20Photo%20-%20Space%20-%20as%20a%20GIF.gif?VersionId=fCsg8LCoWUqcb7NruvrFKp_c0M44y4W_",
      link: "/",
    },
    {
      name: "Mission 4",
      content:
        "Geckos are small to medium-sized lizards known for their unique vocalizations and ability to climb smooth surfaces.",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/2022-11/Cover%20Photo%20-%20Space%20-%20as%20a%20GIF.gif?VersionId=fCsg8LCoWUqcb7NruvrFKp_c0M44y4W_",
      link: "/",
    },
    {
      name: "Mission 5",
      content:
        "The Komodo dragon is the largest living species of lizard, capable of growing up to 10 feet in length and weighing up to 150 pounds.",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/2022-11/Cover%20Photo%20-%20Space%20-%20as%20a%20GIF.gif?VersionId=fCsg8LCoWUqcb7NruvrFKp_c0M44y4W_",
      link: "/",
    },
  ];

  const cardDataForPrograms = [
    {
      name: "Program 1",
      content:
        "Red Giants are aging stars that have exhausted the supply of hydrogen in their cores and have begun to burn helium. They are characterized by their large size and reddish hue.",
      image: "https://cdn.mos.cms.futurecdn.net/xKkFJqojdSd8vJuvCLs5mU.jpg",
      link: "/",
    },
    {
      name: "Program 2",
      content:
        "Neutron Stars are incredibly dense remnants of massive stars that have undergone supernova explosions. They are only about 20 km in diameter but have masses greater than the Sun.",
      image:
        "https://science.nasa.gov/wp-content/uploads/2023/06/sun-h1180-jpg.webp?w=1920",
      link: "/",
    },
    {
      name: "Program 3",
      content:
        "White Dwarfs are the remnants of low-mass stars that have shed their outer layers. They are very dense and slowly cool over time, eventually fading into black dwarfs.",
      image:
        "https://img.jagranjosh.com/images/2022/November/1112022/what-are-stars-how-are-they-born-and-how-do-they-die-compressed-(1).webp",
      link: "/",
    },
  ];

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { ref: teamRef, inView: teamInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Container
        maxWidth={false}
        sx={{
          backgroundColor: "black",
          height: "100%",
          color: "white",
          padding: 4,
        }}
      >
        <Stack spacing={3}>
          <Navbar />

          <Box
            component={motion.div}
            ref={imageRef}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: 2,
            }}
          >
            <img
              src={Mission}
              alt="Mission img"
              style={{
                maxWidth: "100%",
                width: "100%",
                height: "80%",
                padding: 0,
                margin: 0,
              }}
            />
          </Box>

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
              padding: "10px 20px",
            }}
          >
            Upcoming Launches
          </Typography>
          <CardGrid cards={cardsDataForLaunch} />

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
              padding: "10px 20px",
            }}
          >
            Spacecraft Programs
          </Typography>
          <CardGrid cards={cardDataForPrograms} />
        </Stack>
        <Footer isSmallScreen={isSmallScreen} />
      </Container>
    </div>
  );
};
