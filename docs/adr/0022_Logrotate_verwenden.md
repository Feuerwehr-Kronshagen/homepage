# ADR 0022: Logrotate verwenden

## Kontext

Es besteht die Gefahr, dass der vServer aufgrund zu vieler Login-Versuche und den daraus resultierenden Logs keinen
Speicherplatz mehr hat. Die Verfügbarkeit kann hierdurch eingeschränkt sein und manuelle Recover-Prozesse sind
notwendig.

## Entscheidung

1. Wir setzen Logrotate ein, um den maximal verwendeten Speicherplatz der Logfiles festzulegen.
2. Wird dieser überschritten, werden die ältesten Logs gelöscht.


## Konsequenzen

1. Mit der Einstellung `size 20M`und `rotate 5` sind pro eingetragenen Dienst 120 MB als maximaler
   Speicherplatzverbrauch festgesetzt.
2. Das reicht für die allermeisten forensischen Dienste aus.
3. Das reicht für fail2ban aus.
4. Logrotate hat verschwinden geringe Ressourcenansprüche.
