# ADR 0024: VServer: getrennte User für Admin und Deployment

## Kontext

Änderungen an Ansible-Playbooks in Test-Branches können potenziell unbeabsichtigte Auswirkungen auf andere Deployments
haben. Es soll ein sicheres Deployment auf Test- und Produktionsservern möglich sein, ohne dass Test-Deployments die
Produktion beeinflussen.

## Entscheidung

Trennung der Admin- und Deployment-Benutzer und Zugriffsbeschränkungen auf Server:

1. Test- und Prod-User werden händisch auf dem Server angelegt, jeweils mit eigener Gruppe und SSH-Key.
2. Admin-User bleibt der einzige Hauptuser mit vollständigem Zugriff.
3. Ordnerrechte strikt gesetzt: Test-User kann nur in Test-Ordnern schreiben, Prod-User nur in Prod-Ordnern.
4. Ansible-Playbooks werden über Tags gesteuert (`--tags` / `--skip-tags`) und Environment-spezifisch ausgeführt.
5. GitHub Actions übergeben sensible Variablen via `--extra-vars`, getrennt pro Environment aber mit identischem
   secret-key und unterschiedlichen secret-values.
6. `setgid` auf Test-Ordnern, damit neue Branch-Verzeichnisse automatisch der richtigen Gruppe gehören.
7. Die Admin-Action wird jede Nacht ein mal ausgeführt.
8. __Die Admin-Environment sowie die Prod-Environment (mit entsprechenden Usern) sind nur über protected Branches,
   also uA `main` erreichbar. Somit kann, egal bei welcher Veränderung im Code, keine schadhafte Aktion ohne Review und
   Merge in den Main-Branch geschehen.__

## Konsequenzen

1. Test-Deployments können Prod nicht beschädigen, selbst wenn Playbooks manipuliert werden.
2. Einfaches Aufsetzen neuer Server möglich mit Template für User und SSH-Keys.
3. Branch-spezifische Test-Deployments funktionieren flexibel und sicher.
4. Administrativer Overhead minimal, klare Trennung der Verantwortlichkeiten.
