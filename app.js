const express = require("express");

class App {
  constructor() {}

  static getInstance() {
    if (!App.instance) {
      App.instance = new App();
      App.instance.server = express();
      App.instance.router = express.Router();
    }
    return App.instance;
  }
}

module.exports = App;
