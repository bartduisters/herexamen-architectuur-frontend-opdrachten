## Opdracht 1

Voer de volledige opdracht uit in de map `Opdracht-1`.

- Maak een nieuw npm project aan.
- Installeer de volgende packages/dependencies:
  - `typescript`
- Maak een index.ts bestand aan.
  - Voeg een `console.log` toe met de tekst `Hello World!`.
- Voeg een `npm script` toe aan het `package.json` bestand.
  - Geef de script de naam `build`.
  - Geef het script de waarde `tsc index.ts --outDir dist && node dist/index.js`.
- Voeg een .gitignore toe aan het project.
  - Voeg de map `node_modules` toe aan de `.gitignore`.
  - Voeg de map `dist` toe aan de `.gitignore`.

Tips:

- TypeScript is een `devDependency`.
- Testen dat het gelukt is kan door het commando `npm run build` uit te voeren. Dit zal "Hello World!" in de console loggen.
