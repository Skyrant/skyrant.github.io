rh._.exports({"0":[["Funktionen der Sapient Engine Schnittstelle"]],"1":[["\n"],["\n"],["\n","Die Sapient Engine wird über eine TCP/IP Schnittstelle \n und das Protokoll HTTP1.1 angesprochen.","\n"],["\n","\n","Deklaration: AddPost(string id, string method, string \n param) ","\n","Die Methode ","method"," \n wird dem Sendestapel der Sapient Engine hinzugefügt. Je nach Methode müssen \n die Parameter ","param"," versorgt werden. \n Der Stapel wird mit dem Befehl ","EndPost"," \n an die Sapient Engine gesendet.","\n","Beispiel",":","\n","string id","\n","string method","\n","string param","\n","   ","\n","id := 'YDB_1'","\n","   ","\n","method := '/de/gefasoft/sapient/db/Dbinfo/showinfo/.'","\n","Param := ''","\n","   ","\n","Sapient.HTTP_JSON.con1.addpost(id, method, param)","\n"," ","\n"],["\n","\n","Deklaration: bool EndPost","\n","Der zuvor mit ","AddPost"," \n gefüllte Sendestapel wird an die Sapient Engine gesendet.","\n","Beispiel",":","\n","bool   ok","\n","string id","\n","string method","\n","string param","\n","   ","\n","id := 'YDB_1'","\n","   ","\n","method := '/de/gefasoft/sapient/db/Dbinfo/showinfo/.'","\n","Param := ''","\n","   ","\n","Sapient.HTTP_JSON.con1.addpost(id, method, param)","\n","   ","\n","ok := Sapient.HTTP_JSON.con1.endpost","\n"," ","\n"],["\n","\n","Deklaration: bool get(string id, string source, \n string param, long timeout) ","\n","Die Datenquelle ","source"," \n wird in der Sapient Engine angefragt. Die gewünschten Felder und Filter \n sind im Parameter ","param"," angegeben. \n Die Funktion kann synchron (","timeout"," \n > 0) oder asynchron (","timeout"," \n = 0) aufgerufen werden. Bei der synchronen Variante kann nach erfolgreicher \n Ausführung (Rückgabewert = true) das Ergebnis mit Result abgefragt werden. \n Bei der asynchronen Variante wird das Ergebnis im Ereignis OnResult geliefert. \n Dabei dient ","id"," zur Identifizierung \n des Ergebnisses.","\n","Beispiel einer synchronen Abfrage: ","\n","Beispiel",":","\n","bool \n ok","\n","string \n id","\n","string \n param, fields, filter","\n","string \n method","\n","string \n dataset","\n","   ","\n","id \n := 'p_connections'","\n","method \n := 'legato/p_connections'","\n","fields \n := 'fields=id,connection_symbol'","\n","filter \n := '&filter=[{\"field\":\"id\",\"op\":\"gt\",\"val\":0},'","\n","filter \n := filter + '\"AND\",{\"field\":\"parent\",\"op\":\"eq\",\"val\":'+ltostr(parent,10)+'}]'","\n","param \n := fields + filter","\n","   ","\n","ok \n := Sapient.HTTP_JSON.get(id, method, param, 2000)","\n","if \n ok then","\n"," "," dataset := Sapient.HTTP_JSON.result","\n","endif ","\n"," ","\n"],["\n","\n","Deklaration: bool post(string id, string method, \n string param, long timeout) ","\n","Die Methode ","method"," \n wird in der Sapient Engine ausgeführt. Je nach Methode müssen die Parameter \n ","param"," versorgt werden. Die \n Funktion kann synchron (","timeout"," \n > 0) oder asynchron (","timeout"," \n = 0) aufgerufen werden. Bei der synchronen Variante kann nach erfolgreicher \n Ausführung (Rückgabewert = true) das Ergebnis mit Result abgefragt werden. \n Bei der asynchronen Variante wird das Ergebnis im Ereignis OnResult geliefert. \n Dabei dient ","id"," zur Identifizierung \n des Ergebnisses.","\n","Beispiel einer asynchronen Abfrage: ","\n","Beispiel",":","\n","bool \n ","   "," ok","\n","string","  "," id","\n","string","  "," method","\n","string \n "," "," param","\n","   ","\n","id \n := 'YDB_1'","\n","method \n := '/de/gefasoft/sapient/db/Dbinfo/showinfo/.'","\n","Param \n := ''","\n","   ","\n","ok := Sapient.HTTP_JSON.post(id, method, param, \n 0) ","\n"," ","\n"],["\n","\n","Deklaration: string Result ","\n","Liefert das Ergebnis einer synchronen Get- oder Post \n Anfrage.","\n","Beispiel",":","\n","bool \n ok","\n","string \n id","\n","string \n param, fields, filter","\n","string \n method","\n","string \n dataset","\n","   ","\n","id \n := 'p_connections'","\n","method \n := 'legato/p_connections'","\n","fields \n := 'fields=id,connection_symbol'","\n","filter \n := '&filter=[{\"field\":\"id\",\"op\":\"gt\",\"val\":0},'","\n","filter \n := filter + '\"AND\",{\"field\":\"parent\",\"op\":\"eq\",\"val\":'+ltostr(parent,10)+'}]'","\n","param \n := fields + filter","\n","   ","\n","ok \n := Sapient.HTTP_JSON.get(id, method, param, 2000)","\n","if \n ok then","\n"," "," dataset := Sapient.HTTP_JSON.result","\n","endif","\n"," ","\n\n\n"]],"2":[["Funktionen der Sapient Engine Schnittstelle"]],"4":[["Allgemein"],["AddPost"],["EndPost"],["Get"],["Post"],["Result"]],"id":"61"})