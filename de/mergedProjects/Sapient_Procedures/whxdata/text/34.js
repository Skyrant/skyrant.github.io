rh._.exports({"0":[["Reader"]],"1":[["\n"],["\n","Objekte dieses Typs fungieren als Reader, der die Daten \n liest, während sie noch geladen werden. Das heißt, die Daten müssen nicht \n erst komplett in den Speicher geschrieben werden, ehe sie durchsucht werden \n können. Vielmehr ist es möglich, die bereits geschriebenen Stücke gleich \n zu durchsuchen.","\n","Reader werden von Methoden anderer Objekte als Ergebnis \n geliefert, z.B. HttpCon.getResponseReader() und üblicherweise nicht per \n \"new\" erzeugt.","\n"," ","\n","Reader haben die folgenden Funktionen:","\n","close():","\n","Schließt die Datei oder sonstigen Ausgabekanal. Danach \n kann nicht mehr geschrieben werden.","\n","readChar():","\n","Liefert das nächste Zeichen aus der Eingabe.","\n","readLine():","\n","Liest bis zum Ende der aktuellen Zeile. Das Zeilenende \n ('\\r\\n', '\\n' oder '\\r') wird nicht als Teil des Ergebnisses geliefert.","\n","readLines(name, value):","\n","Liest den Rest der Eingabe als String. Zeilenenden \n sind im Ergebnis enthalten.","\n","readWordOrSpaces(Trennzeichen):","\n","Zerstückelt den eingegebenen Text gemäß den angegebenen \n Trennzeichen oder, falls nicht spezifiziert, Leerzeichen. Gibt einen String \n zurück, der entweder nur aus Trennzeichen oder nur aus Nicht-Trennzeichen \n besteht.","\n","lineNumer():","\n","Liefert die Nummer der aktuellen Zeile der Eingabe.","\n\n\n"]],"3":[["Reader"]],"id":"34"})