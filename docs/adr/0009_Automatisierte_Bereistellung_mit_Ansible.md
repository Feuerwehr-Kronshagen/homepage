# ADR 0009: Automatische Einrichtung des Webservers (Automatisierte Bereitstellung) mit Ansible

## Kontext

Unsere Website soll auf einem gemieteten Server (vServer) von IONOS laufen. Bei einem solchen Server müssen wir selbst
alle Einstellungen vornehmen. Damit diese Einstellungen immer gleich und fehlerfrei sind, ist es sinnvoll, diesen
Vorgang zu automatisieren.

## Entscheidung

Wir werden ein Programm namens **Ansible** verwenden, um den Server automatisch einzurichten. Dieses Programm hilft uns
bei:

- Installation und Aktualisierung von Programmen auf dem Server
- Sicherer Einrichtung des Fernzugriffs
- Einrichtung einer Schutzfunktion (Firewall) für den Server
- Verwaltung von Benutzerkonten
- Automatischer Veröffentlichung der fertigen Website
- Automatischer Veröffentlichung von Testversionen der Website
- Testen aller Einrichtungsschritte auf einem lokalen Testserver

Die Anweisungen für Ansible werden in unserem GitHub-Projekt gespeichert und können für verschiedene Server verwendet
werden (z.B. für den Hauptserver oder für Testserver).

## Konsequenzen

Vorteile:

- Alle Servereinstellungen sind klar dokumentiert und nachvollziehbar
- Änderungen am Server werden immer auf die gleiche, geprüfte Weise durchgeführt
- Weniger Fehler durch manuelle Eingaben
- Neue Server können schnell und einfach eingerichtet werden
- Wir können alle Einrichtungsschritte zuerst auf einem kostenlosen Testserver ausprobieren

Nachteile:

- Wir müssen zu Beginn einige neue Werkzeuge einrichten (Ansible, SSH-Zugang, Git)
- Ansible benötigt Fernzugriff auf den Server und Administratorrechte (diese sind bei IONOS vorhanden)

## Andere Möglichkeiten, die wir nicht gewählt haben

- Manuelle Einrichtung mit Befehlszeilen-Skripten: schwieriger zu warten, weniger zuverlässig
- Andere Automatisierungsprogramme (Puppet/Chef/SaltStack): deutlich komplizierter einzurichten und zu betreiben
