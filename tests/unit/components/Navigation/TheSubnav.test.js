import { render, screen } from "@testing-library/vue"
import TheSubnav from "@/components/Navigation/TheSubnav.vue"

describe("THeSubnav", () => {
  describe("when user is on the jobs page", () => {
    it("displays job count", () => {
      render(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return { onJobResultsPage: true }
        }
      })

      const jobCount = screen.getByText("1653")

      expect(jobCount).toBeInTheDocument()
    })
  })

  describe("when user is NOT on the jobs page", () => {
    it("does display the icon and text when it is on the jobs page", () => {
      render(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return { onJobResultsPage: false }
        }
      })
      const jobCount = screen.queryByText("1653")

      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
