# ADR 0019: Ordnerstruktur für verschiedene Versionen der Website (Deployments)

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

## Konsequenzen

1. Jede Testversion hat eine eindeutige Internetadresse (z.B. test.feuerwehr-kronshagen.de/features/neue-startseite)
2. Testversionen und Live-Version laufen auf demselben Server
3. Bei der Veröffentlichung müssen wir den Namen der neuen Funktion als Ordnernamen verwenden
4. Wir müssen regelmäßig alte, nicht mehr benötigte Testversionen löschen
5. Die Einstellungen unseres Webservers müssen so gestaltet sein, dass sie mit dieser Struktur funktionieren
