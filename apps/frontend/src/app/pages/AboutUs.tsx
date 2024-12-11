import {
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  Button,
  Box,
  ImageList,
  ImageListItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";
import { useCustomNavigate } from "../utils/useCustomNavigate"
// import Field from "/DhairyaWorking2.mp4";
import Field from "/Field.mp4";
import IsroVisit from "/IsroMeet.jpeg";
import AnantaArrow from "/AnantaArrow.mp4";
import AnantaArrow2 from "/AnataArrow2.mp4";
// import Map from "/map.jpg";
import { useInView } from "react-intersection-observer";
import { Footer } from "../components/Footer";
import { theme } from "../theme";
import  { Gallery } from "../components/Gallery";
import { AboutUsPageContent } from "../utils/content";
import OurStory  from "/OurStory.jpeg";
import { ProfileThumbnail } from "../components/ProfileThumbnail";
import DhairyaGrinder from '/DhairyaGrinder.jpeg'


export const AboutUs: React.FC = () => {
  useEffect(() => {
    document.title = "ABOUT | VRT";
    setTimeout(() => {
      setShowComponent(false);
    }, 1500);

    setTimeout(() => {
      setSmallScreenBackgroundVideo(AnantaArrow2);
    }, 20 * 1000);
  }, []);

  const [showComponent, setShowComponent] = useState(true);

  const [smallScreenBackgroundVideo, setSmallScreenBackgroundVideo] = useState<
    string | undefined
  >(AnantaArrow);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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

  const { ref: storyRef, inView: storyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: leadershipRef, inView: leadershipInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: teamRef, inView: teamInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref:  recruitsRef, inView: recruitsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: galleryRef, inView: galleryInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const handleNavigate = useCustomNavigate();

  return (
    <div style={{ overflow: "hidden" }}>
      <Container
        maxWidth={false}
        sx={{
          backgroundImage: {
            xs: `url('${DhairyaGrinder}')`,
            md: "none",
          },
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
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
            position: "absolute",
            display: isSmallScreen ? "none" : "block",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
          src={Field}
        />
        <Navbar />
      </Container>

      {/* About Us */}
      <Container>
        <Typography
          gutterBottom
          component={motion.div}
          ref={textRef}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          sx={{
            fontFamily: theme.typography.fontFamily,
            fontSize: isSmallScreen ? 70 : 95,
            color: "black",
            marginTop: 15,
            position: "relative",
            top: "25px",
            left: "10px",
          }}
        >
          We Are VRT
        </Typography>
        <Grid
          container
          spacing={5}
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
              fontFamily={theme.typography.fontFamily}
            >
              Our Vision
            </Typography>
            <Typography
              variant="h5"
              component={motion.div}
              initial="hidden"
              whiteSpace='pre-wrap'
              animate={visionInView ? "visible" : "hidden"}
              variants={fadeInVariants}
              fontFamily={theme.typography.fontFamily}
              sx={{
                fontSize: isSmallScreen ? 18 : 22
              }}
            >
              {AboutUsPageContent.ourVisionStatement}
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
              fontFamily={theme.typography.fontFamily}
            >
              Our Mission
            </Typography>
            <Typography
              component={motion.div}
              whiteSpace='pre-wrap'
              initial="hidden"
              animate={missionInView ? "visible" : "hidden"}
              variants={fadeInVariants}
              fontFamily={theme.typography.fontFamily}
              sx={{
                fontSize: isSmallScreen ? 18 : 22
              }}
            >
              {AboutUsPageContent.outMissionStatement}
            </Typography>
          </Grid>
        </Grid>
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
            // margin: 1,
            marginTop: 3
          }}
        >
          <img
            src={IsroVisit}
            alt="Team Image"
            style={{
              maxWidth: "100%",
              minWidth: "100%",
              height: "80%",
              border: "2px solid white",
            }}
          />
        </Box>
      </Container>

      {/* Placeholder Section */}
      <Box
        component={motion.div}
        ref={storyRef}
        initial="hidden"
        animate={storyInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        sx={{
          width: "100%",
          height: "400px",
          backgroundImage: `url('${OurStory}')`, 
          backgroundBlendMode: 'overlay',
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: isSmallScreen ? 10 : 14,
          boxSizing: "border-box",
        }}
      >
        <Stack
          spacing={4}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 20px",
            borderRadius: "8px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontFamily: theme.typography.fontFamily,
            }}
          >
            OUR STORY
          </Typography>
          <Button
            variant="outlined"
            onClick={()=>handleNavigate('/story')}
            sx={{
              color: "yellow",
              borderColor: "yellow",
              ":hover": {
                backgroundColor: "yellow",
                color: "black",
              },
              fontFamily: theme.typography.fontFamily,
            }}
          >
            VRT Timeline
          </Button>
        </Stack>
      </Box>

      {/* Team Members */}
      <Stack
        spacing={15}
        marginTop={isSmallScreen ? 10 : 15}
        marginBottom={isSmallScreen ? 10 : 15}
      >
        <Stack
          spacing={3}
        >
        <Typography
          variant="h2"
          gutterBottom
          component={motion.div}
          ref={leadershipRef}
          initial="hidden"
          animate={leadershipInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          marginBottom={2}
          sx={{
            textAlign: "center",
            fontSize: { xs: 37, md: 63 },
            fontFamily: 'Nova Square',
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          LEADERSHIP
        </Typography>
        <Grid
          rowSpacing={7}
          container
          sx={{
            justifyContent: "space-evenly"
          }}
          
        >
          {AboutUsPageContent.teamLeaders.map((member) => (
            <ProfileThumbnail name={member.name} role={member.role} image={member.img} linkToProfile={member.linkToProfile} />
          ))}
        </Grid>
        </Stack>
        <Stack
          spacing={3}
        >
        <Typography
          variant="h2"
          gutterBottom
          component={motion.div}
          ref={teamRef}
          initial="hidden"
          animate={teamInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          sx={{
            textAlign: "center",
            fontSize: { xs: 37, md: 63 },
            fontFamily: 'Nova Square',
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          MEMBERS
        </Typography>
        <Grid
          container
          rowSpacing={7}
          justifyContent="space-evenly"
          sx={{ paddingInline: { xs: 0, md: 20 } }}
        >
          {AboutUsPageContent.teamMembers.map((member) => (
            <ProfileThumbnail name={member.name} role={member.role} image={member.img} linkToProfile={member.linkToProfile} />
          ))}

        </Grid>
        </Stack>
        <Stack
          spacing={3}
        >
        <Typography
          variant="h2"
          gutterBottom
          component={motion.div}
          ref={recruitsRef}
          initial="hidden"
          animate={teamInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          sx={{
            textAlign: "center",
            fontSize: { xs: 37, md: 63 },
            fontFamily: 'Nova Square',
            // marginBottom: { xs: 10, md: -20 },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          RECRUITS - 2024
        </Typography>
        <Grid
          container
          rowSpacing={7}
          justifyContent="space-evenly"
          sx={{ paddingInline: { xs: 0, md: 20 } }}
        >
          {AboutUsPageContent.recruits2024.map((member) => (
            <ProfileThumbnail name={member.name} role={member.role} image={member.img} linkToProfile={member.linkToProfile} />
          ))}

        </Grid>
        </Stack>
      </Stack>
      {/* Gallery section */}

      <Grid
        component={motion.div}
        ref={galleryRef}
        initial="hidden"
        animate={galleryInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        sx={{
          backgroundColor: "#141414",
        }}
      >
        <Stack
          sx={{
            width: "100%",
            height: "300px",
            alignItem: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            // variant="h2"
            sx={{
              display: "flex",
              color: "white",
              // fontFamily: theme.typography.fontFamily,
              fontFamily: "Nova Square",
              fontSize: isSmallScreen ? 58 : 90,
              alignItem: "center",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            HALL OF FAME
          </Typography>
        </Stack>
        <Box
          width="100%"
          sx={{
            overflow: "hidden"
          }}
        >
          <Gallery/>
        </Box> 
      </Grid>

      <Footer isSmallScreen={isSmallScreen} />
    </div>
  );
};