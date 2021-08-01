document.addEventListener("DOMContentLoaded", function () {
    const selected = document.querySelector(".selected");
    const optionsContainer = document.querySelector(".options-container");

    const optionsList = document.querySelectorAll(".option");

    selected.addEventListener("click", () => {
        optionsContainer.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".menu-btn").addEventListener("click", function() {
        document.querySelectorAll('*[class^="menu"]').forEach( item=> item.classList.toggle("show")
        )
    })
}) 
