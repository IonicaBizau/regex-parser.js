// Constructor
var RegExpParser = module.exports = {};

/**
 * parse
 * Parses a string input
 *
 * @name parse
 * @function
 * @param {String} input the string input that should be parsed as regular
 * expression
 * @return {RegExp} The parsed regular expression
 */
RegExpParser.parse = function(input) {

    // Validate input
    if (typeof input !== "string") {
        throw new Error("Invalid input. Input must be a string");
    }

    var m = input.match(/(\/?)(.+)\1([a-z]*)/i);

    return new RegExp(m[2], m[3]);
};
