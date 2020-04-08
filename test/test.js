var request = require("supertest");

var app = require("../server.js");

describe("GET /", function () {
  it("respond with hello world", function (done) {
    //navigate to root and check the response is "hello world"
    request(app).get("/").expect("test_at_port: 3000", done);
  });

  setTimeout(() => {
    process.exit(1);
  }, 1000);
});
