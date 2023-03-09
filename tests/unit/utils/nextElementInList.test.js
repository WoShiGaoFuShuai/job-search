import nextElementInList from "@/utils/nextElementInList.js"

describe("nextElementInList", () => {
  describe("when the element is not the last item in the list", () => {
    it("locates current index, and returns next item in the list", () => {
      const list = ["A", "B", "C", "D", "E"]
      const value = "C"

      const result = nextElementInList(list, value)
      expect(result).toBe("D")
    })
  })

  describe("when the element is last in the item array", () => {
    it("locates current index, and returns next item in the list than should be 1st item", () => {
      const list = ["A", "B", "C", "D", "E"]
      const value = "E"

      const result = nextElementInList(list, value)
      expect(result).toBe("A")
    })
  })
})
