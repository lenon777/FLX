let data=[
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
]

function findTypes(){
  let result=[];
  for (const key in arguments) {
    result.push(typeof arguments[key]);
  }
  return result;
}
findTypes('number'), 
findTypes(null, 5, "hello");

function executeforEach(arr,someFunction) {
  for(let i=0;i<arr.length;i++){
    someFunction(arr[i]);
  }
}
executeforEach([1,2,3], function(el) { 
  console.log(el) 
});

function mapArray(arr,someFunction){
  let newArr=[];
  executeforEach(arr, function(el) {
    newArr.push(someFunction(el))
  });
  return newArr;
}
mapArray([2, 5, 8], function(el) { 
  return el + 3
});

function filterArray(arr, someFunction){
  let newArr=[];
  executeforEach(arr,function(el){
    if(someFunction(el)){
      newArr.push(el)
    }
  });
  return newArr;
}
filterArray([2, 5, 8], function(el) {
  return el > 3
}); 

function getAmountOfAdultPeople(data){
  return filterArray(data,function(el) {
    return el.age>18
  }).length;
}
getAmountOfAdultPeople(data);  

function getGreenAdultBananaLovers(data) {
  let filteredData= filterArray(data,function(el) {
    return el.age>18&&el.favoriteFruit==='banana'&&el.eyeColor==='green'
  });
  return mapArray(filteredData, function(el) {
    return el.name
  });
}
getGreenAdultBananaLovers(data); 

function keys(obj){
  let keysArray=[];
  for(let key in obj){
    keysArray.push(key);
  }
  return keysArray;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3}); 

function values(obj){
  let keysArray=[];
  for(let key in obj){
    keysArray.push(obj[key]);
  }
  return keysArray;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3}); 

function showFormattedDate(date) {
  let options = { month: 'short'};
  return `Date: ${date.getDate()} of ${date.toLocaleDateString('en-US', options)}, ${date.getFullYear()}`;
}
showFormattedDate(new Date('2019-01-27T01:10:00')); 

function isEvenYear(date) {
  if (date.getFullYear()%2===0){
    return true;
  }
  return false;
}
isEvenYear(new Date('2019-01-27T01:10:00')); 
  
  function isEvenMonth(date){
    return date.getMonth()%2!==0;
}
isEvenMonth(new Date('2019-02-27T01:10:00'));




