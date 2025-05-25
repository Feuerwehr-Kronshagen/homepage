# ADR 0015: vServer UFW aktivieren

## Kontext

Auf unserem vServer möchten wir den Netzwerkzugriff absichern. Die Produktivumgebung (Ansible-Host: `production`)
läuft auf einem IONOS vServer mit vollem Zugriff auf das Betriebssystem und die Netzwerkkonfiguration. Die
Entwicklungsumgebung (`localTest`) läuft in lokalen Containern, die typischerweise keine voll funktionsfähige
`iptables`/`nftables`-Unterstützung haben. In Containern schlägt `ufw` (Uncomplicated FireWall) meist fehl oder greift
nicht sinnvoll, da Netzwerkisolierung anders funktioniert.

## Entscheidung

1. `ufw` wird **nur auf `production`-Hosts aktiviert**, um eingehende Verbindungen zu regulieren (z. B. nur SSH,
   HTTP und HTTPS erlauben).
2. In der Umgebung `localTest` (Container-basiert) wird **kein `ufw` konfiguriert**.

## Konsequenzen

- In `production` schützt `ufw` den Server vor ungewolltem Netzwerkzugriff.
- In `localTest` entfällt die Firewall-Konfiguration. Tests auf Netzwerkebene (z. B. Ports blockiert/frei) müssen ggf.
  anders simuliert werden.
- Ansible-Playbooks müssen `ufw`-Rollen/Tasks auf Hostgruppen beschränken (`hosts: production`).
- Risiko bei Entwicklungscontainern bleibt bewusst offen – da kein echter externer Zugriff besteht.

## Alternativen

- Verwendung von `firewalld` statt `ufw` – aber `ufw` ist einfacher für Ubuntu/Debian.
- Einrichtung einer simulierten Firewall im Container (z. B. `docker --cap-add=NET_ADMIN`) - zu viel Komplexität
