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
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//JavaScript
let slidesno = 0;

let parentElement = document.getElementById("dots");

for(i=0;i<slides.length;i++) {
	console.log (i)

	//<span class="dot slide0"></span>
	let nouvelElement = document.createElement("span");
	nouvelElement.classList.add('dot')
	nouvelElement.classList.add('slide'+i)
	nouvelElement.id='slide'+i;
	nouvelElement.addEventListener('click',function() {
		slidesno =this.id.replace('slide','') ;
	      updateBanner ();
	 } )
	parentElement.appendChild(nouvelElement);
}

	//récupérer les éléments des flèches

		var image = document.querySelector('.banner-img');
		var tagLine = document.querySelector('.banner-tagline');
		var banner = document.querySelector('.banner');
		var arrowLeft = document.querySelector('.arrow-left');
		var arrowRight = document.querySelector('.arrow-right');
		var dots = document.querySelectorAll('.dot');
	
// Ajouter des écouteurs d'événements aux flèches

		arrowLeft.addEventListener('click', function gauche(){
			slidesno = (slidesno -1 + slides.length) % slides.length;
	      updateBanner ();
	}); 
		arrowRight.addEventListener('click',function droite(){
			slidesno = (slidesno +1 ) % slides.length;
				updateBanner ();
		});

  

	function updateBanner(){
		dots.forEach(function(dot){ 
			dot.classList.remove('dot_selected');
		});
		
		image.src="./assets/images/slideshow/"+slides[slidesno]["image"];
		tagLine.innerHTML=slides[slidesno]["tagLine"];
		document.querySelector('.slide'+slidesno).classList.add('dot_selected');
	}



	

	 /*banner.forEach(function(banner, index) {
		// Créer un bullet point pour chaque banner
        var bullet = document.createElement('span');
		bullet.classList.add('banner-nav-bullet');

		$(document).ready(function() {
			var bannerIndex = 0;
			showbanners();
		  
			function showbanners() {
			  var banners = $(".slide");
			  var dots = $(".slider-dots");
			  for (var i = 0; i < banners.length; i++) {
				banners[i].style.display = "none";
			  }
			  bannerIndex++;
			  if (bannerIndex > banners.length) {
				bannersIndex = 1;
			  }
			  for (var i = 0; i < dots.length; i++) {
				dots[i].innerHTML = "";
			  }
			  for (var i = 0; i < banners.length; i++) {
				banners[i].style.display = "none";
			  }
			  banners[bannerIndex - 1].style.display = "block";
			  dots.append("<span class='dot' onclick='currentbanner(" + slideIndex + ")'></span>");
			  var dotsSpan = $(".dot");
			  for (var i = 0; i < dotsSpan.length; i++) {
				dotsSpan[i].className = dotsSpan[i].className.replace(" active", "");
			  }
			  dotsSpan[slideIndex - 1].className += " active";
			  setTimeout(showbanner, 2000); // Change image every 2 seconds
			}
		  
			function currentBanner(n) {
			  bannerIndex = n;
			  showBanners();
			}
		  });

		 });*/
		