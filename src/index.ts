import express from "express";
import posts from "../mock-posts.json";
import { createUniqueId } from "./utils";

const app = express();
const port = 6000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, TypeScript Node Express!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.get("/api/posts/:id", (req, res) => {
  const post = posts.find((post) => post.id.toString() === req.params.id);
  res.json(post);
});

app.post("/api/posts", (req, res) => {
  const id = createUniqueId();

  if (!req.body.title || !req.body.body) {
    res.status(400).json({ error: "Title and body are required" });
    return;
  }

  const newPost = { id, ...req.body };
  posts.push(newPost);
  res.json(newPost);
});

// create a PUT endpoint to update a post

// create a DELETE endpoint to delete a post by id

// create a GET endpoint to search for posts by title
// hint: use req.query to get the title query parameter

// create a GET endpoint to limit the number of posts returned
