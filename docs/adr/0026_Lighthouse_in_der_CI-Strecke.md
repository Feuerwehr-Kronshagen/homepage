# ADR 0026: Lighthouse in der CI-Strecke

## Kontext

Die Website soll schnell und bandbreitenarm laden (Issue #4). Abnahmekriterium ist ein grüner Chrome-Lighthouse-Test
für Geschwindigkeit. Zusätzlich soll kontrolliert werden, dass künftig hinzugefügte Bilder web-optimiert sind.
Manuelle Lighthouse-Prüfungen im Browser werden leicht vergessen und sind nicht reproduzierbar.

## Entscheidung

1. Jeder Push auf einen Branch ≠ `main` führt nach dem Test-Deployment den Job `lighthouse` im Workflow `test` aus.
2. Geprüft wird die bereitgestellte Testumgebung, nicht der lokale Build, damit NGINX-Einstellungen (z. B.
   Komprimierung) mitgemessen werden.
3. Werkzeug ist [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) (`@lhci/cli`), mobile Emulation,
   Median aus drei Läufen.
4. Schwellenwerte stehen in `lighthouserc.json`, die geprüften Seiten und die Version im `makefile`:
   - Fehler: Performance < 90, nicht optimierte Bilder, Bilder ohne modernes Format (WebP/AVIF), zu große Bilder.
   - Warnung: Barrierefreiheit < 90, Best Practices < 90, Bilder ohne Breite/Höhe, nicht verzögert geladene Bilder.
   - SEO wird nicht bewertet, weil die Testumgebung absichtlich `noindex` setzt.
5. Berichte werden als Artefakt `lighthouse-reports` gespeichert und nicht öffentlich hochgeladen.

## Konsequenzen

1. Verschlechterungen der Ladezeit und nicht optimierte Bilder fallen im Pull Request auf.
2. Der Job läuft nach dem Deployment; ein roter Lighthouse-Job verhindert das Test-Deployment nicht.
3. Ob der Job das Mergen blockiert, wird über die Branch-Protection von `main` (Required Status Check) festgelegt.
4. Messwerte schwanken je nach Runner-Auslastung; der Median aus drei Läufen mildert das.
5. Der Testbuild ist nicht minifiziert, die Produktion schon – die Testmessung ist daher eher pessimistisch.
6. Lokal kann die Prüfung mit `make 05-lighthouse-local` ausgeführt werden (benötigt Chrome).
