import { render, screen } from "@testing-library/vue"
import TheSubnav from "@/components/Navigation/TheSubnav.vue"

describe("THeSubnav", () => {
  const renderTheSubnav = (routeName) => {
    render(TheSubnav, {
      global: {
        mocks: {
          $route: {
            name: routeName
          }
        },
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
  }

  describe("when user is on the jobs page", () => {
    it("displays job count", () => {
      const routeName = "JobResults"
      renderTheSubnav(routeName)

      const jobCount = screen.getByText("1653")
      expect(jobCount).toBeInTheDocument()
    })
  })

  describe("when user is NOT on the jobs page", () => {
    it("does display the icon and text when it is on the jobs page", () => {
      const routeName = "Home"
      renderTheSubnav(routeName)

      const jobCount = screen.queryByText("1653")
      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
