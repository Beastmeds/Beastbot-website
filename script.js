function showBot(bot) {
  document.getElementById("select").classList.add("hidden");
  document.getElementById("whatsapp").classList.add("hidden");
  document.getElementById("discord").classList.add("hidden");

  document.getElementById(bot).classList.remove("hidden");
}

function goHome() {
  document.getElementById("select").classList.remove("hidden");
  document.getElementById("whatsapp").classList.add("hidden");
  document.getElementById("discord").classList.add("hidden");
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
