
function renderTimelineYears() {
  const labels = document.getElementById("timeline-labels");
  labels.innerHTML = "";
  let years = JSON.parse(localStorage.getItem("timeline_years")) || [];

  if (years.length === 0) {
    years = [2025, 2026, 2027, 2028];
    localStorage.setItem("timeline_years", JSON.stringify(years));
  }

  years.forEach((y, i) => {
    const span = document.createElement("span");
    span.textContent = y;
    span.style.cursor = "pointer";
    span.title = "Klicken zum Bearbeiten oder Löschen";
    span.onclick = () => {
      const action = prompt("Jahr bearbeiten oder 'löschen' eingeben:");
      if (!action) return;
      if (action.toLowerCase() === "löschen") {
        years.splice(i, 1);
      } else {
        const newYear = parseInt(action);
        if (!isNaN(newYear)) years[i] = newYear;
      }
      localStorage.setItem("timeline_years", JSON.stringify(years));
      renderTimelineYears();
    };
    labels.appendChild(span);
  });
}

function addTimelineYear() {
  const input = document.getElementById("newYearInput");
  const year = parseInt(input.value);
  if (isNaN(year)) return;
  let years = JSON.parse(localStorage.getItem("timeline_years")) || [];
  if (!years.includes(year)) {
    years.push(year);
    years = years.sort();
    localStorage.setItem("timeline_years", JSON.stringify(years));
    renderTimelineYears();
  }
  input.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  renderTimelineYears();
  if (typeof loadTimeline === "function") loadTimeline();
});
