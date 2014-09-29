var vows = require("vows")
  , assert = require("assert")
  , RegexParser = require("../../")
  ;

const COMPLEX_REGEX = /(^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$)?(^(?=.*\d)(?=.*[a-z])(?=.*[@#$%^&+=]).*$)?(^(?=.*\d)(?=.*[A-Z])(?=.*[@#$%^&+=]).*$)?(^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$)?/;

var suite = vows.describe("node-regex-parser");

suite.addBatch({
    "no flags, no delimiters": {
        topic: function() {
            this.callback(null, RegexParser("hello world"));
        }
      , "should respond with /hi/": function(err, result) {
            assert.equal(result.toString(), /hello world/.toString());
        }
    }
  , "no flags, with delimiters": {
        topic: function() {
            this.callback(null, RegexParser("/hello world/"));
        }
      , "should respond with /hello world/": function(err, result) {
            assert.equal(result.toString(), /hello world/.toString());
        }
    }
  , "with flags, with delimiters": {
        topic: function() {
            this.callback(null, RegexParser("/hello world/gi"));
        }
      , "should respond with /hello world/gi": function(err, result) {
            assert.equal(result.toString(), /hello world/gi.toString());
        }
    }
  , "start with slash, but no other delimiters": {
        topic: function() {
            this.callback(null, RegexParser("\/hello world"));
        }
      , "should respond with //hello world/": function(err, result) {
            assert.equal(result.toString(), "//hello world/");
        }
    }
  , "slash inside": {
        topic: function() {
            this.callback(null, RegexParser("hello/world"));
        }
      , "should respond with /hello/world/": function(err, result) {
            assert.equal(result.toString(), "/hello/world/");
        }
    }
  , "two slashes, but no flags": {
        topic: function() {
            this.callback(null, RegexParser("hello/wor/ld"));
        }
      , "should respond with /hello/wor/ld/": function(err, result) {
            assert.equal(result.toString(), "/hello/wor/ld/");
        }
    }
  , "simulating flags, but invalid ones": {
        topic: function() {
            this.callback(null, RegexParser("/hello wor/ld"));
        }
      , "should respond with //hello wor/ld/": function(err, result) {
            assert.equal(result.toString(), "//hello wor/ld/");
        }
    }
  , "complex regex inside": {
        topic: function() {
            this.callback(null, RegexParser(COMPLEX_REGEX.toString()));
        }
      , "should respond with correct complex regex": function(err, result) {
            assert.equal(result.toString(), COMPLEX_REGEX.toString());
        }
    }
}).export(module);
