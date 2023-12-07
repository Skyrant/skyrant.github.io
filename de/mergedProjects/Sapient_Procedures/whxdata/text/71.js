rh._.exports({"0":[["REFRESH_SHIFT_TARGETS"]],"1":[["\n"],["\n"],["\n","Dieser Job dient zum Ausrollen der Sollwerte für Schichten. \n Im Detail macht der Job Folgendes:","\n","In einem ersten Schritt bestimmt der Job den Zeitraum, \n für den Sollwerte ausgerollt werden sollen (der Zeitraum beginnt mit dem \n Start des Jobs und dauert die Länge des Parameters \"leadtime\"). \n Er liest alle Zeilen aus p_out_values ein, die einen Zeitstempel innerhalb \n des Rollout-Zeitraums und einen Eintrag in der Spalte \"target_value_id\" \n haben (d.h., die Werte sind als Sollwerte konfiguriert).","\n","Für jeden dieser Werte bestimmt der Job den Ziel-Knoten. \n Dies entspricht dem Default-Knoten der Verbindung, zu der der Wert konfiguriert \n wurde. Für alle diese Ziel-Knoten sucht der Job dann nach Schichten (im \n Schichtarchiv), die im Rollout-Zeitraum beginnen (der Zeitraum beginnt \n mit dem Start des Jobs und dauert die Länge des Parameters \"leadtime\"). \n Nur Schichten mit derselben Definition (t_shifts) wie die Sollwertvorlage \n des geplanten Sollwertes werden berücksichtigt (d.h., Variablen mit einem \n anderen Schichtbeginn werden übersprungen). Dann legt der Job für jeden \n solchen Schichtbeginn und Sollwert neue Zeilen in p_out_values an.","\n","Für alle Sollwerte aus Vererbungsketten, die auf dem \n jeweiligen Sollwert basieren und Schichten haben (von ihrem jeweiligen \n Ziel-Knoten), die zur selben Zeit beginnen wie die des geplanten Sollwertes, \n werden ebenfalls Zeilen in p_out_values angelegt.","\n","Die neuen Zeilen in p_out_values werden dann mit den \n bestehenden verglichen und die Unterschiede werden in die Datenbank geschrieben.","\n","Der Job gibt die Anzahl der betroffenen Zeilen in p_out_values \n zurück (als Wert \"rows\").","\n"],["\n","\n\t","\n\t","\n\t","\n\t\t","Symbol:","\n\t\t","REFRESH_TARGET_VALUES","\n\t","\n\t","\n\t\t","Name:","\n\t\t","Schicht-Sollwerte \n\t\t ausrollen","\n\t","\n\t","\n\t\t","Modul:","\n\t\t","n/a","\n\t","\n\t","\n\t\t","SE-Instanz:","\n\t\t","Nummer \n\t\t der Sapient Engine Instanz. ","\n\t","\n\t","\n\t\t","Scheduler:","\n\t\t","main","\n\t","\n\t","\n\t\t","Funktions-Pfad:","\n\t\t","/de/gefasoft/sapient/sapieng/jobs/targetvals/TargetValues/refresh \n\t\t ","\n\t","\n\t","\n\t\t","Parameter \n\t\t (JSON):","\n\t\t","{\"leadtime\": \n\t\t \"1d 12h\"}","\n\t","\n\t","\n\t\t","Timeout \n\t\t (s) (optional):","\n\t\t","0","\n\t","\n","\n"," ","\n"],["\n","Standard-Trigger: Cron (-4)","\n","Standard-Parameter: ","\n","{   \"cron\": \"0 30 1 ? * *\",","\n","    \"crontype\": \"quartz\",","\n","    \"timezone\": \"Europe/Berlin\"","\n","}","\n","= Täglich um 01:30.","\n\n\n"]],"2":[["REFRESH_SHIFT_TARGETS"]],"5":[["P_OUT_VALUES,Sollwert"]],"6":[["Beschreibung"],["Parametrierung"],["Trigger"]],"id":"71"})