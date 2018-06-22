'use strict';

//we need an array of images
//we need a constructor function for products
//we need an event listener
//we need an image repository 
//we need to randomize the images-DONE
//we need a vote counter
//we need a view counter
//we need an event handler
//we need to know total clicks
//we need to display the list w/ DOM manipulation
//we need to make sure the images do not repeat
//all the DOM appending

BusMallProduct.names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];


//contains all the products
BusMallProduct.allProducts = [];
BusMallProduct.container = document.getElementById('image_container');
BusMallProduct.justViewed = [];
BusMallProduct.images = [document.getElementById('left-pic'), document.getElementById('center-pic'), document.getElementById('right-pic')];
BusMallProduct.voteTally = document.getElementById('voteTally');
BusMallProduct.totalClicks = 0;

//constructor function
function BusMallProduct(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.votes = 0;
  this.views = 0;
  BusMallProduct.allProducts.push(this);
}

for(var i = 0; i < BusMallProduct.names.length; i++) {  new BusMallProduct(BusMallProduct.names[i]);
}

function makeRandom() {
  return Math.floor(Math.random() * BusMallProduct.names.length);
}

function displayImages() {
  var nowShowing = [];
  //make left image unique
  nowShowing[0] = makeRandom();
  while(BusMallProduct.justViewed.indexOf(nowShowing[0]) !== -1)
  {
    console.error('Duplicate image, please rerun!');
    nowShowing[0] = makeRandom();
  }
  //make center image unique
  nowShowing[1] = makeRandom();
  while(nowShowing[0] === nowShowing[1] || BusMallProduct.justViewed.indexOf(nowShowing[1]) !== -1)
  {
    console.error('Duplicate image at center or in prior view! Please rerun!');
    nowShowing[1] = makeRandom();
  }

  //make right image unique 
  nowShowing[2] = makeRandom();
  while(nowShowing[0] === nowShowing[2] || nowShowing[1] === nowShowing[2] || BusMallProduct.justViewed.indexOf(nowShowing[2]) !== -1) 
  { console.error('Duplicate image at right! Please rerun!');
    nowShowing[2] = makeRandom();
  }
  //take it to the DOM!
  for (var i = 0; i < 3; i++) {
    BusMallProduct.images[i].src = BusMallProduct.allProducts[nowShowing[i]].path;
    BusMallProduct.images[i].id = BusMallProduct.allProducts[nowShowing[i]].name;
    BusMallProduct.allProducts[nowShowing[i]].views += 1;
    BusMallProduct[i] = nowShowing[i];
  }
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
new BusMallProduct('sweep', 'img/sweep.png');
new BusMallProduct('tauntaun', 'img/tauntaun.jpg');
new BusMallProduct('unicorn', 'img/unicorn.jpg');
new BusMallProduct('usb', 'img/usb.gif');
new BusMallProduct('water-can', 'img/water-can.jpg');
new BusMallProduct('wine-glass', 'img/wine-glass.jpg');
// new BusMallProduct('wireframe', 'img/wireframe.png');

//event listener for keeping track of total clicks on images
function handleClick(event) {
    console.logt(BusMallProduct.totalClicks, 'total clicks');
    //make the clicks stop at 25
    if(BusMallProduct.totalClicks > 24) {
      BusMallProduct.container.removeEventListener('click', handleClick);
      //show the list after the last click
      showvoteTally();
    }

    //Direct user to click on a specific image
    if(event.target.id === 'image_container') {
      return alert('Need to click on an image.');
    }

    //add up the total clicks and log it to the concole
    BusMallProduct.totalClicks += 1;
    for(var i = 0; i < BusMallProduct.names.length; i++) {
      if(event.target.id === BusMallProduct.allProducts[i].name) {
       BusMallProduct.allProducts[i].votes += 1;
       console.log(event.target.id + ' has ' + BusMallProduct.allProducts[i].votes + ' votes in ' BusMallProduct.allProducts[i].views + ' views.');
      }
    }
      displayImages();

   //show the tally using the list in the DOM once the event listener has been removed. 
   function showvoteTally() {
     for(var i = 0; i < BusMallProduct.allProducts[i].name + ' has ' + BusMallProduct.allProducts[i].votes + ' votes in ' + BusMallProduct.allProducts[i].views + ' views.';
    //append the li to the BusMallProduct.voteTally created above globally for the ul
  BusMallProduct.voteTally.appendChild(liEl);
    }
   }
   
   //event listener
   BusMallProduct.container.addEventListener('click', handleClick); 
   displayImages();







