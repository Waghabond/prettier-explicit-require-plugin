# Prettier Plugin Explicit Require Bug
Minimal reproduction of prettier bug: File extension globs not loaded when a plugin is required using require.resolve()

## Steps to Reproduce:
1. Clone the repository. And navigate to the repo's root folder.

2. Run `yarn install`

3. Run `yarn prettier -w examples/` 
   - Only the .js file will get formatted
   - Note that prettier doesn't raise warnings about unknown options in the prettierrc.jc
     - The options **phpVersion** and **wrapAttributes** are provided by the *@prettier/plugin-php* and *@shufo/prettier-plugin-blade* plugins respectively.
     - This implies the plugins are present and explictly loading the plugins has "worked".

4. Reset all files by running `cp originals/* examples/`

5. Run `yarn prettier -w examples/**/*.{js,blade.php,php,gitignore,sh}`
   - This way all the files are formatted successfull.
   - This confirms 2 things:
     1. The plugins are loaded and working.
     2. Prettier is not detecting the extension types declared by the plugins.
