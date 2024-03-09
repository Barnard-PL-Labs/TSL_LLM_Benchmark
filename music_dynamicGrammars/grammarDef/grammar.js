// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "formula", "symbols": ["atom"]},
    {"name": "formula", "symbols": [{"literal":"!"}, "formula"]},
    {"name": "formula$string$1", "symbols": [{"literal":"O"}, {"literal":"R"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "formula", "symbols": ["formula", "formula$string$1", "formula"]},
    {"name": "formula$string$2", "symbols": [{"literal":"A"}, {"literal":"N"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "formula", "symbols": ["formula", "formula$string$2", "formula"]},
    {"name": "formula", "symbols": ["formula", {"literal":"U"}, "formula"]},
    {"name": "formula", "symbols": [{"literal":"G"}, "formula"]},
    {"name": "formula", "symbols": [{"literal":"F"}, "formula"]},
    {"name": "atom", "symbols": [{"literal":"a"}]},
    {"name": "atom", "symbols": [{"literal":"b"}]}
]
  , ParserStart: "formula"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
