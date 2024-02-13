const express = require("express");
const app = express();
const cors = require("cors");
const pa11y = require("pa11y");
const bodyParser = require("body-parser");
const { isAccessible, countIssuesByType } = require("./utils.js/pa11y");

app.use(bodyParser.json());
app.use(cors());

app.post("/analizar", async (req, res) => {
  const url = "https://unahur.edu.ar" || req.body.url;
  console.log("Fetching...");
  try {
    const pa11yResponse = await pa11y(url, {
      timeout: 30000,
    });

    const issues = pa11yResponse.issues;
    const issueCountByType = countIssuesByType(issues);
    const { countAprovedIssues, isAccessible } = isAccessible(issues);

    res.json({
      data: pa11yResponse,
      ok: true,
      issueCountByType,
      accessible: isAccessible,
      countAprovedIssues,
    });
    console.log("Finish fetching");
  } catch (error) {
    if (error.name === "TimeoutError") {
      console.error("El análisis de la página ha tardado demasiado tiempo.");
      res.status(500).json({
        error: "El análisis de la página ha tardado demasiado tiempo.",
        ok: false,
      });
    } else {
      console.error("Error durante el análisis de la página:", error);
      res
        .status(500)
        .json({ error: "Error durante el análisis de la página.", ok: false });
    }
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
