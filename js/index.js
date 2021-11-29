const header = document.getElementById('header');
const heroSection = document.getElementById('hero-section');
const logo = document.getElementById('logo');
const menuLinks = document.getElementsByClassName('menu-link');
const scrollDown = document.getElementById('scroll-down');
const aboutHowies = document.getElementById('about-howies');
const menuLinksArray = Array.from(document.getElementsByClassName('nav-link'));
const scrollTop = document.getElementById('scroll-top');

window.addEventListener('scroll', (e) => {
	const scrollPosition = e.path[1].scrollY;

	if (scrollPosition >= 100) {
		header.classList.add('scrolled');
		logo.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
		logo.classList.remove('scrolled');
	}

	if (scrollPosition >= 1250) {
		scrollTop.classList.remove('hidden');
	} else {
		scrollTop.classList.add('hidden');
	}
});

const getMenuLinks = () => {
	menuLinksArray.map((link) => {
		if (link.pathname === window.location.pathname) {
			link.classList.add('active');
		} else {
			link.classList.remove('active');
		}
	});
};

getMenuLinks();

// Responsive menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
}

navLink.forEach((n) => n.addEventListener('click', closeMenu));

function closeMenu() {
	hamburger.classList.remove('active');
	navMenu.classList.remove('active');
}

scrollDown.addEventListener('click', () => {
	aboutHowies.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Slideshow
let slideIndex = 0;

const showSlides = () => {
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
};

showSlides();

scrollTop.addEventListener('click', () => {
	heroSection.scrollIntoView({ behavior: 'smooth' });
});
