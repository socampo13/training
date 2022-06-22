//TEST FOR LINKS WITH A PARTICULAR TERM
const filterByTerm = require('./examples.js');

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
      const input = [
        { id: 1, url: "https://www.facebook.com" },
        { id: 2, url: "https://www.url2.dev" },
        { id: 3, url: "https://www.link3.dev" }
      ];
  
      const output = [{ id: 3, url: "https://www.link3.dev" }];
  
      expect(filterByTerm(input, "link")).toEqual(output);
      
    });
  });


//TEST FOR UPPERCASE WITH A PARTICULAR TERM
  describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
      const input = [
        { id: 1, url: "https://www.url1.dev" },
        { id: 2, url: "https://www.url2.dev" },
        { id: 3, url: "https://www.link3.dev" }
      ];
  
      const output = [{ id: 3, url: "https://www.link3.dev" }];
  
      expect(filterByTerm2(input, "link")).toEqual(output);
  
      expect(filterByTerm2(input, "LINK")).toEqual(output);
    });
});
  
  function filterByTerm2(inputArr, searchTerm) {
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function(arrayElement) {
      return arrayElement.url.match(regex);
    });
}