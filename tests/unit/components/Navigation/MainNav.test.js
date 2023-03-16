import { render, screen } from "@testing-library/vue"
import userEvent from "@testing-library/user-event"
import { RouterLinkStub } from "@vue/test-utils"
import { createTestingPinia } from "@pinia/testing"
import { useUserStore } from "@/stores/user.js"
import MainNav from "@/components/Navigation/MainNav.vue"

describe("MainNav", () => {
  const renderMainNav = () => {
    const pinia = createTestingPinia()
    const $route = { name: "Home" }

    render(MainNav, {
      global: {
        plugins: [pinia],
        mocks: {
          $route
        },
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub
        }
      }
    })
  }

  it("displays company name", () => {
    renderMainNav()
    const companyName = screen.getByText("Mali Careers")
    expect(companyName).toBeInTheDocument()
  })

  it("renders menu items in the navbar", () => {
    const arrayInMainNav = [
      "Teams",
      "Location",
      "Life at the company",
      "How we fire",
      "Students",
      "Jobs"
    ]

    renderMainNav()
    const navMenuItems = screen.getAllByRole("listitem")
    const navMenuTexts = navMenuItems.map((item) => item.textContent)

    expect(navMenuTexts).toEqual(arrayInMainNav)
  })

  describe("when user logs in", () => {
    it("displays user profile picture", async () => {
      renderMainNav()
      const userStore = useUserStore()

      let userProfileImage = screen.queryByRole("img", {
        name: /User profile image/i
      })
      expect(userProfileImage).not.toBeInTheDocument()

      const signInButton = screen.getByRole("button", {
        name: /sign in/i
      })

      userStore.isLoggedIn = true
      await userEvent.click(signInButton)

      userProfileImage = screen.getByRole("img", {
        name: /User profile image/i
      })
      expect(userProfileImage).toBeInTheDocument()
    })
  })
})
