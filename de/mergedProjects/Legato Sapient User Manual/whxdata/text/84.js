rh._.exports({"0":[["Produktdatendiagramm"]],"1":[["\n"],["\n","Das Boardlet ","Produktdatendiagramm"," \n hilft bei der Visualisierung der vom Boardlet ","Produktdatenbericht"," \n dargestellten Daten. Das Boardlet Produktdatendiagramm unterstützt bestimmte \n Kombinationen von Filtern, um aussagekräftige Visualisierungen mit Kreisdiagrammen, \n Balkendiagrammen und gestapelten Balkendiagrammen anzuzeigen. ","\n"," ","\n","Beachten Sie die drei verschiedenen Anwendungsfälle und Szenarien:","\n","\n\t","\n\t","\n\t","\n\t","\n\t","\n\t\t","Anwendungsfall","\n\t\t","Szenario","\n\t\t","Beschreibung","\n\t\t","Screenshot","\n\t","\n\t","\n\t\t","Fall 1","\n\t\t","Produkt wird ausgewählt und nach einem \n\t\t Attribut gruppiert. ","\n\t\t"," ","\n\t\t"," ","\n\t\t","Die Verteilung der Attributwerte für den \n\t\t gewählten Zeitraum ist in einem Kreisdiagramm dargestellt.","\n\t\t"," ","\n\t\t","Ausgewählte Boardlet-Filter (mit Beispiel):","\n\t\t","\n\t\t\t","(1)"," \n\t\t\t Report-Bereich (nur einer: RA1)","\n\t\t\t","(2)"," \n\t\t\t Produkte (nur eins: Kurbelwelle)","\n\t\t\t","(3)"," \n\t\t\t Anzuzeigende Attribute (nur eins: Color)","\n\t\t","\n\t\t","Kreisdiagramm \n\t\t basierend auf gruppierten Attributen","\n\t\t"," ","\n\t\t","Durch die gewählten Boardlet-Filter wird das \n\t\t Kreisdiagramm im Boardlet Produktdatenbericht wie folgt angezeigt:","\n\t\t"," ","\n\t\t"," ","\n\t","\n\t","\n\t\t","Fall 2","\n\t\t","Das Produkt wird ausgewählt und nach einem \n\t\t Intervalltyp gruppiert. Gleichzeitig wird ein Attribut","\n\t\t","ausgewählt. ","\n\t\t"," ","\n\t\t"," ","\n\t\t"," ","\n\t\t"," ","\n\t\t","Die Verteilung der Attributwerte für jedes \n\t\t Intervall wird in einem gestapelten Balkendiagramm dargestellt.","\n\t\t"," ","\n\t\t","Ausgewählte Boardlet-Filter (mit Beispiel): \n\t\t ","\n\t\t"," ","\n\t\t","\n\t\t\t","(1)"," \n\t\t\t Report-Bereich (nur einer: RA1)","\n\t\t\t","(2)"," \n\t\t\t Produkte (nur eins: Kurbelwelle)","\n\t\t\t","(3)"," \n\t\t\t Anzuzeigende Attribute (nur eins: Color)","\n\t\t\t","(4)"," \n\t\t\t Gruppieren nach Intervalltyp","\n\t\t\t(nur einer: Schicht)","\n\t\t","\n\t\t"," ","\n\t\t","Balkendiagramm \n\t\t mit Balken auf Basis von Schichten","\n\t\t"," ","\n\t\t","Durch die gewählten Boardlet-Filter wird das \n\t\t Balkendiagramm im Boardlet Produktdatenbericht wie folgt angezeigt:","\n\t\t"," ","\n\t\t"," ","\n\t","\n\t","\n\t\t","Fall 3","\n\t\t","Das Produkt wird ausgewählt und nach einem \n\t\t Intervalltyp gruppiert. Gleichzeitig wird es gruppiert","\n\t\t","nach einem Attribut gruppiert. ","\n\t\t"," ","\n\t\t"," ","\n\t\t","Die Verteilung der Attributwerte für jedes \n\t\t Intervall und gruppierte Attribut ist in einem gestapelten Balkendiagramm \n\t\t zu sehen. Es ist möglich, zwischen Zahlen und Prozentsätzen umzuschalten. \n\t\t ","\n\t\t"," ","\n\t\t","Wenn der Benutzer die Daten nicht gemäß den \n\t\t oben beschriebenen Fällen auswählt, wird das Diagramm nicht angezeigt \n\t\t werden. ","\n\t\t"," ","\n\t\t","Wenn der Benutzer die Daten nicht gemäß den \n\t\t oben beschriebenen Fällen auswählt, wird das Diagramm nicht angezeigt \n\t\t werden. Es wird ein kurzer Hinweis angezeigt, dass die Datenauswahl \n\t\t nicht für die Anzeige eines Diagramms geeignet ist.","\n\t\t"," ","\n\t\t","Ausgewählte Boardlet-Filter (mit Beispiel):","\n\t\t"," ","\n\t\t","\n\t\t\t","(1)"," \n\t\t\t Report-Bereich (nur einer: RA1)","\n\t\t\t","(2)"," \n\t\t\t Produkte (nur eins: Kurbelwelle)","\n\t\t\t","(3)"," \n\t\t\t Anzuzeigende Attribute (nur eins: Color)","\n\t\t\t","(4)"," \n\t\t\t Gruppieren nach Intervalltyp","\n\t\t\t(nur einer: Schicht)","\n\t\t\t","(5)"," \n\t\t\t Gruppieren nach Attributen: (muss eines der beiden ausgewählten \n\t\t\t Attribute sein, um angezeigt zu werden)","\n\t\t","\n\t\t","Gestapeltes \n\t\t Balkendiagramm basierend auf einem gruppierten Attribut für Schichten","\n\t\t"," ","\n\t\t","Durch die gewählten Boardlet-Filter wird das \n\t\t gestapelte Balkendiagramm im Boardlet Produktdatenbericht wie \n\t\t folgt angezeigt:","\n\t\t"," ","\n\t\t"," ","\n\t","\n","\n"," ","\n",":","\n","Die Datenaggregation erstellt die komplette Datenquelle \n für den Produktdatenreport und das Produktdatendiagramm.","\n","Die Datenaggregation muss korrekt eingerichtet sein, \n andernfalls werden im Boardlet Produktdatendiagramm keine Daten angezeigt. \n ","\n"," ","\n","Beachten Sie hierzu die ","Konfiguration \n der Aggregierung für Produktdatenreport und Produktdatendiagramm",", \n um mehr Informationen für die Konfiguration für die Boardlets Produktdatenreport \n und ","Produktdatendiagramm"," zu erhalten.","\n"],["\n","\n\t","\n\t","\n\t","\n\t\t","Parameter","\n\t\t","Parametertyp","\n\t","\n\t","\n\t\t","timeFrame","\n\t\t","TimeFrame","\n\t","\n\t","\n\t\t","productionArea","\n\t\t","NumberArray","\n\t","\n\t","\n\t\t","products","\n\t\t","NumberArray","\n\t","\n\t","\n\t\t","attributesToShow","\n\t\t","NumberArray","\n\t","\n\t","\n\t\t","groupByIntervalType","\n\t\t","NumberArray","\n\t","\n\t","\n\t\t","groupByAttributes","\n\t\t","NumberArray","\n\t","\n\t","\n\t\t","usePercentages","\n\t\t","Boolean","\n\t","\n","\n\n\n"]],"2":[["Produktdatendiagramm"]],"5":[["Verfügbare \n Boardlet-Parameter"]],"id":"84"})