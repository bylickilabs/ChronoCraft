
function exportTimeline() {
  const container = document.getElementById("timeline");
  const events = Array.from(container.getElementsByClassName("event")).map(e => ({
    title: e.innerText,
    left: e.style.left,
    top: e.style.top,
    color: e.getAttribute("data-color")
  }));
  const json = JSON.stringify(events, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "timeline.json";
  link.click();
}

function exportTimelinePDF() {
  const timeline = document.getElementById("timeline");
  html2pdf().from(timeline).set({
    filename: 'timeline_export.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
  }).save();
}

function exportTimelinePNG() {
  const timeline = document.getElementById("timeline");
  domtoimage.toPng(timeline).then(function(dataUrl) {
    const link = document.createElement("a");
    link.download = "timeline_export.png";
    link.href = dataUrl;
    link.click();
  }).catch(function(error) {
    console.error("Fehler beim Export als PNG:", error);
    alert("Fehler beim Export als PNG.");
  });
}
