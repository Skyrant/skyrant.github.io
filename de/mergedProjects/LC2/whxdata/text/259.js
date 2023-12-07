rh._.exports({"0":[["SE-Jobs"]],"2":[["\n"],["\n","System-Administration | SE-Jobs | SE-Jobs","\n"],["\n","Die Sapient Engine (SE) führt in einem wählbaren Zeitraster \n Systemfunktionen aus. Diese Funktionen sind in Form eines Java-Skripts \n (Java) implementiert.","\n","Die genaue Beschreibung der einzelnen Jobs kann dem \n separaten Bereich \"Prozeduren\" entnommen werden.","\n","Je \n nach Systemauslastung kann die Sapient Engine in mehreren Instanzen ausgeführt \n werden. SE-Instanzen müssen in P_MODULES eingetragen werden. Dabei ist \n der Modul-Typ auf \"Sapient Engine\" zu setzen",". Die Modul-ID entspricht der Instanznummer der SE."," \n Sollen Jobs der Instanz aus der WebApplikation heraus getriggert werden \n können, muss die Adresse angegeben werden.","\n"],["\n"," ","\n","\n\t","\n\t\t","Feld","\n\t\t","Beschreibung","\n\t","\n\t","\n\t\t","Symbol","\n\t\t","Eindeutiges Symbol des Jobs.","\n\t","\n\t","\n\t\t","Name","\n\t\t","Name.","\n\t","\n\t","\n\t\t","Beschreibung (optional)","\n\t\t","Beschreibung.","\n\t","\n\t","\n\t\t","Modul","\n\t\t","FK - Verweis auf ein Modul, für das \n\t\t dieser Job relevant ist (z.B. Meldesytem, Messwerte, etc.)","\n\t","\n\t","\n\t\t","SE Instanz","\n\t\t","FK - Verweis auf das Modul der Sapient \n\t\t Engine Instanz.","\n\t","\n\t","\n\t\t","Funktions-Pfad","\n\t\t","Pfad / URL der aufzurufenden Funktion \n\t\t (Skript oder Java).","\n\t","\n\t","\n\t\t","Parameter","\n\t\t","JSON String mit den Parametern des \n\t\t Jobs.","\n\t","\n\t","\n\t\t","Timeout (s)","\n\t\t","Timeout für die Ausführung des Jobs \n\t\t (in Sekunden).","\n\t","\n\t","\n\t\t","Aktiv?","\n\t\t","Checkbox. Gibt an, ob dieser Job \n\t\t aktiv ist (1) oder nicht (0). Nicht aktive Jobs werden nicht ausgeführt.","\n\t","\n\t\n\t\n\t\n","\n"," ","\n\n\n"]],"3":[["SE-Jobs"],["Funktion"],["Feldbeschreibung"]],"id":"259"})