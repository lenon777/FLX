let prize=0;
let maxPrize=10;
let playGame= confirm('Do you want to play a game?');
if(!playGame){
    alert('You did not become a millionaire, but can.');
}else {
let rangeOfnumbers=5;
let gameNumber= Math.floor(Math.random() * rangeOfnumbers+1) + 0;
let attempt= 1;
while(attempt<=3){
    playGame= false;
    let possiblePrize= maxPrize;
    if(attempt===2){
        possiblePrize=Math.floor(maxPrize/2);
    }else if (attempt===3){
        possiblePrize=Math.floor(maxPrize/4);
    }
    let numberFromUser= prompt(`    Enter a number from 0 to ${rangeOfnumbers}  
    Attempts left: ${(4-attempt)} 
    Total prize: ${prize} 
    Possible prize of current attempt: ${possiblePrize}`);
    numberFromUser =+numberFromUser;
    if(gameNumber===numberFromUser&&attempt===1) {
        prize= maxPrize+ prize;
        playGame= true;
    } else if(gameNumber===numberFromUser&&attempt===2){
        prize=(maxPrize/2)+prize;
        playGame= true;
    }else if(gameNumber===numberFromUser&&attempt===3){
        prize= (maxPrize/4)+prize
        prize= Math.floor(prize);
        playGame= true;
    }else if(gameNumber!==numberFromUser&&attempt===3){
        prize= 0;
        alert('Thank you for a game. Your prize is: '+prize);
        playGame= confirm('Do you want to play again?');
        if(playGame){
            attempt=0;
            maxPrize=10;
            rangeOfnumbers=5;
            gameNumber= Math.floor(Math.random() * rangeOfnumbers+1) + 0;
            playGame=false;
            attempt=1
            continue;
        }else{
            break;
        }  
    }
    attempt++;
    if(playGame){
    rangeOfnumbers*=2;
    gameNumber= Math.floor(Math.random() * rangeOfnumbers+1) + 0;
        playGame= confirm('Congratulation! Your prize is: ' +prize+' Do you want to continue?');
        if(!playGame){
            alert('Thank you for a game. Your prize is: '+prize);
            break;
        }else {
            maxPrize*=3;
            attempt=1;
        }
    }
}
}
