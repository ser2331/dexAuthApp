// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "indent": ["error", 4],
        "max-len": ["error", { "code":  180 }],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-props-no-spreading": "off",
        "import/prefer-default-export": "off",
        "linebreak-style": "off",
        "no-undef": "off",
        "react/button-has-tybe": "off",
        "no-case-declarations": "off",
        "no-return-await": "off",
        "camelcase": "off",
        "global-require": "off",
        "object-curly-spacing": ["error", "always"],
        "object-curly-newline": ["error", {
            "ExportDeclaration": { "multiline": true, "minProperties": 5 }
        }],
    }
}
