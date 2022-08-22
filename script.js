/*Responsivity of the Nav Bar*/
const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector("nav ul");
const navLinks = navMenu.querySelectorAll("a");

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener("click", togglerClick);
  // nav links click event
  navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle("toggler-open");
  navMenu.classList.toggle("open");
}

// navLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains("open")) {
    navToggler.click();
  }
}

/*













all links that got href in the nav bar( 5 links)*/
let NavLinks = Array.from(document.querySelectorAll("a"));
NavLinks = NavLinks.filter((link) => link.href.includes("#"));
NavLinks.forEach((link) => link.addEventListener("click", ScrollWithHref));

/*










other leaders to the scrolling*/
let CodeToAbout = document.querySelector(".self-introduction");
CodeToAbout.addEventListener("click", () => ScrollWithoutHref("About"));

let CodeToSkills = document.querySelector(".concern");
CodeToSkills.addEventListener("click", () => ScrollWithoutHref("Works"));
/*













Scrolling functions*/
function ScrollWithHref(e) {
  e.preventDefault();
  const href = this.getAttribute("href").substring(1);
  console.log(href);

  document.querySelector(`.${href}`).scrollIntoView({
    behavior: "smooth",
  });
}

function ScrollWithoutHref(classToScrollTo) {
  document.querySelector(`.${classToScrollTo}`).scrollIntoView({
    behavior: "smooth",
  });
}

/*













set the height of About => skills cirles to be as their width*/
const allCircles = Array.from(document.querySelectorAll(".success"));
window.addEventListener("resize", makeCircles);
function makeCircles() {
  allCircles.forEach(
    (circle) => (circle.style.height = `${circle.offsetWidth}px`)
  );
}
makeCircles();
