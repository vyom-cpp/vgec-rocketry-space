import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

interface CardData {
  name: string;
  content: string;
  image: string;
  link: string;
}

interface CardGridProps {
  cards: CardData[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <Grid
      container
      spacing={3} // Adjust the spacing between cards
      sx={{ padding: { xs: 3, md: 5 } }} // Padding for the grid container
    >
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt={card.name}
              height="140"
              image={card.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href={card.link}
                target="_blank"
                sx={{
                  color: "red",
                }}
              >
                Read More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
