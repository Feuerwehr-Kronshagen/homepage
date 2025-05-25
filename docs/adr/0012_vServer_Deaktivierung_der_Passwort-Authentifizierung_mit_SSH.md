# ADR 0012: vServer Deaktivierung der Passwort-Authentifizierung mit SSH

## Kontext

Ein IONOS vServer wird per Ansible verwaltet und per SSH mit Key-Authentifizierung erreicht. Da der SSH-Zugang
öffentlich über das Internet erreichbar ist, soll die Angriffsfläche so gering wie möglich gehalten werden. IONOS
erlaubt Key-basierte Authentifizierung standardmäßig und erfordert keine Passwort-Logins für administrative Funktionen.

## Entscheidung

Die Passwort-Authentifizierung über SSH wird deaktiviert (PasswordAuthentication no). Der Zugriff erfolgt ausschließlich
mit SSH-Schlüsseln.

Die Deaktivierung der Passwort-Authentifizierung verhindert Brute-Force-Angriffe auf Benutzerkonten und erhöht die
Gesamtsicherheit. Da alle Benutzer mit SSH-Schlüsseln arbeiten, ist diese Maßnahme ohne Einschränkung umsetzbar.

## Konsequenzen

Nutzer ohne gültigen SSH-Key haben keinen Zugriff mehr. Der initiale Key-Zugriff muss vor der Änderung sichergestellt
sein. Rettungszugang über IONOS bleibt weiterhin möglich.
