rh._.exports({"0":[["SapientContext"]],"1":[["\n"],["\n","Wird als erster Parameter der durch die Sapient Engine \n aufgerufenen Funktionen übergeben.","\n","Objekte vom Typ SapientContext haben folgende Eigenschaften:","\n","jsonOut:","\n","JsonWriter. Beschreibung siehe ","dort",".","\n","Im Gegensatz zu Buchungs-Prozeduren und dergleichen, \n für die JSON-RPC bisher vornehmlich verwendet wurde, liefern Daten-Abfragen \n sehr viel größere, potentiell riesige Ergebnisse. Die bisherige Implementierung \n in der SE arbeitet derzeit so, dass diese Ergebnisse erst im Speicher \n aufgebaut und dann erst zum Aufrufer serialisiert werden. Diese Vorgehensweise \n ist für Daten-Abfragen nicht brauchbar. Im Einzelnen verläuft die Verarbeitung \n eines JSON-RPC-Batch derzeit so:","\n","1. Alle Aufrufe werden aus dem Request geparst und \n getrennt nach \"notifications\" (von denen der Aufrufer kein Ergebnis \n erwartet) und \"calls\" (deren Ergebnis der Aufrufer benötigt) \n gemerkt.","\n","2. Der Servlet-Request wird unterbrochen (\"startAsync\"), \n somit kann die Servlet Engine den Thread für andere Abfragen benutzen.","\n","3. Die \"calls\" werden dem RPC-Threadpool \n zur Ausführung übergeben.","\n","4. Die \"notifications\" werden ebenfalls dem \n Threadpool zur Ausführung übergeben.","\n","5. Es wird gewartet, bis von allen \"calls\" \n die Ergebnisse vorliegen.","\n","6. Der Servlet-Request wird reaktiviert (\"AsyncContext.getRequest\").","\n","7. Die Ergebnisse aller \"calls\" werden in \n die Antwort serialisiert.","\n","Normalerweise wird \"Result\" als Objekt geliefert, \n das zum Browser oder Gateway zurückserialisiert wird. Bei großen Ergebnissen \n soll das aber quasi als \"Stream\" passieren.","\n","Wenn man das aufgerufen hat, darf man von der Prozedur \n nichts mehr zurückgeben.","\n","locale:","\n","Gibt Javascript-Objekte zurück mit Informationen über \n die vom Aufrufer eingestellte Sprache.","\n","Diese Eigenschaft kann selbst folgende Eigenschaften \n haben:","\n","tag \n (de_DE)","\n","country \n (DE)","\n","language \n (de)","\n","variant \n (ch)","\n","script \n ()","\n","countryname \n (Germany)","\n","languagename \n (german)","\n","variantname \n (schweitzerdeutsch)","\n","scriptname \n ()","\n","locale","\n","symbol","\n","nativeName","\n","sortId","\n","locales:","\n","Holt einen Array mit allen Länderinformationen (Locales), \n die im Repository definiert sind. Jede Länderinformation ist ein Objekt \n mit folgenden Eigenschaften:","\n","symbol: \n Eindeutiger Name im Repository","\n","index: \n Der Index in diesem Array, wird von Clients als \"Language Index\" \n verwendet","\n","nativeName: \n Name dieser Länderinformation in der Originalsprache","\n","locale: \n Unterobjekt mit den folgenden Eigenschaften:","\n","tag: Länderkennzeichnung","\n","country: Abgekürzter \n Name des Landes","\n","language: Abgekürzter \n Name der Sprache","\n","variant: Abgekürzter \n Name der Variante","\n","script: Abgekürzter \n Name des Skripts","\n","countryname: Name des \n Landes","\n","languagename: Name \n der Sprache","\n","variantname: Name der \n Variante","\n","scriptname: Name des \n Skripts","\n"," ","\n","Gibt einen Array von Objekten wie oben beschrieben \n zurück.","\n","logger:","\n","Logger für diesen Aufruf.","\n","user:","\n","Aufrufender Sapient-Benutzer.","\n"," ","\n","Objekte vom Typ SapientContext haben folgende Funktionen:","\n","callRProc(name, params)","\n","Ruft die Prozedur auf.","\n","getDbCoalesceIndexes(dbname)","\n","Holt einen Array von Indexen aus dem Wert, der von \n jsFunction_getDbLocales(String) zurückgegeben wird und der die lokalisierten \n Varianten von DB-Feldern definiert, die in einem verschmolzenen Ausdruck \n verwendet werden sollen.","\n","Es sind folgende Parameter möglich:","\n","schemaname: \n Die Datenbank, deren Einstellungen ausgewertet werden sollen","\n","langIndex: \n Der \"Language Index\" (Index in jsGet_locales() von dieser Session).","\n"," ","\n","Gibt einen Array von Objekten wie oben beschrieben \n zurück.","\n","getDbLocales(dbname)","\n","Die Länderinformationen, die von einer bestimmten Datenbank \n (einem Schema) unterstützt werden. Array mit Javascript-Objekten wie unter \n \"locales\" beschrieben.","\n","Es sind folgende Parameter möglich:","\n","schemaname: Die Datenbank, deren Einstellungen \n ausgewertet werden sollen","\n"," ","\n","Gibt einen Array mit Objekten zurück, die die Länderinformation \n enthalten.","\n","getDbType(dbname)","\n","Liefert einen String mit dem Datenbank-Typ.","\n\n\n"]],"3":[["SapientContext"]],"id":"41"})