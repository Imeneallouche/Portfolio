/*all links that got href in the nav bar( 5 links)*/
let NavLinks = Array.from(document.querySelectorAll("a"));
NavLinks = NavLinks.filter((link) => link.href.includes("#"));
NavLinks.forEach((link) => link.addEventListener("click", ScrollWithHref));

/*










other leaders to the scrolling*/
let CodeToAbout = document.querySelector(".Home header aside div");
CodeToAbout.addEventListener("click", () => ScrollWithoutHref("About"));

let CodeToSkills = document.querySelector(".Home header aside .second");
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













refreshing page redirection to home page*/
function checkRefresh() {
  if (document.refreshForm.visited.value == "") {
    // This is a fresh page load
    document.refreshForm.visited.value = "1";
    document.querySelector(`.Home`).scrollIntoView({
      behavior: "smooth",
    });
  } else {
    document.querySelector(`.Home`).scrollIntoView({
      behavior: "smooth",
    });
  }
}
checkRefresh();
