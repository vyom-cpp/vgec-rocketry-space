import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  useMediaQuery,
} from "@mui/material";
import { theme } from "../theme";
import { color, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CardData {
  name: string;
  content: string;
  image: string;
  link: string;
}

interface CardGridProps {
  cards: CardData[];
  isDarkMode: boolean;
}


const CardGrid: React.FC<CardGridProps> = ({ cards, isDarkMode }) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
    <Grid
    container
    spacing={3} // Adjust the spacing between cards
    sx={{ padding: { xs: 3, md: 5 } }} // Padding for the grid container
    >
      {cards.map((card, index) => {
      const { ref: cardRef, inView: cardRefView } = useInView({
          triggerOnce: true,
          threshold: isSmallScreen ? 0.001 : 0.1,
      });  
      const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8} },
      };

       return (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              backgroundColor: !isDarkMode ? "white" : "black",
              color: !isDarkMode ? "black" : "white",
              maxWidth: 450,
              boxShadow: 0,
            }}
            component={motion.div}
            ref={cardRef}
            initial="hidden"
            animate={cardRefView ?  "visible": "hidden"}
            variants={fadeInVariants}
          >
            <CardMedia
              component="img"
              alt={card.name}
              height="200"
              image={card.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.name}
              </Typography>
              <Typography variant="body2">{card.content}</Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                href={card.link}
                target="_blank"
                sx={{
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                   border: "none",
                   borderRadius: 0,
                  "&:hover": {
                    variant: "contained",
                    backgroundColor: theme.palette.primary.light,
                    color: "white",
                    border: "none"
                  },
                }}
              >
                <Typography fontFamily="Roboto" fontSize="18px">
                  Read More
                </Typography>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      )})}
    </Grid>
  );
};

export default CardGrid;
