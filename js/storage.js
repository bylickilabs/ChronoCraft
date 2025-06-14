
function saveTimeline() {
  const container = document.getElementById("timeline");
  const events = Array.from(container.getElementsByClassName("event")).map(e => ({
    title: e.innerText,
    left: e.style.left,
    top: e.style.top,
    color: e.getAttribute("data-color") || "blue"
  }));
  localStorage.setItem("chronocraft_events", JSON.stringify(events));
}
