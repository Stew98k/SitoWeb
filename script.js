// script.js
// colleghiamo ogni bottone alla rispettiva pagina

document.addEventListener("DOMContentLoaded", () => {
  // mappiamo la scritta del bottone al file HTML di destinazione
  const routes = {
    "ESERCIZIO FISICO": "esercizi.html",
    "BUONE ABITUDINI": "abitudini.html",
    "MEDITAZIONE":     "meditazione.html",
  };

  // prendiamo TUTTI i bottoni presenti nelle card
  document.querySelectorAll(".card button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const destinazione = routes[btn.textContent.trim()];
      if (destinazione) window.location.href = destinazione;
    });
  });
});
