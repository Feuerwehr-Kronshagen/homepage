# Warum das alles?

Die bisherige Homepage wurde mit einem CMS (Content-Management-System) erstellt. Über die Jahre gingen wichtige 
Informationen, die zur Wartung und Weiterentwicklung notwendig waren, verloren. Diese Github-Organisation ist der 
Versuch, die Homepage resilient gegen Abhängigkeiten einzelner Personen zu machen.

# Ist das nicht viel zu kompliziert?

Für Laien vorerst bestimmt. Ein neuer Account ist notwendig. Neue Begriffe müssen gelernt werden. Zum Glück müssen 
Laien nur die Grundzüge verstehen, um das System resilient zu halten.

Für technisch Versierte ist Github gängige Praxis.

# Ist das nicht viel mehr Aufwand als ein CMS?

Anfangs schon. Bezieht man jedoch die langfristige Wartung mit ein, könnte sich diese Variante als gleichermaßen 
aufwändig herausstellen und einige Vorteile bieten.

Diese Github-Organisation wird die CMS-Datenbank, die Benutzerverwaltung und Zugriffskontrolle, Updates des CMS sowie 
der Plugins, Backups aller Systeme und die Haltung der Inhalte ersetzen.

Architektur auf einen Blick:

Inhalte in Klartext → Framework für Static-Site → Deployment der Static-Site

Architektur (für Entwickler): Durch Svelte-Kit wird eine Static-Page generiert, welche durch 
Blog-Einträge im Markdown-Format angereichert werden kann. Mit jedem Release wird eine CI/CD Github-Action ein 
automatisiertes Deployment in Test-Umgebungen und eine Prod-Umgebung ausführen. Alle Inhalte lassen sich somit in 
Git nachvollziehen.

Da die Inhalte in Klartext vorliegen, kann das Framework jederzeit getauscht werden. Durch die Verwendung einer 
Static-Page kann die Infrastruktur jederzeit getauscht werden. Der größte Aufwand besteht in der Migration vom alten 
Framework (Svelte-Kit) zum Neuen. Da es sich um einfaches HTML/CSS/TS handelt, ist die Migration nicht aufwändig.

# Achtung: Alles ist offen einsehbar!

Hier noch einmal der Hinweis: Alles, was auf Github eingetragen wird, ist und bleibt öffentlich. Bitte greift für 
interne Kommunikation auf bekannte Kanäle zurück.
