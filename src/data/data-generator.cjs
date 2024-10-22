const fs = require('fs');

const count = Number(process.argv[2]); // odczyt liczby obiektów
let names = [];                        // tablica z obiektami 
let idCounter = 1;                     // licznik id

// Funkcja generująca losową datę urodzenia
function generateRandomDate() {
  const start = new Date(2000, 0, 1);
  const end = new Date(2023, 11, 31);
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];
}

// Funkcja generująca losowy kolor oczu
function generateRandomEyeColor() {
  const eyeColors = ['blue', 'brown', 'green', 'hazel', 'yellow'];
  return eyeColors[Math.floor(Math.random() * eyeColors.length)];
}

fs.readFile('./names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    //podział łańcucha z imionami na wiersze.
    names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);

    let content = "export const data = [";
    for(let i = 0; i < count; i++){
        //losowanie imienia z bilioteki imion
        content += `{
            id: ${idCounter++},
            name: "${names[~~((Math.random() * names.length) / 1)]}",
            birth: "${generateRandomDate()}",
            eyes: "${generateRandomEyeColor()}"
        },`; 
    }
    content += "];"
    //zapis łańcucha do pliku 
    fs.writeFile('./src/data/module-data.js', content, (err) => {
        if (err) {
           console.error(err);
        }
        console.log("module-data.js generated");
       });
});