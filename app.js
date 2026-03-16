const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Adeyinka  Kubernetes CI/CD Pipeline íº€");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

