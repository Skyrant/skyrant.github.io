rh._.exports({"0":[["Kennwert Verfügbarkeit nach VDI 3581"]],"1":[["Verfügbarkeit,VDI 3581,VDI Formel,Kennwert Verfügbarkeit nach VDI 3581"]],"2":[["\n"],["\n","Mit Hilfe dieser zusätzlichen \n erweiterten Eigenschaften eines Fertigungsknotens ist es möglich,"," \n ","zusätzliche KPI-Werte (Verfügbarkeiten) \n zu berechnen.","\n","Dabei werden KPI-Werte \n vom unterlagerten Knoten miteinander verknüpft. In einem Textfeld wird \n eine Formel zur Berechnung des neuen KPI-Wertes definiert."," ","Die Verfügbarkeit nach VDI 3581 ist nur \n eine mögliche Anwendung dieser erweiterten Eigenschaft.","\n","Beschränkung: Es können \n nur KPI-Werte von unterlagerten Knoten verwendet werden. Außerdem müssen \n die untergeordneten Knoten demselben Schichtmodell zugeordnet sein wie \n der zu berechnende Knoten.","\n","Verkettung von Einzelverfügbarkeiten \n (unterlagerter Knoten) in serieller und paralleler Struktur. Komplexe \n Systeme stellen eine Verknüpfung dieser Strukturen dar (sowohl seriell \n wie auch parallel, siehe Beispiele in VDI 3581).","\n","Es gibt 2 Arten der \n Berechnung:","\n","Konventionelle \n Methode","\n","Auswertung mit \n Gewichtungsfaktor","\n"," ","\n","Ausgeführt \n wird die Berechnung vom zyklischen AE-Job \"CalcOfflineKPI\".","\n",":","\n","In den XML-Parametern \n des AE-Jobs muss der Parameter"," \"SortShiftsByNodeLevel\" \n auf 1 gesetzt werden, damit die Berechnung in der richtigen Reihenfolge \n erfolgt.","\n"," ","\n","Beschreibung","\n","Benutzbar \n sind prinzipiell alle KPIs, die offline berechnet werden. Sinnvoll sind \n jedoch nur solche, die Verfügbarkeiten darstellen; u.a.:","\n","Technische Verfügbarkeit, \n Technische Störzeit, Nettobetriebszeit, Verfügbarkeit nach VDI3581. Verfügbar \n sind alle KPI-Werte, die von den unterlagerten Knoten berechnet sind.","\n","Die Berechnungsformel \n wird in Form von SQL in das Textfeld eingetragen, ähnlich wie:","\n","\"kpi_of_subnode(%SHIFT%,910,15)*kpi_of_subnode(%SHIFT%,900,4)....\"","\n","wobei der Platzhalter \n für %SHIFT% von der Berechnungsprozedur durch die ID der Schicht ersetzt \n wird, 900 die ID des zu verwendenden Knotens ist und 4 der KPI-Typ.","\n"," ","\n","Beispiele zur Verfügbarkeitsberechnung","\n","Einzelverfügbarkeit \n (entspricht techn./org./syst. Verfügbarkeit):","\n","\n","Verfügbarkeit Serielle Struktur (3 Teilelemente):","\n","\n","\n","Verfügbarkeit Parallele \n Struktur"," ","(hier rechnet man mit \n Nichtverfügbarkeiten):","\nNichtverfügbarkeit:","\n","\n","\n","Verfügbarkeit einer parallelen Struktur (3 Teilelemente):","\n","\n","\n","Auswertung mit Gewichtungsfaktor (kommt zur Anwendung \n von parallel geschalteten Elementen):","\n","\n","     Einschaltzeit \n entspricht Nettobetriebsdauer","\n","     Ausfallzeit \n entspricht z. Bsp. Stördauer technisch","\n","     Gewichtungsfaktor \n der Teilsysteme zwischen 0 und 1.","\n","            Bei \n seriellen Strukturen 1.","\n","            Für \n die einzelnen Teilsysteme einer parallelen Struktur beträgt die Summe \n der   einzelnen Faktoren 1.","\n"," ","\n","Detail:","\n","Im LC2 wird einem Knoten der Fertigungsstruktur über \n das Feld \"Formel z. Verfügbarkeitsb. nach VDI 3581\" eine Formel \n zur Berechnung zugewiesen.","\n","Mit Hilfe eines Texteditors wird die Formel zur Berechnung \n angegeben.","\n","\n"," ","\n","In der Formel sind die Operationen +, -, *, /  und \n Klammerausdrücke erlaubt. Ebenso alle zulässigen ORACLE-SQL-Ausdrücke. \n Um die KPI-Werte unterlagerter Knoten zu verwenden, kommt die neue Funktion \n ","kpi_of_subnode","() zur Anwendung.","\n","Die Liste zeigt eine Auswahl der verfügbaren KPI-Typen. \n Grundsätzlich sind alle KPIs verwendbar, die offline berechnet werden \n und die Verfügbarkeiten darstellen:","\n"," ","\n","\n\t","\n\t\t","ID","\n\t\t","SHORT_NAME","\n\t\t","NAME_0","\n\t","\n\t","\n\t\t","1","\n\t\t","preal","\n\t\t","Ist-Stückzahl","\n\t","\n\t","\n\t\t","2","\n\t\t","ptarg","\n\t\t","Soll-Stückzahl","\n\t","\n\t","\n\t\t","3","\n\t\t","ctarg","\n\t\t","Soll-Taktzeit","\n\t","\n\t","\n\t\t","4","\n\t\t","wtb","\n\t\t","Arbeitszeit brutto","\n\t","\n\t","\n\t\t","5","\n\t\t","btp","\n\t\t","Geplante Pausen","\n\t","\n\t","\n\t\t","6","\n\t\t","bta","\n\t\t","Zusätzliche Pausen","\n\t","\n\t","\n\t\t","7","\n\t\t","bttpm","\n\t\t","TPM-Pausen","\n\t","\n\t","\n\t\t","8","\n\t\t","wtn","\n\t\t","Arbeitszeit netto","\n\t","\n\t","\n\t\t","9","\n\t\t","ftcon","\n\t\t","Verbindungs-Störzeit","\n\t","\n\t","\n\t\t","10","\n\t\t","fttot","\n\t\t","Gesamt-Stördauer","\n\t","\n\t","\n\t\t","11","\n\t\t","fttec","\n\t\t","Stördauer technisch","\n\t","\n\t","\n\t\t","12","\n\t\t","ftorg","\n\t\t","Stördauer organisatorisch","\n\t","\n\t","\n\t\t","13","\n\t\t","ftsys","\n\t\t","Stördauer systembedingt","\n\t","\n\t","\n\t\t","14","\n\t\t","fctot","\n\t\t","Anzahl Stillstände gesamt","\n\t","\n\t","\n\t\t","15","\n\t\t","fctec","\n\t\t","Anzahl technischer Stillstände","\n\t","\n\t","\n\t\t","16","\n\t\t","fcorg","\n\t\t","Anzahl organisatorischer Stillstände","\n\t","\n\t","\n\t\t","17","\n\t\t","fcsys","\n\t\t","Anzahl systembedingter Stillstände","\n\t","\n\t","\n\t\t","18","\n\t\t","mttr","\n\t\t","Mean Time To Repair (MTBR)","\n\t","\n\t","\n\t\t","19","\n\t\t","mtbf","\n\t\t","Mean Time Between Failure (MTBF)","\n\t","\n\t","\n\t\t","20","\n\t\t","eetec","\n\t\t","Technische Verfügbarkeit","\n\t","\n\t","\n\t\t","21","\n\t\t","eeorg","\n\t\t","Organisatorische Verfügbarkeit","\n\t","\n\t","\n\t\t","22","\n\t\t","eesys","\n\t\t","Systembedingte Verfügbarkeit","\n\t","\n\t","\n\t\t","23","\n\t\t","oeeft","\n\t\t","Gesamt-Verfügbarkeit störungsbasiert","\n\t","\n\t","\n\t\t","24","\n\t\t","oeept","\n\t\t","Gesamt-Verfügbarkeit stückzahlbasiert","\n\t","\n\t","\n\t\t","25","\n\t\t","oeect","\n\t\t","Gesamt-Verfügbarkeit taktzeitbasiert","\n\t","\n\t","\n\t\t","26","\n\t\t","avjs / vdi","\n\t\t","Verfügbarkeit nach VDI 3581","\n\t","\n","\n"," ","\n","Um die KPI-Werte eines unterlagerten Knotens verwenden \n zu können, müssen diese in den betreffenden Knoten angewählt sein.","\n","Sind einem unterlagerten Knoten keine Meldungen zugeordnet \n und es wird nur eine Verfügbarkeit vom Typ 26 errechnet, kann über den \n Umweg der Schichtnettozeit und diesem KPI-Wert 26 auch eine technische \n Ausfallszeit berechnet werden. Wird bei Gewichtungsfaktoren benötigt.","\n","Beispiel einer rein seriellen Struktur:","\n","\n","Formel:","\n","kpi_of_subnode","(%SHIFT%,1,20)/100*","\n","kpi_of_subnode","(%SHIFT%,2,20)/100*","\n","kpi_of_subnode","(%SHIFT%,3,20)/100","\n","Der Faktor /100 muss angegeben werden, da der KPI-Typ \n 20 (techn. Verfügbarkeit) in der Form 95% in der Datenbank abgelegt ist. \n Zur Berechnung muss er jedoch auf den Wert 0,95 gewandelt werden.","\n","Beispiel einer rein parallelen Struktur:","\n","\n","Konventionelle Art (ohne Gewichtung):","\n","1-(1-","kpi_of_subnode","(%SHIFT%,1,20)/100)*","\n","(1-","kpi_of_subnode","(%SHIFT%,2,20)/100)","\n","Formel mit Gewichtungsfaktoren:","\n","1-1/","kpi_of_subnode","(%SHIFT%,1,8)","\n","(","kpi_of_subnode","(%SHIFT%,1,11)/2+","\n","kpi_of_subnode","(%SHIFT%,2,11)/2)","\n","Hier wird jeweils ein Gewichtungsfaktor von 0,5 verwendet.","\n","Beispiel einer gemischten (seriellen und parallelen \n Struktur):","\n","\n","Formel mit Gewichtungsfaktoren:","\n","1-1/","kpi_of_subnode","(%SHIFT%,1,8)","\n","(","kpi_of_subnode","(%SHIFT%,1,11)+","\n","kpi_of_subnode","(%SHIFT%,2,11)/2+","\n","kpi_of_subnode","(%SHIFT%,3,11)/2+","\n","kpi_of_subnode","(%SHIFT%,4,11))","\n","Hier wird für die beiden parallelen Teilsysteme jeweils \n ein Gewichtungsfaktor von 0,5 verwendet.","\n\n\n"]],"5":[["Kennwert Verfügbarkeit nach VDI 3581"]],"id":"94"})