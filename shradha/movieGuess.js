var guessMovie = function (){

    const favMovie = "3 idiots";

    var guess =  prompt('Guess my Fav Movie');

    while((guess!=favMovie) && (guess!="quit")){
        guess = prompt('Please try again');
    }

    if(guess==favMovie){
        document.getElementById('result').innerHTML = 'Success!';
    }

    if(guess=="quit"){
        document.getElementById('result').innerHTML = 'You Quite!';
    }


}