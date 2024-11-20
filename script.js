document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Принято,информация будет передана (нет).");
    this.reset();
});
