const fs = require("fs-extra");
const concat = require("concat");

build = async () => {
  const files = [
    "./dist/project/runtime.js",
    "./dist/project/polyfills.js",
    // './dist/project/es2015-polyfills.js',
    // './dist/project/scripts.js',
    "./dist/project/main.js",
  ];

  await fs.ensureDir("element");
  await concat(files, "element/news-widget-Three.js");
};
build();
