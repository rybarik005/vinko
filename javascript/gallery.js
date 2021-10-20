function doFunction(){
    console.log("clicked");
}

function newContent(){
    console.log("loaded");
    document.open();
    document.write("<h1>Out with the old, in with the new!</h1>");
    document.close();
}

newContent();