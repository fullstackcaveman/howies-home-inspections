const header = document.getElementById('header');
const heroSection = document.getElementById('about-hero-section');
const logo = document.getElementById('logo');
const menuLinks = document.getElementsByClassName('menu-link');
const aboutHowies = document.getElementById('about-howies');
const menuLinksArray = Array.from(document.getElementsByClassName('menu-link'));
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

scrollTop.addEventListener('click', () => {
	heroSection.scrollIntoView({ behavior: 'smooth' });
});
