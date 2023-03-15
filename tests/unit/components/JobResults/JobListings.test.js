import { render, screen } from "@testing-library/vue"
import { RouterLinkStub } from "@vue/test-utils"

import axios from "axios"
vi.mock("axios")

import JobListings from "@/components/JobResults/JobListings.vue"

describe("JobListings", () => {
  it("fetches jobs", () => {
    axios.get.mockResolvedValue({ data: [] })
    render(JobListings)

    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs")
  })

  it("creates a job listing for every job", async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) })

    render(JobListings, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })

    const allItemsJobListing = await screen.findAllByRole("listitem-joblisting")
    expect(allItemsJobListing).toHaveLength(15)
  })
})
