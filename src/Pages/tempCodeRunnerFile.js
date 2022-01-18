const links = document.querySelector(".link")
function activeNav(){
    links.array.forEach(link => {
        link.classList.remove("active");
        link[0].classList.add("active")
    });
}