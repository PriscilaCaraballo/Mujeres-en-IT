const header = document.querySelector("header");
const textHeader = document.querySelectorAll(".text");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

/* captura del los botones de las mujeres lideres */
  // card__btn--lider2
  // card__btn--lider3

// prueba en lider 1

if(document.getElementById("card__btn--lider1")) {
  const modal = document.getElementById("woman-1");
    const button = document.getElementById("card__btn--lider1");
    const span = document.getElementsByClassName("close-1")[0];
    const body = document.body;

    
    button.onclick = function() {
        modal.style.display = "flex";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

}

// prueba en lider 2
if(document.getElementById("card__btn--lider2")) {
  const modal = document.getElementById("woman-2");
    const button = document.getElementById("card__btn--lider2");
    const span = document.getElementsByClassName("close-2")[0];
    const body = document.body;

    
    button.onclick = function() {
        modal.style.display = "flex";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

}

// prueba en lider 3
if(document.getElementById("card__btn--lider3")) {
  const modal = document.getElementById("woman-3");
    const button = document.getElementById("card__btn--lider3");
    const span = document.getElementsByClassName("close-3")[0];
    const body = document.body;

    
    button.onclick = function() {
        modal.style.display = "flex";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

}

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

