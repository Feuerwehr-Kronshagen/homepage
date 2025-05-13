# ADR 0012: vServer Passwörter für den Fernzugriff auf den Server abschalten

## Kontext

Unser gemieteter Server bei IONOS wird automatisch mit Ansible verwaltet und über einen sicheren Fernzugang (SSH) mit
digitalen Schlüsseln statt Passwörtern erreicht. Da dieser Fernzugang über das Internet erreichbar ist, wollen wir die
Sicherheit so hoch wie möglich halten. IONOS unterstützt die Verwendung von digitalen Schlüsseln und benötigt keine
Passwörter für Verwaltungsfunktionen.

## Entscheidung

Wir werden die Möglichkeit, sich mit Passwörtern am Server anzumelden, vollständig abschalten. Der Zugriff wird
ausschließlich mit digitalen Schlüsseln (SSH-Keys) möglich sein.

Diese Maßnahme verhindert, dass Angreifer durch wiederholtes Ausprobieren von Passwörtern Zugang zum Server erhalten
können. Da alle unsere Teammitglieder bereits mit digitalen Schlüsseln arbeiten, entstehen durch diese Änderung keine
Einschränkungen.

## Konsequenzen

Personen ohne gültigen digitalen Schlüssel können nicht mehr auf den Server zugreifen. Wir müssen sicherstellen, dass
alle berechtigten Personen einen funktionierenden Schlüssel haben, bevor wir diese Änderung vornehmen. Im Notfall bleibt
der Zugang über das Rettungssystem von IONOS weiterhin möglich.
