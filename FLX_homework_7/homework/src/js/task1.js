let condition = true;
let login;
let password;
let message;
let time;
while(condition){
    login = prompt('Enter your login');
    if(login===null||login===''){
        message= 'Canceled';
    }else if (login.length<4){
        message ="I don't know any users having name length less than 4 symbols";
    }else if(login==='User'||login==='Admin'){
        break;
    }else {
        message= 'I don’t know you';
    }
    alert(message);
}
while(condition){
    password = prompt('Enter your password');
    if(password===null||password===''){
        message= 'Canceled';
    }else if(password==='UserPass'){
        break;
    }else if(password==='RootPass'){
        break;
    }else{
        message= 'Wrong password'; 
    }
    alert(message);
}
time = new Date().getHours();
if(time<20){
    message= 'Good day, dear '+login;
}else if(time>=20){
    message = 'Good evening, dear '+login;
}
alert(message);
