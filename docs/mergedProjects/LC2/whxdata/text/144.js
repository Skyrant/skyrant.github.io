rh._.exports({"0":[["Schaltbefehl Produktionsstart und -ende"]],"2":[["\n"],["\n","Im LC2 gibt es eine zusätzliche Spalte für den Produktionsstart und \n -ende (Schichtbeginn- und Schichtende) in der Tabelle T_COMMANDS:","\n","Anwendungsstruktur"," -> ","Fertigungsstruktur"," -> ","ausgewähltem \n Knoten"," -> ","Schaltbefehle"," \n ","\n","(","Application Structure Settings"," \n -> ","Logical"," ","Structure"," \n -> ","Switch"," ","Commands",")","\n","\n"," ","\n","\n","Ist für einen Schaltbefehl kein Wert festgelegt, \n wird der Standardwert für die Mindestdauer der unproduktiven Zeit verwendet, \n der über Systemparameter (-5 und -6) festgelegt wurde.","\n"," ","\n","Zusammenfassung:","\n","\n\t","Es gibt ein zusätzliches Feld im Bereich Schaltbefehle zur Angabe \n\t des minimalen Produktionsabstands (in Minuten) für Schaltbefehle des \n\t Typs","\n\tProduktionsbeginn (Systemparameter: -5)","\n\tProduktionsende (Systemparameter: -6)","\n\t","Die minimale produktionsfreie Zeit ist die in Minuten angegebene \n\t Zeit, die die minimale Dauer des Abstands zwischen den Produktionsschichten \n\t definiert, um sie als Produktionsstopp zu betrachten. Zum Beispiel \n\t dauert das Herunterfahren einer Maschine 10 Minuten, dann lohnt es \n\t sich nicht, diese zu stoppen, wenn eine Produktionslücke von 5 Minuten \n\t besteht.","\n","\n\n\n"]],"7":[["Schaltbefehl Produktionsstart und -ende"]],"id":"144"})