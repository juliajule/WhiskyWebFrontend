# WhiskyWebFrontend
Achtung: Diese App und auch der Inhalt des ReadME sind vollständig KI-generiert!
# Spindlers Spirits - Whisky App

Eine moderne Web-Anwendung für die Verwaltung und Bewertung von Whisky-Sammlungen.

## Projektstruktur

```
whisky-app/
├── index.html          # Haupt-HTML-Datei
├── css/
│   └── styles.css      # Alle CSS-Styles
├── js/
│   ├── app.js         # Haupt-Anwendungslogik
│   ├── api.js         # API-Kommunikation
│   ├── auth.js        # Authentifizierung
│   └── ui.js          # UI-Management
├── images/            # Whisky-Bilder
└── README.md          # Diese Datei
```

## Features

### Öffentliche Funktionen
- **Whisky-Sammlung anzeigen**: Übersicht aller Whiskys mit Details
- **Tasting-Notizen lesen**: Bewertungen und Notizen anderer Nutzer
- **Responsive Design**: Funktioniert auf Desktop und Mobile
- **Elegante UI**: Warme Farben passend zum Whisky-Thema

### Admin-Funktionen (nach Login)
- **Whisky hinzufügen/bearbeiten**: Neue Whiskys zur Sammlung hinzufügen
- **Tasting-Notizen erstellen**: Eigene Bewertungen und Notizen verfassen
- **Bilder hochladen**: Fotos zu Tastings hinzufügen
- **Daten verwalten**: Whiskys und Tastings bearbeiten/löschen

## Installation

1. **Dateien herunterladen**: Alle Dateien in einen Ordner kopieren
2. **Ordnerstruktur erstellen**:
   ```bash
   mkdir whisky-app
   cd whisky-app
   mkdir css js images
   ```
3. **Dateien platzieren**: Jede Datei in den entsprechenden Ordner
4. **Server starten**: Mit einem lokalen Webserver öffnen

### Lokaler Server
```bash
# Mit Python 3
python -m http.server 8000

# Mit Node.js (http-server)
npx http-server

# Mit PHP
php -S localhost:8000
```

## Konfiguration

### API-Endpunkt ändern
In `js/api.js`:
```javascript
const API_BASE = 'http://localhost:8080'; // Hier deine API-URL
```

### App-Version aktualisieren
```javascript
const APP_VERSION = '1.0.0'; // Version für API-Kompatibilität
```

## Verwendung

### Für Besucher
1. Website öffnen
2. Zwischen "Whiskys" und "Tastings" wechseln
3. Whisky-Details und Bewertungen ansehen

### Für Admins
1. Mit Admin-Zugangsdaten einloggen
2. "Add Whisky" für neue Whiskys
3. "Add Tasting" für neue Bewertungen
4. "Upload Image" für Bilder

## Design-Features

- **Glasmorphismus-Effekte**: Moderne transparente Elemente
- **Backdrop-Filter**: Weichgezeichnete Hintergründe
- **Hover-Animationen**: Interaktive Karteneffekte
- **Responsive Grid**: Automatische Layoutanpassung
- **Dunkles Theme**: Whisky-inspirierte Farbpalette

## Sicherheit

- **JWT-Token**: Sichere Authentifizierung
- **LocalStorage**: Token-Speicherung im Browser
- **Form-Validierung**: Client-seitige Eingabeprüfung
- **HTTPS-ready**: Bereit für SSL-Verschlüsselung

## API-Endpoints

### Öffentlich
- `GET /whiskys` - Alle Whiskys abrufen
- `GET /tastings` - Alle Tastings abrufen

### Admin (Auth required)
- `POST /auth/login` - Admin-Login
- `POST /admin/whiskys` - Whisky erstellen
- `PUT /admin/whiskys/:id` - Whisky aktualisieren
- `DELETE /admin/whiskys/:id` - Whisky löschen
- `POST /admin/tastings` - Tasting erstellen
- `PUT /admin/tastings/:id` - Tasting aktualisieren  
- `DELETE /admin/tastings/:id` - Tasting löschen
- `POST /admin/images/upload` - Bild hochladen

## Testing

Die App enthält `data-testid` Attribute für automatisierte Tests:

```javascript
// Beispiel Cypress Test
cy.get('[data-testid="login-username"]').type('admin');
cy.get('[data-testid="login-password"]').type('password');
cy.get('[data-testid="login-button"]').click();
```

## Entwicklung

### Neue Features hinzufügen
1. **HTML**: Struktur in `index.html` erweitern
2. **Styles**: CSS in `css/styles.css` hinzufügen
3. **Logik**: JavaScript in entsprechende Datei
4. **API**: Neue Endpoints in `js/api.js`

### Code-Organisation
- `app.js`: Hauptlogik und Event-Handling
- `api.js`: Alle Server-Kommunikation
- `auth.js`: Login/Logout Funktionalität
- `ui.js`: DOM-Manipulation und Anzeige

## Browser-Kompatibilität

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Mitwirken

1. Fork das Repository
2. Feature-Branch erstellen
3. Änderungen committen
4. Pull Request stellen

## Support

Bei Fragen oder Problemen:
- Issue auf GitHub erstellen
- Code-Review anfordern
- Dokumentation erweitern

---
