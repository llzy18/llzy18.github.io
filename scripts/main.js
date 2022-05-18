let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/wall.jpg') {
      myImage.setAttribute('src','images/沈阳大街3.jpg');
    } else {
      myImage.setAttribute('src','images/wall.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请选择你的人物');
    if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = '欢迎来到沈阳，' + myName;
      }
    }
  
if(!localStorage.getItem('name')) {
  setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎来到沈阳，' + storedName;
}


myButton.onclick = function() {
    setUserName();
}
