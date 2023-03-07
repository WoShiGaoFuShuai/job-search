import { render, screen } from "@testing-library/vue"

import MainNav from "@/components/MainNav.vue"

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav)
    const companyName = screen.getByText("Mali Careers")
    expect(companyName).toBeInTheDocument()
  })

  it("renders menu items in the navbar", () => {
    const arrayInMainNav = ["Teams", "Location", "Life at the company", "How we fire", "Students"]

    render(MainNav)
    const navMenuItems = screen.getAllByRole("listitem")
    const navMenuTexts = navMenuItems.map((item) => item.textContent)

    expect(navMenuTexts).toEqual(arrayInMainNav)
  })
})
