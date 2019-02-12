function isBigger(firstArg,secondArg){    
    return firstArg>secondArg;
}
function isSmaller(firstArg,secondArg){
    return isBigger(secondArg,firstArg);
}
isSmaller(5,-1);