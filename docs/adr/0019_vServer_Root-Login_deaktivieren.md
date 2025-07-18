# ADR 0019: vServer Root-Login deaktivieren

Ersetzt [0012x_vServer_Root-Login_bleibt_erhalten](0012x_vServer_Root-Login_bleibt_erhalten.md)

## Kontext

Die Hinweise zur Härtung von Linux-Maschinen empfiehlt, den SSH-Root-Login zu deaktivieren.

[Quelle](https://www.ionos.de/hilfe/server-cloud-infrastructure/erste-schritte/wichtige-sicherheitsinformationen-fuer-ihren-server/ssh-root-login-deaktivieren/)

## Entscheidung

1. Der Root-Login wird händisch und durch ansible deaktiviert
2. Der neue Nutzername wird als Repo-Secret ins GitHub-Repo aufgenommen.

## Konsequenzen

1. Die Logs werden nicht durch fehlschlagende Root-Logins geflutet
2. Ein weiteres Secret muss zwischen Projektmitgliedern geteilt werden
