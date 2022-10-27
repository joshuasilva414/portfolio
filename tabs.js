const aboutButton = document.querySelector('h2#about-toggle');
const contactButton = document.querySelector('h2#contact-toggle');
const portfolioButton = document.querySelector('h2#portfolio-toggle');

const aboutContent = document.querySelector('div.content#about');
const contactContent = document.querySelector('div.content#contact');
const portfolioContent = document.querySelector('div.content#portfolio');

aboutButton.addEventListener("click", (e) => {
    aboutButton.classList.add("active");
    contactButton.classList.remove("active");
    portfolioButton.classList.remove("active");

    aboutContent.classList.add("active");
    contactContent.classList.remove("active");
    portfolioContent.classList.remove("active");
});

contactButton.addEventListener("click", (e) => {
    contactButton.classList.add("active");
    aboutButton.classList.remove("active");
    portfolioButton.classList.remove("active");

    contactContent.classList.add("active");
    aboutContent.classList.remove("active");
    portfolioContent.classList.remove("active");
});

portfolioButton.addEventListener("click", (e) => {
    portfolioButton.classList.add("active");
    contactButton.classList.remove("active");
    aboutButton.classList.remove("active");

    portfolioContent.classList.add("active");
    contactContent.classList.remove("active");
    aboutContent.classList.remove("active");
});