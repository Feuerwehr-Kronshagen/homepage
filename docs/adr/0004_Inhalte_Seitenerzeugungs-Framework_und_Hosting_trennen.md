# ADR 0003: Inhalte, Seitengenerierungs-Framework und Hosting trennen

## Kontext

Die bisherige Struktur der Homepage basiert auf einem CMS, was zum Verlust wichtiger Informationen für die Wartung und
Weiterentwicklung geführt hat. Es wurde entschieden, die Homepage auf eine Github-Organisation umzustellen, um die
Wartung und Weiterentwicklung zu erleichtern und die Abhängigkeit von einzelnen Personen zu reduzieren.

## Entscheidung

Die Architektur der Homepage wird wie folgt gestaltet:

```mermaid
flowchart LR
  Inhalte --> Seitengenerierungs-Framework
  Seitengenerierungs-Framework --> Hosting
```

- **Inhalte**: Die Inhalte der Homepage werden in Markdown-Dateien gespeichert. Diese Dateien sind leicht zu bearbeiten
  und können von jedem Teammitglied ohne technische Kenntnisse hinzugefügt oder geändert werden.
- **Seitengenerierungs-Framework**: Die Markdown-Dateien werden durch einen statischen Site-Generator in HTML-Dateien
  umgewandelt. Dies ermöglicht eine effiziente und skalierbare Generierung der Homepage.
- **Hosting**: Die generierten HTML- CSS- und JS-Dateien werden auf einem Hosting-Service bereitgestellt. Dabei wird
  kein dynamischer Servercode benötigt, was die Wartung und Sicherheit der Homepage verbessert.

## Konsequenzen

Vorteile:

- **Möglichkeit, das Framework und die Infrastruktur jederzeit zu ändern, ohne dass die Inhalte geändern werden
  müssen.**
- Resilienz gegen Abhängigkeiten einzelner Personen.
- Offene Dokumentation und Nachvollziehbarkeit aller Inhalte.

Nachteile:

- Anfangs mehr Aufwand als ein CMS.
- Neue Begriffe und ein neuer Account sind notwendig.
- Alles auf Github ist öffentlich einsehbar.

### Alternativen

- Fortsetzung der Verwendung des CMS.
- Verwendung eines anderen CMS mit besserer Dokumentation und Wartbarkeit.
