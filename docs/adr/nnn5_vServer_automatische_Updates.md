# 5 vServer automatische Updates

## Kontext

Da der Server frei im Internet erreichbar ist, müssen Sicherheitsrisiken minimiert werden. Eine der wichtigsten
Maßnahmen ist die regelmäßige Aktualisierung der Software, um Sicherheitslücken zu schließen. Automatische Updates
sorgen dafür, dass der Server immer auf dem neuesten Stand ist, ohne dass ein Administrator manuell eingreifen muss.

## Entscheidung

1. [Unattended-Upgrades](https://help.ubuntu.com/community/AutomaticSecurityUpdates) wird via ansible installiert
   und aktiviert.

## Konsequenzen

- Der Server wird automatisch mit Sicherheitsupdates versehen, was die Sicherheit erhöht.
- Ein händisches Aktualisieren des vServers ist nicht notwendig.
