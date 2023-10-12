// Wacht tot het document volledig is geladen voordat JavaScript wordt uitgevoerd
document.addEventListener("DOMContentLoaded", function() {
    // Zoek alle navigatielinks
    const navLinks = document.querySelectorAll("nav a");

    // Zoek de Home-link
    const homeLink = document.querySelector('href="index.html"');

    // Voeg een klikgebeurtenis toe aan elke navigatielink
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Voorkom de standaardgedrag van de link (navigeren naar een andere pagina)
            event.preventDefault();

            // Haal de id van de doelsectie uit de href-attribuut van de link
            const targetId = this.getAttribute("href").substring(1);

            // Zoek de doelsectie op basis van de id
            const targetSection = document.getElementById(targetId);

            // Controleer of de doelsectie is gevonden
            if (targetSection) {
                // Verberg alle secties
                const sections = document.querySelectorAll("section");
                sections.forEach(function(section) {
                    section.style.display = "none";
                });

                // Toon de doelsectie
                targetSection.style.display = "block";
            }
        });
    });

    // Voeg een klikgebeurtenis toe aan de Home-link om alle secties weer te tonen
    homeLink.addEventListener("click", function(event) {
        // Voorkom de standaardgedrag van de link (navigeren naar een andere pagina)
        event.preventDefault();

        // Toon alle secties
        const sections = document.querySelectorAll("section");
        sections.forEach(function(section) {
            section.style.display = "block";
        });
    });
});

/*** Slideshow Index.html*/
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slideshow-image');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Wijzig afbeelding elke 3 seconden (3000 ms)
}

function changeSlide(n) {
    slideIndex += n;
    const slides = document.querySelectorAll('.slideshow-image');
    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

showSlides();