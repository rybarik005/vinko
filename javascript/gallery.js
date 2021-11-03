window.addEventListener("DOMContentLoaded", (event) => {
  addItems();
});
var parents = document.getElementById("galleryParent");
var count = 3;
var galleryItem = loadFile("../assets/htmlTemplates/gallery_item.html");
function addItems() {
    console.log("hey");
    for(var i = 0; i < count; i++) {
        parents.insertAdjacentHTML( "afterbegin",galleryItem);
    }
    var items = parents.getElementsByClassName("carousel-item");
    items[0].classList.add("active");
}

