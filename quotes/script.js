const quotes = [
    'The only limit to our realization of tomorrow is our doubts of today.',
    'In the end, it\'s not the years in your life that count. It\'s the life in your years.',
    'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    'Believe you can and you\'re halfway there.',
    'Don\'t watch the clock; do what it does. Keep going.',
    'The future belongs to those who believe in the beauty of their dreams.',
    'You miss 100% of the shots you don\'t take.',
    'Whether you think you can or you think you can\'t, you\'re right.',
    'I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination.',
    'Act as if what you do makes a difference. It does.',
    'The best time to plant a tree was 20 years ago. The second best time is now.',
    'Your time is limited, don\'t waste it living someone else\'s life.',
    'You only live once, but if you do it right, once is enough.',
    'The best way to predict the future is to invent it.',
    'It does not matter how slowly you go as long as you do not stop.',
    'Life is what happens when you\'re busy making other plans.',
    'If life were predictable it would cease to be life, and be without flavor.',
    'The purpose of our lives is to be happy.',
    'Life is short, and it is up to you to make it sweet.',
    'You have within you right now, everything you need to deal with whatever the world can throw at you.',
    'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.',
    'Do not wait; the time will never be "just right." Start where you stand.',
    'The only way to do great work is to love what you do.',
    'The journey of a thousand miles begins with one step.',
    'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    'You must be the change you wish to see in the world.',
    'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.',
    'In three words I can sum up everything I\'ve learned about life: it goes on.',
    'To live is the rarest thing in the world. Most people exist, that is all.',
    'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.',
    'The only thing we have to fear is fear itself.',
    'It is never too late to be what you might have been.',
    'You are never too old to set another goal or to dream a new dream.',
    'The only person you are destined to become is the person you decide to be.',
    'Life isn\'t about waiting for the storm to pass, it\'s about learning how to dance in the rain.',
    'The way to get started is to quit talking and begin doing.',
    'Don\'t let yesterday take up too much of today.',
    'Life is a journey that must be traveled no matter how bad the roads and accommodations.',
    'Be the change that you wish to see in the world.',
    'Keep your face always toward the sunshine—and shadows will fall behind you.',
    'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
    'Happiness is not something ready made. It comes from your own actions.',
    'It is our choices that show what we truly are, far more than our abilities.',
    'The only impossible journey is the one you never begin.',
    'Life is made of ever so many partings welded together.',
    'To succeed in life, you need two things: ignorance and confidence.',
    'The only thing that can grow is the thing you give energy to.',
    'Don\'t be afraid to give up the good to go for the great.',
    'Opportunities don\'t happen. You create them.',
    'You are enough just as you are.'
  ];
  

  const authors =[
    '-Lalit Gandhi',
    '-Deepak Mishra',
    '-Rahul Kabra',
    '-Kiran Patole',
    '-Vaishnavi Wankhede',
    '-Vaishnavi Takalikar',
    '-Shubham pund',
    '-Shrutilaya Jindam',
    '-vinaya k',
  ]
  
const generateBtn = document.getElementById('quotesGenerateBtn');
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");


//generate random num
generateRandomNumber = ()=>{
    return Math.floor(Math.random()*authors.length);
    
}
generateRandomNumber2 = ()=>{
    return Math.floor(Math.random()*quotes.length);
    
}

//generate random 
generateBtn.addEventListener("click",()=>{
    author.textContent=authors[generateRandomNumber()];
    quote.textContent=quotes[generateRandomNumber2()];
})


