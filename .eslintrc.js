module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single", { "allowTemplateLiterals": true }
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": ["warn", {
            "allow": ["info", "error"]
        }]

    }
};