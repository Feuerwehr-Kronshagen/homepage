# ADR 0007: Hugo (als Werkzeug zur Erstellung unserer Website) verwenden

## Kontext

In ADR 0004 wurde entschieden, die Website in drei Teile aufzuteilen: Inhalte, Umwandlung in Website und
Veröffentlichung im Internet. Für den mittleren Teil (die Umwandlung) brauchen wir ein Programm, das unsere einfachen
Textdateien in eine vollständige Website umwandelt.

Es gibt viele Programme, die diese Aufgabe erfüllen können, zum Beispiel Jekyll, Hugo, Gatsby und viele andere. Für
unsere Website müssen wir ein Programm auswählen, das einfach zu bedienen, gut erklärt und leistungsfähig ist.

## Entscheidung

Wir werden Hugo als Programm zur Erstellung unserer Website verwenden.

Die wichtigsten Gründe für diese Entscheidung sind:

1. Hugo ist sehr schnell beim Erstellen der Website, was die Arbeit beschleunigt
2. Es ist flexibel und kann leicht an unsere Bedürfnisse angepasst werden
3. Hugo hat viele Nutzer, die bei Problemen helfen können, und eine gute Anleitung
4. Es kann mit den einfachen Textdateien arbeiten, die wir in ADR 0004 festgelegt haben
5. Hugo braucht keine komplizierte Datenbank oder andere Programme
6. Es unterstützt mehrere Sprachen, falls wir die Website später mehrsprachig machen wollen

## Konsequenzen

Vorteile:

1. Sehr schnelle Erstellung der Website, auch wenn sie viele Seiten hat
2. Einfach zu installieren (nur ein Programm, keine weiteren Programme nötig)
3. Flexibel anpassbar an unsere Designwünsche
4. Arbeitet gut mit GitHub zusammen, was die Veröffentlichung erleichtert
5. Gute Anleitungen und viele Nutzer, die bei Problemen helfen können

Nachteile:

1. Teammitglieder müssen erst lernen, wie Hugo funktioniert
2. Weniger Erweiterungsmöglichkeiten im Vergleich zu einigen anderen Programmen
3. Für einige fortgeschrittene Funktionen muss man Hugo sehr gut verstehen
