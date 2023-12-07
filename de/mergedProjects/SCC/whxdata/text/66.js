rh._.exports({"0":[["Funktionen der Filespoolverwaltung"]],"1":[["\n"],["\n"," ","\n"],["\n","\n","Deklaration: \n int FileSpoolInit(string node, long id, bool spool_in, bool spool_out)","\n","\n","\n","Öffnet einen Spool für den Knoten ","node",", \n sofern dieser die Spoolfunktionalität unterstützt. Die ","id"," kann \n frei vergeben werden und dient der Zuordnung für die folgenden Funktionen. \n Die Spools können verwendet werden um Aufgaben zwischen zwei ITC's zu \n verteilen. Die Richtung wird über die Parameter ","spool_in"," (Einbuchen \n in den Spool) und ","spool_out"," (Ausbuchen aus dem Spool) \n festgelegt. Wird der Spool von einem einzelnen ITC verwendet, sind beide \n Parameter auf ","true"," zu setzen.","\n","Die Funktion liefert folgende Rückgabewerte:","\n","0","                "," kein \n Fehler, Spool wurde angelegt","\n","1","                "," Spool \n mit der ","id"," ist bereits vorhanden","\n","-1        Fehler, \n Spool kann nicht angelegt werden","           ","\n"," ","\n","Beispiel:","\n","int rv","\n","rv := FileSpoolInit('PubSub.Mosquitto', \n 2, true, true)","\n"," ","\n"],["\n","\n","Deklaration: int FileSpoolExit(string node, long \n id)","\n","\n","Der Spool mit der ","id"," des Knotens ","node"," wird \n geschlossen. Es erfolgt keine Abarbeitung des Spools mehr und es ist auch \n nicht mehr möglich etwas einzubuchen.","\n","\nDie Funktion liefert folgende Rückgabewerte:","\n","0","                "," kein \n Fehler, Spool wurde geschlossen","\n","-1        Spool \n oder Knoten nicht vorhanden       ","\n"," ","\n","Beispiel:","\n","int rv","\n","rv := FileSpoolExit('PubSub.Mosquitto', 2)","\n"," ","\n"],["\n","\n","Deklaration: \n int FileSpoolPut(string node, long id, string data, long hold)","\n","\n","\n","Bucht einen Datensatz ","data"," in den \n Spool mit der ","id"," des Knotens ","node",". Der Spool \n wird nicht angelegt oder geöffnet, dies muss zuvor einmalig mit FileSpoolInit \n gemacht worden sein.","\nÜber den Parameter ","hold"," kann festgelegt werden, wie lange \n der Datensatz verarbeitet werden darf. Ist der Datensatz älter als ","hold",", \n wird er beim Ausbuchen verworfen. Die Angabe erfolgt in ms. Soll der Datensatz \n in jedem Fall verarbeitet werden, ist -1 anzugeben.","\n","Die Funktion liefert folgende Rückgabewerte:","\n","0","                "," kein \n Fehler, Buchung erfolgt","\n","-1        ","Spool \n oder Knoten nicht vorhanden","\n"," ","\n","Beispiel:","\n","long rv","\nstring stmt, js","\n"," ","\n","Value.Index \n := Value.Index + 1","\njs := '{\\\"value\\\":'+ltostr(Value.Index,10)+'}'","\n","stmt := publishfromstr('value/json', \n js, 0, false, false)","\n"," ","\n","rv := filespoolput('PubSub.Mosquitto', \n 2, stmt, -1)","\n"," ","\n"],["\n","\n","Deklaration: \n int FileSpoolSize(string node, long id)","\n","\n","Liefert die Anzahl der Datensätze, die im Spool mit der ","id"," des \n Knotens ","node"," vorhanden sind.","\n","Die Funktion liefert folgende Rückgabewerte:","\n"," ","\n","-1           Spool \n oder Knoten nicht vorhanden","\n",">=0        Anzahl \n der Datensätze","\n"," ","\n","Beispiel:","\n","int size","\n","size := FileSpoolSize('PubSub.Mosquitto', \n 2)","\n"," ","\n"],["\n","\n","Deklaration: \n string PublishFromStr(string topic, string message, int qos, bool dup, \n bool retain)","\n","Erzeugt einen spoolfähigen String aus den übergebenen \n Publish-Angaben. ","message"," ist die Nachricht zum Thema ","topic",". ","qos"," definiert \n die Qualität des Services.","\n","qos:","\n","0 höchstens einmal","\n","1 mindestens einmal","\n","2 genau einmal","\n"," ","\n","dup"," gibt an, ob es sich um eine Wiederholung \n der Nachricht handelt (","dup"," = true). Bei ","qos"," = \n 0 muss ","dup"," false sein!","\n","retain"," = true veranlasst den Server, \n die Nachricht zu speichern, um den Wert auch zukünftigen Clients senden \n zu können.","\n","Beispiel:","\n","long rv","\nstring stmt, js","\n"," ","\n","Value.Index \n := Value.Index + 1","\n","js := '{\\\"value\\\":'+ltostr(Value.Index,10)+'}'","\n"," ","\n","stmt := PublishFromStr('value/json', \n js, 0, false, false)","\n"," ","\n"],["\n","\n","Deklaration: \n string PublishFromBlk(string topic, block message, int qos, bool dup, \n bool retain)","\n","E","rzeugt \n einen spoolfähigen String aus den übergebenen Publish-Angaben. ","message"," ist \n die Nachricht zum Thema ","topic",". ","qos"," definiert \n die Qualität des Services.","\n","qos:","\n","0 höchstens einmal","\n","1 mindestens einmal","\n","2 genau einmal","\n"," ","\n","dup"," gibt an, ob es sich um eine Wiederholung \n der Nachricht handelt (","dup"," = true). Bei ","qos"," = \n 0 muss ","dup"," false sein!","\n","retain"," = true veranlasst den Server, \n die Nachricht zu speichern, um den Wert auch zukünftigen Clients senden \n zu können.","\n","Beispiel:","\n","long rv","\n","string stmt","\n","block b","\n","int i, j","\n"," ","\n","j := Value.Index \n + 2","\n","Value.Index \n := Value.Index + 1","\n"," ","\n","b := newblock(j)","\n","while i < \n j do","\n","setblocknum(b, i, 1, false, i)","\n","               i \n := i + 1","\n","enddo","\n"," ","\n","stmt := publishfromblk('value/datablock', \n b, 0, false, false)","\n\n\n"]],"3":[["Funktionen der Filespoolverwaltung"]],"4":[["F","ileSpoolInit"],["FileSpoolExit"],["FileSpoolPut"],["FileSpoolSize"],["PublishFromStr"],["PublishFromBlk"]],"id":"66"})