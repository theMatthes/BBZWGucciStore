## Installation
Nach dem Klonen des Git-Repositories können Sie die benötigten Node-Module mit `npm i` installieren. 

## Starten

Das Projekt kann mit `npm start` gestartet werden.
Dieser Command fürt intern folgenden Befehl aus:
`ng build && tsc backend.ts && node backend.ts`
Das Projekt kann anschliessend auf `http://[::1]:3000` geöffnet werden.
## Testen

Die automatisierten Unit-Tests können mit `npm test` ausgeführt werden.