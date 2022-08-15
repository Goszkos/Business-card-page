// Sekcja welcome
let btnScroll = document.querySelector("button");
let portf = document.querySelector(".portfolio");

btnScroll.addEventListener("click", function () {
	portf.scrollIntoView(true);
});

// Sekcja portfolio

// Slider budowa
const slideList = [
	{
		img: "images/portfolio1.jpg",
		h2: "Moja strona-wizytówka",
		p: "To dokładnie ta strona na której obecnie jesteś. Stronę napisałem pod koniec nauki z pierwszego kursu o HTML i CSS stworzonego przez Samuraja Programowania. Potem jak nauczyłem się więcej o HTMLu i CSSie oraz poznałem podstawy JS postanowiłem ją rozbudować i poprawić. Obecnie strona jest cały czas ulepszana.",
	},
	{
		img: "images/portfolio2.jpg",
		h2: "Przykładowa strona 1",
		p: "Niestety,ale obecnie nie mam więcej stron którymi mógłbym się tutaj pochowalić. Skupiam się na dalszej nauce JS i podstaw Reacta. Dodaje kolejne slajdy dlatego, żeby baner był fajniejszy i żeby można było trochę sobie poklikać i posprawdzać jak działa",
	},
	{
		img: "images/portfolio3.jpg",
		h2: "Przykładowa strona 2",
		p: "Niestety,ale obecnie nie mam więcej stron którymi mógłbym się tutaj pochowalić. Skupiam się na dalszej nauce JS i podstaw Reacta. Dodaje kolejne slajdy dlatego, żeby baner był fajniejszy i żeby można było trochę sobie poklikać i posprawdzać jak działa",
	},
	{
		img: "images/portfolio4.jpg",
		h2: "Przykładowa strona 3",
		p: "Niestety,ale obecnie nie mam więcej stron którymi mógłbym się tutaj pochowalić. Skupiam się na dalszej nauce JS i podstaw Reacta. Dodaje kolejne slajdy dlatego, żeby baner był fajniejszy i żeby można było trochę sobie poklikać i posprawdzać jak działa",
	},
];

const imageSlider = document.querySelector("img.slider");
const h2Slider = document.querySelector("h2.slider");
const textSlider = document.querySelector("p.slider");
const dots = [...document.querySelectorAll(".dots span")];
const textBackground = document.querySelector(".project");

// Interfejs
const timeSlider = 5000;
let activeSlide = 0;

// Implementacja
changeDot = () => {
	const activeDot = dots.findIndex((dot) => dot.classList.contains("active"));
	dots[activeDot].classList.remove("active");
	dots[activeSlide].classList.add("active");
};

// Zmiana tła
const changeBackgroud = () => {
	if ((activeSlide + 1) % 2 === 0) {
		textBackground.style.backgroundColor = "#28a6dc";
	} else {
		textBackground.style.backgroundColor = "#ff4f2c";
	}
};

changeSlide = () => {
	activeSlide++;
	if (activeSlide == slideList.length) activeSlide = 0;
	imageSlider.src = slideList[activeSlide].img;
	h2Slider.textContent = slideList[activeSlide].h2;
	textSlider.textContent = slideList[activeSlide].p;
	changeDot();
	changeBackgroud();
};

let sliderinterval = setInterval(changeSlide, timeSlider);

// Zmiana slajdów klawiszami
const keyChangeSlide = (e) => {
	if (e.keyCode == 37 || e.keyCode == 39) {
		clearInterval(sliderinterval);
		e.keyCode == 37 ? activeSlide-- : activeSlide++;
		if (activeSlide === slideList.length) {
			activeSlide = 0;
		} else if (activeSlide < 0) {
			activeSlide = slideList.length - 1;
		}
		imageSlider.src = slideList[activeSlide].img;
		h2Slider.textContent = slideList[activeSlide].h2;
		textSlider.textContent = slideList[activeSlide].p;
		changeDot();
		changeBackgroud();
		sliderinterval = setInterval(changeSlide, timeSlider);
	}
};

window.addEventListener("keydown", keyChangeSlide);

// Zmiana slajdów kliknięciem myszki
const mouseClickChangeSlide = () => {
	for (let i = 0; i < dots.length; i++) {
		dots[i].addEventListener("click", function () {
			clearInterval(sliderinterval);
			imageSlider.src = slideList[i].img;
			h2Slider.textContent = slideList[i].h2;
			textSlider.textContent = slideList[i].p;
			dots[i].classList.add("active");
			if ((i + 1) % 2 === 0) {
				textBackground.style.backgroundColor = "#28a6dc";
			} else {
				textBackground.style.backgroundColor = "#ff4f2c";
			}
			sliderinterval = setInterval(changeSlide, timeSlider);
		});
	}
};

mouseClickChangeSlide();

// Sekcja slogan

const pText = document.querySelector(".text");
const pAuthor = document.querySelector(".author");
const txt = "Nie ma nic stałego, oprócz zmiany.";
const author = "Heraklit z Efezu";

// Parametry motto
let indexText = 0;
const timeMotto = 100;

// Implementacja motto i autora
const addLetter = () => {
	pText.textContent += txt[indexText];
	indexText++;
	if (indexText === txt.length) {
		clearInterval(indextyping);
		const indextypingauthor = setInterval(function () {
			pAuthor.textContent += author[indexAuthor];
			indexAuthor++;
			if (indexAuthor === author.length) clearInterval(indextypingauthor);
		}, timeMotto);
	}
};

// Wywołanie motto
const indextyping = setInterval(addLetter, timeMotto);

// Parametry autor
let indexAuthor = 0;
