formula ->  
    atom | 
    "!" formula | formula "||" formula | formula "&&" formula | 
    formula "U" formula | "G" formula | "F" formula | formula "=>" formula |
    predTerm | "[" sig_out "<-" fxnTerm "]"
predTerm -> "p_0" | "p_1" fxnTerm | "p_2" fxnTerm fxnTerm
fxnTerm -> sig_in | "f_0" | "f_1" fxnTerm | "f_2" fxnTerm fxnTerm 
sig_in -> "inSignal_w" | "inSignal_x"
sig_out -> "outSignal_y" | "outSignal_z"
atom -> "a" | "b"
