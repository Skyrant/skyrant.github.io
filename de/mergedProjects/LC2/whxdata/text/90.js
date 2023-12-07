rh._.exports({"0":[["Die Schnittstellentabelle Datenbank - Gateway (P_OUT_VALUES)"]],"1":[["P_OUT_VALUES,Sollwert"]],"2":[["\n"],["\n"],["\n","Sollwertvorgaben aus der Datenbank an den Prozess (entsprechend \n Gateways) erfolgen über die Schnittstellentabelle P_OUT_VALUES. Einträge \n in diese Tabelle erzeugt das System aus dem Schichtkalender (Sollwertvorgaben). \n Diese Einträge werden standardmäßig jeden Tag um 01:30 mit einem Vorlauf \n von 1,5 Tagen übergeben (einstellbar über den SE-Job REFRESH_SHIFT_TARGETS).","\n"],["\n","Wertänderung der Variable Sollwert durch Kontextmenü \n \"Wert setzen\" im LC2. Die Variable ist für die Verbindung zur \n Steuerung 1 definiert:","\n","Anwendungsstruktur \n | Datenaustausch | Gateway 1","\n","Connection \n | Steuerung 1","\n","Variablensymbol \n OPC.GOPS.Montage.PLC_1.Sollwert, Kennung \"Forward to Gateway\" \n = 1","\n"," ","\n","Durch die Wertänderung wird zunächst nicht der Wert \n der Variablen selbst geändert, sondern ein Eintrag in die Tabelle P_OUT_VALUES \n gebucht, mit den folgenden wichtigsten Angaben:","\n","TransID: \n ID zur Identifikation der Variablenübergabe an das Gateway","\n","ProjectID: \n ID der Datenquelle Gateway, die auch auf Gatewayseite parametriert ist","\n","Variablensymbol: \n Aus der Variablenliste, Symbol ist mit diesem Namen auch im Gateway parametriert","\n","Wert: Variablenwert \n entsprechend Datentyp","\n","Updatezeit: \n Zeitpunkt, ab wann dieser neue Variablenwert für den Prozess gültig ist, \n bei manueller Wertänderung = Änderungszeitpunkt","\n"," ","\n","Die Gateways müssen so projektiert sein, dass die Tabelle \n P_OUT_VALUES zyklisch gelesen wird und die Datensätze bearbeitet werden, \n die","\n","für dieses \n Gateway bestimmt sind (Kennung = ProjectID)","\n","gültig \n sind (Updatezeit älter oder gleich aktuelle Zeit)","\n"," ","\n","Nach Bearbeitung der Variablen im Gateway, z.B. Weitergabe \n über OPC an die Steuerung, führt das Gateway die Datenbank-Prozedur GW_VAL_TRANSMITTED(TransID, \n ErrorStr) aus. Damit besteht auf Datenbankseite die Sicherheit, dass der \n Sollwert verarbeitet wurde und im Prozess genauso vorliegt wie in der \n Datenbank.","\n","Die Prozedur löscht den Datensatz mit der TransID aus \n der Tabelle P_OUT_VALUES und bucht den Wert zur Variable. Erst dann wird \n der geänderte Wert in der Variablentabelle oder im WebClient sichtbar.","\n","Ein optionaler ErrorString, der mit dem Prozeduraufruf \n übergeben werden kann, wird in das Änderungsprotokoll der Legato-Datenbank \n gebucht und ist für Systemanalysen verfügbar.","\n","Interne Variablenänderungen für Sollwerte (d.h., ohne \n PROJECT_NO und COMMAND_ID) werden durch den SE-Job HANDLE_EVENTS abgearbeitet. \n Der Job setzt Out-Werte beim Ereignis SHIFT_START auf übertragen. Dadurch \n werden alle internen Sollwerte in P_VALUES_CURRENT geschrieben und aus \n P_OUT_VALUES gelöscht. ","\n\n\n"]],"3":[["Funktion"],["Ablaufbeispiel"]],"4":[["Die Schnittstellentabelle Datenbank - Gateway (P_OUT_VALUES)"]],"id":"90"})