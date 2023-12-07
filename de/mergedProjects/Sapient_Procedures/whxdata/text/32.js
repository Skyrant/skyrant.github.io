rh._.exports({"0":[["DbCon"]],"1":[["\n"],["\n","Objekte dieses Typs bieten jeweils Zugriff auf eine \n Datenbankverbindung aus einem bestimmten Pool. Sie werden benötigt, um \n Objekte vom Typ ","DbQuery"," anlegen zu können.","\n","DbCon(context, dbconnectionname, readwrite, shared)","\n","Holt eine Verbindung aus dem Verbindungs-Pool namens \n \"dbconnectionname\" (üblicherweise \"legato\") des angegebenen \n SE-Contexts (Task). ","\n","Readwrite(opt): Wenn der erste Parameter ein Sapient \n Context-Objekt war, legt dieser Parameter fest, ob eine \"nur lesen\" \n oder eine \"lesen/schreiben\" Verbindung zugewiesen wird. Falls \n \"wahr-ähnlich\" im Sinne von JavaScript wird eine \"lesen/schreiben\" \n Verbindung zugewiesen. Andernfalls vergibt die Verbindung nur lesenden \n Zugriff auf die Datenbank.","\n","Shared(opt): Wenn <code>truish</code> wird \n eine geteilte Verbindung vom Sapient Context ausgeliehen. Wenn <code>falsy</code> \n wird eine nicht-geteilte Verbindung ausgeliehen.","\n"," ","\n","DbCon hat nur eine ausführungsrelevante Eigenschaft: \n ","autocommit"," (Boolean, readwrite).","\n","Um die Verarbeitung von Feld- und Parametertypen von \n SQL-Abfragen zu erleichtern, enthält DbCon noch eine Reihe konstanter \n (readonly) Eigenschaften. Diese können auch \"static\" (also ohne \n Objekt) benutzt werden (z.B. \"DbConDOUBLE\" statt \"var.DOUBLE\"):","\n","DOUBLE","\n","FLOAT","\n","NUMERIC","\n","REAL","\n","BIGINT","\n","INTEGER","\n","SMALLINT","\n","TINYINT","\n","BOOLEAN","\n","BIT","\n","DATE","\n","TIME","\n","TIMESTAMP","\n","TIMESTAMPLTZ","\n","TIMESTAMPNS","\n","TIMESTAMPTZ","\n","CHAR","\n","VARCHAR","\n","CLOB","\n","LONGVARCHAR","\n","OTHER","\n"," ","\n","Die Eigenschaft \"dbtype\" liefert den GP_R_CONNECTION_TYPE \n der Datenbank, also \"POSTGRESQL\" oder \"ORACLE\".","\n","DbCon-Objekte haben folgende Funktionen:","\n","commit()","\n","Übernimmt die bisher abgesetzten Datenbank-Operationen. \n Wirkt sich nur aus, wenn autocommit auf false steht, ansonsten wird ja \n jede Operation sofort übernommen.","\n","rollback()","\n","Verwirft die bisher abgesetzten Datenbank-Operationen. \n Wirkt sich nur aus, wenn autocommit auf false steht, ansonsten wird ja \n jede Operation sofort übernommen.","\n","getDbTime()","\n","Gibt die aktuelle DB-Zeit (Date) zurück. ","\n\n\n"]],"3":[["DbCon"]],"id":"32"})