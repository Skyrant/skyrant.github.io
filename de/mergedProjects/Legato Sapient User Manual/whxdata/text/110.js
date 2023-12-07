rh._.exports({"0":[["Rezeptprozeduren"]],"1":[["\n"],["\n"],["\n","\n\t","\n\t","\n\t","\n\t\t","Beschreibung","\n\t\t","Ein Rezept von einem Template kann mit \n\t\t der Prozedur ","RM_RECIPE_TEMPLATES"," \n\t\t umgesetzt werden. Es ist möglich, Rezepte in LC2 hinzuzufügen, \n\t\t zu bearbeiten oder zu entfernen. ","\n\t\t","Beim Hinzufügen eines neuen Rezepts wird ein JSON-Schema für \n\t\t die ausgewählte Rezeptvorlage auf der Grundlage ihrer Elemente \n\t\t generiert.","\n\t","\n\t","\n\t\t","Prozedur","\n\t\t","/de/gefasoft/sapient/db/recipes/RecipeManagement/insert/","\n\t\t","/de/gefasoft/sapient/db/recipes/RecipeManagement/update/","\n\t\t","/de/gefasoft/sapient/db/recipes/RecipeManagement/delete/","\n\t","\n\t","\n\t\t","Parameter","\n\t\t","RECIPE_TEMPLATE_ID","\n\t\tCONNECTION_ID","\n\t\tRECIPE_SYMBOL ","\n\t\tSORT_ID","\n\t\tNAME","\n\t\t"," ","\n\t","\n\t","\n\t\t","Beispiel","\n\t\t"," ","\n\t\t","{","\n\t\t\"SYMBOL\": \"a\",","\n\t\t","\"NAME_0\": \"a\",","\n\t\t","\"CONNECTION_ID\": 61,","\n\t\t","\"SORT_ID\": 10,","\n\t\t","\"RECIPE_TEMPLATE_ID\":2","\n\t\t","}","\n\t","\n","\n"," ","\n"],["\n","\n\t","\n\t","\n\t","\n\t\t","Beschreibung","\n\t\t","Für das Lesen eines Rezeptes aus der Datenbank \n\t\t ist die Prozedur ","readRecipe"," \n\t\t notwendig.","\n\t\t"," ","\n\t","\n\t","\n\t\t","Prozedur","\n\t\t","/de/gefasoft/sapient/db/recipes/RecipeManagement/readRecipe/","\n\t\t"," ","\n\t","\n\t","\n\t\t","Details","\n\t\t","RM_READ_RECIPE"," \n\t\t liest das adressierte Rezept aus der Datenbank. Die gesamte Struktur \n\t\t (Aufbau, Anzahl und Typ der Elemente) und auch die tatsächlichen \n\t\t Werte jedes Elements werden gelesen und in ein entsprechendes \n\t\t JSON-Objekt gespeichert.","\n\t\t","Für das Element ","Werte"," \n\t\t gibt es zwei verschiedene Optionen:","\n\t\t","\n\t\t\t","Lesen des Wertes aus dem neuesten (Zeitstempel) \n\t\t\t Datensatzes","\n\t\t\t","Lesen des Wertes aus dem neuesten (Zeitstempel) \n\t\t\t Datensatzes, bei dem RH_ITEM_VALUES.NO_PLC_DOWNLOAD = 0","\n\t\t","\n\t","\n\t","\n\t\t","Parameter","\n\t\t","RECIPE_ID: eindeutige ID des Rezepts, oder \n\t\t die folgenden Parameter:","\n\t\t","\n\t\tCONNECTION: Symbol des SPS-Anschlusses","\n\t\t","\n\t\tRECIPE_SYMBOL: eindeutiges Symbol (innerhalb von CONNECTION) für \n\t\t das Rezept (auch in der SPS gespeichert) ","\n\t\t","\n\t\tUSE_DOWNLOADED_VALUES: neueste Datensätze ","\n\t\t","\n\t\tRM_ITEM_VALUES.NO_PLC_DOWNLOAD = 1 sollte verwendet werden","\n\t","\n\t","\n\t\t","Ausgabewerte","\n\t\t"," ","\n\t\t","READ_RESULT: \"0\" = OK, \"1\" \n\t\t = Rezept nicht gefunden","\n\t\t","RECIPE_STRUCTURE: JSON-Objekt, welches das \n\t\t gesamte Rezept umfasst (Struktur der Elemente und Werte)","\n\t","\n","\n"," ","\n"],["\n","\n\t","\n\t","\n\t","\n\t\t","Beschreibung","\n\t\t","Für das Schreiben eines Rezeptes aus der \n\t\t Datenbank ist die Prozedur ","RM_WRITE_RECIPE \n\t\t ","notwendig. Die Prozedur vergleicht eine gegebene Rezeptstruktur \n\t\t mit der adressierten Rezeptstruktur in der Datenbank.","\n\t\t"," ","\n\t","\n\t","\n\t\t","Prozedur","\n\t\t","/de/gefasoft/sapient/db/recipes/RecipeManagement/writeRecipe/","\n\t\t"," ","\n\t","\n\t","\n\t\t","Details","\n\t\t","RM_WRITE_RECIPE"," \n\t\t  schreibt das angegebene Rezept in die Datenbank. ","\n\t\t","Die vorgegebene Rezeptstruktur (Aufbau, Anzahl und Art der Positionen) \n\t\t muss mit der gespeicherten Struktur übereinstimmen. ","\n\t\t","Dies muss von der Prozedur während des Speichervorgangs überprüft \n\t\t werden. Im Falle eines Strukturunterschieds muss der Speichervorgang \n\t\t abgebrochen (ohne ein Commit zur Datenbank) und ein Fehler zurückgegeben \n\t\t werden. Es werden nur die Werte (Felder VALUE_BOOL, VALUE_NUM, \n\t\t VALUE_STRING) in der Datenbank aktualisiert, alle anderen Felder \n\t\t sollten nicht verändert werden.","\n\t","\n\t","\n\t\t","Parameter","\n\t\t","RECIPE_ID - eindeutige ID des Rezepts","\n\t\t","CONNECTION - Verbindungssymbol","\n\t\t","RECIPE_SYMBOL - Rezeptur-Symbol","\n\t\t"," ","\n\t\t","Um die Prozedur auszuführen, muss der Benutzer RECIPE_STRUCTURE \n\t\t und RECIPE_ID oder sowohl CONNECTION als auch RECIPE_SYMBOL angeben.","\n\t\t","RECIPE_STRUCTURE- Rezeptstruktur in Form von stringifiziertem \n\t\t JSON","\n\t\t","PARENT_ID - ID eines Parents (Elternteils)","\n\t\t","CHANGE_USER_ID - ID eines Benutzers","\n\t\t","TIME_STAMP - Zeitstempel (wenn nicht angegeben, wird die aktuelle \n\t\t Zeit gespeichert)","\n\t\t","CHANGE_COMMENT - Kommentar","\n\t\t","ATTR_JSONB - Erweiterte Eigenschaften","\n\t\t"," ","\n\t","\n\t","\n\t\t","Ausgabewerte","\n\t\t"," ","\n\t\t","Prozedur gibt 0 zurück, wenn RECIPE_STRUCTURE erfolgreich \n\t\t in die Datenbank geschrieben wurde,","\n\t\t","1, wenn Rezept (RECIPE_SYMBOL) nicht in der Datenbank gefunden \n\t\t wurde,","\n\t\t","2, wenn die Rezeptstruktur nicht mit dem Schema aus der Datenbank \n\t\t übereinstimmt.","\n\t\t"," ","\n\t","\n","\n"," ","\n"],["\n","\n\t","\n\t","\n\t","\n\t\t","Beschreibung","\n\t\t","RM_COMP_REC_STRUCT"," \n\t\t vergleicht eine gegebene Rezeptstruktur mit der adressierten Rezeptstruktur \n\t\t in der Datenbank.","\n\t\t"," ","\n\t","\n\t","\n\t\t","Prozedur","\n\t\t"," /de/gefasoft/sapient/db/recipes/RecipeManagement/compare/","\n\t\t"," ","\n\t","\n\t","\n\t\t","Details","\n\t\t","Vergleicht eine gegebene Rezeptstruktur \n\t\t mit der adressierten Rezeptstruktur in der Datenbank. Im ersten \n\t\t Schritt wird das RECIPE_SYMBOL (dieser Name ist auch in der SPS \n\t\t gespeichert) verglichen.","\n\t\t","In einem zweiten Schritt, wenn das SYMBOL übereinstimmt, \n\t\t wird die gesamte Struktur (nicht die Positionswerte) verglichen.","\n\t\t"," ","\n\t","\n\t","\n\t\t","Parameter","\n\t\t","RECIPE_STRUCTURE: JSON-Objekt, das das \n\t\t gesamte 1. Rezept umfasst (Struktur der Items und Werte)","\n\t\t","RECIPE_ID: eindeutige ID des 2. Rezepts, oder \n\t\t die folgenden beiden Parameter:","\n\t\t","\n\t\t","\n\t\t","CONNECTION: Symbol für die SPS-Verbindung","\n\t\t","RECIPE_SYMBOL: eindeutiges Symbol (innerhalb \n\t\t der CONNECTION) für das Rezept (auch in der SPS gespeichert)","\n\t\t"," ","\n\t","\n\t","\n\t\t","Ausgabewerte","\n\t\t"," ","\n\t\t","Um die Prozedur auszuführen, muss der Benutzer \n\t\t RECIPE_STRUCTURE und RECIPE_ID oder sowohl CONNECTION als auch \n\t\t RECIPE_SYMBOL angeben.","\n\t\t"," ","\n\t\t","COMPARE_RESULT: \"0\" = Die Prozedur \n\t\t gibt 0 zurück, wenn RECIPE_STRUCTURE erfolgreich validiert wurde, \n\t\t ","\n\t\t","1, wenn Rezept (RECIPE_SYMBOL) nicht in der \n\t\t Datenbank gefunden wurde, ","\n\t\t","2, wenn die Rezeptstruktur nicht mit dem Schema \n\t\t aus der Datenbank übereinstimmt","\n\t\t"," ","\n\t","\n","\n"," ","\n"],["\n","\n\t","\n\t","\n\t","\n\t\t","Beschreibung","\n\t\t","RM_SET_REC_STATUS"," \n\t\t setzt den Rezeptstatus für ein adressiertes Rezept in die Datenbank \n\t\t (der Rezeptstatus wird geschrieben).","\n\t\t"," ","\n\t","\n\t","\n\t\t","Prozedur","\n\t\t","/de/gefasoft/sapient/db/recipes/RecipeManagement/setRecipeStatus/ \n\t\t ","\n\t\t"," ","\n\t","\n\t","\n\t\t","Details","\n\t\t","Wenn das WRITE_RESULT auf \"0\" \n\t\t gesetzt ist","\n\t\t","\n\t\t","\n\t\t\t","muss das Datenbankfeld UPLOAD_REQUESTED \n\t\t\t auf \"0\" gesetzt werden","\n\t\t\t","muss das Datenbankfeld PLC_MATCH auf \n\t\t\t \"1\" gesetzt werden","\n\t\t\t","\n\t\t","\n\t\t","Wenn das READ_RESULT auf \"0\" gesetzt \n\t\t wurde","\n\t\t","\n\t\t","\n\t\t\t","muss das Datenbankfeld DOWNLOAD_REQUESTED \n\t\t\t auf \"0\" gesetzt werden","\n\t\t\t","muss das Datenbankfeld PLC_MATCH auf \n\t\t\t \"1\" gesetzt werden","\n\t\t\t","alle Merker RM_ITEM_VALUES.NO_PLC_DOWNLOAD","\n\t\t\tbei denen der Zeitstempel älter ist als READ_TIMESTAMP","\n\t\t\tmüssen auf \"0\" gesetzt werden.","\n\t\t","\n\t","\n\t","\n\t\t","Parameter","\n\t\t","RECIPE_ID: eindeutige ID des Rezepts, oder \n\t\t die folgenden Parameter:","\n\t\t","CONNECTION: Symbol für die SPS-Verbindung","\n\t\t","RECIPE_SYMBOL: eindeutiges (innerhalb der CONNECTION) \n\t\t Symbol für das Rezept (auch in der SPS gespeichert)","\n\t\t","WRITE_TIMESTAMP: Zeitstempel des letzten erfolgreichen \n\t\t Uploads","\n\t\t","WRITE _RESULT: \"0\" = OK, \"1\" \n\t\t = Rezept nicht gefunden oder \"2\" = Rezeptstruktur nicht \n\t\t passend","\n\t\t","READ_TIMESTAMP: Zeitstempel des letzten erfolgreichen \n\t\t Downloads","\n\t\t","READ _RESULT: \"0\" = OK, \"1\" \n\t\t = Rezept nicht gefunden oder \"2\" = Rezeptstruktur nicht \n\t\t passend","\n\t\t","PLC_MATCH: \"0\" = keine Übereinstimmung \n\t\t der Daten, \"1\" = Daten übereinstimmend","\n\t\t","RECIPE_MODE:","\n\t\t","\"0\" = Upload von der SPS (Teaching-Modus),","\n\t\t","\"1\" = Download zur SPS (Master-Modus, \n\t\t kann nur auf \"1\" gesetzt werden, wenn der vorherige \n\t\t Zustand \"0\" war; andere Zustände bleiben unverändert)","\n\t\t"," ","\n\t","\n\t","\n\t\t","Ausgabewerte","\n\t\t"," ","\n\t\t","ERGEBNIS: \"0\" = OK, ","\n\t\t","\"1\" = Rezept (RECIPE_SYMBOL) nicht \n\t\t in Datenbank gefunden","\n\t\t"," ","\n\t","\n","\n"," ","\n"],["\n","\n\t","\n\t","\n\t","\n\t\t","Beschreibung","\n\t\t","RM_GET_REC_STATUS \n\t\t ","liest"," ","den Rezeptstatus \n\t\t für ein adressiertes Rezept aus der Datenbank.","\n\t\t"," ","\n\t","\n\t","\n\t\t","Prozedur","\n\t\t","/de/gefasoft/sapient/db/recipes/RecipeManagement/getRecipeStatus/","\n\t\t"," ","\n\t","\n\t","\n\t\t","Parameter","\n\t\t","RECIPE_ID: eindeutige ID des Rezepts, oder \n\t\t die folgenden beiden Parameter:","\n\t\t","\n\t\t","CONNECTION: Symbol der SPS-Verbindung","\n\t\t","RECIPE_SYMBOL: eindeutiges Symbol (innerhalb \n\t\t der CONNECTION) für das Rezept (auch in der SPS gespeichert)","\n\t\t"," ","\n\t","\n\t","\n\t\t","Ausgabewerte","\n\t\t","WRITE_TIMESTAMP: Zeitstempel des letzten \n\t\t erfolgreichen Uploads","\n\t\t","WRITE_RESULT: \"-1\" = OK; \"-2\" \n\t\t = Rezept nicht gefunden; \"-3\" = Rezeptstruktur nicht \n\t\t passend","\n\t\t","READ_TIMESTAMP: Zeitstempel des letzten erfolgreichen \n\t\t Downloads","\n\t\t","READ_RESULT: \"-1\" = OK; \"-2\" \n\t\t = Rezeptur nicht gefunden; \"-3\" = Rezepturstruktur nicht \n\t\t passend","\n\t\t","PLC_MATCH: \"0\" = keine Übereinstimmung \n\t\t der Daten, \"1\" = Daten übereinstimmend","\n\t\t","RECIPE_MODE: \"-1\" = Upload der SPS \n\t\t zum MES; \"-2\" = Download vom MES zur SPS; \"-3\" \n\t\t = keine Datenübertragung; \"-4\" = inaktiv","\n\t\t","OPTIMIZED_PLC_DATA: \"0\" = nein, \"1\" \n\t\t = ja","\n\t\t"," ","\n\t","\n\t","\n\t\t","Beispiel","\n\t\t"," ","\n\t\t","{","\n\t\t","      "," \"RECIPE_ID\": \n\t\t 1","\n\t\t"," ","}","\n\t\t","or","\n\t\t","{","\n\t\t","       "," \"CONNECTION\": \n\t\t \"Symbol\",","\n\t\t","       "," \"RECIPE_SYMBOL\": \n\t\t \"TEST\"","\n\t\t"," ","}","\n\t","\n","\n"," ","\n"],["\n","\n\t","\n\t","\n\t","\n\t\t","Beschreibung","\n\t\t","RM_SET_UPLOAD_RESULT"," \n\t\t und"," RM_SET_DOWNLOAD_RESULT","\n\t\t","\n\t\tUm Up- oder Download-Anforderungen für Rezepte zu erkennen, fragt \n\t\t der SCC (MDX) die Tabelle RM_RECIPES nach Zeilen ab, bei denen \n\t\t UPLOAD_REQUESTED ein neuerer Zeitstempel als LAST_UPLOAD oder \n\t\t DOWNLOAD_REQUESTED ein neuerer als LAST_DOWNLOAD ist.","\n\t\t","Wenn der SCC (MDX) einen Upload beendet hat, \n\t\t wird RM_WRITE_RECIPE aufgerufen, um die empfangenen Daten zu speichern, \n\t\t und anschließend RM_SET_UPLOAD_RESULT, um das Ende der Upload-Anforderung \n\t\t zu signalisieren. Analog dazu liest die SCC bei einer Download-Anforderung \n\t\t die Rezepturdaten mit RM_READ_RECIPE, sendet sie an die SPS und \n\t\t ruft dann RM_SET_DOWNLOAD_RESULT auf, um das Ende der Download-Anforderung \n\t\t zu signalisieren.","\n\t\t"," ","\n\t","\n\t","\n\t\t","Prozedur","\n\t\t","/de/gefasoft/sapient/db/recipes/RecipeManagement/setUploadResult","\n\t\t","/de/gefasoft/sapient/db/recipes/RecipeManagement/setDownloadResult","\n\t","\n\t","\n\t\t","Parameter","\n\t\t","Parameter \n\t\t von ","setUploadResult:","\n\t\t","RECIPE_ID - Rezeptur-ID","\n\t\t","CONNECTION - Verbindungssymbol","\n\t\t","RECIPE_SYMBOL - Rezeptur-Symbol","\n\t\t","RESULT_ID - Ergebnis-ID (RM_RECIPE_RESULTS.ID)","\n\t\t","Beim Aufruf dieser Prozedur muss entweder \n\t\t die RECIPE_ID oder sowohl CONNECTION als auch RECIPE_SYMBOL angegeben \n\t\t werden, damit die Prozedur das Rezept identifizieren kann, auf \n\t\t das sie reagieren soll. Die RESULT_ID muss ebenfalls angegeben \n\t\t werden.","\n\t\t","Die Prozedur setzt den Zeitstempel UPLOAD_REQUESTED \n\t\t auf NULL zurück und speichert die RESULT_ID in UPLOAD_RESULT_ID \n\t\t von RM_RECIPES. Die Prozedur sollte diese Spalten in separaten \n\t\t Transaktionen aktualisieren, damit die Anforderung auch dann zurückgesetzt \n\t\t wird, wenn das Ergebnis nicht gespeichert werden konnte.","\n\t\t"," ","\n\t\t","Parameter von setDownloadResult","\n\t\t","R","ECIPE_ID \n\t\t - Rezeptur-ID","\n\t\t","CONNECTION - Verbindungssymbol","\n\t\t","RECIPE_SYMBOL - Rezeptur-Symbol","\n\t\t","RESULT_ID - Ergebnis-ID (RM_RECIPE_RESULTS.ID)","\n\t\t","Beim Aufruf dieser Prozedur muss entweder \n\t\t die RECIPE_ID oder sowohl CONNECTION als auch RECIPE_SYMBOL angegeben \n\t\t werden, damit die Prozedur das Rezept identifizieren kann, auf \n\t\t das sie reagieren soll. Die RESULT_ID muss ebenfalls angegeben \n\t\t werden.","\n\t\t","Die Prozedur setzt den Zeitstempel DOWNLOAD_REQUESTED \n\t\t auf NULL zurück und speichert die RESULT_ID in DOWNLOAD_RESULT_ID \n\t\t von RM_RECIPES. Die Prozedur sollte diese Spalten in separaten \n\t\t Transaktionen aktualisieren, damit die Anforderung auch dann zurückgesetzt \n\t\t wird, wenn das Ergebnis nicht gespeichert werden konnte (vielleicht \n\t\t wegen einer fehlerhaften RESULT_ID)",".","\n\t\t","\n\t","\n\t","\n\t\t","Ausgabewerte","\n\t\t"," ","\n\t\t","Ausgabewerte \n\t\t von setUploadResult:","\n\t\t","\n\t\t","0 - OK","\n\t\t","1 - Kein Datensatz wurde aktualisiert (kein \n\t\t Rezept gefunden)","\n\t\t","JSONRPC_INVALID_PARAMETER (Ausnahme), wenn \n\t\t die Ergebnis-ID ungültig war oder Parameter fehlten.","\n\t\t"," ","\n\t\t","Ausgabewerte von \n\t\t setDownloadResult:","\n\t\t","0 - OK","\n\t\t","1 - Kein Datensatz wurde aktualisiert (kein \n\t\t Rezept gefunden)","\n\t\t","JSONRPC_INVALID_PARAMETER (Ausnahme), wenn \n\t\t die Ergebnis-ID ungültig war oder Parameter fehlten.","\n\t\t"," ","\n\t","\n\t","\n\t\t","Beispiel setUploadResult","\n\t\t","{","\n\t\t","    \"RECIPE_ID\": \n\t\t 1,","\n\t\t","    \"RESULT_ID\": \n\t\t -3","\n\t\t","}","\n\t\t"," ","\n\t\t"," ","\n\t","\n\t","\n\t\t","Beispiel setDownloadResult","\n\t\t","{","\n\t\t","    \"RECIPE_ID\": \n\t\t 2,","\n\t\t","    \"RESULT_ID\": \n\t\t -3","\n\t\t","}","\n\t","\n","\n"," ","\n"],["\n","\n\t","\n\t","\n\t","\n\t\t","Beschreibung","\n\t\t","RM_CHANGE_RECIPE_DATA \n\t\t s","peichert die Änderungen an einem oder mehreren Rezept-Item-Werten, \n\t\t die ein Benutzer mit Hilfe der Webanwendung eingegeben hat. Das \n\t\t Ändern von Rezept-Item-Werten erfordert eine bestimmte Benutzerberechtigung.","\n\t\t"," ","\n\t\t","Beim Ändern von Rezept-Item-Werten, bei denen \n\t\t das CHANGE_CONTROL-Flag gesetzt ist, kann der Benutzer einen Kommentar \n\t\t für die Änderung am spezifischen Item eingeben (\"single item \n\t\t change comment\"). Nachdem er alle gewünschten Positionswerte \n\t\t geändert hat, kann der Benutzer anschließend einen Kommentar für \n\t\t den gesamten Satz von Änderungen eingeben, die er speichern möchte \n\t\t (\"recipe change comment\"). Anschließend kann der Benutzer \n\t\t die geänderten Rezeptdaten speichern. Das ruft diese Prozedur \n\t\t letztlich auf.","\n\t\t"," ","\n\t\t","Die Prozedur prüft, ob der aufrufende Benutzer \n\t\t die Berechtigung hat, Rezepte auf dem Knoten (Anschluss) zu bearbeiten, \n\t\t mit dem das Rezept verbunden ist. Später wird die ID dieses Benutzers \n\t\t auch in RM_RECIPE_DATA.CHANGE_USER_ID geschrieben.","\n\t\t"," ","\n\t\t","Die Prozedur validiert die neuen Rezeptdaten \n\t\t gegen das JSON-Schema des Rezepts. Wenn die Validierung erfolgreich \n\t\t ist, erzeugt sie eine neue Zeile für die neue Rezeptdatenversion \n\t\t und, falls Änderungs-Kommentare pro Element vorhanden sind, Zeilen \n\t\t für jede kommentierte Elementänderung in RM_CHANGE_COMMENTS.","\n\t\t"," ","\n\t\t","Wenn die Änderung erfolgreich gespeichert wurde, \n\t\t wird das Rezept aktualisiert: Das Kennzeichen PLC_MATCH wird auf \n\t\t 0 zurückgesetzt und die ID der neuen Rezeptdatenversion wird in \n\t\t CURRENT_DATA_ID von RM_RECIPES geschrieben.","\n\t","\n\t","\n\t\t","Prozedur","\n\t\t","/de/gefasoft/sapient/db/recipes/RecipeManagement/saveChanges","\n\t","\n\t","\n\t\t","Parameter","\n\t\t","RECIPE_ID - (Zahl) eindeutige ID des Rezepts","\n\t\t","CONNECTION - (String) Verbindungssymbol","\n\t\t","RECIPE_SYMBOL - (Zeichenkette) Rezeptur-Symbol","\n\t\t","PARENT_ID - (Zahl, optional) ID der RM_RECIPE_DATA-Zeile, \n\t\t die geladen und bearbeitet wurde","\n\t\t","RECIPE_JSON - (String, erforderlich) bearbeitete \n\t\t Rezepturdaten (komplette Rezeptur, nicht nur geänderte Positionen)","\n\t\t","CHANGE_COMMENT - (String, optional) Kommentar, \n\t\t den der Benutzer für den kompletten Änderungssatz eingegeben hat","\n\t\t","ITEM_CHANGE_COMMENTS - (Array, optional) Kommentare, \n\t\t die der Benutzer für Änderungen an bestimmten Elementen eingegeben \n\t\t hat. ","\n\t\t","\n\t\tJedes Element enthält:","\n\t\t","\n\t\t\t","ITEM_PATH - (String) JSON-Pfad des \n\t\t\t geänderten Elements","\n\t\t\t","ITEM_COMMENT - (String) Kommentar, \n\t\t\t den der Benutzer für das spezifische Element eingegeben hat","\n\t\t","\n\t\t","Zur Identifizierung des Rezepts muss entweder","\n\t\t"," ","\n\t\t","\n\t\t\t","RECIPE_ID oder","\n\t\t\t","CONNECTION und RECIPE_SYMBOL oder","\n\t\t\t","PARENT_ID","\n\t\t","\n\t\t","vom Aufrufenden angegeben werden.","\n\t","\n\t","\n\t\t","Ausgabewerte","\n\t\t","0 - OK","\n\t\t","1 - Fehler, Rezeptur nicht gefunden","\n\t\t","2 - Fehler, Rezepturstruktur nicht gültig","\n\t\t","Standard SapientError - Ausnahmen für allgemeine \n\t\t Fehlerursachen wie ungültige Parameter, fehlende Benutzerrechte, \n\t\t etc.","\n\t\t"," ","\n\t","\n","\n\n\n"]],"2":[["Rezeptprozeduren"]],"6":[["Rezept von einem \n Template generieren (RM_RECIPE_TEMPLATES) "],["Rezept aus der Datenbank \n lesen (RM_READ_RECIPE)"],["Rezept in die Datenbank \n schreiben (RM_WRITE_RECIPE)"],["Rezeptstruktur \n mit gespeicherter Struktur in Datenbank vergleichen (RM_COMP_REC_STRUCT)"],["Rezeptstatus in \n die Datenbank setzen (RM_SET_REC_STATUS)"],["Rezeptstatus \n von der Datenbank abfragen (RM_GET_REC_STATUS)"],["Ergebnis \n von Rezept Up- und Downloads melden "],["Rezeptbearbeitungen \n in der Datenbank speichern (RM_CHANGE_RECIPE_DATA)"]],"id":"110"})