const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from GitOps 🚀");
  res.send("Hello from the COMPLETE GitOps Pipeline! 🎉");
});

app.listen(3000, () => console.log("Running on 3000"));