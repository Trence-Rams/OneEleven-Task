const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/api/sort-string", (req, res) => {
  try {
    if (!req.body || !req.body.data) {
      return res.status(400).json({ error: "Missing required field: data" });
    }

    const sortedArray = req.body.data.split("").sort();
    res.json({ word: sortedArray });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
