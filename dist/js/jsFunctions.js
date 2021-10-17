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
