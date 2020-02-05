const request = require("request");
const handlers = require("../server/handlers");

const search = (req, res, value) => {
  const searchUrl = `http://api.elbotola.com/analytics/matches/?journee=${value}`;
  request(searchUrl, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      handlers.errorHandler(req, res);
    } else {
      // console.log(body, "9999999999");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(body);
    }
  });
};

module.exports = { search };
