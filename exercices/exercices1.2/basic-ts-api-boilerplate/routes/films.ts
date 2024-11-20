import express from "express";

import { Film } from "../types";

const router = express.Router();

const films: Film[] = [
    {
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      duration: 148,
      budget: 160000000,
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the task of planting an idea into the mind of a CEO.",
      imageUrl: "https://example.com/inception.jpg"
    },
    {
      id: 2,
      title: "The Dark Knight",
      director: "Christopher Nolan",
      duration: 152,
      budget: 185000000,
      description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      imageUrl: "https://example.com/thedarkknight.jpg"
    },
    {
      id: 3,
      title: "The Matrix",
      director: "The Wachowskis",
      duration: 136,
      budget: 63000000,
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      imageUrl: "https://example.com/thematrix.jpg"
    },
    {
      id: 4,
      title: "Avatar",
      director: "James Cameron",
      duration: 162,
      budget: 237000000,
      description: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      imageUrl: "https://example.com/avatar.jpg"
    },
    {
      id: 5,
      title: "Titanic",
      director: "James Cameron",
      duration: 195,
      budget: 200000000,
      description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
      imageUrl: "https://example.com/titanic.jpg"
    }
  ];
  

router.get("/", (_req, res) => {
    res.json(films)
});

export default router;