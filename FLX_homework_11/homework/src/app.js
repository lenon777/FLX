let emptyLine ='';
let zero = 0;
let two = 2;
let maxSize = 10;
let counter=0;
let listItem;

let input=document.createElement('button');
let div=document.createElement('div');
input.setAttribute('type','checkbox');
input.setAttribute('class','check-box');
let uncheckedIcon= document.createElement('i');
uncheckedIcon.setAttribute('class','material-icons');
uncheckedIcon.innerHTML='crop_din';
function setDisabled() {
  this.setAttribute('disabled','disabled');
  this.firstChild.innerText='check_box';
}
let deleteBtn= document.createElement('button');
let deleteIcon= document.createElement('i');
deleteIcon.setAttribute('class','material-icons');
deleteIcon.innerText= 'delete';
deleteBtn.setAttribute('class','remove');
let btn=document.getElementById('btn');
btn.setAttribute('disabled','disabled');
div.setAttribute('class','div-list');
div.setAttribute('draggable','true')
function fullList(arg) {
  let fullList= document.getElementById('full-list');
  fullList.innerText= arg;
}

let mainInput= document.getElementsByTagName('input')[zero];
mainInput.onkeyup= function () {
  btn.setAttribute('disabled','disabled');
  let valueOfInput= document.getElementsByName('input')[zero];
  let result= valueOfInput.value;
  if(result!==emptyLine) {
    btn.disabled=false;
  }  
}


btn.addEventListener('click',addAction);
deleteBtn.appendChild(deleteIcon);
input.appendChild(uncheckedIcon)

function addAction() {
  counter++;     
  div.innerText=mainInput.value;
  if(counter<=maxSize) {
    listItem= document.getElementById('action-list').appendChild(div.cloneNode(true))
    listItem.appendChild(input.cloneNode(true));
    listItem.appendChild(deleteBtn.cloneNode(true));
    let checkBoxLis = document.getElementsByClassName('check-box');
    for (const checkBox of checkBoxLis) {
      checkBox.addEventListener('click',setDisabled); 
    }
    if(counter===maxSize) {
      mainInput.setAttribute('disabled','disabled');
      fullList('Maximum item per list are created'); 
    }
  } 
  btn.disabled= true;
  let divList= document.getElementsByClassName('div-list');
  let dragListItem= document.getElementById('action-list');
  for (let iterator of divList) {
    iterator.getElementsByClassName('remove')[zero].onclick = function() {
    fullList(emptyLine);
    iterator.remove();
    counter--;
    mainInput.disabled = false;
  }
}
document.getElementsByTagName('input')[zero].value = emptyLine;
function getTarget(ev) {
  let target = ev.target;
    return target;     
}
let currentItem = emptyLine;
let dropPlace = emptyLine;
dragListItem.addEventListener('dragstart', function(ev) {
  currentItem = getTarget(ev);
}, false);
dragListItem.addEventListener('dragover',function(ev) {
  ev.preventDefault();
  getTarget(ev) 
});

dragListItem.addEventListener('dragleave', function(ev) {
  getTarget(ev);  
});

dragListItem.addEventListener('drop', function (ev) {
  dropPlace = getTarget(ev); 
  ev.preventDefault();
  let rectangle = dropPlace.getBoundingClientRect();
  let centerOfItem =(rectangle.bottom - rectangle.top) / two + rectangle.top; 
  if(centerOfItem<=ev.clientY) {
    dropPlace= dropPlace.nextSibling;
  } 
  try{
  dragListItem.insertBefore(currentItem,dropPlace); 
  } catch (e){
    console.log(e)
  }
})
}
 




