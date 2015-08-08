module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./app.js",
    html: "./index.html",
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },

      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      }

    ],
  },
}


//index.html is what we're rendering, but webpack needs a copy of the file in our dist folder so we can use it