const fs = require("fs");
const path = require("path");
const querystring = require("querystring");
const searchMatches = require("../searchMatches/searchMatches.js");

const errorHandler = (request, response) => {
  response.writeHead(404, { "content-type": "text/html" });
  response.end("<h1> Page Not Found </h1>");
};

const homeHandler = (request, response) => {
  const htmlPath = path.join(__dirname, "..", "..", "public", "index.html");
  fs.readFile(htmlPath, (error, htmlFile) => {
    if (error) {
      response.writeHead(500, { "content-Type": "text/html" });
      response.end("<h1> Server error! sorry</h1>");
      return;
    }
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(htmlFile);
    response.end();
  });
};

const publicHandler = (request, response) => {
  const extension = request.url.split(".")[1];
  const contentTypeMapping = {
    html: "text/html",
    css: "text/css",
    js: "application/js"
  };
  if (!contentTypeMapping[extension]) {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("<h1> Not Found </h1>");
  } else {
    const filePath = path.join(__dirname, "..", "..", "public", request.url);
    fs.readFile(filePath, (error, file) => {
      if (error) {
        errorHandler(request, response);
      }
      response.writeHead(200, {
        "content-type": contentTypeMapping[extension]
      });
      response.end(file);
    });
  }
};

const searchMatchesHandler = (request, response) => {
  if (!request.url.includes("/search?value=")) {
    errorHandler(request, response);
  } else {
    const parsedQuery = querystring.parse(request.url.split("?")[1]);

    searchMatches.search(request, response, parsedQuery.value);
  }
};

module.exports = {
  homeHandler,
  publicHandler,
  searchMatchesHandler,
  errorHandler
};
