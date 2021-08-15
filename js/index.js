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