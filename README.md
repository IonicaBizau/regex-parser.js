
# regex-parser

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/regex-parser.svg)](https://www.npmjs.com/package/regex-parser) [![Downloads](https://img.shields.io/npm/dt/regex-parser.svg)](https://www.npmjs.com/package/regex-parser) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A module that parses a string as regular expression and returns the parsed value.

## :cloud: Installation

```sh
$ npm i --save regex-parser
```


## :clipboard: Example



```js
// Dependencies
var RegexParser = require("regex-parser");

console.log(RegexParser("/^hi$/g"));
// => /^hi$/g
```

## :memo: Documentation


### `RegexParser(input)`
Parses a string input.

#### Params
- **String** `input`: The string input that should be parsed as regular expression.

#### Return
- **RegExp** The parsed regular expression.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`adjust-sourcemap-loader`](https://github.com/bholloway/adjust-sourcemap-loader) (by bholloway)—Webpack loader that adjusts source maps
 - [`bible`](https://github.com/BibleJS/BibleApp)—Read the Holy Bible via the command line.
 - [`bible.js`](https://github.com/BibleJS/bible.js)—The Bible as a NPM module.
 - [`gene-js`](https://github.com/nicosommi/gene-js) (by nicosommi)—a gdd utility
 - [`leadconduit-custom`](https://github.com/activeprospect/leadconduit-integration-custom#readme) (by Alex Wolfe)—LeadConduit custom integration
 - [`starts-with-emoji`](https://github.com/IonicaBizau/starts-with-emoji#readme)—Check if a string starts with an emoji.
 - [`statique`](https://github.com/IonicaBizau/statique)—A Node.JS static server module with built-in cache options and route features.
 - [`tpipe`](https://github.com/nicosommi/tpipe) (by nicosommi)—piper
 - [`tpipe-express`](https://github.com/nicosommi/tpipe-express) (by nicosommi)—tpipe common mappings for express

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
