module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/prettier",
    "@vue/typescript",
    "plugin:prettier/recommended" // add prettier-eslint plugin which will uses the `.prettierrc.js` config
  ],
  rules: {
    //'prettier/prettier': 'error',
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  }
};