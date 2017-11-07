# testest package

Angular package description

## Development

### Commands available for package development

Within the package directory there are a number of commands to help you develop and launch a new package. 
Several gulp tasks are available to manage the package:

```bash
$ cd pkg
$ gulp --tasks
[16:13:41] ├── clean
[16:13:41] ├── copy-html-css
[16:13:41] ├── transpile
[16:13:41] ├── rollup
[16:13:41] ├── replace-ng-template-styles
[16:13:41] ├── minify
[16:13:41] ├── copy-package
[16:13:41] ├── test
[16:13:41] ├── test:ci
[16:13:41] ├─┬ dev
[16:13:41] │ └── build
[16:13:41] ├── build
[16:13:41] └─┬ default
[16:13:41]   └── build
```

- **clean**: Clears the dist directory (packages releases directory).
- **transpile**: Compiles the typescript files for javascript with AoT support.
- **copy-html-css**: Copy the template and css files to directory dist from the package.
- **rollup**: Generates a package bundle using the UMD format.
- **minify**: Compresses the generated bundle through the rollup.
- **replace-ng-template-styles**: Task that corrects a problem with the search of templates with relative path (mandatory in the angular). Make templateUrl replace for template: require ('template.html') and styleUrls for styles: [require ('styles.css')].
- **copy-package**: Copy package_dist.json to directory dist from the package.
- **test**: Run tests using karma test runner.
- **test:ci**: Run tests using karma test runner with settings for CI.
- **dev**: Starts a watcher that monitors changes to the code and generates a new test release.
- **build**: Task that is executed when no specific task is passed as parameter. Execute in sequence:
    1. clean
    2. transpile 
    3. copy-html-css
    4. rollup
    5. minify 
    6. replace-ng-template-styles
    7. copy-package

## Testing the package

After generating the build with `gulp build` or` gulp dev` you can test the packages locally by making a link through `NPM` or` Yarn`. Both NPM and Yarn have the link and unlink command to make local packages available for local installation.

With the build generated in `dist/testest` in the root of the repository, you will enter the package directory and execute:

```bash
$ yarn link
```

or 

```bash
$ npm link
```

After successfully generating the link, just go to the project directory and run:

```bash
$ npm link testest
```

or 

```bash
yarn link testest
```

## Making a distribution

To make a release build for a packag just use ```gulp``` command without parameters.

```bash
cd pkg
gulp
```

This command will generate a distribution folder of the package inside ```dist``` directory.

## Publishing package

To publish a packge you need go to the package dist path and run ```npm publish``` or ```yarn publish```:

```bash
cd dist/testest
npm publish
```
