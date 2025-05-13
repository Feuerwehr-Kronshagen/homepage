# ADR 0004: Die Website in drei Teile aufteilen

## Kontext

Die bisherige Website wurde mit einem Redaktionssystem (CMS) erstellt, was dazu geführt hat, dass wichtige Informationen
für die Pflege und Weiterentwicklung verloren gegangen sind. Wie in ADR 0003 beschrieben, haben wir uns entschieden,
GitHub zu nutzen, um die Abhängigkeit von einzelnen Personen zu verringern.

## Entscheidung

Wir werden die Website in drei getrennte Teile schneiden:

```mermaid
flowchart LR
  Inhalte --> Seitengenerierungs-Framework
  Seitengenerierungs-Framework --> Hosting
```

- **Inhalte**: Die Texte und Informationen der Website werden in einfachen Textdateien gespeichert. Diese Dateien sind
  leicht zu bearbeiten und können von jedem Teammitglied ohne besondere technische Kenntnisse hinzugefügt oder geändert
  werden.

- **Umwandlung in Website**: Ein spezielles Programm wandelt diese Textdateien automatisch in eine vollständige Website
  um. Dabei werden die Texte mit dem Design kombiniert und in das richtige Format für Webbrowser gebracht.

- **Veröffentlichung im Internet**: Die fertige Website wird auf einem Server im Internet bereitgestellt, so dass sie
  für alle Besucher zugänglich ist.

## Konsequenzen

Vorteile:

- **Wir können die technische Grundlage der Website jederzeit ändern, ohne die Inhalte neu erstellen zu müssen.**
- Die Website ist nicht mehr von einzelnen Personen abhängig - wenn jemand ausscheidet, können andere weitermachen.
- Alle Informationen sind offen dokumentiert und für alle Beteiligten nachvollziehbar.

Nachteile:

- Am Anfang ist mehr Arbeit nötig als bei einem fertigen Redaktionssystem.
- Teammitglieder müssen neue Begriffe lernen und einen GitHub-Account erstellen.
- Alle Inhalte auf GitHub sind öffentlich sichtbar (was aber für eine öffentliche Website kein großes Problem ist).

### Andere Möglichkeiten, die wir nicht gewählt haben

- Weitermachen mit dem bisherigen Redaktionssystem (Joomla).
- Ein anderes, besser dokumentiertes Redaktionssystem verwenden.
