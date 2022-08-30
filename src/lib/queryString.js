module.exports = {
  queryString: (obj) =>
    Object.entries(obj)
      .map(([key, value]) => `${key}=${value}`)
      .join("&"),
  parse: (queryString) =>
    Object.fromEntries(queryString.split("&").map((item) => item.split("="))),
};
