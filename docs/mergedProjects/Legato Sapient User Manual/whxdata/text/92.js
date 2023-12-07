rh._.exports({"0":[["PU Qualitätsüberwachung"]],"1":[["\n"],["\n"],["\n","Das Boardlet ","PU Qualitätsüberwachung"," \n zeigt für alle Schichten des selektierten Knotens für einen Zeitraum von \n maximal einer Woche die gebuchten Q-Zustände zu einem Arbeitsplan an. \n Über die Einstellungen des Boardlets kann festgelegt werden, welche Q-Zustände \n rot (Fehler) oder orange (Warnung) angezeigt werden sollen. Wurde kein \n Q-Zustand erfasst, wird der Eintrag für die Schicht schwarz angezeigt, \n wurde ein Q-Zustand erfasst, der nicht als Fehler oder Warnung definiert \n ist, wird der Eintrag grün angezeigt.","\n","\n","So lässt sich auf einen Blick erkennen, in welcher \n Schicht es bei welchem Arbeitsgang zu Qualitätsproblemen kam. Hat man \n im Dashboard zusätzlich das ","Produktionseinheiten-Boardlet"," \n eingefügt, so filtert ein Klick auf einen Eintrag auf die betroffene PU \n und färbt diese rot ein.","\n"],["\n","\n","Die häufigsten Einstellungen auf den Reitern ","Einstellungen",", ","Layout"," \n und ","Filter"," sind unter ","Boardlet-Einstellungen"," \n beschrieben:","\n","\n\t","Reiter \n\t Einstellungen","\n\t","Reiter \n\t Layout","\n\t","Reiter \n\t Filter","\n","\n\n\n","\n","Für das Boardlet ","PU Qualitätsüberwachung"," \n stehen folgende weitere Einstellungen zur Verfügung.","\n"],["\n","Nur Arbeitspläne von letzter Woche:","\n","Ist dieser Schieberegler aktiv, werden im Reiter \n Filter nur die Arbeitspläne in der Dropdown-Liste angezeigt, die letzte \n Woche kativ waren.","\n","Fehler:","\n","Aus der Dropdown-Liste können ein oder mehrere \n Q-Zustände selektiert werden, die als Fehler (rot) visualisiert werden \n sollen.","\n","Warnung:","\n","Aus der Dropdown-Liste können ein oder mehrere \n Q-Zustände selektiert werden, die als Warnung (orange) visualisiert werden \n sollen.","\n","Zeitschema:","\n","Ist dieser Schieberegler aktiv, wird nicht automatisch \n das Zeitschema des selektierten Knotens verwendet, sondern kann individuell \n im Reiter Filter ausgewählt werden.","\n","Maximale Tage zur Anzeige:","\n","Angabe, wieviele Tage unabhängig vom gewählten \n Zeitfilter des Dashboards maximal angezeigt werden sollen.","\n"],["\n","Arbeitsplan auswählen:","\n","Aus der Dropdown-Liste kann ein Arbeitsplan \n ausgewählt werden, für den die Auswertung erfolgen soll. Je nach Einstellung \n werden hier alle Arbeitspläne angezeigt oder nur solche, die letzte Woche \n aktiv waren.","\n","Zeitschema:","\n","Ist die Einstellung \"Zeitschema\" = \n true, kann das gewünschte Zeitschema hier ausgewählt werden. Andernfalls \n wird das Zeitschema des selektierten Knotens verwendet.","\n"],["\n","Für den selektierten Knoten müssen Schichten parametriert \n und über den Schichtkalender geplant sein.","\n","Außerdem wird ein Arbeitsplan mit Arbeitsgängen benötigt. \n Diese Daten können im ","LC2"," unter ","Produktionsmanagement"," \n "," ","Produktionsplanung"," "," ","Arbeitspläne"," "," ","Arbeitsgänge"," \n parametriert werden.","\n","Schließlich muss für eine bestehende PU ein Q-Zustand \n mit Bezug zu einem Arbeitsgang gebucht werden. Dies erfolgt über die Prozedur \n \"setQStateId\".","\n"],["\n","\n\t","\n\t","\n\t","\n\t\t","Parameter","\n\t\t","Parametertyp","\n\t","\n\t","\n\t\t","timeFrame","\n\t\t","TimeFrame","\n\t","\n\t","\n\t\t","qStateMandatory","\n\t\t","Boolean","\n\t","\n\t","\n\t\t","displayBop","\n\t\t","NumberArray","\n\t","\n\t","\n\t\t","redColor","\n\t\t","NumberArray","\n\t","\n\t","\n\t\t","orangeColor","\n\t\t","NumberArray","\n\t","\n\t","\n\t\t","selectedQualitySupervisorBoardletColorArray","\n\t\t","NumberArray","\n\t","\n\t","\n\t\t","nodeList","\n\t\t","NumberArray","\n\t","\n\t","\n\t\t","selectedQualitySupervisorBoardletPUs","\n\t\t","NumberArray","\n\t","\n\t","\n\t\t","selectedQualitySupervisorBoardletColor","\n\t\t","String","\n\t","\n\t","\n\t\t","daysToShow","\n\t\t","Integer","\n\t","\n","\n"," ","\n\n\n"]],"5":[["Allgemein"],["Einstellungen"],["Benötigte \n Parametrierung im LC2"],["Verfügbare \n Boardlet-Parameter"]],"6":[["PU Qualitätsüberwachung"]],"8":[["Reiter Einstellungen"],["Reiter Filter"]],"id":"92"})