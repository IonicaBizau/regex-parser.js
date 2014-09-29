var vows = require("vows")
  , assert = require("assert")
  , RegexParser = require("../");

var suite = vows.describe("node-regex-parser");

suite.addBatch({
  "no flags, no delimiters": {
    topic : function(){
        this.callback(RegexParser("hi"));
    },
    "should respond with /hi/" : function(result){
      assert.equal(result, /hi/);
    }
  }
}).export(module);

