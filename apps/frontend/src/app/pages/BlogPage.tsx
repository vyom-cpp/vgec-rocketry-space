import React, { useEffect } from "react";
import {
    Container,
    Typography,
    Box,
    useMediaQuery,
    Button
} from "@mui/material";
import { Navbar } from "../components/Navbar";
import { theme } from "../theme";
import { useInView } from "react-intersection-observer";
import IsroVisit from "/IsroMeet.jpeg";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer"
import SpaceX from "/spacex.jpg";

export const BlogPage: React.FC = () => {

    useEffect(() => {
        document.title = "BLOG PAGE | VRT";
        window.scrollTo(0, 0);
    }, []);

    const { ref: textRef, inView: textInView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const { ref: imageRef, inView: imageInView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div style={{ overflow: "hidden" }}>
            <Box sx={{ position: 'relative', height: '100vh', width: '100%' }}>
                <Navbar />
                <Box
                    component="img"
                    src={SpaceX}
                    alt="Company Timeline"
                    sx={{
                        height: '100%',
                        width: '100%',
                        backgroundSize: 'cover',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: -1
                    }}
                />
            </Box>

            {/* Title */}
            <Container>

                {/* Blog's title */}
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
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        alignContent: "center"
                    }}
                >
                    Blog's Title
                </Typography>

                {/* Blog's date posted */}
                <Typography
                    gutterBottom
                    component={motion.div}
                    ref={textRef}
                    initial="hidden"
                    animate={textInView ? "visible" : "hidden"}
                    variants={fadeInVariants}
                    sx={{
                        fontFamily: theme.typography.fontFamily,
                        fontSize: isSmallScreen ? 25 : 45,
                        color: "black",
                        marginTop: 15,
                        display: "flex",
                        position: "relative",
                        top: "25px",
                        left: "10px"
                    }}
                >
                    Aug 15, 2024
                </Typography>

                {/* Blog's Content */}
                <Typography
                    gutterBottom
                    component={motion.div}
                    ref={textRef}
                    initial="hidden"
                    animate={textInView ? "visible" : "hidden"}
                    variants={fadeInVariants}
                    sx={{
                        fontFamily: theme.typography.fontFamily,
                        fontSize: isSmallScreen ? 25 : 45,
                        color: "black",
                        marginTop: 5,
                        display: "flex",
                        position: "relative",
                        top: "25px",
                        left: "10px"
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro fugit dolores nemo quasi delectus perferendis dolorum voluptates. Facilis, vitae delectus voluptatum ducimus ipsam odit totam sequi dolorem suscipit voluptas.

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sed ipsum magni, sit itaque, nulla et porro quia facilis officiis debitis cumque. Obcaecati quam illo quae quia, soluta amet ex.
                </Typography>

                {/* Blog's Image */}
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
                        margin: 5
                    }}
                >
                    <img
                        src={IsroVisit}
                        alt="Team Image"
                        style={{
                            maxWidth: "100%",
                            width: "100%",
                            height: "80%",
                            padding: 16,
                            margin: 15,
                            border: "2px solid white"
                        }}
                    />
                </Box>

                {/* Blog's Content */}
                <Typography
                    gutterBottom
                    component={motion.div}
                    ref={textRef}
                    initial="hidden"
                    animate={textInView ? "visible" : "hidden"}
                    variants={fadeInVariants}
                    sx={{
                        fontFamily: theme.typography.fontFamily,
                        fontSize: isSmallScreen ? 25 : 45,
                        color: "black",
                        marginTop: 5,
                        marginBottom: 15,
                        display: "flex",
                        position: "relative",
                        top: "25px",
                        left: "10px"
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro fugit dolores nemo quasi delectus perferendis dolorum voluptates. Facilis, vitae delectus voluptatum ducimus ipsam odit totam sequi dolorem suscipit voluptas.

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sed ipsum magni, sit itaque, nulla et porro quia facilis officiis debitis cumque. Obcaecati quam illo quae quia, soluta amet ex.
                </Typography>
            </Container>

            {/* Footer */}
            <Footer isSmallScreen={isSmallScreen} />
        </div>
    )

};
