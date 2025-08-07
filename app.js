const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let alphabets = [ 'a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let symbols = ['`','~', '!', '@', '#', '$', '%', '^', '&', '*' ,'(', ')', '_','-','=','+','[',']','{','}','[',']' ,'|',';',':','"',',','<','.','>','/','?',"'",'*'];

function number (arr){
    if(arr == numbers) return 10;
    if(arr == alphabets) return 26;
    if(arr == symbols) return 36;
}

function generateCode (userInput){
    let generatedPassword = '';
    let arr = [alphabets, numbers, symbols];
    for (let i = 0; i < userInput; i++) {
       let passwordType = arr[Math.floor(Math.random() * 3)];
       let nuberType = number(passwordType);
       generatedPassword += passwordType[Math.floor(Math.random()* nuberType)]; 
    }
    return generatedPassword;
}

function inputFunction (){
    rl.question('Enter in how many digits you want to create passwoed (min : 8) :', (answer) => {
        if (answer < 8) {
            console.log("Number must be grater than 8 ")
            inputFunction();
        }else {
            let output = generateCode(answer);
            console.log('Your generated password is :',output);
            rl.close();
        } 
    });
}

inputFunction();
