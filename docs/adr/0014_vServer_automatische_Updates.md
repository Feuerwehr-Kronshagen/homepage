# ADR 0014: Automatische Aktualisierungen für den Server einrichten

## Kontext

Da unser Server über das Internet erreichbar ist, müssen wir ihn bestmöglich gegen Sicherheitsrisiken schützen. Eine der
wichtigsten Schutzmaßnahmen ist, die Software regelmäßig zu aktualisieren, um bekannte Sicherheitslücken zu schließen.
Automatische Aktualisierungen sorgen dafür, dass der Server immer mit den neuesten Sicherheitsverbesserungen
ausgestattet ist, ohne dass jemand von uns manuell eingreifen muss.

## Entscheidung

Wir werden ein Programm namens "Unattended-Upgrades" (automatische Aktualisierungen ohne Benutzereingriff) auf unserem
Server installieren und aktivieren. Dies geschieht automatisch durch unser Ansible-System (siehe ADR 0009).

## Konsequenzen

Vorteile:

- Der Server erhält automatisch wichtige Sicherheitsupdates, was die Sicherheit erhöht
- Wir müssen den Server nicht manuell aktualisieren, was Zeit spart und das Risiko vergessener Updates verringert

Nachteile:

- In seltenen Fällen könnte ein automatisches Update zu unerwarteten Problemen führen (dies ist aber weniger riskant als
  keine Updates zu installieren)
