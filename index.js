const hamburger = document.querySelector(".hamburger");
const menuContainer = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
	this.classList.toggle("is-active");
	menuContainer.classList.toggle("visible");
});
