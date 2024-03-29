var parent= document.getElementById("MultiCarousel-inner");
var viewportWidth = window.innerWidth;
var itemWidth = 1000;
var itemHeight = 580;
var wineData = getData();
let initial = 0;

var numberOfItems = wineData.length;
//ak je menej vín ako 5 (minimun pre slider), array sa znásobí aby length > 5
if(numberOfItems < 5){
  while(numberOfItems < 5){
    wineData = wineData.concat(wineData);
    numberOfItems = wineData.length;
  }
}
numberOfItems = wineData.length;

function addAnimationToCard(){
  let cards = document.querySelectorAll(".card");
  cards.forEach(function (card) {
    card.style.transition = "0.8s ease-in-out";
    card.style.webkitTransition= "0.8s ease-in-out";
  });
}
function removeAnimationToCard(){
  let cards = document.querySelectorAll(".card");
  cards.forEach(function (card) {
    card.style.transition = "0s";
    card.style.webkitTransition= "0s";
  });
}
function doSlider() {
  parent = document.getElementById("MultiCarousel-inner");
  viewportWidth = window.innerWidth;
  setElementSizes(viewportWidth);
  addNWines(numberOfItems);

}
window.addEventListener('DOMContentLoaded', (event) => {
  doSlider();
});

window.onresize = function () {
  console.log("resizing!!!");
  viewportWidth = window.innerWidth;
  setElementSizes(viewportWidth);
}
function isDocumentInFullScreenMode() {
  return document.fullscreenElement !== null;
}
var doit;
function setElementSizes(viewPortWidth) {
  removeAnimationToCard();
  if(viewPortWidth < 1050){
    itemWidth = viewPortWidth - (25*2);
    itemHeight = itemWidth * 0.580;
    parent.style.height = "90vh";
  }else{
    itemWidth = 1000;
    itemHeight = 580;
    parent.style.height = itemHeight + "px";
  }
  parent.style.width = itemWidth * numberOfItems + "px";
  parent.style.width = itemWidth * numberOfItems + "px";


  // parent.style.marginLeft = -(itemWidth + itemWidth/2); // toto je ak chceš z každej strany
  let sideWidth = (viewPortWidth - itemWidth) / 2;
  parent.style.marginLeft= -(2 * itemWidth - sideWidth) +"px" ;
  //parent.style.marginLeft = -itemWidth*0.5
  let cards = document.querySelectorAll(".card");
  cards.forEach(function (card) {
    card.style.width = itemWidth + "px";
    card.style.height = itemHeight + "px";
    var index = card.getAttribute("data-index");
    card.setAttribute("data-transform", itemWidth * index);
    card.style.transform = "translateX(" + itemWidth * index + "px)";
  });

    clearTimeout(doit);
    doit = setTimeout(resizedFinished, 100);
}
function resizedFinished(){
  addAnimationToCard();
}

function addNWines(count) {
  for (var i = 0; i < count; i++) {
    addItemBig(count - 1 - i);
  }
}

function addItemBig(index) {
  var padding = index == 2 ? '3' : '5';
  var zindex = index == 2 ? '2' : '0';
  var obj = wineData[parseInt(index)];
  var calcHeight = itemWidth * 0.580;
  parent.insertAdjacentHTML(
    //  <p class="col-6 card-price">' + obj.price +'€</p>\
    "afterbegin",
    '\
    <div data-index="' +
      index +
      '"; data-transform="' +
      itemWidth * index +
      '" class="p-'+ padding + ' card col wine-card"\
     style="z-index:'+zindex + ';background-color: transparent; transform: translateX(' +
      itemWidth * index +
      "px); position: absolute; float: left;width:" +
      itemWidth +
      "px; height: " +
      calcHeight +
      'px; min-height: 80%">\
      <div class="card-body p-0" style="display:flex; flex-direction:row" >\
        <div class="card-left d-none d-md-flex" style="flex:1;">\
           <div class="p-5 left-padded"">\
            <h1 class="card-title">' + obj.wineTitle +'</h4>\
            <p class="card-text"><b>Popis: </b>' + obj.description +'</p>\
            <div class="row">\
              <a style="flex:1" href="#contact">\
                <button type="button" class="btn btn-dark" style="margin-top:10%;width:100%; height:60%;">Mám záujem</button>\
              </a>\
            </div>\
          </div>\
        </div>\
          <div class="card-right" style="flex:1; background-color:white; display:flex;flex-direction:column">\
            <div class="wine-img" style="flex:3; background-image:url(\'../assets/wines/' +obj.imgTitle+ '\')">\
            </div>\
            <div class="p-4  d-md-none" style="flex:1;">\
              <h1 class="card-title"style="text-align:center">' + obj.wineTitle +'</h4>\
              <p class="card-text" style="text-align:center">' + obj.description +'</p>\
              <div class="">\
            </div>\
            </div>\
          </div>\
        </div>\
      </div>\
    </div>\
       '
  );
}

function updateCards(direction) {
  let cards = document.querySelectorAll(".card");
  var highest = cards[0];
  var lowest = cards[0];
  var middle = cards[0];
  cards.forEach((el) => {
    el.classList.remove("p-2");
    el.classList.remove("p-5");
    el.classList.add("p-5");
    el.style.zIndex = "0"
    if (el.getAttribute("data-index") > highest.getAttribute("data-index")) {
      highest = el;
    }
    if (el.getAttribute("data-index") < lowest.getAttribute("data-index")) {
      lowest = el;
    }
    if (direction == 0) {
      if (el.getAttribute("data-index") == 3) {
        middle = el;
      }
    } else if (direction == 1) {
      if (el.getAttribute("data-index") == 1) {
        middle = el;
      }
    }
  });

  if (
    parseInt(highest.getAttribute("data-index")) >= numberOfItems - 1 &&
    direction == 1
  ) {
    var cln = highest.cloneNode(true);
    cln.setAttribute("data-transform", -itemWidth);
    cln.setAttribute("data-index", -1);
    parent.insertBefore(cln, lowest);
    highest.remove();
  } else if (
    parseInt(lowest.getAttribute("data-index")) <= 0 &&
    direction == 0
  ) {
    var cln = lowest.cloneNode(true);
    cln.setAttribute("data-transform", numberOfItems * itemWidth);
    cln.setAttribute("data-index", highest.getAttribute("data-index") - 1 + 2);
    parent.appendChild(cln);
    lowest.remove();
  }

  middle.classList.add("p-1");
  middle.classList.remove("p-5");
  middle.style.zIndex = "2";
}

const throttle = (func, limit) => {
  let lastFunc
  let lastRan
  return function() {
    const context = this
    const args = arguments
    if (!lastRan) {
      func.apply(context, args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}
window.onload = function () {
  let rightBtn = document.getElementById("next");
  let leftBtn = document.getElementById("prev");

  leftBtn.onclick = throttle(function clicked() {
    updateCards(1);
    let cards = document.querySelectorAll(".card");
    cards.forEach((el) => {
      let trans = parseInt(el.getAttribute("data-transform"));
      el.setAttribute("data-transform", trans + itemWidth);
      el.style.transform =
        "translateX(" + el.getAttribute("data-transform") + "px)";
      let index = el.getAttribute("data-index");
      el.setAttribute("data-index", parseInt(index) + 1);
    });
  },800);

  rightBtn.onclick = throttle(function clicked() {
    updateCards(0);
    let cards = document.querySelectorAll(".card");
    cards.forEach((el) => {
      let trans = parseInt(el.getAttribute("data-transform"));
      el.setAttribute("data-transform", trans - itemWidth);
      el.style.transform =
        "translateX(" + el.getAttribute("data-transform") + "px)";
      let index = el.getAttribute("data-index");
      el.setAttribute("data-index", parseInt(index) - 1);
    });
  },800);

  window.addEventListener("click", (e) => {
    const target = e.target.className;
  });

  setElementSizes( window.innerWidth);
};
