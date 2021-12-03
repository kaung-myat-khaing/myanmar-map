let currentPlace = document.querySelector(".current-place");
let map = document.querySelectorAll(".map svg path");

map.forEach(currentPath => {
    currentPath.addEventListener("mouseover",() => {
        map.forEach(path => path.classList.remove("active"));
        currentPath.classList.add("active");
        currentPlace.textContent = currentPath.getAttribute("title");
    });
})

document.querySelector("[title='Yangon']").classList.add("active");
currentPlace.textContent = "Yangon";