const express = require("express");
const router = express.Router();

const Dashboard = require("../src/dashboard/Dashboard.js");

router.get("/", async function (req, res) {
  const dashboard = new Dashboard();
  const dashboardData = await dashboard.create();
  res.json({ dashboard: dashboardData});
});

module.exports = router;