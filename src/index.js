const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

function decode(expr) {
  let str = '';

  for (let i = 0; i < expr.length; i += 10) {
    let letter = expr.slice(i, i + 10);
    let morseCode = '';
    if (letter === '**********') {
      str += ' ';
    };

    for (let j = 0; j < letter.length; j += 2) {
      let symbol = letter.slice(j, j + 2);
      if (symbol === '10') { morseCode += '.' };
      if (symbol === '11') { morseCode += '-' };
    }

    for (let key in MORSE_TABLE) {
      if (key === morseCode) {
        str += MORSE_TABLE[key];
      }
    }

  }

  return str;
}

module.exports = {
  decode
}