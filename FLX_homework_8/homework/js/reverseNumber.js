function reverseNumber(arg){
    arg=arg+'';
    let newNumber='';
    for(let i= arg.length-1;i>=0;i--){
        newNumber+=arg[i];
    }
    if (arg.charAt(0)==='-') {
        newNumber= newNumber.replace('-','');
        newNumber='-'+newNumber;
    }
    newNumber=+newNumber;
    return newNumber;
}
reverseNumber(123); 
reverseNumber(-456); 
reverseNumber(10000); 
