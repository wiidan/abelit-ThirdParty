process.env.VUE_APP_VERSION = require("./package.json").version;

module.exports = {
  // config
  assetsDir: "static", // For simple configuration of static files in Flask (the "static_folder='client/dist/static'" part in app.py)
  devServer: {
<<<<<<< HEAD
    proxy: 'http://localhost:5000/',// So that the client dev server can access your Flask routes
=======
    proxy: "http://10.10.10.200:55001/", // So that the client dev server can access your Flask routes
>>>>>>> 5f5ee7a6cd7f459c70033ff2994677225a11b0ca
    // host: 'localhost',
    // port: 8080,

    // auto open browser
    open: true
  }
};
