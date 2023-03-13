import { render, screen } from "@testing-library/vue"
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue"
import userEvent from "@testing-library/user-event"

describe("JobSearchForm", () => {
  describe("when user submits the form", () => {
    it("sends query and redirect to JobListing page", async () => {
      const push = vi.fn()
      const $router = { push }

      render(JobSearchForm, {
        global: {
          mocks: {
            $router
          },
          stubs: {
            FontAwesomeIcon: true
          }
        }
      })

      const roleInput = screen.getByRole("textbox", {
        name: /role/i
      })

      const locationInput = screen.getByRole("textbox", {
        name: /where/i
      })

      await userEvent.type(roleInput, "frontend")
      await userEvent.type(locationInput, "Kyiv")

      const submitButton = screen.getByRole("button", {
        name: /search/i
      })

      await userEvent.click(submitButton)

      expect(push).toHaveBeenCalledWith({
        name: "JobResults",
        query: {
          role: "frontend",
          location: "Kyiv"
        }
      })
    })
  })
})
