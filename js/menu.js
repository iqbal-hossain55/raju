const hamburger = document.querySelector("#sidenav-button");
const removeDiv = document.querySelector("#sidenav-x-button");
const selector = document.querySelector(".sidenav-plate");

hamburger.addEventListener("click", () => {
    console.log("clicked");
    selector.classList.toggle("closeSideNav");
});

removeDiv.addEventListener("click", () => {
    console.log("removed");
    selector.classList.toggle("closeSideNav");
});
