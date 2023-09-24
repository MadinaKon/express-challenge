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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use(express.json());
