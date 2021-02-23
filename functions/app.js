let menuItems = document.querySelectorAll(".item a");
console.log(menuItems);

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("mouseover", () => {
    menuItems[i].style.color = "#f91939";
  });
  menuItems[i].addEventListener("mouseout", () => {
    menuItems[i].style.color = "#1979e7";
  });
}
