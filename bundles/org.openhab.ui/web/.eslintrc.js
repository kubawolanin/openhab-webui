module.exports = {
  root: true,

  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
  },

  env: {
    browser: true,
  },

  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/essential",
    "@vue/standard",
    "plugin:prettier-vue/recommended",
    "prettier/vue",
  ],

  // required to lint *.vue files
  plugins: ["vue"],

  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true,
  },

  settings: {
    "prettier-vue": {
      SFCBlocks: {
        template: false,

        script: true,

        style: true,

        customBlocks: {
          docs: { lang: "markdown" },
          config: { lang: "json" },
          module: { lang: "js" },
          comments: false,
        },
      },

      usePrettierrc: false,

      fileInfoOptions: {
        withNodeModules: false,
      },
    },
  },

  // add your custom rules here
  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    // allow paren-less arrow functions
    "arrow-parens": "off",
    "one-var": "off",

    "import/first": "off",
    "import/named": "error",
    "import/namespace": "error",
    "import/default": "error",
    "import/export": "error",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "prefer-promise-reject-errors": "off",

    // allow console.log during development only
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // allow debugger during development only
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    "prettier-vue/prettier": [
      "error",
      {
        arrowParens: "avoid",
        endOfLine: "crlf",
        printWidth: 90,
        singleQuote: true,
        spaceAfterFunction: true,
        bracketSpacing: true,
        semi: false,
        useTabs: false,
        tabWidth: 2,
        trailingComma: "none",

        overrides: [
          {
            files: "package.json",
            options: {
              tabWidth: 2,
              endOfLine: "lf",
            },
          },
          {
            files: "*.md",
            options: {
              parser: "markdown",
              tabWidth: 2,
            },
          },
        ],
      },
    ],
  },
};
