const result = document.getElementById('result');
// const result = document.getElementById('header');
const myInput1 = document.getElementById('input1');
const myInput2 = document.getElementById('input2');



// function thing(x) {
    //     if(x) {
        //         return parseFloat(myInput1.value)
        //     }
        //     else {
            //         return parseFloat(myInput2.value)
            //     }
            // }
            
            
            // let operators = ['+','-','*','/']
            
            // console.log(1 operators[2] 2)
            
/*
const result = document.getElementById('result');
const myInput1 = document.getElementById('input1');

function thing(x) {
    if (x <= 9) return "Morning";
    else if (x <= 13) return "Afternoon";
    else if (x <= 17) return "Evening";
    else if (x <= 20) return "Night";
    else return "not a valid time";
}
function button(x) {
    thing(myInput1.value);
    result.innerText = `Good ${times[thing(parseFloat(myInput1.value))]}`;
}
*/

// function button1(x) {
//     switch (x){
//     case 1:
//         for (let i = 0; i < 10000; i++) {
//             if(i % 3 && i % 5) {
//                 console.log(i + " fizzbuzz");
//             }
//             else if(i % 5) {
//                 console.log(i + " fizz");
//             }
//             else if(i % 3) {
//                 console.log(i + " buzz");
//             }
//         }
//     break;
//     case 2:

//     break;
//     case 3:

//     break;
//     case 4:

//     break;
//     default:
//     }
// }
// let byu = "Where is the after party at?"
// let thing = 100000;


// function thing(...stringsArr) {
//     let longestString = "";
//     for (let i = 0; i < stringsArr.length; i++) {
//         if (longestString.length < stringsArr[i].length) {
//             longestString = stringsArr[i]
//         }
//     }
//     return longestString;
// }
// console.log(thing("hi", "hello", "longest string right here that's me", "not me", "or me", "me neither"))

// 0 1 1 2 3 5 8 13 21 34

// function recursiveThing(n){
//     if (n <= 1) return n;
//     return recursiveThing(n - 1) + recursiveThing(n - 2)
// }
// console.log(recursiveThing(12));

// function hiThereMr(...items) {
//     let fullPhrase = "";
//     for(let i = 0; i < items.length; i++){
//         fullPhrase += items[i] + "\n"
//     }
//     // console.log(items[0] + "\n" + items[1]);
//     console.log(fullPhrase);

// }


// function concat(...items) {
//     let stringy = "";
//     for (let i = 0; i < items.length; i++) {
//         stringy += items[i];
//     }
//     return stringy;
// }
// const concat1 = (items) => items.reduce(items)


function makeHeader(x){
    result.innerText = x;
}
function concatHeader(x){
    result.innerText += x;
}

function valueOf(x){
    parseFloat(x.innerText);
}


function doMath(val1, val2, operation) {
    switch (operation){
        case '/': return val1 / val2;
        case 'x': return val1 * val2;
        case '-': return val1 - val2;
        case '+': return val1 + val2;
        default:  return "error";
    }
}

const theOperators = ['/','x','-','+'];
const theNumbers = [0,0];
const saveNumbers = [0,0];
let mostRecentOperator = '';

let flip = true;
let flip2 = false;
let counter = 0;
const calcMemory = '';
counter = 0;
// makeHeader(0)
function button(x) {
    let isOperator = false;

    for(let i = 0; i < 4; i++) {
        if (x == theOperators[i]) {
            isOperator = true;
        }
    }
    if(flip) {
        theNumbers[0] = result.innerText;
        theNumbers[0] = parseFloat(theNumbers[0]);
    }
    else {
        theNumbers[1] = result.innerText;
        theNumbers[1] = parseFloat(theNumbers[1]);
        if (flip2) {
            result.innerText = '';
            flip2 = false;
        }
    }
    if(typeof x == typeof 1 || x == '.') {
        concatHeader(x)
    }
    // result.value = result.innerText
    if(isOperator) {
        flip = false;
        saveNumbers[0] = theNumbers[0];
        mostRecentOperator = x;
        flip2 = true;

    }
    if(x == '=') {
        result.innerText = doMath(saveNumbers[0],theNumbers[1], mostRecentOperator)
        theNumbers[0] = doMath(saveNumbers[0],theNumbers[1], mostRecentOperator)
        console.log(`${saveNumbers[0]} ${mostRecentOperator} ${theNumbers[1]} = ${doMath(saveNumbers[0],theNumbers[1], mostRecentOperator)}`)
    }
    if(x == 'clear') {
        result.innerText = '';
        theNumbers[0] = [0];
        theNumbers[1] = [0];
        flip = true;
        saveNumbers[0] = [0];
        saveNumbers[1] = [0];
    }

    console.log( `1: ${flip}, 2: ${flip2}`);
    console.log("theNumbers: " + theNumbers)
    console.log("parseFloat(result.innerText): " + parseFloat(result.innerText))
    console.log("result.innerText: " + result.innerText)
    console.log("result: " + result)
    console.log("saveNumbers: " + saveNumbers)
    console.log("mostRecentOperator: " + mostRecentOperator)
    console.log(parseFloat(theNumbers[0]))
}