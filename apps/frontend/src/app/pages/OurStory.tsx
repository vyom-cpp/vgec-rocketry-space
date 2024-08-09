import React, { useEffect } from "react";
import {
    Container,
    Typography,
    Box,
    useMediaQuery
} from "@mui/material";
import { Navbar } from "../components/Navbar";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { theme } from "../theme";
import SpaceX from "/spacex.jpg";

const storyLineImages = [
    {
        date: "Date 1",
        title: "VRT Founded",
        image: SpaceX,
    },
    {
        date: "Date 2",
        title: "Title 2",
        image: SpaceX,
    },
    {
        date: "Date 3",
        title: "Title 3",
        image: SpaceX,
    },
    {
        date: "Date 4",
        title: "Title 4",
        image: SpaceX,
    },
    {
        date: "Date 5",
        title: "Title 5",
        image: SpaceX,
    },
    {
        date: "Date 6",
        title: "Title 6",
        image: SpaceX,
    },
    {
        date: "Date 7",
        title: "Title 7",
        image: SpaceX,
    },
    {
        date: "Date 8",
        title: "Title 8",
        image: SpaceX,
    },
    {
        date: "Date 9",
        title: "Title 9",
        image: SpaceX,
    },
    {
        date: "Date 10",
        title: "Title 10",
        image: SpaceX,
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
                <VerticalTimeline>
                    {storyLineImages.map((item, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: "white",
                                color: "#000",
                                borderRadius: "0px",
                                padding: "0px",
                                boxShadow: "0px"
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid  #ddd",
                            }}
                            date={item.date}
                            iconStyle={{
                                background: "black",
                                color: "#fff",
                            }}
                            icon={<span style={{ display: "none" }}></span>}
                        >
                            <Typography variant="h3" component="h1" fontWeight="bold">
                                {item.title}
                            </Typography>
                            <Box
                                component="img"
                                src={item.image}
                                alt={item.title}
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    marginTop: "10px"
                                }}
                            />
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </Container>
        </div>
    );
};
