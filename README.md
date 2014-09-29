![RegEx Parser](http://i.imgur.com/rfXVsKw.png)

## Installation
Run the following commands to download and install the module:

```sh
$ git clone git@github.com:IonicaBizau/node-regex-parser.git node-regex-parser
$ cd node-regex-parser
$ npm install
```

## Running tests
To run tests, do `npm test`.

## Example
```js
var RegexParser = require("regex-parser");
console.log(RegexParser("/some words/gi")); // => /some words/gi
```

## Methods

## `module.exports = RegexParser(input)`
Parses a string input

### Params:
* **String** `input` the string input that should be parsed as regular

### Return:
* **RegExp** The parsed regular expression

## Changelog

### `1.0.0`
 - More stable algorithm
 - Added tests
 - Starting with this version, `parse` method is removed. The module exports a
   function.

### `v0.2.0`
 - Changed package name into `regexp-parser`.

### `v0.1.0`
 - Initial release

## How to contribute

1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
