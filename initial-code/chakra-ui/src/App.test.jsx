import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import React from "react"
import App from "./App"

expect.extend(toHaveNoViolations)

it("shoud have no a11y errors caught by jest axe", async () => {
  const { container } = render(<App />)
  const results = await axe(container)

  expect(results).toHaveNoViolations()
})
