"use strict";


//url
//https://thecrew.cc/news/read.php


const EHBnews = {
    initFields() {
        console.log('init');
        const inputForm = document.getElementById('artikelInput').addEventListener('submit', (e) => {
            e.preventDefault();
            const search = document.getElementById('artikelInputField').value;
            console.log(search);
            this.getArtikel(search);
        });
    },
    async getArtikel(content) {
        fetch(`https://thecrew.cc/news/read.php`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            let htmlString = `
                <h2>id: ${data.news.UUID}</h2>
                <h2>Title: ${data.news.title}</h2>
                <h2>content: ${data.news.content}</h2>
                <img src=”${data.news.imageURI}”>
                <h2>date: ${data.news.publicationDate}</h2>
                <h2>likes: ${data.news.likes}</h2>
            `;
            document.getElementById('artikels').innerHTML = htmlString;
        });
    }
}

EHBnews.initFields();