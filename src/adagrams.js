const LETTER_POOL = {
  A: 9,  B: 2,  C: 2,  D: 4,  E: 12,
  F: 2,  G: 3,  H: 2,  I: 9,   J: 1,
  K: 1,  L: 4,  M: 2,  N: 6,   O: 8,
  P: 2,  Q: 1,  R: 6,  S: 4,   T: 6,
  U: 4,  V: 2,  W: 2,  X: 1,   Y: 2,
  Z: 1
};

export const drawLetters = () => {

  const bag = [];
  for (const letter in LETTER_POOL) {
    const freq = LETTER_POOL[letter]; 
    for (let i = 0; i < freq; i++) {
      bag.push(letter);
    }
  }
  
  console.log("bag = ");
  console.log(bag);

  const hand = [];
  for (let i = 0; i < 10; i++) {
    const randIndex = Math.floor(Math.random() * bag.length);
    hand.push(bag[randIndex]);
    bag.splice(randIndex, 1);
  }

  console.log("hand = ");
  console.log(hand);

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const handCopy = [...lettersInHand];
  const upperInput = input.toUpperCase();
  
  for (const char of upperInput) {
    const idx = handCopy.indexOf(char);
    if (idx === -1) {
      return false;
    }
    handCopy.splice(idx, 1);
  }
  
  return true;
};


export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
