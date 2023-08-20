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
  '**********': ' ',
};

const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";

function decode(expr) {
  let newArr = Array.from(expr);
  let newArrLetter = [];
  let res = [];
  let result = [];
  let j = 0;
  for(let i = 0; i < newArr.length; i = i + 10){
      newArrLetter[j] = newArr.slice(i, i+10);
      j+=1;  
  }
  
  for(let i = 0; i < newArrLetter.length; i = i + 1){
    for(let j = 0; j < newArrLetter[i].length-1; j = j + 2){
      if(newArrLetter[i][j]+newArrLetter[i][j+1] === '00'){
        newArrLetter[i][j] = 'del';
        newArrLetter[i][j+1] = 'del';;
      } else 
      if(newArrLetter[i][j]+newArrLetter[i][j+1] === '10'){
        newArrLetter[i][j] = 'del';
        newArrLetter[i][j+1] = '.';
      } else
      if(newArrLetter[i][j]+newArrLetter[i][j+1] === '11'){
        newArrLetter[i][j] = 'del';
        newArrLetter[i][j+1] = '-';
      }
    }  
}
res = newArrLetter.map(el => el.filter(el1 => el1 != 'del'));
res = res.map(el => el.reduce((a,b) => a+b ));

res.forEach(function(el){
  Object.keys(MORSE_TABLE).forEach(function(key, value){
    if(key === el){    
      result.push(Object.values(MORSE_TABLE)[value]);
    }
  })
});

return result.join('');
}


