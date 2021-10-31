var data = `[
    {
        "wineTitle": "Samorodné sladké",
        "price": "25",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, mollitia!",
        "imgTitle": "samorode_sladke.jpeg"
    },
    {
        "wineTitle": "Vermut biely",
        "price": "30",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, mollitia!",
        "imgTitle": "vermut_biely.jpeg"
    },
    {
        "wineTitle": "Furmint suchý",
        "price": "28",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, mollitia!",
        "imgTitle": "vermut_biely.jpeg"
    },
    {
        "wineTitle": "Lipovina suchá 2019",
        "price": "40",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, mollitia!",
        "imgTitle": "lipovina_suche.jpeg"
    },
    {
        "wineTitle": "Cuvé polosuché 2019",
        "price": "45",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, mollitia!",
        "imgTitle": "cuve_polosuche.jpeg"
    },
    {
        "wineTitle": "Vermut červený",
        "price": "30",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, mollitia!",
        "imgTitle": "Vermut_cerveny.jpeg"
    }
]`

function getData(){
    return JSON.parse(data);
}