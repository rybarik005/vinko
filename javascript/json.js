var data = loadFile("../assets/htmlTemplates/vino.json");
//tu píš indexy vín ktoré chceš mať na stránke 
/*
    vína som hodil do vino.js
    indexy su podla terajšieho poradia určite sa ešte zmenia 

       Samorodné sladké     0

       Vermut biely         1

       Furmint suchý        2

       Lipovina suchá 2019  3

       Cuvé polosuché 2019  4

       Vermut červený       5
*/
var indexy = [0,2,5,3] 

function getData(){
    data = JSON.parse(data);
    var output = [];
    if(indexy.length > 0){
        for (var i = 0; i < indexy.length; i++){
            if(indexy[i] < data.length){
                output.push(data[indexy[i]]);
            }
        }
        return output;
    }else{
        return data;
    }
}

function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
      result = xmlhttp.responseText;
    }
    return result;
  }
  