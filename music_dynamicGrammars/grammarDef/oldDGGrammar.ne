formula ->
    "!" formula | formula "||" formula | formula "&&" formula |
    formula "U" formula | "G" formula | "F" formula | "X" formula | formula "->" formula |
    formula "<->" formula | "[" sig_out "<-" fxnTerm "]" | sig_in
fxnTerm -> sig_in | note | rhyth
sig_in -> "buttonPress"
sig_out ->  "noteToPlay" | "rhythm"
note -> "E4" | "G4"
rhyth -> "eigthnote" | "halfnote"
