> 🕰️ ChronoCraft – Interaktiver Zeitlinien-Editor

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26?style=for-the-badge&logo=html5&logoColor=white) | ![CSS3](https://img.shields.io/badge/CSS3-%231572B6?style=for-the-badge&logo=css3&logoColor=white) | ![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | ![VanillaJS](https://img.shields.io/badge/Vanilla_JS-pure-yellow?style=for-the-badge&logo=javascript) | ![Export](https://img.shields.io/badge/Export-PDF%20%7C%20PNG%20%7C%20JSON-00fff7?style=for-the-badge) | ![Responsive](https://img.shields.io/badge/Responsive-Yes-green?style=for-the-badge) | ![License](https://img.shields.io/badge/License-MIT-informational?style=for-the-badge) |
|---|---|---|---|---|---|---|

<br>

> ✨ Projektbeschreibung

**ChronoCraft** ist ein vollständig clientseitiger Zeitlinien-Editor zum Erstellen, Bearbeiten und Exportieren von Ereignissen auf einer visuell gestalteten Timeline.  
Perfekt geeignet für:

- Lebensläufe
- Projektplanungen & Roadmaps
- Bildungs- oder Produktentwicklungen
- Historische Ereignisse und Zeitschienen

<br>

---

<br>

> 🔧 Funktionsübersicht

| Funktion                | Beschreibung                                               |
|-------------------------|------------------------------------------------------------|
| 🖱️ Drag & Drop           | Ereignisse frei positionierbar                            |
| 📐 Snap-to-Grid          | Automatische Ausrichtung auf einem 50px-Raster            |
| ✏️ Bearbeiten            | Per Rechtsklick → „bearbeiten“                            |
| 🔁 Duplizieren           | Rechtsklick → „duplizieren“                               |
| 🗑️ Löschen               | Rechtsklick → „löschen“ mit Bestätigung                   |
| 🎨 Farbgruppen           | Farbliche Kategorisierung (rot, grün, blau)               |
| 🏷️ Filterfunktion        | Filter nach Farbe über Dropdown                           |
| 📅 Jahresleiste ab 2025  | Dynamisch: Jahre hinzufügen, bearbeiten, entfernen        |
| 🧠 Speicherung           | Alle Änderungen im Browser gespeichert (`localStorage`)   |
| 📤 Exportformate         | **PDF**, **PNG**, **JSON**                                |
| 📱 Responsive Design     | Optimiert für Desktop, Tablet und Mobilgeräte             |

<br>

---

<br>

> 💡 Bedienung
  -  ➕ Ereignis hinzufügen
    - Klick auf „➕ Neues Ereignis“
      - Titel und Farbe wählen

<br>

> ✏️ Bearbeiten, Duplizieren, Löschen
  - **Rechtsklick** auf ein Ereignis
    - Prompt öffnen → Eingabe:
       - `bearbeiten` → Titel ändern
       - `löschen` → Ereignis löschen
       - `duplizieren` → Kopie erzeugen

<br>

> 🎯 Snap-to-Grid
  - Beim Ziehen werden Elemente automatisch auf ein unsichtbares 50px-Raster eingerastet

<br>

> 🖼️ Filterfunktion
  - Oben im Dropdown eine Farbe wählen (rot, grün, blau) → andere werden ausgeblendet

<br>

---

<br>

> 📅 Jahresleiste verwalten

  - ➕ Jahr hinzufügen
    - Gib ein neues Jahr ein (z. B. `2029`) → Klick auf „➕ Jahr hinzufügen“

<br>

> 🧾 Jahr bearbeiten oder löschen
  - Klick auf ein vorhandenes Jahr → Eingabe:
    - Neue Jahreszahl → ersetzt das Jahr
      - `löschen` → entfernt das Jahr aus der Leiste

<br>

> 📌 Hinweis: Startwert = 2025–2028  
  - 💾 Änderungen werden dauerhaft gespeichert (`localStorage`)

<br>

---

<br>

> 📤 Exportfunktionen

| Format | Beschreibung |
|--------|--------------|
| 🖨️ PDF   | Visualisierung als druckbare Datei |
| 🖼️ PNG   | Screenshot-Export der Timeline       |
| 📁 JSON | Rohdatenexport für Wiederverwendung  |

<br>

---

<br>

> 🛠️ Lokale Nutzung
  - ✅ XAMPP (empfohlen unter Windows)

1. [XAMPP herunterladen](https://www.apachefriends.org/de/index.html)
2. Starte **Apache** im XAMPP Control Panel
3. Lege den Projektordner in folgendem Verzeichnis ab:

```yarn
C:\xampp\htdocs\
```

5. Starte im Browser:
   
```yarn
http://localhost/ChronoCraft/
```

<br>

> ✅ Python (plattformunabhängig)

```yarn
python -m http.server
http://localhost:8000/
```

<br>

> ✅ Node.js

```yarn
npx http-server
```

<br>

---

<br>

>🛑 Direktes Öffnen via

```yarn
ChornoCraft/index.html
````

- funktioniert nicht!
  - Nutze immer einen lokalen Webserver wegen CORS-Beschränkungen.

<br>

📝 Lizenz
Veröffentlicht unter der MIT License [LICENSE](LICENSE)

<br>

© 2025 Thorsten Bylicki
Version: v1.0 – Stable
