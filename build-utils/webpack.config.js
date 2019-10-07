const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const getAddons = addonArgs => {
  const addons = Array.isArray(addonArgs) ? addonArgs : [addonArgs];
  return addons
    .filter(Boolean)
    .map(name => require(`./addons/webpack.${name}.js`));
};

module.exports = ({ env, addon }) => {
  const envConfig = require(`./webpack.${env}.js`);
  return webpackMerge(commonConfig, envConfig, ...getAddons(addon));
};
