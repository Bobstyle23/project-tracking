const menuOpenBtn = document.querySelector(".icon__hamburger");
const menuCloseBtn = document.querySelector(".icon__close");
const menuList = document.querySelector(".navigation__list");
const menuItems = menuList.children;

const toggleMenu = () => {
  menuOpenBtn.classList.toggle("hidden");
  menuCloseBtn.classList.toggle("hidden");
};

const toggleList = (value) => {
  menuList.style.top = value;
};

menuOpenBtn.addEventListener("click", () => {
  toggleMenu();
  toggleList("10rem");
});

menuCloseBtn.addEventListener("click", () => {
  toggleMenu();
  toggleList("-100rem");
});

for (let i = 0; i < menuItems.length; i++) {
  const element = menuItems[i];

  element.addEventListener("click", (e) => {
    toggleList("-100rem");
    toggleMenu();
  });
}
