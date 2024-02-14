const express = require("express");
const app = express();
const cors = require("cors");
const pa11y = require("pa11y");
const bodyParser = require("body-parser");
const {
  isAccessible,
  countIssuesByType,
  defaultResponse,
} = require("./utils.js/pa11y");

app.use(bodyParser.json());
app.use(cors());

app.post("/analizar", async (req, res) => {
  const url = req.body.url;
  console.log("Fetching...");
  try {
    const pa11yResponse = await pa11y(url, {
      timeout: 30000,
    });

    const issues = pa11yResponse.issues;
    const issueCountByType = countIssuesByType(issues);
    const { countAprovedIssues, accessible } = isAccessible(issues);

    res.json({
      data: pa11yResponse,
      ok: true,
      issueCountByType,
      accessible,
      countAprovedIssues,
    });
    console.log("Finish fetching");
  } catch (error) {
    if (error.name === "TimeoutError") {
      res.status(500).json({
        ...defaultResponse(
          "El análisis de la página ha tardado demasiado tiempo. Por favor, intente mas tarde.",
          url
        ),
      });
    } else {
      console.error("Error durante el análisis de la página:", error);
      res.status(500).json({
        ...defaultResponse(
          "Error durante el análisis de la página. Por favor, intente mas tarde",
          url
        ),
      });
    }
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
