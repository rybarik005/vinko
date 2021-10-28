var data = `[
    {
        "wineTitle": "Samorodné sladké",
        "price": "25",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, mollitia!",
        "imgTitle": "image0.jpg"
    },
    {
        "wineTitle": "Vihorlat",
        "price": "30",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, mollitia!",
        "imgTitle": "image1.jpg"
    },
    {
        "wineTitle": "Samorodné kyslé",
        "price": "28",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, mollitia!",
        "imgTitle": "image2.jpg"
    },
    {
        "wineTitle": "Samorodné horké",
        "price": "40",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, mollitia!",
        "imgTitle": "image3.jpg"
    },
    {
        "wineTitle": "nerodné ružové",
        "price": "45",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, mollitia!",
        "imgTitle": "image4.jpg"
    }
]`

function getData(){
    return JSON.parse(data);
}