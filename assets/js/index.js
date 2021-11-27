'use strict';



// const spinner = document.getElementById('spinner');
// let d = 0;

// setInterval(rotateSpinner, 1000 / 60);

// function rotateSpinner () {
//     spinner.style.transform = `rotate(${++d}deg)`;
// }

// const btn = document.getElementById('hello');
// btn.onclick = function() {
//     //console.log('Hello!')
//     alert('Hello!');
// }

//setTimeout, setInterval
//1
// setTimeout(
//     ()=>{console.log('Hello');
// }, 5000);

//2
// const fun = (who) => {
//     console.log('Hello '+ who);
// };

// setTimeout(fun, 3000, 'Tom');

// const fun2 = () => {
//     console.log('Hello');
// }

// const id = setTimeout(fun2, 0);

//clearInterval(id);



 //XMLHttpRequest
/*
const store = {
    users: null,
    isFetching: false,
    error: null
};

const request = new XMLHttpRequest();

const btn = document.getElementById('loadUsers');

btn.onclick = function() {
//false - синхронная подгрузка, true - ансинхронная
    request.open("GET", "../../assets/data/users.json", true);
    request.send();
};

request.onloadstart = function(){
    store.isFetching = true;
    console.log(store);
}

request.onloadend = function(){
    store.isFetching = false;
    if(this.status >= 200 && this.status <300){
        store.users = JSON.parse(this.responseText);
    } else {
        store.error = new Error(`${this.status} ${this.statusText}`);
    }
}

/*
request.onloadend = function(){
    console.log(this);
}*/

//console.log(request.responseText);*/

//fetch
/*fetch('../../assets/data/users.json').then(loadUsersResolve).catch(loadUsersReject);


function loadUsersResolve(response){
    console.log(response);
    const loadUsers = response.json();
    console.log(loadUsers);
};

function loadUsersReject(response){
    console.log(response);
};*/

fetch('../../assets/data/users.json')
.then(loadUsersResolve)
.then(logData)
.catch(loadUsersReject);


function loadUsersResolve(response){
    return response.json();
};

function logData(users){
    const userlist = document.getElementById('userList');

    users.forEach(user => {
        userlist.append(createUserCard(user));
    });
};

function loadUsersReject(response){
    console.log(response);
};


function createUserCard(user){
    const userLi = document.createElement('li');
    //userLi.classList.add('userLiStyle');
    const userImgContainer = document.createElement('div');
    const userImg = document.createElement('img');
    const userName = document.createElement('h2')
    userImg.setAttribute('src', user.imgUser);
    userImg.setAttribute('alt', 'user_photo');
    userImgContainer.append(userImg);
    userName.textContent = user.name + " " + user.surname;
    userLi.append(userImgContainer, userName);
    return userLi;
}


//promise

//1
/*
const promise1 = new Promise(fun1);

function fun1 (resolve, reject){
    console.log('I am running');
}

//2
const promise2 = new Promise(function(resolve, reject){
    console.log('I am running');
});

//Получить число меньше 5. Создать promise

const promiseGetNumberLessThan5 = new Promise(funFor5);

function funFor5(resolve, reject){
    let number = Math.random()*10;
    console.log('number=', number);
    if(number <= 5) resolve(number);
    else reject(new Error('Reject. Number is ', number));
};*/