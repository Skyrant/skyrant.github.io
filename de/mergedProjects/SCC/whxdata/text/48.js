rh._.exports({"0":[["SQL-Funktionen mit Feldern"]],"1":[["\n"],["\n"],["\n","\n","Deklaration: string AsString","\n","Liefert den Inhalt des Feldes als String","\n","Beispiel",":","\n","bool     ok","\n","long     rows","\n","string   starttime, value","\n","ok        := \n Database.Legato.P_OUT_VALUES.Select('', 2)","\n","ok        := \n Database.Legato.P_OUT_VALUES.First","\n","starttime := Database.Legato.P_OUT_VALUES.TIME_STARTED.AsString","\n","value     := Database.Legato.P_OUT_VALUES.VALUE_NUM.AsString","\n","debug(starttime + ': ' + value)","\n"," ","\n\n\n"]],"2":[["SQL-Funktionen mit Feldern"]],"4":[["AsString"]],"id":"48"})