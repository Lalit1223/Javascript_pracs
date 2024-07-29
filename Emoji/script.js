const emojis = [
    '😊', '🙌', '🎉', '🚀', '🌟', '🍀', '🍕', '🌈', '✨', '🎂', '🥳'
];

const generateBtn = document.getElementById('emojiGenerateBtn');
const emoji = document.querySelector(".emoji span");


//generate random num
generateRandomNumber = ()=>{
    return Math.floor(Math.random()*emojis.length);

}

//generate random 
generateBtn.addEventListener("click",()=>{
    emoji.textContent=emojis[generateRandomNumber()];
})


