rh._.exports({"0":[["Kreuztabelle"]],"1":[["\n"],["\n"],["\n","Das Boardlet ","Kreuztabelle"," \n zeigt die Häufigkeit und Dauer von Meldungen pro Schicht in Tabellenform. \n Jede Reihe steht für einen Eintrag pro Schicht. In Reihen, in denen die \n Aggregierung der Schichtdaten noch läuft, wird das Symbol ","Uhr"," \n "," neben dem Schichtnamen angezeigt. Das Symbol ","Uhr"," "," \n ist ausgeblendet, wenn die Daten aktuell sind.","\n","\n","Mittels Drag & Drop \n lassen sich die Breite oder Position der Spalten einfach verändern. Durch \n Klick auf eine Zeilenüberschrift wird nach dieser Spalte sortiert. ","\nNach welcher Spalte sortiert ist, und ob auf- oder absteigend sortiert \n ist, wird durch die dreieckigen Symbole angezeigt: ","\n\n\n","\n"],["\n","\n","Die häufigsten Einstellungen auf den Reitern ","Einstellungen",", ","Layout"," \n und ","Filter"," sind unter ","Boardlet-Einstellungen"," \n beschrieben:","\n","\n\t","Reiter \n\t Einstellungen","\n\t","Reiter \n\t Layout","\n\t","Reiter \n\t Filter","\n","\n\n\n","\n","Für das Boardlet ","Kreuztabelle"," \n stehen außerdem folgende Einstellungen zur Verfügung. ","\n"],["\n","Fußzeilenkomponente:","\n","Die Werte der einzelnen Spalten werden in der \n Tabellenfußzeile aufsummiert. Die Tabellenfußzeile wird mit dem Komponentennamen \n ","alarm-cross-table-footer-component ","angezeigt.","\n"],["\n","\n","\n"," ","Zugriff"," \n","Zugriff auf den Reiter ","Filter"," \n eines Boardlets erhalten Sie über das Menü ","Quick-Edit"," \n [","] \n "," \n "," ","Filter",".","\n"," \n\n\n","\n","\n","Knoten-ID:","\n","ID des Knotens, für den Werte angezeigt werden. \n Kann entweder hier geändert werden oder durch Auswahl eines anderen Knotens \n im Boardlet ","Knotenlayout"," oder im Boardlet ","Knotenbaum"," (außerhalb des ","Bearbeitungsmodus",").","\n\n\n","\n","\n","Meldeklassen:","\n","Filter auf Meldeklassen. Es werden alle Meldungen \n der hier eingegebenen Klassen für die selektierten Knoten angezeigt. Die \n Meldeklassen können aus einer Dropdown-Liste gewählt werden. Leer = kein \n Filter, alle Meldeklassen werden angezeigt.","\n\n\n","\n","\n","Meldearten:","\n","Filter auf Meldearten. Es werden alle Meldungen \n der hier eingegebenen Arten für die selektierten Knoten angezeigt. Die \n Meldearten können aus einer Dropdown-Liste gewählt werden. Leer = kein \n Filter, alle Meldearten werden angezeigt.","\n\n\n","\n","\n","Meldungstext:","\n","Hier kann ein Meldungstext eingegeben werden, \n auf den gefiltert werden soll. Als Platzhalter können ","%"," \n für beliebig viele Zeichen oder ","_"," für genau \n ein Zeichen verwendet werden. Der Filter berücksichtigt Groß- und Kleinschreibung. \n Mehrere Filterkriterien können durch Komma verbunden werden (ODER-Filter).","\n\n\n","\n","Meldesymbolik: ","\n","Filter auf Symbole in der Datenbank.","\n","Knoten:","\n","Filter auf Knotennamen. Leer = kein Filter, \n alle Knoten werden angezeigt.","\n"," ","\n",":","\n","Mit einer neuen Funktion können Sie beim Anklicken \n eines Eintrags in einem Boardlet für Archivierte Meldungen die zugehörigen \n Meldungen anzeigen lassen.","\n","Die Kreuztabelle und das Boardlet für Archivierte Meldungen \n haben unterschiedliche Filtereinstellungen. Dadurch kann es vorkommen, \n dass nicht die richtigen Meldungen angezeigt werden können. Dies ist jedoch \n abhängig von den gewählten Filtern in der Kreuztabelle.","\n"," ","\n"],["\n","\n","Die Meldeklassen werden im ","LC2"," \n unter ","Werksverwaltung"," ","\n ","Meldungsmanagement"," ","\n ","Meldeklassen"," gepflegt.","\n\n\n","\n","\n","Die Meldearten werden im ","LC2"," \n unter ","Werksverwaltung"," ","\n ","Meldungsmanagement"," ","\n ","Meldearten"," gepflegt.","\n\n\n","\n","\n","Meldungsdefinitionen werden im ","LC2"," \n an zwei Stellen gepflegt werden:","\n","\n\t","unter ","Anwendungsstruktur"," \n\t "," ","Datenaustausch"," \n\t "," [Modul] "," \n\t [Verbindung] "," ","Meldungsdefinition"," gepflegt","\n","\n","- oder -","\n","\n\t","unter ","Anwendungsstruktur"," \n\t "," ","Fertigungsstruktur"," \n\t "," [Knoten] "," \n\t ","Meldungszuordnung"," gepflegt.","\n","\n\n\n","\n","Damit die Berechnungen durchgeführt werden, müssen \n die zwei SE Jobs CROSS_TABLE_EXCEPTIONS und CROSS_TABLE_RUN_SHIFTS im \n ","LC2"," aktiviert werden unter ","System-Administration"," \n "," ","SE Jobs"," "," ","SE Jobs"," \n "," siehe die Checkboxen in der Spalte ","Aktiv?",".","\n"],["\n","\n\t","\n\t","\n\t","\n\t\t","Parameter","\n\t\t","Parametertyp","\n\t","\n\t","\n\t\t","alarmClasses","\n\t\t","NumberArray","\n\t","\n\t","\n\t\t","alarmSymbol","\n\t\t","LikeExpressionString","\n\t","\n\t","\n\t\t","alarmText","\n\t\t","LikeExpressionString","\n\t","\n\t","\n\t\t","alarmTypes","\n\t\t","NumberArray","\n\t","\n\t","\n\t\t","node","\n\t\t","Integer","\n\t","\n\t","\n\t\t","nodeName","\n\t\t","LikeExpressionString","\n\t","\n\t","\n\t\t","timeFrame","\n\t\t","TimeFrame","\n\t","\n","\n"," ","\n\n\n"]],"5":[["Allgemein"],["Einstellungen"],["Reiter Layout"],["Benötigte Parametrierung im LC2"],["Verfügbare Boardlet-Parameter"]],"6":[["Kreuztabelle"]],"8":[["Reiter Filter"]],"id":"62"})