import express from "express";
import path from "path";
import fs from "fs";
import bodyParser from "body-parser";
import cors from "cors";

const port = 3000;
const app = express();
const dataSaveFolder = "./metadata";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3001"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (req, res) => {
  res.send("Server running");
});

app.post("/token/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  console.log("post /token", { id, reqBody: data });

  // check and create folder
  if (!fs.existsSync(dataSaveFolder)) {
    fs.mkdirSync(dataSaveFolder, { recursive: true });
  }

  if (!id) {
    res.status(400).send("You need to specify token id.");
  }
  const fileName = `token_${id}.json`;
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
  if (!id) {
    res.status(404).send("Token not found");
  }
  console.log("Get token info start: ", id);
  const fileName = `token_${id}.json`;
  const filePath = path.join(dataSaveFolder, fileName);
  let unknownMetadata = {
    id,
    description: "Unknown NFT",
    external_url: "http://localhost:3000",
    image:
      "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png",
    name: "Unknown NFT",
  };
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.json(unknownMetadata);
      return;
    }
    try {
      const jsonObject = JSON.parse(data);
      console.log("Parsed JSON object:", jsonObject);
      const metadata = {
        id,
        description: `${jsonObject.description}\n\n Original file name:${jsonObject.fileName}.\n Original file hash: ${jsonObject.fileHash}.`,
        image: jsonObject.imageUrl,
        external_url: jsonObject.externalUrl,
        name: jsonObject.name,
      };
      console.log("Get token info end, metadata:", metadata);
      res.json(metadata);
    } catch (err) {
      console.error("Error parsing JSON:", err);
      res.json(unknownMetadata);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
