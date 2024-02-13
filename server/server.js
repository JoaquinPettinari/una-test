const express = require("express");
const app = express();
const cors = require("cors");
const pa11y = require("pa11y");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

app.post("/analizar", async (req, res) => {
  const url = req.body.url;
  console.log("Fetching...");
  try {
    const pa11yResponse = await pa11y(url, {
      chromeLaunchConfig: { ignoreHTTPSErrors: false },
    });

    res.json({ data: pa11yResponse });
    console.log("Finish fetching");
  } catch (error) {
    if (error.name === "TimeoutError") {
      console.error("El análisis de la página ha tardado demasiado tiempo.");
      res.status(500).json({
        error: "El análisis de la página ha tardado demasiado tiempo.",
      });
    } else {
      console.error("Error durante el análisis de la página:", error);
      res
        .status(500)
        .json({ error: "Error durante el análisis de la página." });
    }
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
