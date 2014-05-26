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
RegExpParser.parse = function (input) {

    // Validate input
    if (typeof input !== "string") {
        throw new Error("Invalid input. Input must be a string");
    }

    // e.g. "/something/gi"
    if (input[0] === "/") {
        // TODO This will fail for: e.g.: "/some/thing/gi"
        var splits = input.split("/");
        return new RegExp(splits[1], splits[2]);
    }

    return new RegExp(input);
};
