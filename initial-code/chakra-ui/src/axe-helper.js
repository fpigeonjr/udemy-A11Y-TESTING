import { configureAxe } from "jest-axe"

export const axe = configureAxe({
  globalOptions: {
    checks: [
      {
        id: "img-alt-redundant",
        evaluate(node) {
          const altAttr = node.getAttribute("alt")
          if (!altAttr) return true
          return !altAttr.match(/(photo|image|logo)/i)
        },
        metadata: {
          impact: "minor",
          messages: {
            pass: "imag alt tag does not contain redundant text",
            fails: "imag alt tag contains redundant text"
          }
        }
      }
    ],
    rules: [
      {
        id: "img-alt-redundant",
        enabled: true,
        selector: "img", // css selector
        any: ["img-alt-redundant"],
        metadata: {
          description: "Img alt tag should not contain redundant text",
          help: "Img alt tag should not contain redundant text"
        }
      }
    ]
  }
})
