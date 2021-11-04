// EXERCICE 2 Manipulation

// 1

let exo1 = document.querySelector("h1");
exo1.innerText = "les attributs class et id";


// // 2

let exo2 = document.querySelector("h2");
exo2.innerText = "exercice2 partie A";

// // 3

let exo3 = document.querySelectorAll("h2")[1];
exo3.innerText = "Exercice 2 partie B";


// // 4

let exo4 = document.querySelector("p");
exo4.innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>";


// // 5

let exo5 = document.querySelectorAll("p")[1];
exo5.innerHTML = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide";

// // 6

let exo6 = document.querySelector("h1");
exo6.setAttribute("id","bigTitle");
console.log(exo6);

// // 7

let exo7 = document.querySelector("div");
exo7.setAttribute("class","container")
console.log(exo7);

// //8

let exo8 = document.querySelectorAll("h2");
let arrTab = Array.from(exo8)
arrTab.forEach(element => {
    element.setAttribute("class","title");
    console.log(element);
    
});

// // 9

let exo9 = document.querySelectorAll("p");
let arrParagraphe = Array.from(exo9)
arrParagraphe.forEach(element => {
    element.setAttribute("class","text");
    console.log(element);
    
});


// // Partie 2 -----------------------------------------------------------
// // ## Partie 2.2 Ajout d'attribut et de leurs valeurs

// // 10

let exo10 = document.querySelector("section");
exo10.setAttribute("class"," margin-bottom border-black padding");


// // 11

let exo11 = document.querySelectorAll("section")[1];
exo11.setAttribute("class","margin-top border-black padding  ");

// // 12
let exo12 = document.querySelectorAll("section")[1];
let myDiv = exo12.querySelector('div')
console.log(myDiv);

myDiv.style.height = "20px"
myDiv.style.width = "20px"
myDiv.style.border = "2px solid black"
myDiv.style.backgroundColor ="blue"









