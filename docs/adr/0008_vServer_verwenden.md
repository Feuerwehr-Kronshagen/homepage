# ADR 0008: vServer verwenden

## Kontext

Wir brauchen eine günstige Hosting-Plattform für unsere Website. Bei der Auswahl einer geeigneten Hosting-Lösung ist es
wichtig, sowohl die Kosten als auch die Flexibilität zu berücksichtigen.

## Entscheidung

Wir werden einen virtuellen Server (vServer) für das Hosting unserer Website verwenden.

Die Gründe für diese Entscheidung sind:

1. vServer gehören zu den kostengünstigsten Hosting-Optionen auf dem Markt
2. Sie bieten uns die nötige Flexibilität bei einem eventuellen Anbieterwechsel
3. vServer ermöglichen volle Kontrolle über die Serverumgebung

## Konsequenzen

Vorteile:

1. Kostengünstige Lösung im Vergleich zu dedizierten Servern
2. Flexibilität beim Wechsel zwischen verschiedenen Anbietern
3. Volle Kontrolle über die Serverkonfiguration und -einstellungen
4. Skalierbarkeit bei wachsenden Anforderungen

Nachteile:

1. Erfordert mehr technisches Know-how für die Verwaltung
2. Verantwortung für Sicherheit und Updates liegt bei uns
3. Möglicherweise geringere Performance im Vergleich zu dedizierten Servern
  - für das Bereitstellen einer statischen HTML-Seite reicht die Leistung aus
