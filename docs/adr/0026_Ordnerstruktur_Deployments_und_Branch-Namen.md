# ADR 0026: Ordnerstruktur für Deployments und Regeln für Branch-Namen

Ersetzt [0025x Ordnerstruktur Deployments](0025x_Ordnerstruktur_Deployments.md)

## Kontext

Wir möchten zwei verschiedene Arten unserer Website bereitstellen:

1. Die offizielle Live-Version, die alle Besucher sehen
2. Testversionen für neue Funktionen, die wir vor der Veröffentlichung überprüfen können

Dafür brauchen wir eine klare und einfache Ordnerstruktur auf unserem Server.

## Entscheidung

Wir werden die fertigen Website-Dateien in folgende Ordner auf dem Server kopieren:

- `/var/www/production` für die offizielle Live-Version
- `/var/www/features/[name-der-neuen-funktion]` für Testversionen

Die Ordnerstruktur sieht dann so aus:

```
/var/www/
├── production/
│   └── index.html (und andere Dateien der Live-Website)
└── features/
    ├── neue-startseite/
    │   └── index.html (und andere Dateien dieser Testversion)
    └── neues-kontaktformular/
        └── index.html (und andere Dateien dieser Testversion)
```

Diese Entscheidung haben wir getroffen, weil:

1. Sie gut mit unserem Webserver NGINX zusammenarbeitet
2. Wir keinen zweiten Server bezahlen müssen
3. Die Verwaltung einfacher ist als bei zwei getrennten Servern
4. Wir für Testversionen die Adresse "test.feuerwehr-kronshagen.de" verwenden können

### Andere Möglichkeiten, die wir nicht gewählt haben:

- Testversionen in Unterordnern der Live-Version speichern (zu riskant)
- Einen eigenen Server nur für Testversionen einrichten (zu teuer)

### Branch-Namen

Der Name eines Branches wird unverändert als Ordnername unter `/var/www/features/` und als Teil der Internetadresse
der Testversion verwendet. Deshalb gelten für Branch-Namen folgende Regeln:

1. Erlaubt sind nur Kleinbuchstaben (`a-z`), Ziffern (`0-9`) und Bindestriche (`-`)
2. Keine Schrägstriche (`/`), da sonst verschachtelte Ordner entstehen (z.B. `feature/neue-startseite`), die beim
   Löschen des Branches nicht vollständig aufgeräumt werden
3. Keine Leerzeichen, Umlaute, Punkte oder sonstigen Sonderzeichen
4. Der Name beschreibt kurz die Änderung, z.B. `neue-startseite` oder `007-jahreshauptversammlung`
5. Die Regeln werden vor jedem Test-Deployment automatisch geprüft (`make 05-check-branch-name`). Bei einem
   ungültigen Namen bricht der Workflow ab und es wird nichts veröffentlicht

## Konsequenzen

1. Jede Testversion hat eine eindeutige Internetadresse (z.B. test.feuerwehr-kronshagen.de/neue-startseite)
2. Testversionen und Live-Version laufen auf demselben Server
3. Bei der Veröffentlichung müssen wir den Namen der neuen Funktion als Ordnernamen verwenden
4. Wir müssen regelmäßig alte, nicht mehr benötigte Testversionen löschen
5. Die Einstellungen unseres Webservers müssen so gestaltet sein, dass sie mit dieser Struktur funktionieren
6. Branch-Namen, die nicht den Regeln entsprechen, können zu fehlerhaften Adressen oder nicht
   aufgeräumten Ordnern auf dem Server führen
