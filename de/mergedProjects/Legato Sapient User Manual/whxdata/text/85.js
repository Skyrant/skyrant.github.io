rh._.exports({"0":[["Produktdatenreport"]],"1":[["\n"],["\n"],["\n","Mit dem Boardlet ","Produktdatenreport"," \n können Produktionsanwender Produktdaten, die in Legato Sapient gespeichert \n sind, im Rahmen von Track and Trace (T&T) analysieren und auswerten. \n Mit dem Produktdatenreport erhält man z.B. Informationen, ob und welche \n Engpässe es in einer Produktionslinie gibt. ","\n","Die gewonnen Daten dieser Datenanalyse-Funktion können \n im Boardlet Produktdatendiagramm grafisch dargestellt werden. Eine grafische \n Darstellung ist in Kreisdiagrammen, Balkendiagrammen und gestapelten Balkendiagrammen \n möglich. Siehe ","Produktdatendiagramm"," \n für mehr Informationen.","\n"," ","\n","Beachten Sie folgende Informationen zum Produktdatenreport:","\n","\n\t","Neben der Analyse der produktbezogenen Daten \n\t können über die WebApp durch die PDF-Funktion die Analysedaten als \n\t Bericht ausgegeben werden. ","\n\t","Die Einstellungen im Boardlet können verschiedene \n\t Datentypen (bool, string, numerisch) haben.","\n\t","Es können alle relevanten Produkteigenschaften, \n\t die mit Hilfe der T&T-Funktionalität erfasst und gespeichert wurden, \n\t und die spezifischen Vorkommen (Anzahl und Prozentsatz) dieser Eigenschaften \n\t innerhalb eines Zeitraums abgerufen werden. Beachten Sie hierzu im \n\t Boardlet die ","Zeitbereich","-Filter \n\t für die Datenanalyse. Beispiele dieser Zeitbereich-Filter sind Individueller \n\t Zeitraum, Relative Zeit (z.B. \"letzte Woche\"), Absolute \n\t Zeit oder Klicken zum Wählen.","\n\t","\n\t","\n\t","Für num-Werte gibt es die Aggregation in Klassen \n\t (Buckets) mit einem vorkonfigurierten Zahlen- und Wertebereich. Bei \n\t Klassen (Buckets) handelt es sich um Intervallbreiten mit einer bestimmten \n\t Anzahl und einem bestimmten Messwert. Die \"Klassen andere\" \n\t (\"Buckets other\") sind Bereiche außerhalb der Intervalle.","\n\t","Die dargestellten Inhalte des Boardlets sind \n\t abhängig von den ausgewählten Filtern, jedoch unabhängig von den gewählten \n\t Knoten.","\n\t","Alle Produkteigenschaften werden für Produktionsschichten \n\t für jeden konfigurierten Berichtsbereich aggregiert, d.h. Daten werden \n\t gesammelt und in einer zusammengefassten Form ausgedrückt. Außerdem \n\t werden alle Produkteigenschaften mittels eines zyklisch getriggerten \n\t Verfahrens nach Produkten gruppiert.","\n\t","Es können für die ausgewählten Daten Gruppen \n\t bei der Auswahl gebildet werden (für Eigenschaften und auch für Zeitbereiche, \n\t z.B. Schicht, Tag, Woche, Monat).","\n\t","Es können die ausgewählten (und auch gruppierten) \n\t Daten in einem flexiblen Datengitter dargestellt werden. ","\n\t","\n\t","Das Boardlet Produktdatenreport hat folgende \n\t Inhalte:","\n\t","(1)"," ","Product"," \n\t / ","Produkt",": Festgelegter Produktname","\n\t","(2)"," ","Attribute"," \n\t / ","Attribut",": Eigenschaft, die \n\t durch Filtereinstellungen ausgewählt werden, wie z.B. Farbe oder Zeiteinheit","\n\t","(3)"," ","Value \n\t (from",") / ","Wert (von)",": \n\t Grenzbeginn des Attributwertes einer Klasse (Bucket)","\n\t","(4)"," ","Value \n\t (up to)"," / ","Wert (bis zu)",": \n\t Grenzende des Attributwertes eines Buckets","\n\tZu ","(3)"," und \n\t ","(4)",": Innerhalb \n\t der Grenzen [Value from - Value up] wird der Attributwert einer jeweiligen \n\t Klasse (Bucket) hinzugezählt, d.h. wenn Value (from) = 200, dann wird \n\t der Wert 200 eingeschlossen. Wenn Value (up to) = 4199, dann wird \n\t Wert 4199 inkludiert, aber der Wert 4200 exkludiert). ","\n\t","(5)"," ","Count"," \n\t / ","Anzahl",": Anzahl der Produkte, \n\t die in der Klasse (Bucket) gezählt werden ","(Beachten \n\t Sie jedoch den Hinweis hierzu unterhalb der Abbildung, da es Produktionseinheiten \n\t (Production Unit, PUs) gibt, die keine Attribute haben)","\n\t","(6)"," \n\t %",": Prozentualer Anteil des Produktes an der Klasse (Bucket), \n\t gemessen am gesamten Vorkommen","\n\t","\n\t","\n\t","\n","\n",":","\n","Bei ","(5)"," \n ","Count"," / ","Anzahl \n ","gilt: Wenn eine PU, wie z.B. eine Autokarosserie, zugewiesene Attribute \n (bspw. Farben/Colors) hat, dann werden diese Attribute für das Produktdatenreport-Boardlet \n aggregiert. Selbst wenn die PU das Attribut (hier: Farbe/Color) hat, aber \n der Wert leer (EMPTY) oder NULL ist, findet auch eine Aggregation statt.","\nD.h., in der Spalte ","Value (from)"," \n ","(3)"," wird für ein \n solches Attribut an der betreffenden Stelle eine leere Zelle dargestellt. \n Wenn aber einer PU keine Attribute (z.B. Farben/Colors) zugewiesen sind, \n dann wird diese PU nicht gezählt. Wenn die PU zugewiesene Attribute hat, \n aber der Attributwert leer (EMPTY) oder NULL ist, wird dies nicht aggregiert.","\n"," ","\n"],["\n","Die Konfiguration des Produktdatenreports findet im \n LC2 statt. Eine entsprechende Konfiguration im LC2 ist notwendig, da festgelegt \n werden muss, von welcher Lesestelle Daten gesammelt werden. ","\n","Verschiedene Bereiche werden über Lesestellen identifiziert. \n Es können mehrere Lesestellen angegeben werden. Die zusätzlich angegebenen \n Lesestellen gehören alle zu einem definierten Bereich. ","\n","Grundlegend muss ","\n","\n\t","die jeweilige Lesestelle,","\n\t","der Namen der Lesestelle und","\n\t","die Gruppierung ","\n","\n","festgelegt werden.","\n"," ","\n",":","\n","Beim Aggregieren von Daten werden eine Vielzahl an \n einzelnen Werten zu einem einzigen Wert zusammengefasst. ","\nDie Datenaggregation erstellt die komplette Datenquelle für den Produktdatenreport \n und das Produktdatendiagramm.","\n","Die Datenaggregation muss korrekt eingerichtet sein, \n andernfalls werden im Boardlet Produktdatenreport keine Daten angezeigt.","\n","\n"," ","\n","Beachten Sie hierzu die ","Konfiguration \n der Aggregierung für Produktdatenreport und Produktdatendiagramm",", \n um mehr Informationen für die Konfiguration für die Boardlets Produktdatenreport \n und ","Produktdatendiagramm"," zu erhalten.","\n"," ","\n","Gehen Sie wie folgt vor, um die T&T-Funktionalität \n im LC2 aufzurufen und notwendige Einstellungen für den Produktdatenreport \n festzulegen:","\n","\n\t","Öffnen Sie den LC2 und navigieren Sie in der \n\t ","Navigation"," ","(1)"," auf ","Production"," \n\t ","Management /"," \n\t Produktionsmanagement ","(2)"," \n\t und ","Tracking & Tracing"," \n\t ","(3)",".","\n\t","Navigieren Sie zu ","Reporting"," \n\t ","Area"," ","Groups"," \n\t / ","Report-Bereichsgruppen"," ","(4)",".","\n\t","\n\t","\n\t","\n\t","Ordnen Sie die Tabelle mit dem Befehl ","Best Fit (all columns) / Optimale Breite \n\t (alle Spalten)"," ","(5)"," \n\t über das Kontextmenü der ","Reporting \n\t Area Groups","-Tabelle / ","Report-Bereichsgruppen","-Tabelle.","\n\t","\n\t","\n\t","Legen Sie in der Tabelle ","Reporting \n\t Areas"," / ","Report-Bereiche"," \n\t Report-Bereiche fest. ","\n\tFalls mehr als 50 Auswertungen (= Reporting Areas) angelegt werden, \n\t ist das Anlegen von Report-Bereichen empfehlenswert, damit bei diesen \n\t Auswertungen noch zusätzliche Gruppierungsbewertungen angegeben werden \n\t können. Eine Gruppierung ist hier hilfreich, um eine gezielte Auswertung \n\t zu ermöglichen. In der Tabelle ","Reporting \n\t Areas"," / ","Report Bereiche"," \n\t kann dies in der Spalte ","Group"," \n\t / ","Gruppe"," gemacht werden.","\n\t","Durch Klicken auf das ","Plus","-Symbol \n\t können Sie im LC2 eine neue ","Reporting \n\t Area Group"," / ","Report-Bereichsgruppen"," \n\t anlegen.","\n\tVergeben Sie einen Namen für die neue ","Reporting"," \n\t ","Area"," ","Group"," \n\t / ","Report","-","Bereichsgruppe",".","\n\t","\n\t","\n\t","\n\t\t","EN screenshot","\n\t","\n\t"," Anschließend können Sie unter ","Reporting \n\t Areas","/","Report Bereiche"," \n\t die soeben erstellte Gruppe zuordnen. In der WebApp können Sie diese \n\t Gruppen ebenfalls sehen und abrufen.","\n\t","\n\t","\n\t","\n\t","Wählen Sie im nächsten Schritt in der ","Reporting Area","-Tabelle / ","Report-Bereiche","-Tabelle \n\t eine Reporting Area aus, oder erstellen eine neue ","Reporting \n\t Area"," / ","Report-Bereich ","durch \n\t Klicken auf das ","Plus","-Symbol). \n\t Beim Erstellen einer neuen ","Reporting \n\t Area"," / ","Report Bereich"," \n\t vergeben Sie anschließend weitere Werte, wie z.B. den Namen und wählen \n\t Sie den entsprechenden Knoten aus. Für diesen Knoten gilt anschließend \n\t die ausgewählte Reporting Area.","\n\t","\n\t","\n\t","\n\t","Vergeben Sie im rechten Bereich im Hauptfenster \n\t unter Details die Klassenwerte (","Bucketwerte)",".","\n\t","\n\t","\n","\n"," ","\n","\n\t","Beachten Sie, dass für flexible Analysen können \n\t dynamische Gruppen dieser Eigenschaften im LC2 gebildet werden.","\n","\n"," ","\n","\n\t","Wie bei anderen T&T-Funktionen wird eine \n\t Durchlaufzeit zwischen zwei Lesestellen oder auch Identifikationspunkten \n\t (Identpoints) gemessen. Die Einstellungen hierfür können unter ","Reporting"," ","Areas"," \n\t / ","Report","-","Bereiche"," \n\t ","(1)"," und ","Area","-","Identpoint"," \n\t / ","Lesestellen"," ","(2)"," im LC2 vorgenommen werden:","\n\t","\n\t","\n\t","\n\t","\n\t","\n\t","Damit die Durchlaufzeit zwischen zwei Lesestellen \n\t oder auch Identifikationspunkten (Identpoints) gemessen werden kann, \n\t werden Identifizierungstypen Einfahrt (Entry ident types) und Identifizierungtypen \n\t Ausfahrt (Exit ident types) definiert. Die gewonnen Daten werden auf \n\t die gleiche Weise wie andere konfigurierte Attribute analysiert. Beispiele \n\t der Identifizierungtypen sind z.B. Abstapeln, Ausfahrt, Einfahrt, \n\t usw. ","\n\tBeachten Sie hierzu die folgenden Abbildungen:","\n\t","\n\t\t","\n\t\t","\n\t\t","\n\t\t\t","Identifizierungstypen \n\t\t\t Einfahr","t","\n\t\t\t(Identifizierungstypen Entry ident type)","\n\t\t\t","Identifizierungstypen \n\t\t\t Ausfahr","t","\n\t\t\t(Identifizierungstypen Exit ident type)","\n\t\t","\n\t\t","\n\t\t\t","\n\t\t\t","     ","\n\t\t","\n\t","\n","\n"," ","\n"],["\n","Im Filterdialog des Boardlets Produktdatenreport kann \n alles eingestellt werden, damit der Benutzer eine umfangreiche Auswertung \n durchführen kann. Eine Voraggregierung im LC2 ist jedoch notwendig. ","\nNeben den bereits im Abschnitt ","Allgemein"," beschriebenen \n ","Time range"," / ","Zeitbereich","-Filtern \n ","(1)"," gibt es folgende \n Filter:","\n"," ","\n","\n\t","\n\t","\n\t","\n\t\t","(2)"," \n\t\t Production area / Report-Bereich","\n\t\t","(3)"," \n\t\t Products / Produkte","\n\t\t","(4)"," \n\t\t Attributes to show / Anzuzeigende Attribute","\n\t\t","(5)"," \n\t\t Group by interval type / Gruppieren nach Intervalltyp","\n\t\t","(6)"," \n\t\t Group by attributes / Gruppen nach Attributen","\n\t\t"," ","\n\t\t"," ","\n\t\t"," ","\n\t\t"," ","\n\t\t","\n\t\t","\n\t\t","\n\t","\n","\n"," ","\n","Die häufigsten Einstellungen auf den Reiter ","Filter"," \n sind unter ","Boardlet-Einstellungen"," \n beschrieben:","\n","\n\t","Reiter \n\t Filter","\n","\n"," ","\n"],["\n","\n\t","\n\t","\n\t","\n\t\t","Parameter","\n\t\t","Parametertyp","\n\t","\n\t","\n\t\t","timeFrame","\n\t\t","TimeFrame","\n\t","\n\t","\n\t\t","productionArea","\n\t\t","NumberArray","\n\t","\n\t","\n\t\t","products","\n\t\t","NumberArray","\n\t","\n\t","\n\t\t","attributesToShow","\n\t\t","NumberArray","\n\t","\n\t","\n\t\t","groupByIntervalType","\n\t\t","NumberArray","\n\t","\n\t","\n\t\t","groupByAttributes","\n\t\t","NumberArray","\n\t","\n","\n\n\n"]],"2":[["Produktdatenreport"]],"5":[["Allgemein"],["Konfiguration \n und benötigte Parametrierung im LC2"],["Verfügbare \n Boardlet-Parameter"]],"8":[["Reiter Filter"]],"id":"85"})