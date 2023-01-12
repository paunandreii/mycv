function hideAllPages() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("projects").style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function displayHome() {
  hideAllPages();
  show("home");
}
function displaySkills() {
  hideAllPages();
  show("skills");
}
function displayLanguages() {
  hideAllPages();
  show("languages");
}
function displayProjects() {
  hideAllPages();
  show("projects");
}

displayHome();
