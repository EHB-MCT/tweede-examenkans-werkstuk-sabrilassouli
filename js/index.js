"use strict";


//URL
//https://thecrew.cc/news/read.php


// array van artikels fetchen
// arrays sorten op likes
// liken functie
// searchbar toevoegen met search functie


class Artikels {
    constructor(artikelUUID, artikelTitle, artikelImage, artikelContent, artikelLikes, artikelpublicationDate) {
        this.artikelUUID = artikelUUID;
        this.artikelTitle = artikelTitle;
        this.artikelImage = artikelImage;
        this.artikelContent = artikelContent;
        this.artikelLikes = artikelLikes;
        this.artikelpublicationDate = artikelpublicationDate;
    }
}


let artikelsArray = [];
async function getArtikels() {
    const response = await fetch('https://thecrew.cc/news/read.php');
    const data = await response.json();

    //getting the data and making an article
   
    let arrayLengte = data.news.length;
    artikelsArray = [];

    for (let i = 0; i < arrayLengte; i++) {
        let artikel = new Artikels(data.news[i].UUID, data.news[i].title, data.news[i].content, data.news[i].imageURI, data.news[i].likes);
        artikelsArray.push(artikel);
    }

}
getArtikels();