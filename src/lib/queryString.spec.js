const { queryString, parse } = require("./queryString");

describe("Object to query string", () => {
  it("shold create a valid query string when an object is provided", () => {
    const obj = {
      name: "Fabio",
      profession: "developer",
    };

    expect(queryString(obj)).toBe("name=Fabio&profession=developer");
  });
});

describe("Query string to object", () => {
  it("should convert a query string to object", () => {
    const qs = "name=Fabio&profession=developer";
    expect(parse(qs)).toEqual({
      name: "Fabio",
      profession: "developer",
    });
  });

  it("should convert a query string of a single key-value pair to object", () => {
    const qs = "name=Fabio";
    expect(parse(qs)).toEqual({
      name: "Fabio",
    });
  });
});
