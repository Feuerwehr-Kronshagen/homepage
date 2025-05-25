# ADR 0002: Git als Versionskontrollsystem

[Was ist ein Versionskontrollsystem?](../erste-schritte/Versionskontrolle.md)

## Kontext

Für die Entwicklung und Wartung der Website der **Feuerwehr Kronshagen** wird ein System benötigt, das:

- Änderungen am Quellcode nachvollziehbar dokumentiert
- Zusammenarbeit zwischen mehreren Entwicklern ermöglicht
- Versionsstände zuverlässig verwaltet
- einfache Verzweigungen (Branches) und Zusammenführungen (Merges) unterstützt
- in moderne CI/CD-Workflows integrierbar ist

## Entscheidung

Wir verwenden **Git** als unser zentrales Versionskontrollsystem.

1. **Weit verbreitet**: Git ist der De-facto-Standard in der Open-Source- und Webentwicklung.
2. **Dezentrale Architektur**: Entwickler können lokal arbeiten und später synchronisieren.
3. **Branching-Strategien**: Git ermöglicht parallele Entwicklungen (z.B. Features, Bugfixes, Releases).
4. **Integration**: Git ist vollständig in GitHub integriert – inklusive Pull Requests, Issue-Tracking und
   automatisierter Deployments.
5. **Dokumentation & Historie**: Jede Änderung ist durch Commits dokumentiert und rückverfolgbar.
6. **Community & Support**: Breite Dokumentation, Tool-Unterstützung und Know-how sind vorhanden.

### Alternativen

#### Subversion (SVN)

- ✅ Einfacher für lineare Workflows
- ❌ Schwächer bei Branches/Merges, weniger modern, keine GitHub-Integration

#### Mercurial (Hg)

- ✅ Ähnlich zu Git, benutzerfreundlich
- ❌ Geringere Verbreitung, kaum GitHub-Support

## Konsequenzen

1. Alle Teammitglieder müssen sich mit Git-Grundlagen auskennen.
2. Workflow-Vorgaben (z. B. Commit-Nachrichten, Branch-Namen) werden definiert.
3. Git wird integraler Bestandteil des Projektmanagements und der Deployment-Pipeline.
