rh._.exports({"0":[["Projektspezifische Felder - Erweiterte Eigenschaften"]],"1":[["Projektspezifische Felder,Erweiterte Eigenschaft"]],"2":[["\n"],["\n"],["\n","Allen Daten-Tabellen können projektspezifische Felder \n wie erweiterte Eigenschaften zugewiesen werden, z.B. eine Kostenstelle \n oder eine Farbe. Diese projektspezifischen Felder werden dann als eigene \n Spalten an die jeweilige Tabelle angehängt und können dort mit Werten \n versehen werden. Außerdem können diese projektspezifischen Felder auch \n in der WebApp abgefragt oder als Filter verwendet werden.","\n"],["\n","Um die projektspezifischen Felder pflegen zu können, \n werden Customize-Berechtigungen benötigt und der LC2 muss im System-Developer \n Mode gestartet werden.","\n","Dies vorausgesetzt, wird bei den Tabellen, die projektspezifische \n Felder unterstützen, ein neuer Menüpunkt Projektspezifische Felder unter \n Einstellungen - Anpassen angeboten:","\n","\n","Ein Klick auf diesen Menüpunkt öffnet eine Tabelle, \n in der die projektspezifischen Felder für die selektierte Datenquelle \n / Tabelle angelegt werden können.","\n"],["\n","\n\t","\n\t\t","Feld","\n\t\t","Beschreibung","\n\t","\n\t","\n\t\t","ID","\n\t\t","Vom System vergebene, eindeutige \n\t\t ID. Schreibgeschützt.","\n\t","\n\t","\n\t\t","Kategorie (optional)","\n\t\t","Kategorie, der diese Spalte zugeordnet \n\t\t ist. Default \"Erweitert\".","\n\t","\n\t","\n\t\t","Datenquelle","\n\t\t","FK - Datenquelle, für die diese erweiterte \n\t\t Eigenschaft / projektspezifische  Spalte erstellt wird. Ist \n\t\t automatisch mit der Tabelle vorbelegt, die gepflegt wird.","\n\t\t","Sollen erweiterte Eigenschaften für eine \n\t\t Tabelle gepflegt werden, die nicht im LC2 eingebunden ist, kann \n\t\t dies unter Systemtabellen - Projektspezifische  Felder erfolgen. \n\t\t Hier werden die projektspezifischen Felder für alle Datenquellen \n\t\t angezeigt.","\n\t","\n\t","\n\t\t","Feldname","\n\t\t","Name des projektspezifischen Feldes. \n\t\t Wird nicht angezeigt. Wird für Zuordnung der Eigenschaften dieses \n\t\t Felds benötigt. Der Wert wird immer in Kleinbuchstaben gespeichert. \n\t\t Leerzeichen und Sonderzeichen sind nicht erlaubt.","\n\t","\n\t","\n\t\t","Angezeigter Name (optional)","\n\t\t","Angezeigter Name der Spalte.","\n\t","\n\t","\n\t\t","Tipp (optional)","\n\t\t","Tooltipp, der beim Mouseover angezeigt \n\t\t wird.","\n\t","\n\t","\n\t\t","Anzeige-Nummer (optional)","\n\t\t","Definiert, an welcher Stelle die \n\t\t Spalte im LC2 dargestellt wird. Default ist 100, also am Ende \n\t\t der Tabelle.","\n\t","\n\t","\n\t\t","Default-Wert (optional)","\n\t\t","Default-Wert, mit dem dieses Feld \n\t\t automatisch belegt wird.","\n\t","\n\t","\n\t\t","Pflichtfeld","\n\t\t","Checkbox. 1 = Eingabe verpflichtend; \n\t\t 0 = Eingabe optional.","\n\t","\n\t","\n\t\t","Sichtbar","\n\t\t","Checkbox. 1 = Spalte ist sichtbar; \n\t\t 0 = Spalte ist ausgeblendet.","\n\t","\n\t","\n\t\t","JSON Eigenschaft","\n\t\t","Checkbox. 1 = dies ist eine JSON \n\t\t Eigenschaft. Default ist 1.","\n\t","\n\t","\n\t\t","Datentyp","\n\t\t","Lookup-Liste zur Auswahl des Datentyps \n\t\t der Eigenschaft. Die Feldeingabe wird auf diesen Datentyp geprüft. \n\t\t Wird ein Eintrag in Lookup-Eigenschaften vorgenommen, so muss \n\t\t der passende Datentyp für die Einträge in der Werteliste gewählt \n\t\t werden.","\n\t","\n\t","\n\t\t","Max. Länge (optional)","\n\t\t","Maximale Länge für Werte vom Datentyp \n\t\t STRING.","\n\t","\n\t","\n\t\t","Lookup-Eigenschaften (optional)","\n\t\t","Definition einer Lookup-Tabelle oder \n\t\t einer Werteliste. Bei Lookup-Tabellen muss der Datentyp auf INTEGER \n\t\t gesetzt sein!","\n\t\t","Beispiele:","\n\t\t","DataSourceSettings.ObjectName=\"L_NODES\";","\n\t\t","LookupList = [\"xy\", \"zz\"];","\n\t","\n\t","\n\t\t","Schema-Info","\n\t\t","Schema-Info für dieses Feld (Datentyp, \n\t\t Eigenschaft, etc.). Wird automatisch befüllt und dient nur zur \n\t\t Information.","\n\t","\n","\n"," ","\n"],["\n","Nachdem die projektspezifischen Felder definiert wurden, \n werden sie als neue Spalten bei der Tabelle angezeigt. Je nach Konfiguration \n können die Felder nun befüllt werden, z.B. durch Auswahl eines Eintrags \n aus einer Werteliste oder durch Eingabe eines Strings. Zum Befüllen werden \n keine Customize-Berechtigungen benötigt.","\n","Die Einträge werden im Feld \"Erw. Eigenschaft\" \n (attr_jsonb) automatisch als JSON-String zusammengefasst und können dann \n von der SE abgefragt werden.","\n","Beispiel:","\n","{\"ksta1\": 100, \"ksta2\": \"test_attr\", \n \"ksta3\": 2}","\n"," ","\n\n\n"]],"4":[["Projektspezifische Felder / Erweiterte Eigenschaften"]],"5":[["Funktion"],["Definition \n von projektspezifischen Feldern"],["Feldbeschreibung"],["Befüllen von \n projektspezifischen Feldern"]],"id":"287"})