let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/coco-chloe.png') {
        myImage.setAttribute('src', 'images/coco2.png');
    } else {
        myImage.setAttribute('src', 'images/coco-chloe.png');
    }
})

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Cette chanson est géniale, ' + myName;
}
if (!localStorage.getItem('nom')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Cette chanson est géniale, ' + storedName;
}
myButton.addEventListener('click', function() {
    setUserName();
});