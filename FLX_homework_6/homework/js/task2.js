var amountOfMoney= prompt('Enter amount of money');
var discount = prompt('Enter a discount');
var priceWithdiscount;
var savedMoney;
var message;


function checkInput(price) {
    if(price!==''&&price!==null&&price>=0&&price<=9999999) {
        return true;
    } else {
        return false;
    } 
}

if(checkInput(amountOfMoney)&&checkInput(discount)&&discount<=99){
    amountOfMoney=Math.floor(amountOfMoney*100)/100;
    discount= Math.floor(discount*100)/100;
    priceWithdiscount= (amountOfMoney*(100-discount)/100);
    priceWithdiscount=Math.floor(priceWithdiscount*100)/100; 
    savedMoney = amountOfMoney-priceWithdiscount;
    savedMoney= Math.floor(savedMoney*100)/100;

    message=
    `        Price without discount: ${amountOfMoney}  
        Discount: ${discount}% 
        Price with discount: ${priceWithdiscount}
        Saved: ${savedMoney}`

} else {         
    message ='Invalid input data';
}
alert(message);

