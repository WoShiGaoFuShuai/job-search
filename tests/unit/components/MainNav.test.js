import { render, screen } from "@testing-library/vue"
import userEvent from "@testing-library/user-event"

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

  describe("when user logs in", () => {
    it("displays user profile picture", async () => {
      render(MainNav)

      let userProfileImage = screen.queryByRole("img", {
        name: /User profile image/i
      })
      expect(userProfileImage).not.toBeInTheDocument()

      const signInButton = screen.getByRole("button", {
        name: /sign in/i
      })

      await userEvent.click(signInButton)

      userProfileImage = screen.getByRole("img", {
        name: /User profile image/i
      })
      expect(userProfileImage).toBeInTheDocument()
    })
  })
})
