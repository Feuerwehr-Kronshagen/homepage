# ADR 0015: vServer Einfache Firewall (UFW) aktivieren

## Kontext

Auf unserem gemieteten Server möchten wir den Zugriff aus dem Internet absichern. Wir haben zwei verschiedene
Umgebungen:

1. Die Hauptumgebung (auch "Produktivumgebung" genannt), die auf unserem IONOS-Server läuft und die öffentliche Website
   bereitstellt
2. Eine Testumgebung, die auf den Computern der Entwickler in speziellen Behältern (Containern) läuft und nicht
   öffentlich zugänglich ist

Die Testumgebung funktioniert technisch anders als der echte Server und unterstützt nicht alle Sicherheitsfunktionen auf
die gleiche Weise.

## Entscheidung

1. Wir werden eine einfache Firewall namens "UFW" (Uncomplicated Firewall) **nur auf dem Hauptserver aktivieren**. Diese
   Firewall erlaubt nur bestimmte Verbindungen (z.B. für die Website und für die Fernwartung).
2. In der Testumgebung auf den Entwicklercomputern wird **keine Firewall eingerichtet**.

### Andere Möglichkeiten, die wir nicht gewählt haben

- Verwendung einer anderen Firewall namens "firewalld" - UFW ist jedoch einfacher für unser Ubuntu-System
- Einrichtung einer simulierten Firewall in der Testumgebung - dies wäre zu kompliziert und aufwändig

## Konsequenzen

Vorteile:

- Auf dem Hauptserver schützt die Firewall vor unerwünschten Zugriffen aus dem Internet
- Die Konfiguration ist einfach und verständlich

Nachteile:

- In der Testumgebung fehlt die Firewall, wodurch Tests nicht genau die gleiche Umgebung wie auf dem Hauptserver haben
- Unsere Ansible-Skripte müssen so angepasst werden, dass sie die Firewall nur auf dem Hauptserver einrichten
- Die Testumgebung ist weniger geschützt, was aber kein Problem darstellt, da sie nicht öffentlich zugänglich ist
