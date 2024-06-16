# Versionskontrolle

Diese Anleitung ist für Fortgeschrittene und erklärt:

- Was eine Versionskontrolle ist und wie sie funktioniert
- Was ein Branch ist
- Was ein Commit ist
- Was ein Pull-Request ist

## Ultra-Kurze Zusammenfassung (Schritt für Schritt im Anschluss)

Mit der Versionskontrolle (Git) können Änderungen an einer Datei wie folgt vorgenommen werden. Als Analogie nehmen 
wir ein Blatt Papier. Auf dem Blatt steht schon ein Blog-Artikel von uns.

1. Kopiere das Blatt (erstelle einen neuen Feature-Branch)
2. Ändere einen Absatz auf der Kopie (ändere die Datei und mache einen Commit)
3. Schlage vor, die Änderung in das Original-Dokument zu übernehmen (Pull-Request für deinen Feature-Branch in den 
   Main-Branch, (Haupt-Branch)

## Was ist Versionskontrolle? (Git)

**Versionskontrolle** ist ein System, das dabei hilft, Änderungen an Dateien im Laufe der Zeit zu verfolgen und zu
verwalten. Es ist wie ein Sicherheitsnetz, das sicherstellt, dass keine Arbeit verloren geht und man frühere Versionen
wiederherstellen kann.

Git ist eine Versionskontrolle. Git macht Änderungen an Dokumenten, Programmen und anderen Informationen nachverfolgbar.

### Beispiel aus dem Alltag

Stell dir vor, du arbeitest an einem neuen Blog-Artikel. Zuerst schreibst du eine erste Version und speicherst sie als
„Blog_v1.docx“. Nach ein paar Tagen machst du einige Änderungen und speicherst sie als „Blog_v2.docx“. Später
fügst du mehr Informationen hinzu und speicherst sie als „Blog_v3.docx“.

Ohne dass du es bemerkst, hast du manuell eine einfache Versionskontrolle durchgeführt! Aber was passiert, wenn du
versehentlich „Blog_v3.docx“ löscht oder merkst, dass du die Informationen aus „Blog_v1.docx“ brauchst? Hier kommt
die echte Versionskontrolle ins Spiel:

### Wie funktioniert Versionskontrolle?

1. **Änderungen verfolgen**: Ein Versionskontrollsystem (wie Git) speichert jede Änderung, die du an deinen Dateien
   vornimmst. Du kannst zurückgehen und sehen, was sich wann geändert hat und von wem die Änderung vorgenommen wurde.

2. **Versionen speichern**: Anstatt viele Dateien wie „Blog_v1.docx“, „Blog_v2.docx“ usw. zu haben, speichert das
   System alle Versionen intern. Du hast also nur eine Datei, aber das System weiß, wie sie zu jeder Version
   aussieht. Dabei entscheidest du, wann eine Version gespeichert werden soll, indem du einen sogenannten Commit
   ausführst. Dazu später mehr.

3. **Wiederherstellen von Versionen**: Wenn du eine alte Version brauchst, kannst du sie einfach wiederherstellen. Das
   System hält alle Versionen sicher gespeichert.

4. **Gemeinsame Arbeit**: Wenn mehrere Personen an einem Projekt arbeiten, sorgt das System dafür, dass keine Änderungen
   überschrieben werden. Jeder kann sehen, was die anderen gemacht haben, und die Änderungen können leicht
   zusammengeführt werden.

### Ein praktisches Beispiel

Stell dir vor, wir arbeiten gemeinsam an einer Dokumentation für die Feuerwehr. Am Montag fügst du einen
neuen Abschnitt hinzu und speicherst die Datei. Am Dienstag füge ich neue Informationen hinzu und speichere sie auch.
Wenn wir beide gleichzeitig ohne Versionskontrolle arbeiten, könnten wir versehentlich unsere Änderungen überschreiben.

Mit Versionskontrolle sieht es anders aus:

1. **Du** fügst deinen Abschnitt hinzu und „commitest“ (speicherst) die Änderungen im System.
2. **Ich** füge meine Informationen hinzu und committe meine Änderungen.
3. Das System kombiniert unsere Änderungen, ohne dass etwas verloren geht.

### Warum ist das wichtig?

- **Verlust vorbeugen**: Du verlierst keine wichtigen Daten, da jede Änderung gespeichert wird.
- **Nachvollziehbarkeit**: Du kannst immer nachvollziehen, was geändert wurde und von wem.
- **Zusammenarbeit erleichtern**: Mehrere Personen können problemlos gleichzeitig an denselben Dateien arbeiten.

### Zusammenfassung

**Versionskontrolle** ist wie ein „Speichern unter“-System auf Steroiden. Es hilft uns, jede Version unserer Arbeit zu
speichern, Änderungen nachzuvollziehen, und sicherzustellen, dass nichts verloren geht, während wir an unseren Projekten
arbeiten.

## Was ist ein Branch?

Ein **Branch** (Zweig) in GitHub ist wie eine separate Arbeitskopie deines Projekts. Es ermöglicht dir, an neuen
Blog-Artikeln oder Änderungen zu arbeiten, ohne die Hauptversion des Projekts zu beeinflussen. Denk an einen Branch
als einen parallelen Arbeitsbereich, in dem du sicher experimentieren kannst, bevor du deine Änderungen mit der
Hauptversion zusammenführst.

### Ein einfacher Vergleich: Ein Arbeitsblatt

Stell dir vor, du hast ein Arbeitsblatt, auf dem du eine wichtige Aufgabe löst. Du möchtest eine neue Methode
ausprobieren, bist dir aber nicht sicher, ob sie funktioniert. Anstatt direkt auf dem ursprünglichen Arbeitsblatt zu
arbeiten, machst du eine Kopie. Jetzt kannst du auf dieser Kopie arbeiten und experimentieren, ohne das Original zu
ändern. Wenn du zufrieden bist, kannst du deine Änderungen in das ursprüngliche Arbeitsblatt übertragen. Ein Branch
funktioniert ähnlich: Es ist eine Kopie des Projekts, auf der du sicher arbeiten kannst.

### Was genau ist ein Branch?

- **Kopie des Projekts**: Ein Branch ist eine parallele Version deines Projekts, in der du Änderungen vornehmen kannst,
  ohne das Hauptprojekt („main“-Branch, Haupt-Branch) zu beeinflussen.
- **Experimentierfeld**: Du kannst neue Funktionen hinzufügen, Fehler beheben oder Verbesserungen vornehmen. Wenn alles
  funktioniert, kannst du deine Änderungen zurück in den Hauptzweig zusammenführen.
- **Organisation**: Branches helfen, verschiedene Aufgaben oder Entwicklungsphasen sauber voneinander zu trennen. Zum
  Beispiel könntest du einen Branch für Bugfixes, einen anderen für neue Features und einen weiteren für
  Dokumentationsänderungen haben.

### Warum sind Branches wichtig?

- **Unabhängiges Arbeiten**: Du kannst an neuen Ideen arbeiten, ohne die Hauptversion des Projekts zu stören.
- **Zusammenarbeit**: Mehrere Teammitglieder können gleichzeitig an verschiedenen Aspekten eines Projekts arbeiten, ohne
  sich gegenseitig in die Quere zu kommen.
- **Rückverfolgbarkeit**: Branches helfen, Änderungen zu isolieren und sie später zusammenzuführen, was die Entwicklung
  und Fehlerbehebung erleichtert.

### Wie funktioniert ein Branch?

1. **Branch erstellen**: Du erstellst einen neuen Branch, der eine Kopie des aktuellen Projektzustands ist.
2. **Änderungen vornehmen**: Arbeite in diesem Branch und nimm deine Änderungen vor.
3. **Branch zusammenführen**: Wenn deine Änderungen abgeschlossen und getestet sind, kannst du den Branch mit dem
   Hauptzweig zusammenführen. (Pull-Request, später mehr)

### Zusammenfassung

Ein **Branch** ist wie eine parallele Kopie deines Projekts, die es dir ermöglicht, Änderungen vorzunehmen und neue
Funktionen zu entwickeln, ohne die Hauptversion des Projekts zu beeinträchtigen. Branches helfen dabei, unterschiedliche
Arbeitsbereiche für verschiedene Aufgaben zu erstellen und bieten Flexibilität bei der Entwicklung und Zusammenarbeit.

## Was ist ein Commit?

### Ein einfacher Vergleich: Das Notizbuch

Stell dir vor, du schreibst ein Tagebuch oder ein Notizbuch. Jeden Tag machst du neue Einträge und speicherst sie. Ein
Commit ist wie das Speichern eines bestimmten Eintrags oder Abschnitts in deinem Notizbuch, sodass du später genau zu
diesem Punkt zurückkehren kannst.

### Was genau ist ein Commit?

- **Speicherpunkt**: Ein Commit speichert den aktuellen Zustand deiner Dateien. Wenn du z. B. einen neuen Abschnitt in
  einem Dokument hinzugefügt hast, kannst du einen Commit machen, um diesen Abschnitt zu speichern.
- **Nachverfolgen von Änderungen**: Der Commit enthält Informationen darüber, was sich geändert hat, wer die Änderungen
  vorgenommen hat, und wann sie vorgenommen wurden. Er ist wie ein Protokoll deiner Arbeit.
- **Beschreibung**: Jeder Commit hat eine Nachricht (Commit-Message), die erklärt, was geändert wurde. Das hilft dir und
  anderen Teammitgliedern zu verstehen, was bei diesem Speicherpunkt anders ist.

### Warum sind Commits wichtig?

- **Verlust vorbeugen**: Wenn du deine Änderungen commitest, gehen sie nicht verloren, auch wenn etwas schiefgeht.
- **Nachvollziehbarkeit**: Du kannst nachvollziehen, wann und warum Änderungen vorgenommen wurden.
- **Fehlerkorrektur**: Wenn etwas nicht wie geplant funktioniert, kannst du zu einem vorherigen Commit zurückkehren und
  das Projekt zu diesem Zeitpunkt wiederherstellen.

### Wie funktioniert ein Commit in der GitHub-Weboberfläche?

Ein **Commit** in der GitHub-Weboberfläche speichert Änderungen an Dateien direkt auf GitHub. Hier ist eine
[Schritt-für-Schritt-Anleitung](https://docs.github.com/de/repositories/working-with-files/managing-files/editing-files)

## Was ist ein Pull-Request?

Ein **Pull-Request** (PR) ist eine Funktion in GitHub, die es ermöglicht, Änderungen an Dateien vorzuschlagen und
zur Überprüfung bereitzustellen. Er ist ein wesentlicher Teil der Zusammenarbeit in Repositories.

### Ein einfacher Vergleich: Ein Vorschlag zur Überprüfung

Stell dir vor, du hast ein Dokument für ein Teamprojekt bearbeitet und möchtest deine Änderungen mit dem Rest des Teams
teilen. Anstatt die Änderungen sofort in das Hauptdokument einzufügen, erstellst du eine Kopie, machst deine Änderungen
und sagst dann dem Team: „Schaut euch das an und sagt mir, ob es gut ist.“ Ein Pull-Request ist genau das – du bittest
um eine Überprüfung deiner Änderungen, bevor sie in das Hauptprojekt übernommen werden.

### Was genau ist ein Pull-Request?

- **Vorschlag**: Ein Pull-Request ist ein Vorschlag, deine Änderungen (die in einem separaten Branch gemacht wurden) in
  das Hauptprojekt (meist der „main“-Branch) zu integrieren.
- **Überprüfung**: Er bietet eine Gelegenheit, dass andere Teammitglieder die Änderungen überprüfen, Feedback geben und
  sicherstellen können, dass die Änderungen sinnvoll und korrekt sind.
- **Diskussion**: Teammitglieder können Kommentare hinterlassen, Fragen stellen und Diskussionen führen, um die
  Änderungen zu verbessern oder Probleme zu klären.

### Warum sind Pull-Requests wichtig?

- **Qualitätssicherung**: Sie helfen sicherzustellen, dass Änderungen sorgfältig geprüft werden, bevor sie in das
  Hauptprojekt übernommen werden.
- **4-Augen-Prinzip**: Oft fällt einem selbst nicht auf, dass Fehler passiert sind. Ein zweites Paar Augen kann 
  helfen, sie zu finden.

### Wie funktioniert ein Pull-Request?

1. **Branch erstellen**: Du machst Änderungen in einem separaten Branch (einer Kopie des Projekts).
2. **Änderungen vornehmen (Commit)**: Bearbeite die Dateien nach Bedarf und committe deine Änderungen.
3. **Pull-Request erstellen**: Du erstellst einen Pull-Request, um deine Änderungen vorzuschlagen.
4. **Überprüfung**: Andere Teammitglieder überprüfen die Änderungen, geben Feedback und können die Änderungen
   akzeptieren oder ablehnen.
5. **Zusammenführen (Merge)**: Wenn alle mit den Änderungen einverstanden sind, wird der Pull-Request „gemergt“
   (zusammengeführt), und deine Änderungen werden in das Hauptprojekt übernommen.

### Ein praktisches Beispiel

Stell dir vor, du arbeitest an einer neuen Richtlinie für die Feuerwehr und hast einige Vorschläge:

1. **Branch erstellen**: Du erstellst einen neuen Branch namens „neue-richtlinie“ und machst deine Änderungen an der
   Richtliniendatei.
2. **Änderungen vornehmen**: Du fügst einen neuen Abschnitt über Evakuierungspläne hinzu und commitest diese Änderungen.
3. **Pull-Request erstellen**: Auf GitHub erstellst du einen Pull-Request mit dem Titel „Neue Richtlinie:
   Evakuierungspläne hinzufügen“.
4. **Überprüfung**: Deine Teammitglieder sehen sich den Pull-Request an, hinterlassen Kommentare und Vorschläge.
5. **Zusammenführen**: Wenn alle einverstanden sind, wird der Pull-Request gemergt, und die Änderungen sind jetzt Teil
   der Hauptversion der Richtlinie.
