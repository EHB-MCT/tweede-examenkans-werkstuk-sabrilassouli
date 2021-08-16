"use strict";
//URL
//https://thecrew.cc/news/read.php

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

// getting the article data
let artikelsArray = [];
async function getArtikels() {
    const response = await fetch('https://thecrew.cc/news/read.php');
    const data = await response.json();

    //getting the data and making an article
   
    let arrayLengte = data.news.length;
    artikelsArray = [];

    for (let i = 0; i < arrayLengte; i++) {
        let artikel = new Artikels(data.news[i].UUID, data.news[i].title, data.news[i].imageURI, data.news[i].content, data.news[i].likes, data.news[i].publicationDate);
        artikelsArray.push(artikel);
    }
    showArtikles(artikelsArray);

}
getArtikels();

//putting the article data onto the page
function showArtikles(ArtikelsData) {
    
    let containerElement = document.getElementById('Artikels-container');
    let htmlContent = "";
    ArtikelsData.forEach((element) => {
        htmlContent += `
            <div>
            
            <h1 class="title">${element.artikelTitle}</h1>
            <img src='${element.artikelImage}' class="artikelImage">
            <p class="artikelContent">${element.artikelContent}</p>
            <p class="artikelLikes">${element.artikelLikes}</p>
            <button class="likeButton">Like</button>
            <p class="artikelpublicationDate">${element.artikelpublicationDate}</p>
             </div>
             `;

    });

    containerElement.innerHTML = "";
    containerElement.innerHTML = htmlContent;
    
    let likebuttons = document.getElementsByClassName('likeButton');
    
    for (let i = 0; i < likebuttons.length; i++) {
        likebuttons[i].addEventListener('click', function() {
            console.log("Hallo", ArtikelsData[i].artikelUUID);
            likeArtikel(ArtikelsData[i].artikelUUID);
        });
    }
  

}

// posting like 
function likeArtikel(id) {
    fetch(`https://thecrew.cc/news/create.php`, {
            method: 'POST',
            body: JSON.stringify({
                "UUID": id
            })
        });
}



//making a searchbar

const searchBarInput = document.getElementById('searchBarInput');
console.log(searchBarInput);

searchBarInput.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredArtikels = artikelsArray.filter((character) => {
        return (
            character.artikelTitle.toLowerCase().includes(searchString) ||
            character.artikelContent.toLowerCase().includes(searchString)
        );
    });
    showArtikles(filteredArtikels);
});


// sort by likes

document.getElementById('sortLikes').addEventListener('click', sortLikes);



function sortLikes() {
	console.log('klick');
    if (sortLikes === 'desc') {
		    artikelsArray = artikelsArray.sort((a, b) => parseFloat(a.artikelLikes) - parseFloat(b.artikelLikes));
		sortLikes = 'asc';
        console.log('option 1');
	} else {
		artikelsArray = artikelsArray.sort((a, b) => parseFloat(b.artikelLikes) - parseFloat(a.artikelLikes));
		sortLikes = 'desc';
        console.log('option 2');
        
	}
	showArtikles(artikelsArray);	
}