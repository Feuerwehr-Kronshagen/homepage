# Fail2Ban nicht verwenden

## Kontext

Der IONOS vServer wird ausschließlich mit SSH Key-Authentifizierung konfiguriert. Da Passwort-basierte Logins
deaktiviert sind, gibt es keine klassische Angriffsfläche für Brute-Force-Angriffe, die von Fail2Ban typischerweise
abgewehrt werden. Der Server ist zudem durch eine Firewall und restriktive Zugriffskontrollen gesichert.

## Entscheidung

Fail2Ban wird nicht eingesetzt, da keine Passwort-Authentifizierung erfolgt und die Angriffsfläche stark minimiert ist.

Bei Verwendung von SSH-Key-Authentifizierung ist das Risiko von Brute-Force-Angriffen auf Passwörter nahezu
ausgeschlossen. Fail2Ban schützt primär vor dieser Art von Angriffen, ist jedoch in diesem Szenario nicht erforderlich.
Die zusätzliche Komplexität von Fail2Ban bietet keinen Mehrwert.

## Konsequenzen

Keine zusätzliche Sicherheit durch Fail2Ban, jedoch geringerer Verwaltungsaufwand und Systemressourcenverbrauch. Die
Key-basierte Authentifizierung bleibt die primäre Sicherheitsmaßnahme.
