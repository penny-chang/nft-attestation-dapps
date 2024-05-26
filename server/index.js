import express from "express";
import path from "path";
import fs from "fs";
import bodyParser from "body-parser";

const port = 3001;
const app = express();
const dataSaveFolder = "./metadata";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server running");
});

app.post("/token", (req, res) => {
  // check and create folder
  if (!fs.existsSync(dataSaveFolder)) {
    fs.mkdirSync(dataSaveFolder, { recursive: true });
  }

  // TODO create metadata
  console.log("post /token", { reqBody: req.body });
  const data = req.body;
  console.log("data:", data);
  if (!data?.id) {
    res.status(400).send("You need to specify token id.");
  }
  const fileName = `token_${data.id}.json`;
  const filePath = path.join(dataSaveFolder, fileName);

  fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error("Error writing file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.status(200).send("Token saved");
  });
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
