import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));
app.use(express.json());

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

app.get("/login", (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  res.sendFile(path.join(__dirname + "/login.html"));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log("req.body ", req.body);

  // if (email === "user@example.com" && password === "password") {
  //   res.json({ success: true });
  // } else {
  //   res.json({ success: false });
  // }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// app.use(express.json());
