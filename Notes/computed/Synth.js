if (currentState === 0) {
  if (!button1 && !button2 && button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 0
  }
  else if (!button1 && !button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 0
  }
  else if (!button1 && !button2 && !button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 0
  }
  else if (!button1 && !button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 0
  }
  else if (button1 && button2 && button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 1
  }
  else if (button1 && button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 1
  }
  else if (button1 && button2 && !button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 1
  }
  else if (button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 1
  }
  else if (!button1 && button2 && button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 2
  }
  else if (!button1 && button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 2
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 2
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 2
  }
  else if (button1 && !button2 && button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 3
  }
  else if (button1 && !button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 3
  }
  else if (button1 && !button2 && !button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 3
  }
  else if (button1 && !button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 3
  }
}
else if (currentState === 1) {
  if (!button1 && button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 4
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 4
  }
  else if (button1 && !button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 5
  }
  else if (button1 && !button2 && !button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 5
  }
  else if (button1 && button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 6
  }
  else if (button1 && button2 && !button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 6
  }
  else if (!button1 && !button2) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 7
  }
}
else if (currentState === 2) {
  if (button1 && button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 1
  }
  else if (button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 1
  }
  else if (!button1 && button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 2
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 2
  }
  else if (button1 && !button2 && button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 5
  }
  else if (button1 && !button2 && !button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 5
  }
  else if (!button1 && !button2) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 8
  }
}
else if (currentState === 3) {
  if (button1 && button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 1
  }
  else if (button1 && button2 && !button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 1
  }
  else if (button1 && !button2 && !button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 3
  }
  else if (!button1 && button2 && button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 4
  }
  else if (!button1 && button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 4
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 4
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 4
  }
  else if (!button1 && !button2) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 9
  }
  else if (!button1 && !button2) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 9
  }
  else if (button1 && !button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 10
  }
}
else if (currentState === 4) {
  if (button1 && !button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 5
  }
  else if (button1 && !button2 && !button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 5
  }
  else if (button1 && button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 6
  }
  else if (button1 && button2 && !button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 6
  }
  else if (!button1 && !button2) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 11
  }
  else if (!button1 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 11
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 11
  }
}
else if (currentState === 5) {
  if (button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 4
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 4
  }
  else if (button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 4
  }
  else if (!button1 && !button2) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 12
  }
  else if (!button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 12
  }
  else if (button1 && !button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 12
  }
}
else if (currentState === 6) {
  if (button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 4
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 4
  }
  else if (button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 4
  }
  else if (!button1 && !button2) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 7
  }
  else if (button1 && !button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 12
  }
  else if (button1 && !button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 12
  }
}
else if (currentState === 7) {
  if (button1 && button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 1
  }
  else if (button1 && button2 && !button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 1
  }
  else if (!button1 && button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 13
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 13
  }
  else if (!button1 && !button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 14
  }
  else if (!button1 && !button2 && !button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 14
  }
  else if (button1 && !button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 15
  }
  else if (button1 && !button2 && !button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 16
  }
}
else if (currentState === 8) {
  if (button1 && button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 1
  }
  else if (button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 1
  }
  else if (!button1 && button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 2
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 2
  }
  else if (!button1 && !button2) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 8
  }
  else if (button1 && !button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 16
  }
  else if (button1 && !button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 16
  }
}
else if (currentState === 9) {
  if (button1 && button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 1
  }
  else if (button1 && button2 && !button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 1
  }
  else if (button1 && !button2 && !button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 3
  }
  else if (button1 && !button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 10
  }
  else if (!button1 && button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 13
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 13
  }
  else if (!button1 && !button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 17
  }
  else if (!button1 && !button2 && !button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 17
  }
}
else if (currentState === 10) {
  if (button1 && button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 1
  }
  else if (button1 && button2 && !button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 4
  }
  else if (button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 4
  }
  else if (!button1 && button2 && button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 4
  }
  else if (!button1 && button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 4
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 4
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 4
  }
  else if (button1 && !button2 && !button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 9
  }
  else if (button1 && !button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 9
  }
  else if (!button1 && !button2) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 9
  }
  else if (!button1 && !button2) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 9
  }
  else if (button1 && !button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 10
  }
}
else if (currentState === 11) {
  if (button1 && button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 1
  }
  else if (button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 1
  }
  else if (!button1 && button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 13
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 13
  }
  else if (button1 && !button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 16
  }
  else if (button1 && !button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 16
  }
  else if (!button1 && !button2) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 18
  }
}
else if (currentState === 12) {
  if (button1 && button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 1
  }
  else if (button1 && button2 && !button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 1
  }
  else if (!button1 && button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 13
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 13
  }
  else if (button1 && !button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 15
  }
  else if (button1 && !button2 && !button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 16
  }
  else if (!button1 && !button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 19
  }
  else if (!button1 && !button2 && !button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 19
  }
}
else if (currentState === 13) {
  if (button1 && button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 1
  }
  else if (button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 1
  }
  else if (button1 && !button2 && button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 5
  }
  else if (button1 && !button2 && !button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 5
  }
  else if (!button1 && !button2) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 11
  }
  else if (!button1 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 11
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 11
  }
}
else if (currentState === 14) {
  if (button1 && button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 1
  }
  else if (button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 1
  }
  else if (!button1 && button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 13
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 13
  }
  else if (button1 && !button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 16
  }
  else if (button1 && !button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 16
  }
  else if (!button1 && !button2) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 18
  }
}
else if (currentState === 15) {
  if (button1 && button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 1
  }
  else if (button1 && button2 && !button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 4
  }
  else if (button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 4
  }
  else if (!button1 && button2 && button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 4
  }
  else if (!button1 && button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 4
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 4
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 4
  }
  else if (!button1 && !button2) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 12
  }
  else if (!button2 && button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 12
  }
  else if (!button1 && !button2) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 12
  }
  else if (!button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 12
  }
  else if (button1 && !button2 && !button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 12
  }
  else if (button1 && !button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 12
  }
}
else if (currentState === 16) {
  if (button1 && button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 1
  }
  else if (button1 && button2 && !button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 1
  }
  else if (!button1 && button2 && button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 4
  }
  else if (!button1 && button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 4
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 4
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 4
  }
  else if (!button2 && button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 12
  }
  else if (!button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 12
  }
  else if (!button2 && !button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 12
  }
  else if (!button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 12
  }
}
else if (currentState === 17) {
  if (button1 && button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 1
  }
  else if (button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 1
  }
  else if (button1 && !button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 3
  }
  else if (button1 && !button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 3
  }
  else if (!button1 && button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 13
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 13
  }
  else if (!button1 && !button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 17
  }
  else if (!button1 && !button2 && !button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 17
  }
}
else if (currentState === 18) {
  if (button1 && button2 && button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 1
  }
  else if (button1 && button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 1
  }
  else if (button1 && button2 && !button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 1
  }
  else if (button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 1
  }
  else if (!button1 && button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 13
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 13
  }
  else if (button1 && !button2 && button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 16
  }
  else if (button1 && !button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 16
  }
  else if (button1 && !button2 && !button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 16
  }
  else if (button1 && !button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 16
  }
  else if (!button1 && !button2) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 18
  }
  else if (!button1 && !button2) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 18
  }
}
else if (currentState === 19) {
  if (button1 && button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 1
  }
  else if (button1 && button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 1
  }
  else if (!button1 && button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 13
  }
  else if (!button1 && button2 && !button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 13
  }
  else if (button1 && !button2 && button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 16
  }
  else if (button1 && !button2 && !button3) {
    noteToPlay = G4
    noteToPlay2 = A4
    currentState = 16
  }
  else if (!button1 && !button2 && button3) {
    noteToPlay = E4
    noteToPlay2 = noteToPlay2
    currentState = 19
  }
  else if (!button1 && !button2 && !button3) {
    noteToPlay = noteToPlay
    noteToPlay2 = A4
    currentState = 19
  }
}