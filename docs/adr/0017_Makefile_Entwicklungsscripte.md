# ADR 0017: Makefile Entwicklungsscripte

## Kontext

Bei der Arbeit an der Website müssen die Entwickler verschiedene Aufgaben erledigen, wie zum Beispiel:

- Die Website lokal testen
- Den Code auf Fehler prüfen
- Die Website auf dem Server veröffentlichen

Bisher wurden diese Aufgaben mit einzelnen Befehlen ausgeführt, die man sich merken oder jedes Mal neu nachschlagen
musste. Um die Arbeit zu vereinfachen und einheitlicher zu gestalten, wollen wir alle diese Befehle an einem zentralen
Ort sammeln.

## Entscheidung

Wir werden eine zentrale Datei namens `Makefile` verwenden, in der alle wichtigen Befehle für die Entwicklung und
Veröffentlichung der Website gesammelt werden.

Vorteile:

1. Alle Entwickler können die gleichen, einfachen Befehle verwenden
2. Man muss sich weniger verschiedene Befehle merken
3. Neue Befehle können leicht hinzugefügt werden

### Andere Möglichkeiten, die wir nicht gewählt haben

- Einzelne Befehlsdateien ohne zentrale Sammlung
- Andere Werkzeuge wie "just" oder "task" (nicht notwendig)

## Konsequenzen

1. Entwickler müssen das Programm "make" auf ihrem Computer installiert haben
2. Neue Hilfsbefehle sollten in die zentrale Makefile-Datei aufgenommen werden
3. Die Pflege dieser zentralen Befehlssammlung wird ein wichtiger Teil der Entwicklungsarbeit sein
