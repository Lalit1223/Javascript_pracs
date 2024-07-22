function reverseString(str){
    let reversedStr = '';
    for(let i= str.length-1;i>=0;i-- )
    {
        reversedStr = reversedStr + str[i];
    }
    return reversedStr
}

function main(){
const userInput = prompt("Enter a string to reverse");
if(userInput==null){
    return
}
else{
const reversedInput = reverseString(userInput);
console.log("reversed string:",reversedInput);
}
}

main();