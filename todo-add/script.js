let texts = document.querySelectorAll("p");

texts.forEach((text) => {
	if (text.textContent.toLowerCase.includes("the")) {
		text.remove();
	}
});
