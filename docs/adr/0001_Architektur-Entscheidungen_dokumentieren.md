# ADR 0001: Architektur-Entscheidungen dokumentieren

## Kontext

Die bisherige Website wird vollständig neu aufgebaut. Dabei ist wichtig, dass keine Artefakte oder Möglichkeiten zur
Weiterentwicklung verloren gehen, auch wenn ein Projektmitglied nicht mehr mit arbeitet.

Hierfür ist es bedeutend, dass sich ein neues Projektmitglied schnell einarbeiten und bisher getroffene
Entscheidungen nachvollziehen kann.

## Entscheidung

1. Ab sofort werden Architecture Decision Records (ADRs) verwendet, um relevante Architekturentscheidungen zu
   dokumentieren.
2. Dafür wird ein schlankes Markdown-Format in einem eigenen Verzeichnis (`/docs/adr`) innerhalb dieses
   Repositorys.
   Neue ADRs werden als Merge-Requests erstellt und diskutiert. Der Merge eines ADRs gilt als Annahme der
   Entscheidung.
3. [Das Template mit der ADR-Nummer 0000](0000_Titel_der_Architektur-Entscheidung.md) wird als Vorlage für neue ADRs
   verwendet.
4. Das Template enthält kein Status-Feld, da der Git-Workflow den Status ausreichend abbildet.
5. Nicht mehr gültige ADRs werden im Dateinamen mit einem `x` nach der ADR-Nummer versehen.

## Konsequenzen

1. Architekturentscheidungen sind versioniert, dokumentiert und langfristig nachvollziehbar.
2. Diskussionen zu Architekturfragen bekommen einen definierten Ort (Pull-Requests zu ADRs), was die Transparenz
   erhöht.
3. Projektmitglieder, die neu dazukommen, können sich über bisherige Entscheidungen informieren, ohne auf mündliche
   Überlieferung angewiesen zu sein.
4. Veraltete oder überholte Entscheidungen können gezielt ersetzt oder angepasst werden (z.B. durch neue ADRs mit
   Verweisen).
5. Die Qualität von Architekturentscheidungen steigt durch strukturierte Dokumentation und Diskussion.
6. Technische Schulden können klarer identifiziert werden, wenn ADRs veraltete oder kompromiss-behaftete
   Entscheidungen transparent machen.
7. Wissen wird dokumentiert – auch beim Wechsel von Personen geht keine Entscheidungsbegründung verloren.
8. Entscheidungen werden expliziter getroffen, statt implizit „passieren zu lassen“.
9. Der Einstieg in ADRs ist niedrigschwellig durch ein minimalistisches Template ohne Metadaten oder Status-Feld.
