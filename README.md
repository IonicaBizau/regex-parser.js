# regex-parser [![Support this project][donate-now]][paypal-donations]

A module that parses a string as regular expression and returns the parsed value.

## Installation

```sh
$ npm i --save regex-parser
```

## Example

```js
// Dependencies
var RegexParser = require("regex-parser");

console.log(RegexParser("/^hi$/g"));
// => /^hi$/g
```

## Documentation

### `RegexParser(input)`
Parses a string input.

#### Params
- **String** `input`: The string input that should be parsed as regular expression.

#### Return
- **RegExp** The parsed regular expression.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`bible`](https://github.com/BibleJS/BibleApp)

 - [`bible.js`](https://github.com/BibleJS/bible.js)

 - [`statique`](https://github.com/IonicaBizau/node-statique)

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md