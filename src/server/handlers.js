const handlers = require("./handlers");

const router = (request, response) => {
  if (request.method === "GET") {
    if (request.url === "/") {
      handlers.homeHandler(request, response);
    } else if (request.url.includes("/search?value=")) {
      handlers.searchMatchesHandler(request, response);
    } else if (request.url.includes("/getMatche?id=")) {
      handlers.getMatchesHandler(request, response);
    } else if (request.url.split(".")[1]) {
      handlers.publicHandler(request, response);
    } else {
      handlers.errorHandler(request, response);
    }
  }
};

module.exports = router;
