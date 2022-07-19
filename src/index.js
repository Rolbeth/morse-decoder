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
    // write your solution here
        let res = '';
    let enc = {};
    
    for (let k in MORSE_TABLE) {
        let val = MORSE_TABLE[k];
        let key = k.split('').reduce( (a, e) => { return (e == '-') ? a += '11' : a += '10' }, '').padStart(10,'0');
        enc[key] = val;
    }

    for (let i = 0; i < expr.length; i += 10) {

        let ss = expr.substring(i, i + 10);
        res += (ss === '**********') ? ' ' : enc[ss];
    }

    return res;
}

module.exports = {
    decode
}
