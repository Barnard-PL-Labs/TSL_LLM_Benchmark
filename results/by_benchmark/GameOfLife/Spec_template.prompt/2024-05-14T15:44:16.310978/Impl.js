   function changeState(index) {
       if (comeAlive(index) && !isAlive(index)) {
           setCellState(index, true); // Assuming `setCellState(index, state)` sets the state of the cell
       } else if (comeDead(index) && isAlive(index)) {
           setCellState(index, false);
       }
   }
   