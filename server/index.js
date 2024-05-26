import http from "http";
import express from "express";

const hostname = "127.0.0.1";
const port = 3001;

const app = express();

app.get("/", (req, res) => {
  res.send("Server running");
});

app.post("/token", (req, res) => {
  // TODO create metadata
  app.use(express.json());
  const data = req.body;
  console.log("data:", data);
});

app.get("/token/:id", (req, res) => {
  const id = req.params.id;
  console.log("Get token info: ", id);
  const metadata = { id }; // TODO get metadata
  if (id && metadata) {
    res.json(metadata);
  } else {
    res.status(404).send("Token not found");
  }
});

app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
