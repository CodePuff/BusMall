'use strict';

//array to store objects
BusMallProduct.allProducts = [];

//constructor function
function BusMallProduct(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  BusMallProduct.allProducts.push(this);
}

//to use my constructor to create new product instances
new BusMallProduct('bag', 'img/bag.jpg');
new BusMallProduct('banana', 'img/banana.jpg');
new BusMallProduct('bathroom', 'img/bathroom.jpg');
new BusMallProduct('boots', 'img/boots.jpg');
new BusMallProduct('breakfast', 'img/breakfast.jpg');
new BusMallProduct('bubblegum', 'img/bubblegum.jpg');
new BusMallProduct('chair', 'img/chair.jpg');
new BusMallProduct('cthulhu', 'img/cthulhu.jpg');
new BusMallProduct('dog-duck', 'img/dog-duck.jpg');
new BusMallProduct('dragon', 'img/dragon.jpg');
new BusMallProduct('pen', 'img/pen.jpg');
new BusMallProduct('pet-sweep', 'img/pet-sweep.jpg');
new BusMallProduct('scissors', 'img/scissors.jpg');
new BusMallProduct('shark', 'img/shark.jpg');
new BusMallProduct('sweep', 'img/sweep.jpg');
new BusMallProduct('tauntaun', 'img/tautaun.jpg');
new BusMallProduct('unicorn', 'img/unicorn.jpg');
new BusMallProduct('usb', 'img/usb.jpg');
new BusMallProduct('water-can', 'img/water-can.jpg');
new BusMallProduct('wine-glass', 'img/wine-glass.jpg');
new BusMallProduct('wireframe', 'img/wireframe.jpg');

//listener, something to be clicked...all about events!
var imgEl = document.getElementById('left-pic');

imgEl.addEventListener('click', randomBusMallProduct);

//randomly display one of the pictures
function randomBusMallProduct() {
  var randomIndex = Math.floor(Math.random() * BusMallProduct.allProducts.length);
  imgEl.src = BusMallProduct.allProducts[randomIndex].filepath;
}

randomBusMallProduct();




