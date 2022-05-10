import "core-js/stable";
import "regenerator-runtime";

// date
///////////////////////////////////////////////////////////

const year = document.querySelector(".year");
const newYear = new Date().getFullYear();
year.textContent = newYear;

// Make mobile nav work
///////////////////////////////////////////////////////////

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const sectionHeroEl = document.querySelector(".section-hero");

btnNavEl.addEventListener("click", function (e) {
  e.preventDefault();

  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((links) => {
  links.addEventListener("click", function (e) {
    e.preventDefault();
    const link = e.target.closest("a:link");
    const href = link.getAttribute("href");
    // scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }
    //scroll to other links
    const sectionEl = document.querySelector(href);

    sectionEl.scrollIntoView({ behavior: "smooth" });

    // close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
// STICKY NAVIGATION

const options = {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
};

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    document.body.classList.add("sticky");
  }

  if (entry.isIntersecting) {
    document.body.classList.remove("sticky");
  }
};

const observer = new IntersectionObserver(stickyNav, options);
observer.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
