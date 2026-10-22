# ADR 0026: E2E-Tests mit Playwright und ARIA-Snapshots

## Kontext

Bisher gibt es keine automatisierten Tests; Änderungen werden nur visuell auf der Testumgebung geprüft. Mit
zunehmendem Einsatz von KI-Agenten entstehen mehr Änderungen an Templates, Inhalten und SCSS, deren Nebenwirkungen
auf andere Seiten leicht übersehen werden. Die Website muss außerdem barrierefrei sein (LBGG Schleswig-Holstein).

Gesucht ist ein Testverfahren, das

- unbeabsichtigte Änderungen an allen Seiten zuverlässig erkennt,
- einen nachvollziehbaren, menschlich abgenommenen Soll-Stand hat,
- ohne pixelgenaue Rendering-Umgebung stabil in der CI läuft.

## Entscheidung

1. End-to-End-Tests werden mit [Playwright](https://playwright.dev/) geschrieben und liegen in `e2e/`
   (eigene `package.json`, getrennt vom Hugo-Build). Cypress wurde nicht gewählt (keine freie Parallelisierung,
   kein WebKit, größerer Footprint).
2. Haupttreiber sind ARIA-Snapshots (`toMatchAriaSnapshot`). Sie halten den Accessibility-Tree jeder Seite fest
   (Überschriften, Links, Listen, Landmarks) und sind damit unabhängig von Schriften, Farben und Pixeln.
3. Die Snapshots in `e2e/tests/__snapshots__/` gelten als **abgenommene Stände**. Änderungen daran erfolgen nur
   bewusst und werden im Pull Request durch `@Feuerwehr-Kronshagen/dev` geprüft (CODEOWNERS).
4. KI-Agenten dürfen Snapshots nicht selbstständig aktualisieren, um rote Tests grün zu machen (siehe AGENTS.md).
5. Kopf- und Fußbereich teilen sich je einen Snapshot für alle Seiten; Desktop und Mobil teilen sich dieselben
   Snapshots.
6. Ergänzend gibt es Tests für Nutzerwege (Navigation, „Mitmachen“, Linkprüfung) und Grundregeln (Sprache, Titel,
   Meta-Description, `noindex` auf Test, eine h1, Alt-Texte).
7. Getestet wird der lokal gebaute Stand (Hugo-Environment `test`, Wurzelpfad `/`) im Workflow `test`. Der Job
   blockiert das Test-Deployment nicht.
8. Pixel-Screenshots (`toHaveScreenshot`) werden vorerst nicht eingesetzt.

## Konsequenzen

1. Strukturelle Regressionen (fehlende Überschrift, kaputter Link, verschobener Inhalt) fallen automatisch auf;
   der Diff im Testbericht zeigt genau, was sich geändert hat.
2. Barrierefreiheit wird mitgeprüft, weil der Test sieht, was ein Screenreader sieht.
3. Rein optische Fehler (Farben, Abstände, Kontraste) werden nicht erkannt; dafür bleibt die Sichtprüfung auf der
   Testumgebung bzw. später ein ergänzender Screenshot-Test.
4. Inhaltliche Änderungen an abgenommenen Seiten erfordern ein bewusstes Aktualisieren der Snapshots
   (`make 06-e2e-update-snapshots`) und ein Review des Diffs.
5. Zusätzliche Abhängigkeit: Node.js und Playwright (Updates über Renovate).
