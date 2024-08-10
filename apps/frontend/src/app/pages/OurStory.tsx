import React, { useEffect } from "react";
import {
    Container,
    Typography,
    Box,
    useMediaQuery,
    Button
} from "@mui/material";
import { Navbar } from "../components/Navbar";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { theme } from "../theme";
import { Footer } from "../components/Footer"
import SpaceX from "/spacex.jpg";

const storyLineImages = [
    {
        date: "Date 1",
        title: "VRT Founded",
        image: SpaceX
    },
    {
        date: "Date 2",
        title: "Title 2",
        description: "Description 2",
        image: SpaceX
    },
    {
        date: "Date 3",
        title: "Title 3",
        description: "Description 3",
        image: SpaceX
    },
    {
        date: "Date 4",
        title: "Title 4",
        description: "Description 4",
        image: SpaceX
    },
    {
        date: "Date 5",
        title: "Title 5",
        description: "Description 5",
        image: SpaceX
    },
    {
        date: "Date 6",
        title: "Title 6",
        description: "Description 6",
        image: SpaceX
    },
    {
        date: "Date 7",
        title: "Title 7",
        description: "Description 7",
        image: SpaceX
    },
    {
        date: "Date 8",
        title: "Title 8",
        description: "Description 8",
        image: SpaceX
    },
    {
        date: "Date 9",
        title: "Title 9",
        description: "Description 9",
        image: SpaceX
    },
    {
        date: "Date 10",
        title: "Title 10",
        description: "Description 10",
        image: SpaceX
    },
];

export const OurStory: React.FC = () => {
    useEffect(() => {
        document.title = "OUR | STORY";
    });

    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div style={{ overflow: "hidden" }}>
            <Navbar />

            <Box
                component="img"
                src={SpaceX}
                alt="Company Timeline"
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            />

            <Container maxWidth={false} sx={{ paddingTop: "250px" }}>
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
                            <Typography variant="h5" component="h5">
                                {item.date}
                            </Typography>

                            <Typography variant="h3" component="h1" fontWeight="bold" sx={{ marginTop: "20px" }}>
                                {item.title}
                            </Typography>

                            <Typography variant="body1" component="p">
                                {item.description}
                            </Typography>

                            <Box
                                component="img"
                                src={item.image}
                                alt={item.title}
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    marginTop: "10px",
                                    borderRadius: "0px",
                                    boxShadow: "none"
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
                    marginTop: "250px",
                    marginBottom: "30px"
                }}
            >
                AND WE'RE JUST GETTING STARTED
            </Typography>

            <Button
                variant="outlined"
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
