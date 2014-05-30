# node-regex-parser
A small module that parses a string as regular expression and returns the parsed RegExp

## Installation
Run the following commands to download and install the application:

```sh
$ git clone git@github.com:IonicaBizau/node-regex-parser.git node-regex-parser
$ cd node-regex-parser
$ npm install
```

## Example
```js
var RegExpParser = require("regex-parser");
console.log(RegExpParser.parse("/some words/gi"));
```

## Methods

## `parse(input)`
Parses a string input

### Params:
* **String** `input` the string input that should be parsed as regular

### Return:
* **RegExp** The parsed regular expression

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
