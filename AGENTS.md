# AGENTS.md

Leitfaden für KI-Agenten (und Menschen), die in diesem Repository arbeiten.

## Projekt

- Website der Freiwilligen Feuerwehr Kronshagen: https://feuerwehr-kronshagen.de
- Statische Website mit [Hugo](https://gohugo.io/) (ADR 0007), ohne externes Theme – Layouts liegen im Repo.
- Deployment per GitHub Actions + Ansible auf einen vServer mit NGINX (ADR 0008, 0010, 0018).
- Projektsprache ist **Deutsch** (Inhalte, Doku, ADRs). Commit-Messages dürfen Englisch oder Deutsch sein.

## Wichtig: Alles ist öffentlich

- Das Repo ist öffentlich. Keine internen Informationen, personenbezogenen Daten, Zugangsdaten, Hostnamen oder
  Secrets committen.
- Interne Themen gehören ins private Repo `Feuerwehr-Kronshagen/private`.
- Secrets (`VSERVER_*`) existieren nur in GitHub Actions – niemals im Code ausgeben oder hartkodieren.

## Verzeichnisstruktur

| Pfad | Inhalt |
|---|---|
| `content/posts/` | Blogartikel (alle aktuellen Inhalte, ADR 0009) |
| `content/pages/` | Dauerhafte Seiten: Kontakt, Impressum, Datenschutz, Barrierefreiheit |
| `content/_index.md` | Startseite |
| `layouts/` | Hugo-Templates (`_default/`, `partials/`) |
| `assets/css/` | SCSS: `main.scss` importiert Partials `_*.scss` |
| `assets/js/` | JavaScript (minimal) |
| `assets/images/` | Bilder für Templates (Logo, Hero, Social Media) |
| `static/` | Unverarbeitete Dateien (Favicon, Webmanifest) |
| `archetypes/` | Vorlagen für `hugo new` |
| `hugo.toml` | Hugo-Konfiguration, Menüs (`main`, `footer`) |
| `ansible/playbooks/` | Server-Provisionierung & Deployment (nummeriert, Reihenfolge relevant) |
| `ansible/cleanup/` | Löschen von Test-Deployments nach Branch-Löschung |
| `.github/workflows/` | CI/CD: `test`, `prod`, `admin`, `certificates`, `cleanup-test` |
| `docs/adr/` | Architecture Decision Records |
| `docs/design/` | Design Brief, Wireframes |
| `docs/erste-schritte/` | Einstieg für Nicht-Techniker |
| `e2e/` | End-to-End-Tests mit Playwright, Snapshots in `e2e/tests/__snapshots__/` |

## Befehle

Alle Entwicklungsbefehle liegen im `makefile` (ADR 0017). Neue Hilfsbefehle dort ergänzen.

```bash
make 01-dev-server                  # lokaler Hugo-Server
make 02-build-test                  # Build mit Environment "test"
make 03-prod-run                    # lokaler Server mit Environment "production"
make 04-ansible-lint                # Ansible Syntax-Check, ansible-lint, yamllint
make 05-e2e-test                    # E2E-Tests (Playwright, startet Hugo selbst)
make 06-e2e-update-snapshots        # abgenommene Stände neu erzeugen – nur auf ausdrückliche Anweisung
make 07-e2e-report                  # HTML-Report des letzten Laufs
make 81-e2e-dependencies            # npm ci + Chromium für Playwright
make 99-install-ansible-dependencies
make 80-dev-dependencies-macos      # hugo, ansible, sass, yamllint via brew
```

Voraussetzungen: Hugo (extended, SCSS via libsass), Dart Sass, Python mit `ansible`, `ansible-lint`, `yamllint`,
Ansible-Collections aus `requirements.yml`, Node.js 22 für die E2E-Tests.

## Prüfen vor dem Commit

- Hugo-Änderungen: `make 02-build-test` muss fehlerfrei bauen.
- Ansible-/YAML-Änderungen: `make 04-ansible-lint` muss sauber durchlaufen (im Prod-Workflow blockierend).
- Template-, Inhalts- oder SCSS-Änderungen: `make 05-e2e-test` muss grün sein.
- Visuelle Prüfung zusätzlich über die Testumgebung.

## E2E-Tests

- Playwright in `e2e/` (ADR 0026). Haupttreiber sind ARIA-Snapshots (`toMatchAriaSnapshot`): Sie halten die
  Struktur jeder Seite fest (Überschriften, Links, Listen, Landmarks) – also das, was Screenreader sehen.
- `e2e/tests/__snapshots__/*.aria.yml` sind die **abgenommenen Stände**. Sie werden nur von Menschen freigegeben.
- **Regel für KI-Agenten:** Snapshots niemals selbstständig aktualisieren (`--update-snapshots`,
  `make 06-e2e-update-snapshots`, Bearbeiten der YAML-Dateien), um einen roten Test grün zu machen. Schlägt ein
  Snapshot fehl, den Diff melden und erklären, ob die Änderung beabsichtigt ist. Aktualisieren nur, wenn der
  Mensch es ausdrücklich verlangt.
- Neue dauerhafte Seite → in `e2e/tests/pages.ts` eintragen; der Snapshot entsteht beim ersten lokalen Lauf und wird
  im PR geprüft.
- Desktop und Mobil teilen sich dieselben Snapshots: Responsive Layouts dürfen keine Inhalte verstecken.

## Code-Stil

- `.editorconfig`: 2 Leerzeichen, UTF-8, Trailing Whitespace entfernen, Newline am Dateiende.
- Zeilenlänge max. 120 Zeichen (yamllint; Markdown entsprechend umbrechen).
- YAML: Dokumente beginnen mit `---`, keine Oktalwerte (`.yamllint.yml`), ansible-lint Profil `basic`.
- Ansible: voll qualifizierte Modulnamen (`ansible.builtin.*`, `ansible.posix.*`), Steuerung über Tags
  (`vserver`, `deployment`, `localhost`).
- SCSS: Farben ausschließlich über CSS-Variablen aus `_theme.scss`; Light- und Dark-Mode
  (`prefers-color-scheme`) immer beide berücksichtigen, auf Kontrast achten.
- Responsive Breakpoints wie in `main.scss` (600, 905, 1240, 1440 px).
- Generierte Dateien (`public/`, `resources/`, `*.css`) nicht committen.

## Inhalte

- Front Matter in TOML (`+++`), Felder: `title`, `date`, `draft`, optional `description`, `tags`.
- Jede Seite braucht eine `description` (Meta-Description für SEO).
- Blogartikel als Page Bundle in flacher Hierarchie (ADR 0023):
  `content/posts/<ID>-<Name-des-Blogartikels>/index.md` plus Bilder im selben Ordner.
  - ID: dreistellig, fortlaufend, führende Nullen (z. B. `007-Jahreshauptversammlung`).
  - Jeder Artikel braucht mind. ein Bild; Bilder mit aussagekräftigem Alt-Text.
- Blogartikel werden inhaltlich vorab vom Vorstand im privaten Repo abgenommen – keine Inhalte erfinden.
- Barrierefreiheit (LBGG Schleswig-Holstein) beachten: semantisches HTML, Alt-Texte, Kontraste.
- `robots`/`noindex` hängt vom Environment ab (`hugo.IsProduction`) – nicht ändern ohne Grund.

## Git-Workflow

- `main` ist geschützt; Änderungen nur per Pull Request mit Review durch `@Feuerwehr-Kronshagen/dev` (CODEOWNERS).
- Commits nach [Conventional Commits](https://www.conventionalcommits.org/) (ADR 0005):
  `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `ci` – optional mit Scope, z. B. `docs(blog): …`,
  `fix(imprint): …`, `docs(adr): …`.
- PR-Template `.github/pull_request_template.md` ausfüllen (Beschreibung, Testvorgehen, Checkliste).
- Commits vor dem Merge squashen.

## Deployment

- Push auf beliebigen Branch ≠ `main` → Workflow `test` → `https://test.feuerwehr-kronshagen.de/<branch>`
  (Server-Pfad `/var/www/features/<branch>`, ADR 0025).
- Push auf `main` → Workflow `prod` → `/var/www/production`.
- Branch löschen → `cleanup-test` entfernt das Test-Deployment.
- `admin` läuft nächtlich und provisioniert den Server; `certificates` manuell (Certbot/Let's Encrypt).
- Getrennte Server-User für Admin, Test- und Prod-Deployment (ADR 0024). Änderungen an Playbooks, Workflows
  oder Rechten sind sicherheitsrelevant und brauchen besondere Sorgfalt.

## ADRs

- Architekturentscheidungen in `docs/adr/` als `NNNN_Titel_der_Architektur-Entscheidung.md`
  (Vorlage: `0000_Titel_der_Architektur-Entscheidung.md`).
- Bestehende ADRs nicht inhaltlich ändern. Ersetzte ADRs bekommen ein `x` nach der Nummer
  (`NNNNx_…`); der neue ADR verlinkt den alten.
- Bei relevanten Architektur-Änderungen einen neuen ADR vorschlagen.
- Vor größeren Änderungen die betroffenen ADRs lesen.
