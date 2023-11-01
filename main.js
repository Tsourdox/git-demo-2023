window.addEventListener("DOMContentLoaded", main);

/**
 * Starten på vårt program, här vill vi starta/initiera
 * allt som behövs för att börja.
 */
function main() {
  printHelloWorld();
  setupEventListeners();

  /* Exempel på saker man skulle kunna göra när programmet startar */
  // startClock();
  // fetchInstagramFriends();
}

function printHelloWorld() {
  console.log("Hello World");
}

function setupEventListeners() {
  const menuButton = document.getElementById("menu-button");
  menuButton.addEventListener("click", toggleMenu);
}

function toggleMenu() {
  // 1. Hämta headern
  const header = document.querySelector("header");
  // 2. Lägg till en klass "open"
  header.classList.toggle("open");
}
