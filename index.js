// require("babel-register")({
//     presets: ['env', 'react', 'stage-2']
// });
require("ignore-styles");
require("babel-register")({
  ignore: /\/(build|node_modules)\//,
  presets: ["react-app"]
});

require("./serverRenderer");