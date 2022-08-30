export function queryString(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}
export function parse(queryString) {
  return Object.fromEntries(
    queryString.split("&").map((item) => item.split("="))
  );
}
