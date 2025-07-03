# ADR 0018: NGINX als Programm zur Auslieferung der Website (Webserver)

## Kontext

Damit Besucher unsere Website im Internet sehen können, benötigen wir ein Programm auf unserem Server, das die Webseiten
an die Besucher ausliefert. Dieses Programm wird als "Webserver" bezeichnet. Wir brauchen einen Webserver, der schnell
arbeitet und gut einstellbar ist. Die Website soll automatisch erstellt und auf dem Server bereitgestellt werden.

## Entscheidung

Wir werden NGINX (ausgesprochen "Engine-X") als Webserver verwenden, um unsere Website an die Besucher auszuliefern.

Vorteile:

1. NGINX ist zuverlässig, weit verbreitet und besonders gut für Websites wie unsere geeignet
2. Es lässt sich einfach einstellen, welche Anfragen wie beantwortet werden sollen
3. Es benötigt wenig Serverressourcen (Speicher und Rechenleistung)

### Andere Möglichkeiten, die wir nicht gewählt haben:

- Apache: ein anderer bekannter Webserver, der aber komplizierter einzurichten ist
- Node.js mit Express: ein moderneres System, das für unsere einfache Website zu aufwändig wäre

## Konsequenzen

1. Wir müssen die Einstellungen für NGINX pflegen und aktualisieren
2. Wenn wir ändern wollen, wie Besucher zu bestimmten Seiten geleitet werden, müssen wir die NGINX-Einstellungen
   anpassen
3. Protokolle über Besucher und Fehlerseiten müssen eventuell manuell eingerichtet werden
