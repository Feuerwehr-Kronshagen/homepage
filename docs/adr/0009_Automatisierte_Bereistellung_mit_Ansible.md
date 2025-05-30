# ADR 0009: Automatisierte Bereitstellung mit Ansible

## Kontext

Das Hosting soll auf einem vServer von IONOS erfolgen. Da ein vServer vom Kunden selbst konfiguriert werden muss,
ist eine Automatisierung der Bereistellung und der Konfiguration des Servers sinnvoll.

## Entscheidung

Zur Automatisierung der Serverkonfiguration wird **Ansible** eingesetzt. Es wird verwendet für:

- Paketverwaltung und Updates
- Konfiguration von SSH-Diensten
- Firewall (z.B. UFW)
- Benutzerverwaltung
- Bereitstellung der Produktionsumgebung
- Bereitstellung der Feature-Umgebungen
- Test der Bereitstellung mit lokalen Servern auf Container-Basis

Die Playbooks werden versioniert in Git abgelegt und auf definierte Hostgruppen angewendet (z.B. `production`,
`localTest`).

## Konsequenzen

- Konfigurationen sind deklarativ, dokumentiert und nachvollziehbar.
- Änderungen an Servern erfolgen automatisiert über definierte Playbooks.
- Reduzierung manueller Fehlerquellen.
- Onboarding neuer Systeme wird deutlich einfacher.
- Die initiale Entwicklung der Playbooks kann auf dem lokalen Container erfolgen, ohne dass Kosten für einen nicht
  einsatzbereiten vServer entstehen.
- Einführung initialer Toolchain notwendig (Ansible, SSH-Zugang, Git).
- Ansible benötigt SSH-Zugriff auf die Zielsysteme und sudo-Rechte. Diese sind bei IONOS gegeben.

## Alternativen

- Shell-Skripte: weniger wartbar, nicht deterministisch
- Puppet/Chef/SaltStack: deutlich komplexer in Setup und Betrieb
