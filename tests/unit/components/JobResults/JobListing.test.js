import { render, screen } from "@testing-library/vue"
import { RouterLinkStub } from "@vue/test-utils"

import JobListing from "@/components/JobResults/JobListing.vue"

describe("JobListing", () => {
  describe("when the prop being passed into the component", () => {
    const renderJobListing = (jobProps) => {
      render(JobListing, {
        global: {
          stubs: {
            RouterLink: RouterLinkStub
          }
        },
        props: {
          job: {
            title: "Frontend",
            organization: "AirBnb",
            locations: ["Kyiv"],
            minimumQualifications: ["Coding"],
            ...jobProps
          }
        }
      })
    }

    it("displays title from prop", () => {
      const jobProps = { title: "Software Designer" }
      renderJobListing(jobProps)

      const title = screen.getByText("Software Designer")
      expect(title).toBeInTheDocument()
    })

    it("displays organization from prop", () => {
      const jobProps = { organization: "Google" }
      renderJobListing(jobProps)

      const organization = screen.getByText("Google")
      expect(organization).toBeInTheDocument()
    })

    it("displays location(s) from prop", () => {
      const jobProps = { locations: ["Kyiv", "Odessa"] }
      renderJobListing(jobProps)

      const location1 = screen.getByText("Kyiv")
      const location2 = screen.getByText("Odessa")

      expect(location1).toBeInTheDocument()
      expect(location2).toBeInTheDocument()
    })

    it("displays qualification(s) from prop", () => {
      const jobProps = {
        minimumQualifications: ["1+ year of experience", "Able to connect to backend"]
      }
      renderJobListing(jobProps)

      const qualification1 = screen.getByText("1+ year of experience")
      const qualification2 = screen.getByText("Able to connect to backend")

      expect(qualification1).toBeInTheDocument()
      expect(qualification2).toBeInTheDocument()
    })
  })
})
