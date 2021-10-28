// /* <div class="card col" style="width: 36rem;">
// <div class="card-body p-0" style="transition: box-shadow 1000ms ease-in-out;">
//     <div class="container">
//         <div class="row">
//             <div class="col-7 p-4">
//                 <h4 class="card-title">Názov vína</h4>
//                 <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
//                     qui?
//                 </p>
//                 <div class="row">
//                     <h5 class="col-6">Cena:</h5>
//                     <p class="col-6">25€</p>
//                 </div>
//                 <div class="row">
//                     <div class="justify-content-center">
//                         <a href="#contact" class="btn btn-primary">Kúpiť</a>
//                     </div>
//                 </div>
//             </div>
//             <img src="../assets/image0.jpg" alt="" class="col-5 p-0">
//         </div>
//     </div>
// </div>
// </div> */
var parent= document.getElementById("MultiCarousel-inner");
var viewportWidth = window.innerWidth;
var itemWidth = 1000;
var wineData = getData();
let initial = 0;

var numberOfItems = wineData.length;
function doSlider() {
  console.log("heyy");
  parent = document.getElementById("MultiCarousel-inner");
  viewportWidth = window.innerWidth;
  setElementSizes(viewportWidth);
  addNWines(numberOfItems);

}
window.addEventListener('DOMContentLoaded', (event) => {
  doSlider();
});

window.onresize = function () {
  console.log("resize");
  viewportWidth = window.innerWidth;
  setElementSizes(viewportWidth);
};

function setElementSizes(viewPortWidth) {
  console.log("resizing...");
  //itemWidth = viewPortWidth / 2;

  parent.style.width = itemWidth * numberOfItems + "px";
  // parent.style.marginLeft = -(itemWidth + itemWidth/2); // toto je ak chceš z každej strany
  let sideWidth = (viewPortWidth - itemWidth) / 2;
  parent.style.marginLeft= -(2 * itemWidth - sideWidth) +"px" ;
  //parent.style.marginLeft = -itemWidth*0.5
  let cards = document.querySelectorAll(".card");
  cards.forEach(function (card) {
    card.style.width = itemWidth + "px";
    var index = card.getAttribute("data-index");
    card.setAttribute("data-transform", itemWidth * index);
    card.style.transform = "translateX(" + itemWidth * index + "px)";
  });
}

// function addItem(index) {
//   var padding = index == 2 ? "1" : "5";
//   var obj = wineData[parseInt(index)];
//   console.log(obj);
//   parent.insertAdjacentHTML(
//     "afterbegin",
//     '<div data-index="'+index +'"; data-transform="'+itemWidth * index +'" class="p-'+ padding +
//     ' card col"style="background-color: transparent; transform: translateX(' +itemWidth * index +'px);width:1000px; min-height: 580px;">\
//         <div class="card-body" >\
//                 <div class="row bg-primary" style="height:580px">\
//                     <div class="col-6 p-4 bg-warning">\
//                         <h4 class="card-title">' + obj.wineTitle +'</h4>\
//                         <p class="card-text">' + obj.description +'</p>\
//                         <div class="row">\
//                             <h5 class="col-6">Cena:</h5>\
//                             <p class="col-6">' +obj.price +'€</p>\
//                         </div>\
//                         <div class="row bg-danger">\
//                             <div class="justify-content-center">\
//                                 <a href="#contact" class="btn btn-primary">Kúpiť</a>\
//                             </div>\
//                         </div>\
//                     </div>\
//                 </div>\
//         </div>\
//     </div>'
//   );
// }

// <img src="../../vinko/assets/wines/' +
// obj.imgTitle +
// '" alt="" class="col-5 p-0">\

function addItem(index) {
  var padding = index == 2 ? '1' : '5';
  var obj = wineData[parseInt(index)];
  console.log(obj);
  parent.insertAdjacentHTML(
    "afterbegin",
    '\
    <div data-index="' +
      index +
      '"; data-transform="' +
      itemWidth * index +
      '" class="p-'+ padding + ' card col wine-card"\
     style="background-color: transparent; transform: translateX(' +
      itemWidth * index +
      "px); position: absolute; float: left;width:" +
      itemWidth +
      "px; height: " +
      itemWidth * 0.520833 +
      'px; min-height: 580px;">\
        <div class="card-body p-0" style="display:flex; flex-direction:row" >\
            <div class="card-left" style="flex:1;">\
            <div class="p-5" style="height: 80%; margin-top: 10%;">\
              <h1 class="">' + obj.wineTitle +'</h4>\
              <p class="card-text">' + obj.description +'</p>\
                <div class="row">\
                <h5 class="col-6">Cena:</h5>\
                  <p class="col-6">' + obj.price +'€</p>\
                </div>\
              </div>\
            </div>\
            <div class="card-right" style="flex:1; display:flex; overflow: hidden;">\
              <div class="wine-img" style="flex:1; background-image:url(\'../../vinko/assets/wines/' +obj.imgTitle+ '\')">\
              </div>\
            </div>\
        </div>\
    </div>\
       '
  );
}


function addNWines(count) {
  for (var i = 0; i < count; i++) {
    addItem(count - 1 - i);
  }
}

function updateCards(direction) {
  let cards = document.querySelectorAll(".card");
  var highest = cards[0];
  var lowest = cards[0];
  var middle = cards[0];
  cards.forEach((el) => {
    el.classList.remove("p-1");
    el.classList.remove("p-5");
    el.classList.add("p-5");
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
  console.log("lowest: ");
  console.log(lowest);
  console.log("highest: ");
  console.log(highest);

  console.log("data indeex" + highest.getAttribute("data-index"));

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
  console.log("middle");
  console.log(document.getElementsByClassName("p-1"));
  console.log("middle");
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

  rightBtn.onclick = throttle(function clicked() {
    console.log("click");
    updateCards(1);
    let cards = document.querySelectorAll(".card");
    console.log(cards);
    cards.forEach((el) => {
      let trans = parseInt(el.getAttribute("data-transform"));
      el.setAttribute("data-transform", trans + itemWidth);
      el.style.transform =
        "translateX(" + el.getAttribute("data-transform") + "px)";
      let index = el.getAttribute("data-index");
      console.log(index + "<- index");
      el.setAttribute("data-index", parseInt(index) + 1);
    });
  },800);

  leftBtn.onclick = throttle(function clicked() {
    console.log("click");
    updateCards(0);
    let cards = document.querySelectorAll(".card");
    console.log(cards);
    cards.forEach((el) => {
      let trans = parseInt(el.getAttribute("data-transform"));
      el.setAttribute("data-transform", trans - itemWidth);
      el.style.transform =
        "translateX(" + el.getAttribute("data-transform") + "px)";
      let index = el.getAttribute("data-index");
      console.log(index + "<- index");
      el.setAttribute("data-index", parseInt(index) - 1);
    });
  },800);

  window.addEventListener("click", (e) => {
    const target = e.target.className;
    console.log(target);
  });
};
