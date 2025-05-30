const LETTER_POOL = {
  A: 9,  B: 2,  C: 2,  D: 4,  E: 12,
  F: 2,  G: 3,  H: 2,  I: 9,   J: 1,
  K: 1,  L: 4,  M: 2,  N: 6,   O: 8,
  P: 2,  Q: 1,  R: 6,  S: 4,   T: 6,
  U: 4,  V: 2,  W: 2,  X: 1,   Y: 2,
  Z: 1
};

const SCORE_CHART = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10
};

export const drawLetters = () => {

  const bag = [];
  for (const letter in LETTER_POOL) {
    const freq = LETTER_POOL[letter]; 
    for (let i = 0; i < freq; i++) {
      bag.push(letter);
    }
  }

  const hand = [];
  for (let i = 0; i < 10; i++) {
    const randIndex = Math.floor(Math.random() * bag.length);
    hand.push(bag[randIndex]);
    bag.splice(randIndex, 1);
  }

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

  const upperWord = word.toUpperCase();

  let totalScore = 0;

  for (const char of upperWord) {
    totalScore += SCORE_CHART[char] || 0;
    }

  if (upperWord.length >= 7 && upperWord.length <= 10) {
    totalScore += 8;
  }

  return totalScore;

};

export const highestScoreFrom = (words) => {
  if (words.length === 0) {
    return { word: "", score: 0 };
  }

  let bestWord = words[0];
  let bestScore = scoreWord(bestWord);

  for (const word of words.slice(1)) {
    const score = scoreWord(word);

    if (score > bestScore) {
      bestWord = word;
      bestScore = score;
    } else if (score === bestScore) {
      const bestIsTen   = bestWord.length === 10;
      const thisIsTen   = word.length === 10;
      const thisIsShort = word.length < bestWord.length;

      if (thisIsTen && !bestIsTen) {
        bestWord = word;
      }
      else if (!bestIsTen && !thisIsTen && thisIsShort) {
        bestWord = word;
      }
    }
  }

  return { word: bestWord, score: bestScore };
};







