rh._.exports({"0":[["SHIFT_KPI"]],"1":[["\n"],["\n"],["\n","Führt die Berechnung der Standard-KPIs für abgeschlossene \n Schichten durch. Der Job wird nur benötigt, falls solche KPIs gewünscht \n sind.","\n","Log-Ausgaben dieses Jobs erfolgen in das Log-File der \n jeweiligen SE-Instanz unter dem Namen 'SeJob-SHIFT_KPI'. Um die Ausführlichkeit \n der Log-Ausgaben getrennt von der anderer Jobs einzustellen, ist eine \n Zeile mit Inhalt \"logger.de.gefasoft.legato.sapieng.jobs.kpi.CalcShiftKPI \n = <loglevel>\" in die Logging-Konfiguration einzutragen.","\n"],["\n","\n\t","\n\t","\n\t","\n\t\t","Symbol:","\n\t\t","SHIFT_KPI","\n\t","\n\t","\n\t\t","Name:","\n\t\t","ShiftKPI","\n\t","\n\t","\n\t\t","Modul:","\n\t\t","n/a","\n\t","\n\t","\n\t\t","SE-Instanz:","\n\t\t","Nummer \n\t\t der Sapient Engine Instanz. ","\n\t","\n\t","\n\t\t","Scheduler:","\n\t\t","main","\n\t","\n\t","\n\t\t","Funktions-Pfad:","\n\t\t","jobs/kpi/CalcShiftKPI/execute","\n\t","\n\t","\n\t\t","Parameter \n\t\t (JSON):","\n\t\t","{","\n\t\t","\"threads\": 1,","\n\t\t","\"queue\": 10,","\n\t\t","\"ShiftsPartition\": \"\",","\n\t\t","\"SortShiftsByNodeLevel\": false","\n\t\t","}","\n\t","\n\t","\n\t\t","Timeout \n\t\t (s) (optional):","\n\t\t","n/a","\n\t","\n","\n"," ","\n"],["\n","Die Parameter werden an die Haupt-Task des Scripts \n weitergegeben und beeinflussen deren Arbeitsweise.","\n","threads","\n","Definiert die Anzahl der parallel zu berechnenden Schichten. \n Es werden Threads von der ausführenden SE-Task (\"Jobs\") verwendet. \n Daher ist darauf zu achten, dass der Task ausreichend Threads und Datenbankverbindungen \n zur Verfügung stehen.","\n","queue","\n","Definiert die maximale Anzahl der noch unbearbeiteten \n Schichten, die in den Hauptspeicher eingelesen werden soll. Dadurch wird \n der RAM-Bedarf des Jobs beschränkt. Wird diese Grenze erreicht, wird die \n Bearbeitung der noch nicht eingelesenen Schichten auf den nächsten Lauf \n des KPI-Jobs zurückgestellt. Sinnvoll dürften etwa 1000 bis 10000 Einträge \n pro Thread sein.","\n","ShiftsPartition","\n","Es können mehrere Instanzen des Sapient Engine-Jobs \n für die KPI-Berechnung parallel gestartet werden. Jeder Job bearbeitet \n dabei nur Schichten mit bestimmten IDs. In den Konfigurationsdaten (SE_JOBS.PARAMS) \n wird dafür im Parameter ShiftsPartition angegeben, welche Schichten der \n jeweilige Job bearbeiten soll. Der Wert dieses Parameters hat die Form \n \"m of n\", wobei n die gesamte Anzahl der KPI-Jobs angibt und \n m die Nummer dieses speziellen Jobs. Beispiel: Sollen zwei Jobs KPIs berechnen, \n bearbeitet einer Schichten mit gerader und einer solche mit ungerader \n ID. Einer der Jobs muss dazu mit \"<paramname=\"<ShiftsPartition\">1 \n of 2</param>\", der andere mit \"<paramname=\"ShiftsPartition\">2 \n of 2</param>\" konfiguriert werden.","\n","SortShiftsByNodeLevel","\n","Definiert, ob Schichten pro Hierarchie-Ebene der Fertigungsknoten sortiert berechnet werden \n sollen (so, dass die KPIs übergeordneter Knoten erst berechnet werden, \n wenn die aller ihrer untergeordneten Knoten fertig berechnet sind). Der \n Parameter sollte genau dann eingeschaltet werden (Wert = true), wenn KPIs \n verwendet werden, die diese Reihenfolge voraussetzen. Im Standard ist \n dies nur der KPI AVJS (\"Verfügbarkeit verketteter Systeme). Ist der \n Parameter eingeschaltet (Wert = 1), werden in jedem Lauf des KPI-Jobs \n nur Schichten von Knoten einer Hierarchie-Ebene berechnet. Die komplette \n Berechnung einer Schicht benötigt entsprechend mehr Durchläufe des Jobs \n und dauert folglich länger.","\n"],["\n","Standard-Trigger: zyklisch (-1)","\n","Standard-Intervall: {\"Interval\": \"2m\"}","\n\n\n"]],"2":[["SHIFT_KPI"]],"5":[["KPI"]],"6":[["Beschreibung"],["Parametrierung"],["Bedeutung der Parameter"],["Trigger"]],"id":"60"})