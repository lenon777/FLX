const rootNode = document.getElementById('root');
const zero= 0;
const maxId= 999999999;

let todoItems = [];
if(!localStorage.getItem('myItems')) {
    let myItemsArr2= JSON.stringify(todoItems);
    localStorage.setItem('myItems',myItemsArr2);
} else {
    const returnObj = JSON.parse(localStorage.getItem('myItems'));
    todoItems= returnObj;
}
let myItemsArr;
function mainPage() {
    window.location.hash='/';
    let mainPageWrapper=document.createElement('div');
    rootNode.appendChild(mainPageWrapper);
    let title=document.createElement('h1');
    title.innerText= 'Simple TODO application';
    mainPageWrapper.appendChild(title);
    let redirectToAdd= document.createElement('button');
    redirectToAdd.setAttribute('class','redirect-button');
    redirectToAdd.innerText= 'Add new task';
    mainPageWrapper.appendChild(redirectToAdd);
    const emptyList= document.createElement('h2');
    const ul= document.createElement('ul');
    mainPageWrapper.appendChild(ul);
    const checkedUl= document.createElement('ul');
    mainPageWrapper.appendChild(checkedUl);
    redirectToAdd.onclick= function () {
        window.location.hash = '/add';      
        createPage();
        mainPageWrapper.remove();
    }
    const returnObj = JSON.parse(localStorage.getItem('myItems'));
    if(returnObj.length===zero) {
        mainPageWrapper.appendChild(emptyList);
        emptyList.innerText='TODO is empty';
    }
    for (const todoItem of returnObj) {
        const li= document.createElement('li');
        const checkBoxImg = document.createElement('img');
        const checkBox= document.createElement('button');
        checkBox.appendChild(checkBoxImg);
        if(todoItem.isDone===false) {
            ul.appendChild(li);
            checkBoxImg.setAttribute('src','assets/img/todo-s.png');
        } else {
            checkBoxImg.setAttribute('src','assets/img/done-s.png');
            checkedUl.appendChild(li);
        }
        li.setAttribute('class','todo-item');
        let descriptionBtn= document.createElement('button');
        descriptionBtn.innerText=todoItem.description;
        descriptionBtn.setAttribute('class','description-button');
        li.appendChild(checkBox);
        li.appendChild(descriptionBtn);
        checkBox.setAttribute('class','check-box');
        checkBox.onclick= function() {
            checkBoxImg.setAttribute('src','assets/img/done-s.png');
            descriptionBtn.setAttribute('disabled','disabled');
            todoItem.isDone= true;
            let checkedLi=li;
            let addItem= JSON.stringify(returnObj);
            localStorage.setItem('myItems',addItem);
            checkedUl.appendChild(checkedLi);
        }
        const deleteButton = document.createElement('button');
        li.appendChild(deleteButton);
        deleteButton.setAttribute('class','delete-button');
        const deleteImg= document.createElement('img');
        deleteButton.appendChild(deleteImg);
        deleteImg.setAttribute('src','assets/img/remove-s.jpg');
        descriptionBtn.onclick= function() {
            mainPageWrapper.remove();
            changePage(todoItem.id);
        }
        deleteButton.onclick= function() {
            const returnObj = JSON.parse(localStorage.getItem('myItems'));
            const afterRemove= returnObj.filter(item => item.id !==todoItem.id);
            let myItemsArr= JSON.stringify(afterRemove);
            localStorage.setItem('myItems',myItemsArr);
            li.remove();
            mainPageWrapper.remove();
            mainPage();   
        }
    }
}
function createPage() {
    let form= document.createElement('div');
    let title= document.createElement('h2');
    title.innerText='Add new item';
    let input= document.createElement('input');
    let inputButton= document.createElement('button');
    const cancelButton= document.createElement('button');
    cancelButton.innerText='Cancel';
    input.setAttribute('type','text');
    inputButton.setAttribute('type','submit');
    inputButton.innerText='Save changes';
    form.setAttribute('class','form');
    rootNode.appendChild(form);
    form.appendChild(title);
    form.appendChild(input);
    form.appendChild(inputButton);
    form.appendChild(cancelButton);
    let res= document.getElementsByTagName('input')[zero];
    inputButton.setAttribute('disabled','disabled');
    input.onkeyup= function() { 
        if(res.value!=='') {
            inputButton.disabled = false;
        }    
    }
    function getRandomInt() {
        const randomInt= Math.floor(Math.random() * Math.floor(maxId)); 
        const returnObj = JSON.parse(localStorage.getItem('myItems'));
        for (const item in returnObj) {
            if(returnObj[item].id===randomInt) {
                return getRandomInt();
            }      
        }
        
        return randomInt;
    }
      
    function Todo(description) {
        this.isDone= false;
        this.id = getRandomInt();
        this.description= description
    }
    cancelButton.onclick= function() {
        mainPage();
        form.remove();
    }
    inputButton.addEventListener('click',function() {
        const returnObj = JSON.parse(localStorage.getItem('myItems'));
        let res= document.getElementsByTagName('input')[zero];  
        returnObj.push(new Todo(res.value));
        let addItem= JSON.stringify(returnObj);
        localStorage.setItem('myItems',addItem);
        form.remove(); 
        mainPage();
    });
}
function changePage(arg) {
    window.location.hash = `/modify/item_${arg}`;
    const returnObj = JSON.parse(localStorage.getItem('myItems'));
    let changingObject;
    for (const currentElenent in returnObj) {
        if (returnObj[currentElenent].id===arg) {
            changingObject=returnObj[currentElenent];    
        }
    }
    let form= document.createElement('div');
    form.setAttribute('class','form');
    form.setAttribute('id','change-form');
    let title= document.createElement('h2');
    title.innerText='Modify item page';   
    let input= document.createElement('input');
    let inputButton= document.createElement('button');
    const cancelButton= document.createElement('button');
    cancelButton.innerText='Cancel';
    input.setAttribute('type','text');    
    inputButton.setAttribute('type','submit');
    inputButton.innerText='Save changes';
    rootNode.appendChild(form);
    form.appendChild(title);
    form.appendChild(input);
    form.appendChild(inputButton);
    form.appendChild(cancelButton);
    input.value= changingObject.description;
    let resultOfInput= input;
    cancelButton.onclick= function() {
        let channgeForm= document.getElementById('change-form');
        channgeForm.remove();
        mainPage();       
    }
    inputButton.onclick= function() {
        if(resultOfInput.value!=='') {
            changingObject.description= resultOfInput.value;
            let addItem= JSON.stringify(returnObj);
            localStorage.setItem('myItems',addItem);
            form.remove();
            mainPage();
        }
    }
}
mainPage();


