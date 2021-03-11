// import * as path from "path";
const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      modules: [
        // where webpack will find modules for ts, js, jsx, tsx, scss, and other stylesheets
        path.resolve("./src/"),
      ],
      // mainFiles: ["index", "Index"],
      extensions: ["*", ".vue", ".js", ".jsx", ".ts", ".tsx"],
      alias: {
        // to lessen the use of relative paths, usable only for scripting
        // src: path.resolve(__dirname, "./src/"),
      },
    },
  },

  // css: {
  //     loaderOptions: {
  //         sass: {
  //             additionalData: `@use "@/styles";`
  //         }
  //     }
  // }

  // pluginOptions: {
  //   webpack: {
  //     dir: ["./webpack"],
  //   },
  // },
};
