//elenco delle pagine dei progetti di destinazione
var path = ['progetto-weTourist.html', 'progetto-spaceOdissey.html', 'progetto-innKeeper.html']
//elenco degli stili disponibili
var styles = ['css/blueStyle.css', 'css/greenStyle.css'];

//attiva l'overlay della pagina corrispondente
function on(pagina) {
    console.log(path[pagina]);
    document.getElementById('ifr').src = path[pagina];
    document.getElementById("overlay").style.display = "block";
}

//disattiva l'overlay
function off() {
    document.getElementById("overlay").style.display = "none";
}

//cambia il file di css
function changeCss(cssLinkIndex) {
    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
    console.log(oldlink);
    if (oldlink.href == 'css/blueStyle.css') {
        console.log("OK");
    }else { console.log(oldlink.href)};
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    var newHref = styles[Math.floor(Math.random()*styles.length)];
    newlink.setAttribute("href", newHref);
    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}