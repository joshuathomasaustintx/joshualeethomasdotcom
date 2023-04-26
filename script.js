
//hide & show the contact form

function showOverlay() {
    document.getElementById("overlay").style.display = "flex";
  }
  function hideOverlay() {
    document.getElementById("overlay").style.display = "none";
  }


//portrait hover style change

let image = document.getElementById("portrait");
let changePhoto = function() {
    image.style.opacity = 1;
    image.style.fitler = 'none';
}
let resetPhoto = function () {
    image.style.opacity = 0.75;
    image.style.filter = 'gray(0.75)';
}
image.addEventListener('mouseover', changePhoto);
image.addEventListener('mouseout', resetPhoto);
