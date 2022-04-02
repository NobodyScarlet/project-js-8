//Task 1


// Boolean(Number(’10’)) + 1; // Будет 2
// ‘sub ’ + Number(false); // Будет sub0
// 16  *  ‘      91    ‘ // Будет 1456
// true-70 // Будет -69
// Number(1 + String(1)) + 1 // будет 12


//Task 2


const secondPerHour = 3600;
let hours = Number(prompt('Enter how many hours do you need?'))
let seconds = `${hours} hours = ` + (hours * secondPerHour) + ' seconds'
alert(seconds);

//Task 3

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
alert(num);