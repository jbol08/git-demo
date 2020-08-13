/*console.log(3+4);
console.error('oh no');

let grades = [99,98,76,54,66,90,81];
let sum = 0;
for(let i=0; i <= grades.length; i++){
    sum += grades[i];
}
let avg = sum/grades.length;
*/
/*try {
    console.log('inside try');
//undefined.pop();

} catch (err){
    console.log('something went wrong!',err);
    }
    finally{
 console.log('inside finally');        
    }
console.log('did we make it?');


/*function displayInitials(user){
    let firstNameLetter = user.firstName[0].toUpperCase();
    let lastNameLetter = user.lastName[0].toUpperCase();
    return `Hello ${firstNameLetter}.${lastNameLetter}`;
}
displayInitials({firstName: 'jason', lastName: 'momoa'});


try {
    throw new Error('iam error')

}catch(e) {
    console.log('there was an error',e)
    console.dir(e);
} */
/*
function greet(){
    console.log('hi, whatsup');
}
function diss(){
    console.log('lame boy');
}

let funcs= [greet,diss];

const myFunc = function add(x,y){
    return x + y;
}

function giveBirth(){
console.log('baby coming');
    return function cry(){
        return 'wahhh'
    }
}

function repeatThreeTimes(func){
 func();
 func();
 func();
}

function repeat(num,func){
    for(let i = 0; i < num; i++){
        func();
    }
} 

greet();
setTimeout(diss,1000);
setTimeout(diss,500);

setInterval(diss,500);


function doTwice(func){
    func();
    func();
}

doTwice(function(){
    console.log('stop');
    console.log('please stop');
})


function countDown(num){
    let counter= setInterval(function(){
        num--;
        if(num <= 0){
        clearInterval(counter);
        console.log('DONE!');
    }else{
        console.log(num);
    }
},1000)
} 

function randomGame(){
   let tries=0
    let randomNumber= setInterval(function(){
        tries++;
        num = Math.random();
    if(num > .75){
        clearInterval(randomNumber);
        console.log(`Number of Tries: ${tries}`);
    }
},1000)
}


document.getElementById('main')
document.getElementsByTagName('h1')

const allH3s = document.querySelectorAll('h3');

for(let i = 0; i <allH3s.length; i++){
allH3s[i].style.color = 'pink'
}
const allH2s = document.getElementsByTagName('h2');
for(let h2 of allH2s){
    h2.style.color = 'green';
    h2.style.fontSize = '20px';
}

const h1 = document.querySelector('h1');
setInterval(function(){
    if(h1.classList.contains('big')){
        h1.innerText = 'sad';
    }else {
        h1.innerText = "happy";
    }
    
    h1.classList.toggle('big');
    h1.classList.toggle('small')
},1000);

const ul = document.querySelector('#remove-me')
ul.remove;

function makeBody(color){
    document.body.style.backgroundColor = color;
}
const btn = document.querySelector('#teal');
btn.onclick = function(){
makeBody('teal');
};

const redbtn = document.querySelector("#red");

// we can call this parameter whatever we want - event is very common
redbtn.addEventListener("click", function(){
  makeBody('red');
});

const h1 = document.querySelector('h1');
h1.addEventListener('click',function() {
    h1.style.color= 'blue';
});

const p = document.querySelector('p');
p.addEventListener('click',function(e){
    console.log(e.type);
});


p.addEventListener('mousedown',function(e){
    console.log(e.type);
});
p.addEventListener('key',function(e){
    console.log(e.type);
});

document.addEventListener('mousemove',function(e){
    // console.log(e.pageX,e.pageY);
   const r = Math.round(e.pageX * 255 / window.innerWidth);
   const b = Math.round(e.pageY * 255 / window.innerHeight);
   
    console.log(r,0,b);
   const color = `rgb(${r},0,${b})`;
   document.body.style.backgroundColor = color
   console.log(color);

});
*/

