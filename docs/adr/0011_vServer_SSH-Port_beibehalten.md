# ADR 0011: vServer Standard-Zugangsweg (SSH-Port 22) zum Server beibehalten

## Kontext

Unser gemieteter Server bei IONOS (mit Ubuntu-Betriebssystem) wird automatisch mit Ansible verwaltet (siehe ADR 0010).
Bei der Fernwartung von Servern wird ein Zugangsweg namens SSH verwendet, der standardmäßig über einen bestimmten
Kanal (Port 22) läuft. Manche Administratoren ändern diesen Kanal, um die Sicherheit zu erhöhen, indem sie den
Zugangsweg "verstecken".

## Entscheidung

Wir werden den Standard-Zugangskanal (Port 22) für SSH beibehalten. Stattdessen sichern wir den Zugang durch die
Verwendung von sicheren Schlüsseln (Key-Authentifizierung).

Bei unserem Anbieter IONOS muss dieser Standard-Zugangsweg erreichbar bleiben, damit deren Hilfsprogramme,
Notfallsysteme und Schutzfunktionen weiterhin funktionieren. Eine Änderung könnte dazu führen, dass wir im Notfall nicht
mehr auf den Server zugreifen können.

### Andere Möglichkeiten, die wir nicht gewählt haben

- Den Zugangskanal ändern und neue Schutzregeln einrichten – dies würde das Risiko und die Komplexität erhöhen

## Konsequenzen

Wir verzichten auf den geringen Sicherheitsvorteil durch das "Verstecken" des Zugangswegs, gewinnen aber eine
zuverlässige Erreichbarkeit des Servers, besonders in Notfällen.
