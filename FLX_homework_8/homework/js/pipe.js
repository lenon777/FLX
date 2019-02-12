function addOne(x) {
    return x + 1;
  }
function pipe(x){
    
    for(let i=0;i<arguments.length-1;i++){
        x=addOne(x);
    }
    return x;
        
}
pipe(1, addOne);
pipe(1, addOne, addOne);
