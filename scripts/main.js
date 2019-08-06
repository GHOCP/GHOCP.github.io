let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/icon.png') {
      myImage.setAttribute('src', 'images/icon1.png');
    } else {
      myImage.setAttribute('src', 'images/icon.png');
    }
}