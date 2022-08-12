module.exports = {
    plugins: [require("@prettier/plugin-php"), require("@shufo/prettier-plugin-blade"), require("prettier-plugin-sh")],
    arrowParens: "avoid",
    semi: false,
    phpVersion: "8.1",
    printWidth: 120,
    wrapAttributes: "force-aligned",
    overrides: [
        {
            files: ["*.blade.php"],
            options: {
                parser: "blade",
            },
        },
    ],
}
