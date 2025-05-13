# ADR 0001: Architektur Entscheidungen dokumentieren

## Kontext

Die bisherige Website wird vollständig neu aufgebaut. Dabei ist wichtig, dass keine wichtigen Informationen oder
Möglichkeiten zur Weiterentwicklung verloren gehen, auch wenn ein Teammitglied nicht mehr mitarbeitet.

Hierfür ist es wichtig, dass sich ein neues Teammitglied schnell einarbeiten und bisher getroffene Entscheidungen
nachvollziehen kann.

## Entscheidung

1. Ab sofort werden wichtige Entscheidungen in Form von Dokumenten (genannt "Architecture Decision Records" oder kurz
   "ADRs") festgehalten.
2. Dafür wird ein einfaches Textformat in einem eigenen Ordner (`/docs/adr`) innerhalb dieses Projekts verwendet.
   Neue Entscheidungsdokumente werden vorgeschlagen, gemeinsam besprochen und dann übernommen. Die Übernahme eines
   Entscheidungsdokuments bedeutet, dass die Entscheidung akzeptiert wurde.
3. [Die Vorlage mit der Nummer 0000](0000_Titel_der_Architektur-Entscheidung.md) wird für neue Entscheidungsdokumente
   verwendet.
4. Die Vorlage enthält kein extra Feld für den Status, da der Speicherort im Projekt bereits anzeigt, ob die
   Entscheidung
   akzeptiert wurde oder nicht.
5. Entscheidungen, die nicht mehr gültig sind, werden im Dateinamen mit einem `x` nach der Nummer gekennzeichnet.

## Konsequenzen

Vorteile:

1. Wichtige Entscheidungen werden schriftlich festgehalten und sind auch später noch nachvollziehbar.
2. Diskussionen zu wichtigen Fragen finden an einem bestimmten Ort statt, was für mehr Klarheit sorgt.
3. Neue Teammitglieder können frühere Entscheidungen nachlesen und müssen nicht darauf vertrauen, dass ihnen jemand
   alles mündlich erklärt.
4. Veraltete oder überholte Entscheidungen können durch neue ersetzt werden, wobei klar dokumentiert wird, was sich
   geändert hat.
5. Die Qualität der Entscheidungen verbessert sich durch die strukturierte Dokumentation und gemeinsame Besprechung.
6. Probleme in der Umsetzung können besser erkannt werden, wenn die ursprünglichen Entscheidungen und ihre Begründungen
   klar dokumentiert sind.
7. Wichtiges Wissen bleibt erhalten – auch wenn Teammitglieder wechseln, gehen keine Begründungen für Entscheidungen
   verloren.
8. Entscheidungen werden bewusst getroffen und nicht einfach "nebenbei" gemacht.
9. Die Dokumentation ist einfach zu erstellen, da eine klare Vorlage existiert.
