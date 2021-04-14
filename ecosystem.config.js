module.exports = {
  apps: [
    {
      name: "official_m",
      script: "./node_modules/nuxt/bin/nuxt.js",
      watch: true,
      exec_mode: "fork",
      cwd: "",
      args: "start",
      env_development: {
        PORT: 4000,
        NODE_ENV: "development"
      },
      env_production: {
        PORT: 9000,
        NODE_ENV: "production"
      }
    }
  ]
};
