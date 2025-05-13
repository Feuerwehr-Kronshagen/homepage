# ADR 0011: vServer Root-Login über SSH beibehalten

## Kontext

Unser gemieteter Server bei IONOS (mit Ubuntu-Betriebssystem) wird automatisch mit Ansible verwaltet (siehe ADR 0009).
Bei Servern gibt es einen besonderen Zugang mit allen Rechten, den sogenannten "Root-Zugang". Aus Sicherheitsgründen
wird oft empfohlen, diesen direkten Hauptzugang zu deaktivieren.

## Entscheidung

Wir werden den Hauptzugang (Root-Login) für unseren Server beibehalten.

Bei unserem Anbieter IONOS kann dieser Hauptzugang für wichtige Verwaltungsaufgaben oder in Notfällen erforderlich sein,
zum Beispiel bei der ersten Einrichtung, bei Wiederherstellungen oder beim Zugriff über die Notfallkonsole. Eine
Deaktivierung würde den Zugriff in solchen Situationen erschweren.

### Andere Möglichkeiten, die wir nicht gewählt haben

- Den Hauptzugang deaktivieren und stattdessen nur mit normalen Benutzerkonten arbeiten, die bei Bedarf besondere Rechte
  erhalten (sudo).

## Konsequenzen

Das Beibehalten des Hauptzugangs birgt ein gewisses Sicherheitsrisiko. Wir verringern dieses Risiko, indem wir den
Zugang durch sichere Schlüssel (SSH-Key-Authentifizierung) schützen, statt einfache Passwörter zu verwenden.
