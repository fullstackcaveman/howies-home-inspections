const header = document.getElementById('header');
const heroSection = document.getElementById('hero-section');
const logo = document.getElementById('logo');

window.addEventListener('scroll', (e) => {
	const scrollPosition = e.path[1].scrollY;

	if (scrollPosition >= 100) {
		header.classList.add('scrolled');
		logo.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
		logo.classList.remove('scrolled');
	}
});

// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
	let i;
	let slides = document.getElementsByClassName('slides');

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}

	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}

	slides[slideIndex - 1].style.display = 'block';

	setTimeout(showSlides, 3000);
}
