"use strict";
//IFFY - immidieatly incoked functional expression
(function (){


    function DisplayHomePage() {
        console.log("calling DisplayHomePage...")
        let aboutUsbtn = document.getElementById("AboutUsbtn")
        aboutUsbtn.addEventListener("click", function (){})
        location.href= "about.html"


    let MainContent = document.getElementsByTagName("main")[0];
    let MainParagraph = document.getElementById("p");

    MainParagraph.setAttribute("id", "MainParagraph");
    MainParagraph.setAttribute("class", "mt-3");
    MainParagraph.textContent = "this is my first paragraph";

    MainContent.append(MainParagraph);

    let FirstString = "this is "
        // this is a string literal
        let SecondString = `${FirstString} my second atring`
    MainParagraph.textContent = SecondString;
    MainContent.append(MainParagraph);

    let DocumentBody = document.body;

    let Article = document.createElement("article");

    let ArticleParagraph = `<p id=" ArticleParagraph" class="mt-3" > this is my first article paragraph </p>`
        Article.setAttribute("class", "container");
    Article.innerHTML = ArticleParagraph;
    DocumentBody.appendChild(Article);
}


    function DisplayProductsPage() {
        console.log("calling DisplayproductsPage...")
    }

    function DisplayContactPage() {
        console.log("calling DisplaycontactPage...")
    }

    function DisplayAboutPage() {
        console.log("calling DisplayaboutPage...")
    }
    function DisplayServicePage() {
        console.log("calling DisplayservicePage...")
    }


 function start(){

     console.log("starting app......")
switch (document.title) {
    case "HOME":
        DisplayHomePage();
        break;
    case " products ":
        DisplayProductsPage();
        break;
    case " Contact ":
        DisplayContactPage();
        break;
    case " About ":
        DisplayAboutPage();
        break;
    case " Services ":
        DisplayServicePage();
        break;
}



 }
    window.addEventListener("load", start);
})()
