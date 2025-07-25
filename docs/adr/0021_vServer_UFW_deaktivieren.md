# ADR 0000: Titel der Architektur-Entscheidung

Ersetzt [0016x vServer UFW aktivieren](0016x_vServer_UFW_aktivieren.md)

## Kontext

vServer sind von IONOS durch eine Firewall geschütz, weshalb die UFW nicht benötigt wird.

## Entscheidung

1. Die per Default abgeschaltete UFW bleibt abgeschaltet und wird von ansible nicht verändert.
2. In der IONOS Firewall werden händisch folgende Ports freigeschaltet: 22, 80, 443

## Konsequenzen

1. Die Hardware-Firewall schützt alle Ports, die nicht explizit freigegeben sind.
2. Der vServer spart Ressourcen, da er keine Firewall-Tätigkeit durchführen muss.
3. Das händische Konfigurieren der Firewall ist notwendig.
