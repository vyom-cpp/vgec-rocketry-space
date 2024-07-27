import {
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  Button,
} from "@mui/material";
import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";
import DhairyaWorkingVideo from "/DhairyaWorking2.mp4";
import IsroVisit from "/IsroMeet.jpeg";
import { useInView } from "react-intersection-observer";
import { theme } from "../theme";

const teamMembers = [
  { name: "Member 1", role: "Role 1", img: "path/to/img1.jpg" },
  { name: "Member 2", role: "Role 2", img: "path/to/img2.jpg" },
  { name: "Member 3", role: "Role 3", img: "path/to/img3.jpg" },
  { name: "Member 4", role: "Role 4", img: "path/to/img4.jpg" },
  { name: "Member 5", role: "Role 5", img: "path/to/img5.jpg" },
  { name: "Member 6", role: "Role 6", img: "path/to/img6.jpg" },
  { name: "Member 7", role: "Role 7", img: "path/to/img7.jpg" },
  { name: "Member 8", role: "Role 8", img: "path/to/img8.jpg" },
  { name: "Member 9", role: "Role 9", img: "path/to/img9.jpg" },
  { name: "Member 10", role: "Role 10", img: "path/to/img10.jpg" },
  { name: "Member 11", role: "Role 11", img: "path/to/img11.jpg" },
  { name: "Member 12", role: "Role 12", img: "path/to/img12.jpg" },
  { name: "Member 13", role: "Role 13", img: "path/to/img13.jpg" },
  { name: "Member 14", role: "Role 14", img: "path/to/img14.jpg" },
  { name: "Member 15", role: "Role 15", img: "path/to/img15.jpg" },
  { name: "Member 16", role: "Role 16", img: "path/to/img16.jpg" },
];

export const AboutUs: React.FC = () => {
  useEffect(() => {
    document.title = "ABOUT | VRT";
  }, []);

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: visionRef, inView: visionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "black",
        height: "100%",
        width: "100%",
        color: "white",
        padding: 0,
        margin: 0,
        overflowX: "hidden",
      }}
    >
      <Stack>
        <Navbar />
        <Stack sx={{ width: "100%", height: "100vh" }}>
          <video
            autoPlay
            loop
            muted
            playsInline
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
            src={DhairyaWorkingVideo}
          />
        </Stack>
        <Stack
          sx={{
            backgroundColor: "white",
            color: "black",
            padding: 4,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            gutterBottom
            component={motion.div}
            ref={textRef}
            initial="hidden"
            animate={textInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            sx={{
              fontFamily: theme.typography.fontFamily,
              color: "black",
              marginTop: 4,
              position: "relative",
              top: "10px"
            }}
          >
            We Are VRT
          </Typography>
          <Grid
            container
            spacing={2}
            component={motion.div}
            initial="hidden"
            animate={visionInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            sx={{ padding: 2, marginTop: 2 }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                gutterBottom
                component={motion.div}
                ref={visionRef}
                initial="hidden"
                animate={visionInView ? "visible" : "hidden"}
                variants={fadeInVariants}
              >
                Our Vision
              </Typography>
              <Typography
                variant="h5"
                component={motion.div}
                initial="hidden"
                animate={visionInView ? "visible" : "hidden"}
                variants={fadeInVariants}
              >
                Our vision is to revolutionize rocketry through innovation and
                teamwork. We aim to break barriers and reach new heights,
                setting new standards in the field.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                gutterBottom
                component={motion.div}
                ref={missionRef}
                initial="hidden"
                animate={missionInView ? "visible" : "hidden"}
                variants={fadeInVariants}
              >
                Our Mission
              </Typography>
              <Typography
                variant="h5"
                component={motion.div}
                initial="hidden"
                animate={missionInView ? "visible" : "hidden"}
                variants={fadeInVariants}
              >
                Our mission is to design, build, and launch cutting-edge rockets
                while fostering a collaborative and educational environment. We
                strive to inspire the next generation of aerospace engineers.
              </Typography>
            </Grid>
          </Grid>
          <Stack
            component={motion.div}
            ref={imageRef}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: 4,
            }}
          >
            <img
              src={IsroVisit}
              alt="Team Image"
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: 16,
                margin: 16,
                border: "2px solid white",
              }}
            />
          </Stack>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              marginTop: 4,
              marginBottom: 4,
            }}
          >
            Meet Us
          </Typography>
          <Grid container spacing={4} sx={{ padding: 4 }}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Stack
                  sx={{
                    alignItems: "center",
                    backgroundColor: "white",
                    padding: 2,
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                      marginBottom: 2,
                    }}
                  />
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {member.role}
                  </Typography>
                  <Button variant="outlined" sx={{ marginTop: 2 }}>
                    Read Bio
                  </Button>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Container>
  );
};
