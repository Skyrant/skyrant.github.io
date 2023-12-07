rh._.exports({"0":[["Verfügbare Variablen"]],"1":[["\n"],["\n","Da der Job komplett in JavaScript implementiert wurde, \n sind einige Variablen, welche als globale Variablen ausgeführt sind, direkt \n abfragbar.","\n","Diese sind, um von Import-Skript-Variablen zu unterscheiden, \n mit dem Kürzel 'impVar_' versehen. Diese Variablen dürfen NUR in Ausnahmefällen \n verändert werden. Um eine Übersicht zu behalten, sollten Import-Skript-Variablen \n auch NICHT mit diesem Präfix (Kürzel) versehen werden.","\n","Variablen und ihre Bedeutung:","\n","\n\t","\n\t","\n\t","\n\t\t","impVar_context","\n\t\t"," context des SE-Job","\n\t","\n\t","\n\t\t","impVar_params","\n\t\t"," parameter des SE-Job","\n\t","\n\t","\n\t\t","impVar_bDelOldItems_opts","\n\t\t"," Lösche alte Zuordnungen (Eintrag \n\t\t aus Import-Optionen der Verbindung)","\n\t","\n\t","\n\t\t","impVar_bUpdOdlItems_opts","\n\t\t"," Aktualisiere alte Zuordnungen \n\t\t (Eintrag aus Import-Optionen der Verbindung)","\n\t","\n\t","\n\t\t","impVar_sCharset_opts","\n\t\t"," Name des Characterset (Eintrag \n\t\t aus Import-Optionen der Verbindung)","\n\t","\n\t","\n\t\t","impVar_sFileName_opts","\n\t\t"," Pfad und Dateiname (Eintrag \n\t\t aus Import-Optionen der Verbindung)","\n\t","\n\t","\n\t\t","impVar_lFileType_opts","\n\t\t"," Dateityp der Importdatei (Eintrag \n\t\t aus Import-Optionen der Verbindung)","\n\t","\n\t","\n\t\t","impVar_lDefAlClass_opts","\n\t\t"," ID der Default-Meldeklasse \n\t\t (Eintrag aus Import-Optionen der Verbindung)","\n\t","\n\t","\n\t\t","impVar_lDefAlType_opts","\n\t\t"," ID der Default-Meldeart (Eintrag \n\t\t aus Import-Optionen der Verbindung)","\n\t","\n\t","\n\t\t","impVar_sImpFilterOpType_opts","\n\t\t"," Import-Filter Operations-Typ \n\t\t (Eintrag aus Import-Optionen der Verbindung)","\n\t","\n\t","\n\t\t","impVar_lImpFilterFirstType_opts","\n\t\t"," Import-Filter von erstem Byte \n\t\t (Eintrag aus Import-Optionen der Verbindung)","\n\t","\n\t","\n\t\t","impVar_lImpFilterLastByte_opts","\n\t\t"," Import-Filter von letztem Byte \n\t\t (Eintrag aus Import-Optionen der Verbindung)","\n\t","\n\t","\n\t\t","impVar_sExtScriptName_opts","\n\t\t"," Name des externen Scripts (Eintrag \n\t\t aus Import-Optionen der Verbindung)","\n\t","\n\t","\n\t\t","impVar_lFiledate","\n\t\t"," Dateidatum der Importdatei","\n\t","\n\t","\n\t\t","impVar_fImportFile","\n\t\t"," File-Object der Importdatei \n\t\t (sh. auch JsFile)","\n\t","\n\t","\n\t\t","impVar_lConID_con","\n\t\t"," Feld 'id' der Verbindung aus \n\t\t Tabelle 'p_connections'","\n\t","\n\t","\n\t\t","impVar_sConSym_con","\n\t\t"," Feld 'connection_symbol' der \n\t\t Verbindung aus Tabelle 'p_connections'","\n\t","\n\t","\n\t\t","impVar_LDefNodeID_con","\n\t\t"," Feld 'default_id' der Verbindung \n\t\t aus Tabelle 'p_connections'","\n\t","\n\t","\n\t\t","impVar_lID_sll","\n\t\t"," Feld 'id' aus Tabelle 'sys_lookup_lists'","\n\t","\n\t","\n\t\t","impVar_sShortName_sll","\n\t\t"," Feld 'short_name' aus Tabelle \n\t\t 'sys_lookup_lists'","\n\t","\n\t","\n\t\t","impVar_alClasses","\n\t\t"," Objekt mit allen Melde-Klassen","\n\t","\n\t","\n\t\t","impVar_alTypes","\n\t\t"," Objekt mit allen Melde-Arten","\n\t","\n\t","\n\t\t","impVar_oldItems","\n\t\t"," Objekt mit allen Zuordnungen \n\t\t einer Verbindung","\n\t","\n\t","\n\t\t","impVar_lookupLists","\n\t\t"," Objekt mit allen Zuordnungen \n\t\t einer Nachschlageliste","\n\t","\n\t","\n\t\t","impVar_headLine","\n\t\t"," Array mit den Feldnamen","\n\t","\n\t","\n\t\t","impVar_importFile_Lines","\n\t\t"," Array mit zu importierenden \n\t\t Zeilen","\n\t","\n\t","\n\t\t","impVar_noLines","\n\t\t"," Anzahl der zu importierenden \n\t\t Zeilen","\n\t","\n\t","\n\t\t","impVar_sErrText","\n\t\t"," Fehler-Text (Eintrag in Feld \n\t\t 'last_import_error' entweder in Tabelle 'p_connections' oder in \n\t\t Tabelle 'sys_lookup_lists')","\n\t","\n\t","\n\t\t","impVar_bErr","\n\t\t"," Fehlerbit","\n\t","\n\t","\n\t\t","impVar_sScriptErrTxt","\n\t\t"," Fehler-Text aus Skript (Eintrag \n\t\t in Feld 'last_import_error' entweder in Tabelle 'p_connections' \n\t\t oder in Tabelle 'sys_lookup_lists')","\n\t","\n\t","\n\t\t","impVar_bErrLow","\n\t\t"," Fehlerbit aus Skript","\n\t","\n\t","\n\t\t","impVar_sCRLF","\n\t\t"," Zeilenumbruch","\n\t","\n","\n"," ","\n\n\n"]],"3":[["Verfügbare Variablen"]],"id":"75"})