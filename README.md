# Website der Feuerwehr Kronshagen

Die Freiwillige Feuerwehr der Gemeinde Kronshagen (bei Kiel) spielt eine zentrale Rolle im Schutz und der Sicherheit der
Gemeinschaft. Als ehrenamtliche Organisation ist es unser Ziel, stets einsatzbereit zu sein, um bei Notfällen schnell
und effizient reagieren zu können. Wir sind nicht nur Helfer in der Not, sondern auch ein fester Bestandteil des
gesellschaftlichen Lebens in Kronshagen. Besonders stolz sind wir auf unsere Jugendfeuerwehr, die jungen Menschen die
Möglichkeit bietet, frühzeitig Verantwortung zu übernehmen. Durch regelmäßige Übungen und spannende Aktivitäten fördern
wir Teamgeist und Engagement und bereiten die nächste Generation auf ihre zukünftigen Aufgaben vor.

## Erste Schritte (für Kameradinnen und Kameraden)

Achtung: Alles ist offen einsehbar!

Alles, was auf Github eingetragen wird, ist und bleibt öffentlich. Bitte greift für interne Kommunikation auf
bekannte Kanäle zurück.

1. [Grundbegriffe](./docs/erste-schritte/Grundbegriffe.md)

## ADR - Architecture Decision Records - Logbuch für Architektur-Entscheidungen

> Der Einsatz von ADR ist eine Methode, Entscheidungen im Entwicklungsprozess nachvollziehbar und kontinuierlich zu
> dokumentieren.
> [Quelle und weitere Informationen](https://www.heise.de/hintergrund/Gut-dokumentiert-Architecture-Decision-Records-4664988.html?seite=all)

Das Verzeichnis `/docs/adr` enthält Architekturentscheidungen für dieses Projekt in Form von **Architecture Decision
Records (ADRs)**.

[Erster ADR](./docs/adr/0001_Architektur-Entscheidungen_dokumentieren.md)

### Warum ADRs?

In einem Software-Projekt ist es wichtig, dass Architekturentscheidungen nachvollziehbar und dokumentiert sind – nicht
nur im Code oder in den Köpfen. ADRs helfen uns:

- wichtige Entscheidungen zu dokumentieren,
- zukünftigen Teammitgliedern Kontext und Einstiegshilfen zu bieten

### Format

Es wird ein schlankes Markdown-Format ohne Status-Feld verwendet. Der Git-Workflow bildet den Lebenszyklus einer
Entscheidung ab:

- **Vorschlag** →
  - Erstelle einen Merge-Request mit dem neuen ADR.
  - Jeder ADR erhält einen Dateinamen nach folgendem Muster: `NNNN_Titel_der_Architektur-Entscheidung.md`
- **Diskussion** → Review und Feedback im MR
- **Annahme** → Merge in `main` (oder Hauptbranch) = Entscheidung angenommen
- **Ersetzt** →
  - Erstelle einen Merge-Request mit dem neuen ADR, der den alten ADR ersetzt
  - Markiere den alten ADR mit einem `x` nach der ADR-Nummer: `NNNNx_Titel_der_Architektur-Entscheidung.md`
  - Verlinke den alten ADR im neuen ADR unter dem Titel: `Ersetzt [0001](NNNNx_Titel_der_alten_Entscheidung.md)`

### Bestehende ADRs ändern?

Grundsätzlich sollte eine Änderung vermieden werden. Klarstellungen nach Rückfragen sind ok. Wenn sich eine Entscheidung
ändert, wird ein neuer ADR geschrieben, der den alten ADR referenziert. Der alte ADR wird im Dateinamen mit einem `x`
nach der ADR-Nummer versehen.

## Design

[Designvorgabe (design brief)](docs/design/design_brief.md)

[Wireframes (erste Skizzen)](docs/design/wireframes.md)

## Entwicklung

```bash
make 01-dev-server
```
