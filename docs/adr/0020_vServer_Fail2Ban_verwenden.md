# ADR 0020: vServer Fail2Ban verwenden

Ersetzt [0014x vServer Fail2Ban nicht verwenden](0014x_vServer_Fail2Ban_nicht_verwenden.md)

## Kontext

Die im zu ersetzendem ADR angesprochene Sicherheit bleibt bestehen. Jedoch können mit Fail2Ban die Logs fehlerhafter
Login-Versuche reduziert werden.

## Entscheidung

1. Wir verwenden Fail2Ban, um die Log-Einträge fehlgeschlagener Login-Versuche zu reduzieren.

## Konsequenzen

1. Fail2Ban bannt IP-Adressen, die sich mehrfach mit falschen SSH-Keys anmelden wollen.
