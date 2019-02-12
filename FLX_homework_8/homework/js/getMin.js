function getMin(){
    let minNumber=arguments[0];
    for(let i=0;i<arguments.length;i++){
        if(minNumber>arguments[i+1]){
            minNumber=arguments[i+1];
        }
    }
    return minNumber;
}
getMin(3,0,-3);