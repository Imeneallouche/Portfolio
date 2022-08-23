console.log("eddoooooouuuu ah");
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













set the height of About => skills to be as their width to make squares*/
//GOAL: make squares
const allSquares = Array.from(document.querySelectorAll(".success"));
window.addEventListener("resize", makeSquares);
function makeSquares() {
  allSquares.forEach(
    (square) => (square.style.height = `${square.offsetWidth}px`)
  );
}
makeSquares();

/*













animated statistics going from 0 to data-statistics*/
const numericalStats = Array.from(
  document.querySelectorAll("[data-statistics]")
);

window.addEventListener("scroll", debounce(animateStats, 20));

/*



*/

function animateStats(eventSelected) {
  numericalStats.forEach((numericalStat) => {
    // half way through the statistic
    const slideInAt =
      window.scrollY + window.innerHeight - numericalStat.height;
    // bottom of the statistic
    const statisticBottom = numericalStat.offsetTop + numericalStat.height;
    const isHalfShown = slideInAt > numericalStat.offsetTop;
    const isNotScrolledPast = window.scrollY < statisticBottom;
    if (isHalfShown && isNotScrolledPast) {
      console.log("go");
      startcount();
    } else {
      setToZero();
    }
  });
}

function startcount() {
  const interval = setInterval(() => {
    numericalStats.forEach((stat) => {
      let currentCount = parseInt(stat.innerHTML);
      const finalCount = parseInt(stat.dataset.statistics);
      if (currentCount < finalCount) {
        stat.innerHTML = `${currentCount + 1}`;
      } else {
        falses++;
      }
    });
  }, 200);
}

function setToZero() {
  numericalStats.forEach((stat) => (stat.innerHTML = 0));
}
/*














LATEN THE EXECUTION*/
function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
