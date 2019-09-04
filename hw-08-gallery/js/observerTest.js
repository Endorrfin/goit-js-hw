
const refs = {
  section: document.querySelector(".section"),
  nav: document.querySelector(".nav .link"),
};

console.log(refs.section);

const observer = new IntersectionObserver(() => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const getImage = entry.target.querySelector(".img");
      const getArtImage = getImage.dataset>lazy;
      getImage.setAttribute("src", getArtImage)
      console.log(entry.target);
      console.log(refs.nav);
    }
  });
}, {});



refs.section.forEach(element => {
  console.log(element);
  observer.observe(element)
});








