import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 3000;
const app = express();

// app.get("/", (req, res) => {
//   res.send("<h1>Homepage</h1>");
// });

app.get("/", function (req, res) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/echo/:message", (req, res) => {
  // res.json({ route: req.params.message });
  res.send(req.params.message);
  // if (req.params.message === "secret") {
  //   ("the secret is... 42!");
  // }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use(express.json());
