let henkilot = require('./henkilot.json')

// palauttaa kaikkihenkilöt
function haeKaikki() {
    return henkilot;
}

// palauttaa yhden henkilön
function haeNimella(nimi) {
    for(let henkilo of henkilot) {
        if(henkilo.nimi.toLowerCase() == nimi.toLowerCase()) {
            return henkilo;
        }
    }
    // ei löytynyt, palautetaan null
    return null;
    
}

// palauttaa taulukon henkilöitä
function haeAmmatilla(ammatti) {
    henkilotaulukko = []
    for (let henkilo of henkilot) {
        if (henkilo.ammatti.toLowerCase() == ammatti.toLowerCase()) {
            henkilotaulukko.push(henkilo);
        }
    }
    return henkilotaulukko;
}   

function poistaHenkilo(nimi) {
    // määritellään muuttuja poistettavan henkilön tallettamista varten
    let poistettava = null;

    // käydään henkilöt läpi ja jos löytyy, laitetaan henkilöolio talteen
    for (let henkilo of henkilot) {
        if (henkilo.nimi.toLowerCase() == nimi.toLowerCase()) {
            poistettava = henkilo;
        }
    }
    // poistetaan henkilö vasta silmukan jälkeen
    let indeksi = henkilot.indexOf(poistettava);
    henkilot.splice(indeksi, 1);
    return poistettava
}
module.exports ={haeKaikki, haeAmmatilla, haeNimella, poistaHenkilo};