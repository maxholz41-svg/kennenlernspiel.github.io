// ===============================================================
//  FRAGEN-KATALOG FÜR ALLE KATEGORIEN
// ===============================================================
//
//  Dieses Objekt "questions" speichert ALLE Kategorien als Schlüssel.
//  Jede Kategorie enthält ein Array aus mehreren Fragen.
//  Beim Anklicken einer Kategorie wird später zufällig eine Frage
//  aus genau dem passenden Array ausgewählt.
//
//  Jedes Array enthält:
//  - Deine behaltenen Fragen ✔️
//  - Die neuen Fragen ➕, die du wolltest
//  - Zusätzlich viele weitere neue, jugendliche Fragen
//
// ===============================================================

const questions = {

  // -------------------------------------------------------------------
  // 1. MEMES & TRENDS
  // -------------------------------------------------------------------
  memes: [
    "Welcher TikTok-Trend geht dir am meisten auf die Nerven?",                                  // ✔️ behalten
    "Welches TikTok-Sound würdest du als Hintergrundmusik für dein Leben wählen?",               // ✔️ behalten
    "Wenn du plötzlich viral gehen würdest – mit welchem Video höchstwahrscheinlich?",           // ✔️ behalten
    "Wenn du ein eigenes Meme über dich machen müsstest – wie würde es aussehen?",               // ✔️ behalten
    "Welches Video hast du zuletzt so hart gefeiert, dass du es mehrfach geschaut hast?",        // ➕ neu
    "Welche Challenge würdest du versuchen, wenn du 100% sicher wärst, dass du nicht failst?",   // ➕ neu
    "Welcher Trend sollte sofort zurückkommen?",                                                 // ➕ neu
    "Wenn du jeden Tag einen Trend bestimmen könntest – welcher wäre heute dran?",               // ➕ neu
    "Welcher Trend ist komplett overrated?",                                                     // ➕ neu
    "Was wäre dein Signature-Emoji, das dich perfekt beschreibt?"                                // ➕ neu
  ],


  // -------------------------------------------------------------------
  // 2. PRANKS & LUSTIGE GESCHICHTEN
  // -------------------------------------------------------------------
  pranks: [
    "Hast du jemals aus Versehen einen Streich gespielt, der völlig aus dem Ruder lief?",        // ✔️ behalten
    "Was ist das Lustigste, was dir je in der Schule passiert ist?",                             // ✔️ behalten
    "Welche Aktion mit Freunden würdest du als „legendär“ bezeichnen?",                          // ✔️ behalten
    "Welche peinliche Situation ist dir passiert, die heute noch alle feiern?",                  // ✔️ behalten
    "Was war der seltsamste Moment, in dem du plötzlich lachen musstest – ohne Grund?",          // ➕ neu
    "Was ist der merkwürdigste Spitzname, den du jemals bekommen hast?",                         // ➕ neu
    "Was war ein absolut unnötiges Drama, das du heute lustig findest?",                         // ➕ neu
    "Welche verrückte Aussage hast du mal rausgehauen, die alle überrascht hat?",                // ➕ neu
    "Welches Wort hast du mal falsch ausgesprochen, was heute noch ein Witz ist?",               // ➕ neu
    "Was ist das Komischste, das jemand in der Schule zu dir gesagt hat?"                        // ➕ neu
  ],


  // -------------------------------------------------------------------
  // 3. SUPERKRÄFTE & FANTASIE
  // -------------------------------------------------------------------
  superpowers: [
    "Wenn du einen Tag lang ein Superheld sein könntest, welche Kräfte hättest du und warum?",   // ✔️ behalten
    "Würdest du lieber fliegen können oder unsichtbar sein? Was würdest du tun?",                 // ✔️ behalten
    "Du kannst in die Zukunft sehen – was würdest du als erstes nachsehen?",                     // ✔️ behalten
    "Wenn du eine Fantasy-Welt betreten könntest – wohin würdest du gehen?",                     // ✔️ behalten
    "Wenn du ein magisches Haustier haben könntest – wie würde es aussehen?",                     // ➕ neu
    "Welche Superkraft wäre cool, aber komplett nutzlos?",                                        // ➕ neu
    "Wenn du eine eigene Schule erfinden könntest – wie würde sie aussehen?",                     // ➕ neu
    "Wenn du ein Filmcharakter wärst – Held, Antiheld oder Bösewicht?",                           // ➕ neu
    "Wenn du jede Sprache der Welt sofort sprechen könntest – welche wäre die erste?",            // ➕ neu
    "Wenn du teleportieren könntest – wohin würdest du JETZT sofort gehen?"                       // ➕ neu
  ],


  // -------------------------------------------------------------------
  // 4. BERÜHMTHEITEN & INFLUENCER
  // -------------------------------------------------------------------
  celebs: [
    "Mit welchem YouTuber würdest du gerne mal für einen Tag tauschen?",                          // ✔️ behalten
    "Wenn du für ein Interview mit deinem Lieblings-Star im TV wärst, welche Frage würdest du stellen?", // ✔️ behalten
    "Welche bekannte Person würdest du gern mal in echt treffen – und warum?",                    // ✔️ behalten
    "Welcher Promi würde dich am ehesten zum Lachen bringen?",                                    // ✔️ behalten
    "Welche berühmte Person würdest du NICHT als Sitznachbarn wollen?",                           // ➕ neu
    "Wenn du einen Influencer-Lifestyle leben könntest – wie lange würdest du es aushalten?",     // ➕ neu
    "Welche bekannte Person hat den coolsten Style?",                                             // ➕ neu
    "Welcher YouTuber oder Streamer hat den besten Humor?",                                       // ➕ neu
    "Wen würdest du als Überraschungsgast zu deinem Geburtstag einladen?",                        // ➕ neu
    "Welchem Star würdest du niemals deine Geheimnisse anvertrauen?"                              // ➕ neu
  ],


  // -------------------------------------------------------------------
  // 5. WÜRDEST DU EHER...?
  // -------------------------------------------------------------------
  either: [
    "Würdest du eher in der Vergangenheit oder in der Zukunft leben wollen? Warum?",             // ✔️ behalten
    "Würdest du eher für immer ein Haustier haben oder nie wieder eins bekommen dürfen?",        // ✔️ behalten
    "Würdest du eher einen Tag lang ständig lachen müssen oder ständig singen müssen?",          // ✔️ behalten
    "Würdest du eher einen Tag kein Handy benutzen oder eine Woche kein WLAN haben?",            // ✔️ behalten
    "Würdest du eher immer zu früh oder immer zu spät sein?",                                    // ➕ neu
    "Würdest du eher Gedanken hören können oder niemals lügen können?",                           // ➕ neu
    "Würdest du eher jeden Morgen um 5 Uhr aufstehen oder bis 22 Uhr in der Schule bleiben?",    // ➕ neu
    "Würdest du eher jeden Tag denselben Lehrer haben oder jeden Tag einen anderen?",            // ➕ neu
    "Würdest du eher eine Woche ohne Snacks oder eine Woche ohne Musik überleben?",              // ➕ neu
    "Würdest du eher ein Jahr schlechte Internetverbindung oder ein Jahr schlechtes Wetter haben?" // ➕ neu
  ]
};


// ===============================================================
//  KATEGORIENAMEN (für die Anzeige im Interface)
// ===============================================================
//
//  Damit später nicht "memes" oder "either" im Interface steht,
//  übersetzen wir die internen Bezeichner in schöne deutsche Namen.
//
const categoryNames = {
  memes: "Memes & Trends",
  pranks: "Pranks & lustige Geschichten",
  superpowers: "Superkräfte & Fantasie",
  celebs: "Berühmtheiten & Influencer",
  either: "Würdest du eher…?"
};


// ===============================================================
// DOM-ELEMENTE AUS DEM HTML LADEN
// ===============================================================
//
//  Diese Konstanten holen Elemente aus index.html,
//  damit wir später ihren Inhalt ändern oder verstecken/anzeigen können.
//

const startScreen = document.getElementById("start-screen");   // Startscreen mit Würfel
const categoryScreen = document.getElementById("category-screen"); // Screen für Kategorien & Frage
const dice = document.getElementById("dice");                  // Würfel-Element für Klick
const rollResult = document.getElementById("roll-result");     // Anzeige des Würfelergebnisses
const questionBox = document.getElementById("question-box");   // Box, in der Frage angezeigt wird
const questionCategoryLabel = document.getElementById("question-category-label"); // Kategorie-Name
const questionText = document.getElementById("question-text"); // Die Frage selbst
const btnRollAgain = document.getElementById("btn-roll-again");// Button zum erneuten Würfeln

let currentCategory = null; // Speichert die aktuelle Kategorie


// ===============================================================
//  WÜRFEL-KLICK → ANIMATION + WECHSEL ZU KATEGORIEN
// ===============================================================

dice.addEventListener("click", () => {  // Wenn der Spieler auf den Würfel klickt...
  rollDice();                           // ...startet die Würfel-Funktion
});


// ===============================================================
//  FUNKTION: WÜRFELN MIT ANIMATION
// ===============================================================

function rollDice() {
  const faces = ["⚀","⚁","⚂","⚃","⚄","⚅"];  // Symbolgrafiken der Würfelseiten
  let count = 0;                              // Zählt Animationsdurchläufe

  const interval = setInterval(() => {        // Startet die Würfel-Animation
    dice.textContent = faces[Math.floor(Math.random() * faces.length)];
    count++;

    if (count > 14) {                         // Animation beenden
      clearInterval(interval);

      const result = Math.floor(Math.random() * 6) + 1;  // Zufallszahl 1–6
      dice.textContent = faces[result - 1];
      rollResult.textContent = `Du hast eine ${result} gewürfelt! 🎉`;

      setTimeout(() => {                      // Nach 1 Sekunde zu den Kategorien
        startScreen.classList.remove("active");
        categoryScreen.classList.add("active");
      }, 1000);
    }
  }, 55);
}


// ===============================================================
//  KATEGORIE-KLICK → FRAGE ANZEIGEN
// ===============================================================

document.querySelectorAll(".category-card").forEach(card => {
  card.addEventListener("click", () => {
    currentCategory = card.dataset.category;     // Kategorie aus data-Attribut
    showRandomQuestion(currentCategory);         // Zeige zufällige Frage
  });
});


// ===============================================================
//  „WEITER WÜRFELN“-BUTTON → ZURÜCK ZUM WÜRFEL-BILD
// ===============================================================

btnRollAgain.addEventListener("click", () => {
  categoryScreen.classList.remove("active");   // Kategorien ausblenden
  startScreen.classList.add("active");         // Würfelbild anzeigen
  questionBox.classList.remove("active");      // Fragebox schließen
  rollResult.textContent = "";                 // Würfelergebnis löschen
  currentCategory = null;                      // Kategorie zurücksetzen
});


// ===============================================================
//  FUNKTION: ZUFÄLLIGE FRAGE ZEIGEN
// ===============================================================

function showRandomQuestion(categoryKey) {

  const list = questions[categoryKey];                   // Fragenliste holen
  const randomIndex = Math.floor(Math.random() * list.length); // Zufallsindex
  const question = list[randomIndex];                    // Frage auswählen

  questionCategoryLabel.textContent = categoryNames[categoryKey]; // Schönname anzeigen
  questionText.textContent = question;                             // Frage anzeigen

  questionBox.classList.add("active");                  // Fragebox sichtbar machen
}
