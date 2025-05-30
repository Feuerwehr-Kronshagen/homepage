# ADR 0011: vServer Root-Login über SSH beibehalten

## Kontext

Ein IONOS vServer (Ubuntu) wird per Ansible automatisiert verwaltet. Es ist möglich, den Root-Login über SSH zu
deaktivieren, um zusätzliche Sicherheit zu erzielen.

## Entscheidung

Bei IONOS kann der Root-Zugang für administrative Aufgaben oder Notfallzugriffe erforderlich sein, z. B. bei initialer
Konfiguration, Wiederherstellung oder Zugriff über die Rettungskonsole. Eine Deaktivierung würde den operativen Zugriff
erschweren.

### Alternativen

- Root-Login deaktivieren und ausschließlich über normale Nutzer mit `sudo` arbeiten.

## Konsequenzen

Erhöhtes Risiko durch aktivierten Root-Login – wird durch SSH-Key-Authentifizierung abgesichert.
