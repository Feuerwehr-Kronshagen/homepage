# ADR 0014: Kein zusätzliches Sicherheitsprogramm (Fail2Ban) verwenden

Ersetzt durch [0020 vServer Fail2Ban verwenden](0020_vServer_Fail2Ban_verwenden.md)

## Kontext

Unser gemieteter Server bei IONOS ist so eingerichtet, dass man sich nur mit digitalen Schlüsseln anmelden kann (siehe
ADR 0013). Da wir die Anmeldung mit Passwörtern abgeschaltet haben, gibt es keine Möglichkeit für Angreifer, durch
wiederholtes Ausprobieren von Passwörtern Zugang zu erhalten. Solche Angriffe würden normalerweise von einem Programm
namens "Fail2Ban" abgewehrt. Unser Server ist außerdem durch eine Firewall (digitale Schutzwand) und strenge
Zugriffsregeln geschützt.

## Entscheidung

Wir werden das Sicherheitsprogramm Fail2Ban nicht einsetzen, da wir keine Passwort-Anmeldung erlauben und dadurch die
Angriffsmöglichkeiten bereits stark eingeschränkt haben.

Wenn man nur digitale Schlüssel zur Anmeldung verwendet, ist das Risiko von Passwort-Angriffen praktisch ausgeschlossen.
Fail2Ban schützt hauptsächlich vor dieser Art von Angriffen, ist aber in unserem Fall nicht notwendig. Die zusätzliche
Komplexität durch Fail2Ban würde keinen echten Sicherheitsgewinn bringen.

## Konsequenzen

Wir verzichten auf die zusätzliche Sicherheitsschicht durch Fail2Ban, gewinnen aber einen geringeren Verwaltungsaufwand
und sparen Serverressourcen. Die Verwendung von digitalen Schlüsseln statt Passwörtern bleibt unsere wichtigste
Sicherheitsmaßnahme.
