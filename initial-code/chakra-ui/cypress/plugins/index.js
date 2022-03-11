/* eslint-disable no-unused-vars */
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse")
// eslint-disable-next-line import/no-extraneous-dependencies
const ReportGenerator = require("lighthouse/report/generator/report-generator")
const fs = require("fs")

module.exports = (on, config) => {
  on("before:browser:launch", (browser = {}, launchOptions) => {
    prepareAudit(launchOptions)
  })

  on("task", {
    lighthouse: lighthouse((lighthouseReport) => {
      fs.writeFileSync(
        "cypress/reports/lhreport.html",
        ReportGenerator.generateReport(lighthouseReport.lhr, "html")
      )
    })
  })
}
