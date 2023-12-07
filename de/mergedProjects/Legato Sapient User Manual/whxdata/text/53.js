rh._.exports({"0":[["Monitoring - Knotenstatus"]],"1":[["\n"],["\n"],["\n","Das Boardlet ","Knotenstatus"," \n zeigt zu einem selektierten Knoten den Status an. Der Status wird über \n die Bits eines vom Gateway gesendeten Werts auf ein Symbol gemappt. Das \n entsprechende Symbol für das erste gefundene Bit wird dann angezeigt.","\n","\n","Die zur Verfügung stehenden Symbole sind im jeweiligen \n Theme definiert und in der API-Doku beschrieben. Momentan sind folgende \n Symbole parametriert:","\n","\n\t","\n\t","\n\t","\n\t\t","\n\t\t","icon-check (default)","\n\t","\n\t","\n\t\t","\n\t\t","icon-stop-hand","\n\t","\n\t","\n\t\t","\n\t\t","icon-robot","\n\t","\n\t","\n\t\t","\n\t\t","icon-driller","\n\t","\n\t","\n\t\t","\n\t\t","icon-tool","\n\t","\n","\n"," ","\n","Alle \n verfügbaren Symbole (Icons) sind hier zu finden:","\n","[Adresse der Sapient Engine]/app/assets/icons/demo.html","\n"," ","\n","\n","Es kann als eigenständiges Boardlet angezeigt werden \n oder als Detail-Info ins Layout-Boardlet eingebettet werden.","\n\n\n","\n"],["\n","\n","Die häufigsten Einstellungen auf den Reitern ","Einstellungen",", ","Layout"," \n und ","Filter"," sind unter ","Boardlet-Einstellungen"," \n beschrieben:","\n","\n\t","Reiter \n\t Einstellungen","\n\t","Reiter \n\t Layout","\n\t","Reiter \n\t Filter","\n","\n\n\n","\n","Für das Boardlet ","Knotenstatus"," \n stehen außerdem folgende Einstellungen zur Verfügung. ","\n"],["\n","Knotenname anzeigen:","\n","Über diesen Schieberegler wird festgelegt, ob \n der Knotenname neben dem Symbol angezeigt werden soll oder nicht.","\n","Dargestellter Text:","\n","Hier kann ein beliebiger Text eingegeben werden, \n der neben dem Symbol und ggf. neben dem Knotennamen angezeigt wird.","\n","Verwendete Icons:","\n","Komma-separierte Liste der verwendeten Symbole. \n Diese müssen im Theme definiert sein. Welches Symbol angezeigt wird, hängt \n davon ab, welches Bit vom Gateway gesetzt wird. ","\n","Beispiele",": ","\n","\n\t","Ist das 1. Bit gesetzt (z.B. 01000001 - \n\t Bits werden von rechts nach links gelesen), wird das 1. Symbol angezeigt \n\t (im Beispiel also icon-stop-hand).","\n\t","Ist das 2. Bit gesetzt (z.B. 01000010), \n\t wird das 2. Symbol angezeigt usw. ","\n","\n","Ausschlaggebend ist das erste gefundene Bit.","\n","Standard-Symbol:","\n","Symbol, das angezeigt wird, wenn kein Bit gesetzt \n ist.","\n","Alarmierungsmodus:","\n","Dropdown-Liste zur Auswahl des Alarm-Modus. \n Legt fest, ob für Warnungen und / oder Alarme nur der Rahmen eingefärbt \n wird (border) oder der gesamte Hintergrund (background). Die jeweiligen \n Farben für Warn-Grenzen, Alarm-Grenzen und IO-Zustand werden im Theme \n definiert. Im Beispiel ist IO-Status grün, Warnung lila, Alarm rot.","\n","Alarmierungsebenen:","\n","Dropdown-Liste zur Auswahl der Alarmstufen (d.h., \n wann ein Farbumschlag erfolgen soll). Zur Auswahl stehen:","\n","\n\t","Warning and alert",": \n\t Ist das Alarm-Bit gesetzt, wird der Farbumschlag für die Alarmgrenze \n\t angezeigt, ist das Warn-Bit gesetzt, der Farbumschlag für die Warngrenze.","\n\t","Warning",": Ist \n\t das Warn-Bit gesetzt, wird der Farbumschlag für die Warngrenze angezeigt.","\n\t","Alert",": Ist das \n\t Alarm-Bit gesetzt, wird der Farbumschlag für die Alarmgrenze angezeigt.","\n\t","None",": Es wird \n\t nie ein Farbumschlag angezeigt.","\n","\n","Bitmuster Alarm:","\n","Angabe einer Zahl, welches Bit / welche Bits \n als Alarmgrenze angesehen werden sollen. Beispiel: 0 = keine Alarmgrenze; \n 1 = erstes Bit; 2 = zweites Bit; 11 = erstes, zweites und viertes Bit \n etc.","\n","Bitmuster Warnung:","\n","Angabe einer Zahl, welches Bit / welche Bits \n als Warngrenze angesehen werden sollen. 0 = keine Warngrenze; 1 = erstes \n Bit; 2 = zweites Bit; 11 = erstes, zweites und viertes Bit etc.","\n"],["\n","\n","Variablenarten:","\n","Filter auf Variablenarten. Für alle Variablen \n der hier definierten Variablenarten, die dem oben selektierten Knoten \n zugeordnet sind, werden die Werte im Diagramm angezeigt. Die Variablenarten \n können aus einer Dropdown-Liste ausgewählt werden. Leer = kein Filter, \n alle Variablenarten werden angezeigt.","\n\n\n","\n"],["\n","\n","Die Variablenarten werden im ","LC2"," \n unter ","Grundkonfiguration"," ","\n ","Allgemeine Anwendungen"," ","\n ","Variablenarten"," parametriert.","\n\n\n","\n","Diese IDs sind im Filter des Boardlets anzugeben, z.B. \n 2 = Iststückzahl, 3 = Sollstückzahl.","\n","\n","Die Variablen werden im ","LC2"," \n unter ","Anwendungsstruktur"," "," \n ","Datenaustausch"," "," [Modul] \n "," \n [Verbindung] "," ","Variablen"," \n gepflegt. Hier wird auch die Einheit festgelegt.","\n\n\n","\n","\n","Unter ","Anwendungsstruktur"," \n "," ","Fertigungsstruktur"," \n "," [Knoten] "," \n ","Variablenzuordnungen"," werden die Variablen dem \n Knoten zugeordnet, für den sie angezeigt werden sollen. Hier muss das \n Flag \"Anzeigen\" auf 1 gesetzt sein, damit die Variable angezeigt \n wird. Die Sortiernummer legt fest, in welcher Reihenfolge die Variablen \n angezeigt werden.","\n\n\n","\n"],["\n","\n\t","\n\t","\n\t","\n\t\t","Parameter","\n\t\t","Parametertyp","\n\t","\n\t","\n\t\t","showNode","\n\t\t","Boolean","\n\t","\n\t","\n\t\t","displayText","\n\t\t","String","\n\t","\n\t","\n\t\t","iconArray","\n\t\t","String","\n\t","\n\t","\n\t\t","defaultIcon","\n\t\t","String","\n\t","\n\t","\n\t\t","alertMode","\n\t\t","Enum","\n\t","\n\t","\n\t\t","alertLevels","\n\t\t","Enum","\n\t","\n\t","\n\t\t","alertBits","\n\t\t","Integer","\n\t","\n\t","\n\t\t","warningBits","\n\t\t","Integer","\n\t","\n\t","\n\t\t","valueTypes","\n\t\t","NumberArray","\n\t","\n","\n"," ","\n\n\n"]],"5":[["Allgemein"],["Einstellungen"],["Benötigte \n Parametrierung im LC2"],["Verfügbare \n Boardlet-Parameter"]],"6":[["Monitoring - Knotenstatus"]],"8":[["Reiter Layout"],["Reiter Filter"]],"id":"53"})