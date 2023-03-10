import { render, screen } from "@testing-library/vue"
import TheHeadline from "@/components/JobSearch/TheHeadline.vue"
import { nextTick } from "vue"

describe("TheHeadline", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })
  it("shows first action after render", () => {
    render(TheHeadline)

    const heading = screen.getByRole("heading", {
      name: /build for everyone/i
    })

    expect(heading).toBeInTheDocument()
  })

  it("changes action verb at consistent interval", () => {
    const mock = vi.fn()
    vi.stubGlobal("setInterval", mock)

    render(TheHeadline)

    expect(mock).toHaveBeenCalled()
  })

  it("changes 1st action verb to the 2nd action verb after interval", async () => {
    render(TheHeadline)
    vi.advanceTimersToNextTimer()
    await nextTick()

    const heading = screen.getByRole("heading", {
      name: /create for everyone/i
    })
    expect(heading).toBeInTheDocument()
  })

  it("removes interval when component disappears", () => {
    const clearInterval = vi.fn()
    vi.stubGlobal("clearInterval", clearInterval)

    const { unmount } = render(TheHeadline)
    unmount()

    expect(clearInterval).toHaveBeenCalled()
    vi.unstubAllGlobals()
  })
})
