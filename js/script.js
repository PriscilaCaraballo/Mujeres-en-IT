const header = document.querySelector("header");
const textHeader = document.querySelectorAll(".text");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
 

// contador de los porcentaje
let started = false;

//detectar que este en #important
window.addEventListener( "scroll", () => {
  const dectectSection = document.getElementById("important");
  const sectionPosition = dectectSection.getBoundingClientRect().top;

  // q empiece cuando se vea la seccion 
  if (sectionPosition < window.innerHeight && !started) {
    started = true;
    const counters = document.querySelectorAll(".percentage__number");

    counters.forEach((counter) => {
      // agarrar la data-target ... dataset.target... 
      let counterNumber = 0;
      const readTarget =  parseInt(counter.dataset.target);
      
    const serieNumbeer = setInterval(()  => {
      counterNumber++;
      counter.textContent = counterNumber + "%";

      // me quedo infinito
      if (counterNumber >= readTarget) {
        clearInterval(serieNumbeer);
        counter.textContent = readTarget + "%";
      }
    }, 60);
  });
}
});

