# ADR 0023: Blogartikel in flacher Hierarchie speichern

## Kontext

Unsere Homepage soll Blogartikel anzeigen können. Hierfür müssen sie im Code abgelegt werden.

## Entscheidung

1. Wir verwenden eine flache Ordnerstruktur/Hierarchie.
2. Blogartikel werden mit den dazugehörigen Bildern in ein Verzeichnis abgelegt.
3. Das Verzeichnis ist nach der Namenskonvention `<ID>-<Name-des-Blogartikels>`benannt

## Konsequenzen

### Vorteile

1. Es können Blogartikel zu verschiedenen Themen erstellt werden, ohne dass sie Einsortiert und wiedergefunden werden
   müssen
2. Die ID zeigt den zeitlichen Verlauf der Erstellungen an, ohne dass der genaue Tag angegeben werden muss

### Nachteile

1. Es kann zu Überschneidungen von IDs kommen, wenn zwei Teammitglieder gleichzeitig an Artikeln arbeiten.
   Mitigation: ID im Titel des jeweiligen Tickets hinterlegen - so können andere Teammitglieder einsehen, an welchen
   IDs gearbeitet wird.
