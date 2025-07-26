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

// que sea solo una vez
let started = false;

//detectar que este en #important
// no entendi intersection observer asi que usare scroll
window.addEventListener( "scroll", () => {
  const dectectSection = document.getElementById("important");
  const sectionPosition = dectectSection.getBoundingClientRect().top;

  // q empiece cuando se vea la seccion 
  // y si ya no empexo
  if (sectionPosition < window.innerHeight && !started) {
    started = true; // ahora si empezaria
    //no capture los numeros
    const counters = document.querySelectorAll(".percentage__number");

    // no los lee
    // no los reccorre

    counters.forEach((counter) => {
      // agarrar la data-target ... dataset.target...
      //contador normal 
      let counterNumber = 0;
      // no los capture como numeros
      const readTarget =  parseInt(counter.dataset.target);
      

    //conatdor 
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

