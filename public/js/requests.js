const searchRequest = function(value, cb) {
  var searchUrl = "/search?value=" + value;
  fetch(searchUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return cb(null, data);
    })
    .catch(function(error) {
      cb(error);
    });
};
