var a = prompt('Enter a');
var b = prompt('Enter b');
var c = prompt('Enter c');
var x;
var x1;
var x2;
var message;
a=+a;
var d =b*b-(4*a*c);
if(a===null||b===null||c===null||a===0||a===''||b===''||c===''||isNaN(a)||isNaN(b)||isNaN(c)){
    message = 'Invalid input data';
} else if(d===0){
    x= -b/(2*a);
    message= 'x = '+ x;
}else if(d<0){
    message ='no solution';   
} else if(d>0){
    d=Math.sqrt(d);
    x1=(-b+d)/(2*a);
    x2=(-b-d)/(2*a);
    message= 'x1= '+x1+' x2= '+x2;

}
alert(message);
 