function reverseString(str){
    let reversedStr = '';
    for(let i= str.length-1;i>=0;i-- )
    {
        reversedStr = reversedStr + str[i];
    }
    return reversedStr
}

const userInput = prompt("Enter a string to reverse");

const reversedInput = reverseString(userInput);
console.log("reversed string:",reversedInput);