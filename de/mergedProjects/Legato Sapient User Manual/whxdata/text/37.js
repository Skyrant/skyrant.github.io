rh._.exports({"0":[["Settings"]],"1":[["\n"],["\n","\n","Die häufigsten Einstellungen auf den Reitern ","Einstellungen",", ","Layout"," \n und ","Filter"," sind unter ","Boardlet-Einstellungen"," \n beschrieben:","\n","\n\t","Reiter \n\t Einstellungen","\n\t","Reiter \n\t Layout","\n\t","Reiter \n\t Filter","\n","\n\n\n","\n","Für das Boardlet ","Knotenlayout"," \n stehen außerdem folgende Einstellungen zur Verfügung. ","\n"],["\n","Erweiterter Titel:","\n","Falls zusätzliche Filterparameter festgelegt \n wurden, können die jeweiligen Filterwerte zusätzlich zum Boardlet-Titel \n angezeigt werden. Alle zusätzlichen Filter sind in der Dropdown-Liste \n verfügbar. Der Wert wird hinter dem Boardlet-Titel in [] angezeigt.","\n","Zoom in auf eine Ebene beschränken:","\n","Über diesen Schieberegler wird definiert, ob \n das Hineinzoomen nur jeweils eine Ebene tiefer führen soll oder zur angeklickten \n Ebene. Wenn beispielsweise mehrere Unterebenen angezeigt werden, kann \n man mit dieser Einstellung verhindern, dass man versehentlich zu tief \n hineinzoomt.","\n"],["\n","Sichtbare Unterebenen:","\n","Hier kann definiert werden, bis zu welcher Tiefe \n die Knotenstruktur angezeigt werden soll. Die Level sind immer relativ \n zum aktuell gewählten Level. Beispiel mit einer Eingabe von 2: wenn Level \n 0 selektiert ist, werden zusätzlich die Level 1 und 2 angezeigt. Ist Level \n 1 selektiert, werden zusätzlich die Level 2 und 3 angezeigt. Die angezeigten \n Level sollten immer mindestens gleich hoch sein wie das Detail Level, \n sonst können die Details natürlich nicht angezeigt werden.","\n","Knoten ohne Layout ausblenden:","\n","Über diesen Schieberegler kann definiert werden, \n ob Knoten, noch kein Layout haben (z.B. automatisch angelegte) ausgeblendet \n werden sollen oder nicht.","\n","Anzeige des Knotenstatus:","\n","Legt fest, wie anstehende Störungen / Alarme \n am Knoten visualisiert werden sollen: aus, Rahmen, Hintergrund. Der entsprechende \n Knoten wird dann eingefärbt, wenn eine Meldung auf diesem Knoten ansteht. \n Stehen mehrere Meldungen an, wird die Meldung mit der Klasse der höchsten \n Priorität visualisiert. Die Farbe wird dabei über den CSS-Style der Meldeklasse \n definiert.","\n","Server-Datenquelle zur Statusermittlung:","\n","Soll der Knotenstatus nicht auf Meldungen basieren, \n sondern auf anderen Eigenschaften, kann ein individuelles Skript erstellt \n werden und hier eingefügt werden. Der Name der Datenquelle muss folgendermaßen \n eingetragen werden:","\n","Name der Datenquelle: ds_light_status.js","\n","Eintrag hier: light-status","\n","Pflichtfelder der Datenquelle sind NODE und \n STATE.","\n","Ein Beispielskript kann im Ordner '...\\customscripts\\jsonapi\\legato\\node_state' \n gefunden werden.","\n","JSON-Filter:","\n","Wurde im vorigen Feld eine Datenquelle angegeben, \n die spezielle Filterkriterien unterstützt, können diese Kriterien hier \n als JSON-String eingeben werden. Damit wird z.B. ermöglicht, dass Knoten \n basierend auf einer Produkt-ID unterschiedlich eingefärbt werden. Der \n Filter muss folgendermaßen eingegeben werden:","\n","\n\t","\n\t","\n\t\t","[{\"parameter\": \"productId\", \n\t\t \"filter\": { \"field\": \"product\", \n\t\t \"op\": \"EQ\" }}]","\n\t","\n","\n","Knotentyp-Details:","\n","Hier können Parameter eingegeben werden, um \n abhängig vom Knotentyp andere Informationen im Details-Bereich einzublenden. \n Dies geschieht in folgender Form: ","\n","\n\t","\n\t","\n\t\t","[{\"nodeType\":2,\"detailBoardlet\":\"node-info-boardlet\",\"detailBoardletParameters\":{\"valueTypes\":[2,3,40]}}]","\n\t","\n","\n","Im Beispiel werden nur für Knoten des Knotentyps \n 2 Details angezeigt, und zwar das Node-Info Boardlet mit Variablen der \n Arten 2, 3 und 40.","\n",":","\n","Werden unten Parameter für das Details-Boardlet eingetragen, \n so werden die spezifischen Angaben hier überschrieben!","\n","Detaillevel:","\n","Hier wird festgelegt, auf welcher Ebene Details \n angezeigt werden. 0 = oberste Ebene. Details sind z.B. die Namen der Unterknoten \n sowie die im nächsten Feld definierten weiteren Informationen wie aktuelle \n Messwerte etc. Das Detail-Level bezieht sich immer auf die aktuell im \n Boardlet selektierte Ebene. Die folgenden Screenshots sollen das verdeutlichen:","\n","Im folgenden Bild ist als Detail-Level 0 eingetragen:","\n","\n","Die Details werden also für die selektierte \n Ebene, im Beispiel der Knoten \"Legato\" angezeigt. Zusätzlich \n sind noch 2 weitere Ebenen eingeblendet (1 und 2), jedoch ohne Details.","\n","Im folgenden Bild ist als Detail-Level 1 eingetragen:","\n","\n","Hier werden also die Details nicht mehr für \n den Knoten Legato angezeigt, sondern für die Ebene darunter, im Beispiel \n für die Knoten \"Werk EN 1\" etc.","\n","Im folgenden Bild ist als Detail-Level 2 eingetragen:","\n","\n","Hier werden die Details also für die Knoten \n 2 Ebenen unter dem Knoten Legato angezeigt.","\n","Detail Boardlet:","\n","Über eine Dropdown-Liste kann ein weiteres Boardlet \n gewählt werden, dessen Werte als Detail-Informationen zu den Knoten angezeigt \n werden, beispielsweise die Werte bestimmter Variablen. Im obigen Screenshot \n sieht man das ","Aktuelle \n Werte Boardlet"," (node-values-boardlet). Außerdem stehen das ","Knoteninfo \n Boardlet"," (node-info-boardlet), das ","Balkendiagramm \n Boardlet"," (barchart-boardlet), das ","Knotenstatus \n Boardlet"," (node-state-boardlet), das Stückzahl-Boardlet (piece-count-boardlet) \n und das Puffer-Boardlet (buffer-boardlet) zur Verfügung.","\n","Detail-Boardlet-Parameter:","\n","Hier können Parameter für das Detail-Boardlet \n eingetragen werden, z.B. die zu zeigenden Variablenarten (Beispiel: { \n \"valueTypes\": [1,3] } zeigt die Variablenarten mit der ID 1 \n und 3 an). ","\n",":","\n","Diese Parameter gelten für das gesamte Boardlet und \n überschreiben ggf. die oben getroffenen spezifischen Angaben je Knotentyp!","\n","Detail-Boardlet-Skalierung:","\n","Skalierung des eingebetteten Detail-Boardlets. \n In der API wird genau definiert, welche eingebetteten Boardlets dies in \n welcher Form unterstützen. ","Das Knotenstatus Boardlet beispielsweise \n zeigt bei einer Skalierung von 2 keine Details mehr an, sondern nur noch \n das definierte Symbol.","\n","Breite Detail-Boardlet:","\n","Breite, die für das im Detailbereich angezeigte \n Boardlet bereitgestellt wird. Ändert z.B. die Schriftgröße etc. im Detailbereich. \n Eine Eingabe hier gilt übergreifend für alle Ebenen. Ausnahmen können \n dann manuell geändert werden.","\n","Die Logik dahinter ist folgende: Das Detail-Boardlet \n tut so, als sei es ein eigenes Boardlet mit der eingegebenen Größe. Dieses \n Boardlet (ohne Kopfzeile etc.) wird dann auf die Größe des Detail-Bereichs \n skaliert.","\n","Zum Definieren der idealen Größe für ein bestimmtes \n Detail-Boardlet empfiehlt sich folgendes Vorgehen:","\n","Fügen Sie das gewünschte Boardlet separat in \n das Dashboard und ziehen Sie es auf die gewünschte Größe, so dass die \n Daten wunschgemäß angezeigt werden. Öffnen Sie dann die Entwicklerwerkzeuge \n Ihres Browsers (rechte Maustaste - Element untersuchen - Inspektor). Bewegen \n Sie den Cursor über die Angaben im Inspektor, bis Ihr Boardlet blau markiert \n im Browser angezeigt wird. Über dem Element erscheint nun ein Pop-up, \n in dem auch die Größe des Elements in Pixeln angegeben ist. Diese Angaben \n können hier eingegeben werden.","\n","\n","Für quadratische Detail-Boardlets wie beispielsweise \n das Piechart-Boardlet sollten Höhe und Breite gleich sein, sonst wird \n das Piechart abgeschnitten.","\n","Höhe Detail-Boardlet:","\n","Höhe, die für das im Detailbereich angezeigte \n Boardlet bereitgestellt wird. Ändert z.B. die Schriftgröße etc. im Detailbereich. \n Eine Eingabe hier gilt übergreifend für alle Ebenen. Ausnahmen können \n dann manuell geändert werden.","\n","Koordinaten runden:","\n","Über diesen Schieberegler wird definiert, ob \n die Koordinaten der einzelnen Elemente gerundet werden sollen.","\n"],["\n","Root-Knoten:","\n","ID des Wurzelknotens. Definiert den Einsprungpunkt \n des Layout Boardlets (Home).","\n","Zusätzliche Filter:","\n","Wird eine Datenquelle verwendet, die andere \n Filterkriterien unterstützt, können durch Klick auf + \"Parameter \n hinzufügen\" weitere Filterkriterien ausgewählt werden. Dazu muss \n ein Name für den neuen Filter eingegeben werden und der Typ selektiert \n werden. Typ kann entweder eine bereits definierte Tabelle sein (z.B. al_classes), \n oder es wird \"LookupTable\" ausgewählt und der Name der Nachschlagetabelle \n eingegeben (z.B. pro_products).","\n\n\n"]],"4":[["Layout Boardlet"]],"7":[["Settings"]],"8":[["Reiter Einstellungen"],["Reiter Layout"],["Reiter Filter"]],"id":"37"})