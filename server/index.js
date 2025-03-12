const express = require("express");
const app = express();
const PORT = 5000;

//server address = localhost:PORT/api
app.get("/api", (req, res) => {
  res.json([
    {
      id: 1,
      name: "John Doe",
      age: 25,
    },
    {
      id: 2,
      name: "Jane Doe",
      age: 24,
    },
    {
      id: 3,
      name: "Jimmy Doe",
      age: 15,
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
