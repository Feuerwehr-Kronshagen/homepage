# vServer SSH-Port (22) nicht ändern

## Kontext

Ein IONOS vServer (Ubuntu) wird per Ansible automatisiert verwaltet. Es ist möglich, den SSH-Port zu ändern, um
zusätzliche Sicherheit durch Obscurity zu erzielen.

## Entscheidung

Aus Kompatibilitätsgründen mit IONOS bleibt der Standard-Port erhalten. Zur Absicherung erfolgt der Zugriff per SSH
(Port 22) mit Key-Authentifizierung.

Bei IONOS muss Port 22 erreichbar bleiben, um administrative Tools, Rettungssysteme oder externe Firewalls nicht zu
blockieren. Eine Änderung könnte die Erreichbarkeit des Systems einschränken oder Remote-Zugriff verhindern.

### Alternativen

- Port ändern und neue Firewall-Regel anlegen – erhöht Risiko und Komplexität

## Konsequenzen

Kein Security-Through-Obscurity-Vorteil, aber stabile Zugänglichkeit bleibt erhalten
