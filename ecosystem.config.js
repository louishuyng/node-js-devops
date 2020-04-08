module.exports = {
  apps: [
    {
      name: "server_master",
      script: "./server.js",
      env: {
        PORT: "4000",
      },
    },
    {
      name: "server_develop",
      script: "./server.js",
      env: {
        PORT: "5000",
      },
    },
  ],
};
