# BBZW Gucci Store
Zwischen dem Frontend und Backend wird die Datei `backend/types.ts` geteilt. Darin sind alle Interfaces erfasst.
## Installation
Nach dem Klonen des Git-Repositories können Sie die benötigten Node-Module mit `npm i` installieren. 
## Starten
Das Projekt kann mit `npm start` gestartet werden.
Das Projekt kann anschliessend auf `http://[::1]:3000` geöffnet werden.
## Testen
Die automatisierten Unit-Tests können mit `npm test` ausgeführt werden.
**Der Server muss aber im Hintergrund laufen.**, denn die Tests werden, wie die Berechnung der totalen kosten, clientseitig ausgeführt.
Die URL der Tests muss genau `http://localhost:9876` sein, ansonsten treten Fehler mit CORS auf.
