# ADR 0005: Einheitliche Beschreibungen für Änderungen (Conventional Commits) verwenden

## Kontext

Wenn wir Änderungen an der Website vornehmen, ist es wichtig, dass diese Änderungen gut beschrieben sind. So können alle
Teammitglieder verstehen, was geändert wurde und warum. Wir möchten daher ein einheitliches Format für diese
Beschreibungen einführen.

## Entscheidung

Ab sofort verwenden alle Teammitglieder ein einheitliches Format für die Beschreibung ihrer Änderungen (in der
Fachsprache "Commits" genannt).

Die wichtigsten Regeln sind:

1. Jede Änderungsbeschreibung beginnt mit einem Stichwort, das die Art der Änderung angibt, gefolgt von einer kurzen
   Erklärung
2. Mögliche Stichworte sind:
  - `docs`: Änderungen an Dokumenten oder Texten
  - `feat`: Neue Funktionen oder Inhalte
  - `fix`: Behebung von Fehlern
  - `style`: Änderungen am Aussehen der Website
  - `refactor`: Optimierung ohne Veränderung des Funktionsumfangs
  - `test`: Erstellung ung Anpassung der Tests

Beispiele:

- docs(blog): Blogartikel JHV hinzugefügt
- docs(blog): Blogartikel JHV geändert
- feat(liste): update list styling
- fix: error on clicking in footer
- docs(adr): add ADR 0005 for conventional commits

## Konsequenzen

Vorteile:

1. Die Änderungshistorie wird übersichtlicher und leichter verständlich.
2. Automatische Werkzeuge können die Änderungen besser verarbeiten.
3. Alle Teammitglieder können schnell erkennen, welche Art von Änderung vorgenommen wurde.

Nachteile:

1. Teammitglieder müssen sich an das neue Format gewöhnen.
2. Es erfordert etwas mehr Überlegung beim Beschreiben von Änderungen.
