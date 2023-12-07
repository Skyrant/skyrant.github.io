rh._.exports({"0":[["Beispiele Details"]],"1":[["\n"],["\n","Wie bereits beschrieben, können für das Knotenlayout \n Detail-Boardlets eingeblendet werden, die pro Knoten bestimmte Informationen \n wie beispielsweise die aktuellen Stückzähler oder überfällige Wartungsaufträge \n visualisieren. Im Folgenden werden einige Fälle beispielhaft parametriert.","\n","Zu beachten ist, dass die Eingaben bzgl. Knotenstatus \n und die Eingaben bzgl. Detail-Boardlets voneinander unabhängig sind. Somit \n können sie auch parallel verwendet werden.","\n"],["\n","Das folgende Beispiel zeigt den Knotenstatus basierend \n auf Meldungen als Umrandung an. Dabei wird der Knoten in der Farbe der \n höchsten anstehenden Meldung umrandet (z.B. rot = Störung, gelb = Meldung).","\n","\n","Die folgenden Einstellungen müssen vorgenommen werden:","\n","Bearbeiten - Boardlet Layout:","\n","Anzeige Knotenstatus: ","\n","Auswahl \"Border\"","\n","Server-Datenquelle zur Statusermittlung:","\n","al-node-states","\n"],["\n","Das folgende Beispiel zeigt die nötigen Eingaben, um \n die Aktuellstückzahl der einzelnen Knoten auf Level 1 einzublenden.","\n","\n","Die folgenden Einstellungen müssen vorgenommen werden:","\n","Bearbeiten - Boardlet Layout:","\n","Detaillevel:","\n","1","\n","Detail-Boardlet:","\n","node-values-boardlet","\n","Detail-Boardlet-Parameter:","\n","{\"valueTypes\":[2]}","\n"],["\n","Es ist möglich, Parameter einzugeben, um abhängig vom \n Knotentyp andere Informationen im Details-Bereich einzublenden. Im Beispiel \n werden nur für Knoten des Knotentyps 2 Details angezeigt, und zwar das \n Node-Info Boardlet mit Variablen der Arten 2 und 3.","\n","\n","Dazu ist Folgendes einzutragen:","\n","Bearbeiten - Boardlet Layout:","\n","Knotenstatus anzeigen:","\n","Aus","\n","Knotentyp-Details:","\n","[{\"nodeType\":2,\"detailBoardlet\":\"node-info-boardlet\",\"detailBoardletParameters\":{\"valueTypes\":[2,3,40]}}]","\n","Detaillevel:","\n","1","\n"],["\n","Es ist auch möglich, das Aktuelle Werte Boardlet als \n Tortendiagramm mit fest vergebenen Farben je Variablenart anzuzeigen, \n um beispielsweise einen Status abzubilden. ","\n","\n","Dazu ist Folgendes einzutragen:","\n","Bearbeiten - Boardlet Layout:","\n","Detaillevel:","\n","1","\n","Detail-Boardlet:","\n","node-values-boardlet","\n","Detail-Boardlet-Parameter:","\n","{\"viewMode\":\"piechart\", \"typeColors\":{\"2\":\"success\",\"40\":\"error\"}}","\n"," ","\n","Es wird also der Variablentyp 2 mit der im Theme definierten \n \"Success\"-Farbe dargestellt, der Variablentyp 40 mit der Farbe \n \"Error\". Für die weiteren Variablenarten werden die Standardfarben \n des Themes verwendet.","\n","Die Parameter können vom Knoteninfo Boardlet und vom \n Knotenstatus Boardlet nicht interpretiert werden, dort sind sie fest vorgegeben.","\n","Detail-Boardlet-Breite:","\n","100","\n","Detail-Boardlet-Höhe:","\n","100","\n"],["\n","Das folgende Beispiel zeigt ein Icon an für Knoten, \n an denen an einem Wartungsauftrag gearbeitet wird (für jeden Auftrag mit \n Status \"work on\" ein Icon). Zusätzlich kann der Hintergrund \n der betroffenen Knoten für überfällige Wartungsaufträge rot eingefärbt \n werden (es gibt mindestens einen Auftrag, der überfällig ist und niemandem \n zugeordnet ist).","\n","\n","Die folgenden Einstellungen müssen vorgenommen werden:","\n","Bearbeiten - Boardlet Layout:","\n","Anzeige Knotenstatus: ","\n","Auswahl \"Background\" (wenn rote Einfärbung \n gewünscht ist)","\n","Server-Datenquelle zur Statusermittlung:","\n","tpm_maint_order_overdue","\n","Detaillevel:","\n","1","\n","Detail-Boardlet:","\n","maint-orders-status-boardlet","\n","Um eine zentrierte Darstellung zu ermöglichen, muss \n außerdem beim das Detail-Bereich auf die Maße des Knotens gesetzt werden \n (Layout editieren, Details Breite & Höhe auf die entsprechenden Werte \n setzen).","\n"],["\n","Folgende Boardlets können aktuell als Detail-Boardlets \n eingebunden werden:","\n","\n\t","\n\t","\n\t","\n\t","\n\t\t","Detail-Boardlet","\n\t\t","Inhalt","\n\t\t","Beispiel-Parameter","\n\t","\n\t","\n\t\t","node-values-boardlet","\n\t\t","Anzeige des Boardlets ","Monitoring \n\t\t - Aktuelle Werte",". Einschränkbar auf Variablenarten.","\n\t\t","Einschränkbar auf Anzeige als Tortendiagramm \n\t\t mit festen Farben.","\n\t\t","{\"valueTypes\":[2]}","\n\t\t","{\"viewMode\":\"piechart\", \n\t\t \"typeColors\":{\"2\":\"success\",\"40\":\"error\"}}","\n\t","\n\t","\n\t\t","maint-orders-status-boardlet","\n\t\t","Anzeige von überfälligen Wartungsaufträgen","\n\t\t"," ","\n\t","\n\t","\n\t\t","state-boardlet","\n\t\t","Anzeige des Boardlets ","Monitoring \n\t\t - Knotenstatus",".","\n\t\t"," ","\n\t","\n\t","\n\t\t","node-info-boardlet","\n\t\t","Anzeige des Boardlets ","Monitoring \n\t\t - Knoteninfo",".","\n\t\t"," ","\n\t","\n\t","\n\t\t","barchart-boardlet","\n\t\t","Anzeige des Boardlets ","Chart \n\t\t - Balken-/Liniendiagramm",".","\n\t\t"," ","\n\t","\n","\n"," ","\n\n\n"]],"3":[["Beispiele zur Parametrierung von Detail-Boardlets"]],"4":[["Anzeige \n von Knotenstatus basierend auf Meldungen"],["Anzeige von \n Aktuellstückzahl auf Level 1"],["Anzeige \n von Ist- und Sollstückzahl für Knoten vom Typ 2"],["Tortendiagramm \n für einzelne Variablenarten mit festen Farben"],["Anzeige von \n überfälligen Wartungsaufträgen"],["Verfügbare Detail-Boardlets"]],"id":"36"})