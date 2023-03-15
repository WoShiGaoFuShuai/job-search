import { render, screen } from "@testing-library/vue"
import { RouterLinkStub } from "@vue/test-utils"

import axios from "axios"
vi.mock("axios")

import JobListings from "@/components/JobResults/JobListings.vue"

describe("JobListings", () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams
    }
  })

  const renderJobListings = ($route) => {
    render(JobListings, {
      global: {
        mocks: {
          $route
        },
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })
  }

  it("fetches jobs", () => {
    axios.get.mockResolvedValue({ data: [] })
    const $route = createRoute()
    renderJobListings($route)

    expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs")
  })

  it("displays a job listing for 10 jobs", async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) })
    const $route = createRoute({ page: "1" })
    renderJobListings($route)

    const allItemsJobListing = await screen.findAllByRole("listitem-joblisting")
    expect(allItemsJobListing).toHaveLength(10)
  })

  describe("when query params exclude page number", () => {
    it("displays page number 1", () => {
      const $route = createRoute({ page: undefined })
      renderJobListings($route)

      expect(screen.getByText("Page 1")).toBeInTheDocument()
    })
  })

  describe("when query params include page number", () => {
    it("displays page number equal to query params", () => {
      const $route = createRoute({ page: "5" })
      renderJobListings($route)

      expect(screen.getByText("Page 5")).toBeInTheDocument()
    })
  })

  describe("when user is on first page", () => {
    it("does not show previous page link", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) })
      const $route = createRoute({ page: "1" })
      renderJobListings($route)

      await screen.findAllByRole("listitem-joblisting")

      const previousLink = screen.queryByRole("link", {
        name: /previous/i
      })

      expect(previousLink).not.toBeInTheDocument()
    })

    it("displays next page link", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) })
      const $route = createRoute({ page: "1" })
      renderJobListings($route)

      await screen.findAllByRole("listitem-joblisting")

      const nextLink = screen.queryByRole("link", {
        name: /next/i
      })

      expect(nextLink).toBeInTheDocument()
    })
  })

  describe("when user is on the last page", () => {
    it("displays previous page", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) })
      const $route = createRoute({ page: "2" })
      renderJobListings($route)

      await screen.findAllByRole("listitem-joblisting")

      const previousLink = screen.queryByRole("link", {
        name: /previous/i
      })

      expect(previousLink).toBeInTheDocument()
    })

    it("does not show the next page", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) })
      const $route = createRoute({ page: "2" })
      renderJobListings($route)

      await screen.findAllByRole("listitem-joblisting")

      const nextLink = screen.queryByRole("link", {
        name: /next/i
      })

      expect(nextLink).not.toBeInTheDocument()
    })
  })

  describe("when user is nor on the first and last page", () => {
    it("does show previous and next page", async () => {
      axios.get.mockResolvedValue({ data: Array(30).fill({}) })
      const $route = createRoute({ page: "2" })
      renderJobListings($route)

      await screen.findAllByRole("listitem-joblisting")

      const previousLink = screen.queryByRole("link", {
        name: /previous/i
      })

      const nextLink = screen.queryByRole("link", {
        name: /next/i
      })

      expect(previousLink).toBeInTheDocument()
      expect(nextLink).toBeInTheDocument()
    })
  })
})
