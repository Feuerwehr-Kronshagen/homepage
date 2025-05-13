# ADR 0002: Git als Versionskontrollsystem (System zur Nachverfolgung von Änderungen)

[Was ist ein System zur Nachverfolgung von Änderungen? (Versionskontrollsystem)](../erste-schritte/Versionskontrolle.md)

## Kontext

Für die Entwicklung und Wartung der Website der **Feuerwehr Kronshagen** wird ein System benötigt, das:

- Alle Änderungen an der Website nachvollziehbar dokumentiert
- Zusammenarbeit zwischen mehreren Personen ermöglicht
- Verschiedene Versionen der Website zuverlässig verwaltet
- Ermöglicht, dass mehrere Personen gleichzeitig an verschiedenen Teilen arbeiten können
- Mit anderen modernen Werkzeugen zusammenarbeiten kann

## Entscheidung

Wir verwenden **Git** als unser System zur Nachverfolgung von Änderungen.

1. **Weit verbreitet**: Git wird von vielen Projekten weltweit genutzt und ist ein Standard in der Webentwicklung.
2. **Flexibel**: Teammitglieder können auf ihren eigenen Computern arbeiten und später ihre Änderungen mit allen teilen.
3. **Paralleles Arbeiten**: Git ermöglicht, dass mehrere Personen gleichzeitig an verschiedenen Funktionen arbeiten
   können.
4. **Gute Zusammenarbeit**: Git funktioniert sehr gut mit GitHub (siehe ADR 0003), was gemeinsames Arbeiten,
   Aufgabenverwaltung und automatische Veröffentlichung ermöglicht.
5. **Vollständige Historie**: Jede Änderung wird mit Datum, Autor und Beschreibung gespeichert und kann später
   nachverfolgt werden.
6. **Viel Unterstützung**: Es gibt viele Anleitungen, Werkzeuge und Hilfestellungen für Git.

### Andere Möglichkeiten, die wir nicht gewählt haben

#### Subversion (SVN)

- ❌ Nicht so gut für gleichzeitiges Arbeiten an verschiedenen Teilen, weniger modern, funktioniert nicht mit GitHub

#### Mercurial (Hg)

- ✅ Ähnlich wie Git
- ❌ Wird deutlich weniger genutzt, kaum Unterstützung für GitHub

## Konsequenzen

1. Alle Teammitglieder müssen die Grundlagen von Git lernen.
2. Wir legen gemeinsame Regeln fest, wie Änderungen beschrieben und organisiert werden.
3. Git wird ein wichtiger Teil unserer Arbeitsweise und hilft uns, die Website zu aktualisieren.
