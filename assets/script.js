const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	}


]

// Variables
const flecheDroite = document.querySelector('.arrow_right');
const FlècheGauche = document.querySelector('.arrow_left');
let image = document.querySelector('.banner-img');
let index = 0;
let tagLine = document.querySelector('.titre');
const points = document.querySelector('.dots');
let taille = slides.length-1;
const diapo = document.querySelector('diaporama');


// Points
for (let element of slides){
	let point=document.createElement("div");
  	point.classList.add("dot");
  	points.appendChild(point);
	  points.children[0].classList.add('dot_selected')
}

// Evenements
	// Droite
flecheDroite.addEventListener('click', function() {
	if (index < taille)
	{
		index = index + 1;
		image.src = "./assets/images/slideshow/"+slides[index].image;
		tagLine.innerHTML = slides[index].tagLine;
		points.children[index].classList.add('dot_selected');
		points.children[index-1].classList.remove('dot_selected');
	}
	else 
	{
		image.src = "./assets/images/slideshow/"+slides[0].image;
		tagLine.innerHTML = slides[0].tagLine;
		points.children[index].classList.remove('dot_selected');
		index = 0;
		points.children[index].classList.add('dot_selected');
	}
});

	// Gauche
FlècheGauche.addEventListener('click',function(){
	if (index > 0)
	{
		index = index - 1;
		image.src = "./assets/images/slideshow/"+slides[index].image;
		tagLine.innerHTML = slides[index].tagLine;
		points.children[index].classList.add('dot_selected');
		points.children[index+1].classList.remove('dot_selected');
	}
	else 
	{
		image.src = "./assets/images/slideshow/"+slides[taille].image;
		tagLine.innerHTML = slides[taille].tagLine;
		points.children[index].classList.remove('dot_selected');
		index = taille;
		points.children[index].classList.add('dot_selected');
	}
});  


