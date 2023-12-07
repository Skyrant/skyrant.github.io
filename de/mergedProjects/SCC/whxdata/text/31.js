rh._.exports({"0":[["Nur Classic: Script-Beispiele"]],"1":[["\n"],["\n","Viele Scripten werden in ähnlicher Form immer wieder \n benötigt. Eine Auswahl wird in diesem Abschnitt angeboten.","\n"],["\n","Bei Start Ablauf des Cloud Connectors werden grundlegende \n Parameter gesetzt oder initialisiert.","\n","Die Identifikation des Cloud Connectors bei der Datenbank \n erfolgt per ID. Kommunizieren mehrere Cloud Connector-Projekte gleichzeitig \n mit einer Datenbank, werden sie über eine Variable Value.ProjectID unterschieden.","\n","Listing",":","\n","////////////////////////////////////////////////////////////////////","\n","//  script   : OnPrjStart","\n","//  called from event PrjStart (start application)","\n","//  revision :","\n","//  author   :","\n","//","\n","//  revision history:","\n","//","\n","////////////////////////////////////////////////////////////////////","\n"," ","\n","string prj_id, srv_ip","\n"," ","\n","debug('***********************************************************')","\n","debug('*  Application started version 3.2.0.0   ')","\n","debug('***********************************************************')","\n"," ","\n","// Cloud Connector project id","\n","Value.System.GwProjectId := 1","\n","prj_id := LToStr(Value.System.GwProjectId, 10)","\n"," ","\n","//LeWePo Init","\n","srv_ip := '192.168.1.100'","\n","Automation.LeWePoServ.ILeWePoServ.Init(prj_id,","\n","                                       srv_ip,","\n","                                       '/Legato/Visu/ValIn.html')","\n"," ","\n"],["\n","Zur TimeOut-Überwachung der Modul-Verbindung Cloud \n Connector auf Seite der SQL-Datenbank wird über ein zyklisches Event im \n Script die Rückmeldeprozedur der Datenbank p_sync_sysmodule aufgerufen.","\n","Wurde die Prozedur als Datenbankelement in das Cloud \n Connector-Projekt importiert, kann sie direkt aufgerufen werden. Alternativ \n besteht die Möglichkeit, die Prozedur per \"execute\"-Befehl auszuführen.","\n","Listing",": In \n diesem Listing sind beide Varianten vorhanden.","\n"," ","\n","////////////////////////////////////////////////////////////////////","\n","//  script GwSyncSysModule","\n","//  called from event TimerSyncSys (Cyclic \n 5 sec.)","\n","//  revision :","\n","//  author   :","\n","//","\n","//  revision history:","\n","//","\n","////////////////////////////////////////////////////////////////////","\n"," ","\n","long err","\n"," ","\n","//call db","\n","err := Database.Legato.P_SYNC_SYSMODULE(Value.System.GwProjectID)","\n"," ","\n","//on error","\n","if err <> 0 then","\n","  debug('ERROR: Database.Legato.P_SYNC_SYSMODULE: \n ' +","\n","        'Project-ID \n = ' + LToStr(Value.System.GwProjectID, 10) +","\n","        'Error-Code \n = ' + LToStr(err, 10))","\n","endif","\n"," ","\n","//******************************************************************","\n"," ","\n","//Alternative","\n"," ","\n","string szSql","\n"," ","\n","// build sql command","\n","szSql := 'CALL p_sync_sysmodule(' +","\n","          ltostr(Value.System.GwProjectID, \n 10) +","\n","          ')'","\n"," ","\n","//for test","\n","debug('script p_sync_sysmodule stmt:' + szSql)","\n"," ","\n","// execute sql command","\n","Database.Legato_P.Execute(szSql)","\n"," ","\n"],["\n","Die Variablenübergabe von der Datenbank über den Cloud \n Connector bis zum Prozess erfolgt bei Legato über eine Schnittstellentabelle \n p_out_values. Über ein zyklisches Event gesteuert, selektiert das Script \n aktuelle Datensätze aus der Tabelle und beschreibt die entsprechenden \n Cloud Connector-Variablen mit dem neuen Wert.","\n","Listing",":","\n","////////////////////////////////////////////////////////////////////","\n","//  script p_out_values","\n","//  called from event TimerOutValues (Cyclic \n 1 sec.)","\n","//  revision :","\n","//  author   :","\n","//","\n","//  revision history:","\n","//","\n","////////////////////////////////////////////////////////////////////","\n"," ","\n","bool    datatosel","\n","string  filter, value, acttime, errstr","\n"," ","\n","acttime := timestr('YYYY-MM-DD HH:mm:ss')","\n","filter  := printf(' where PROJECT_ID = %u \n and TIME_STARTED <= %s',","\n","                  Value.System.GwProjectID, \n '\\'' + acttime + '\\'')","\n"," ","\n","if Database.Legato.P_OUT_VALUES.select(filter, 2) then","\n","  datatosel := Database.Legato.P_OUT_VALUES.First","\n","endif","\n"," ","\n","while datatosel do","\n","  //select value_format of variable","\n","  switch Database.Legato.P_OUT_VALUES.VALUE_FORMAT","\n","    case 1:","\n","      value := Database.Legato.P_OUT_VALUES.VALUE_NUM.AsString","\n","      break","\n","    case 2:","\n","      value := Database.Legato.P_OUT_VALUES.VALUE_BOOL.AsString","\n","      break","\n","    case 3:","\n","      value := Database.Legato.P_OUT_VALUES.VALUE_STR.AsString","\n","      break","\n","  end","\n","  //Check for variable selected from database","\n","  if isvar(Database.Legato.P_OUT_VALUES.VALUE_SYMBOL) \n then","\n","    strvar(Database.Legato.P_OUT_VALUES.VALUE_SYMBOL) \n := value","\n","    errstr := ''","\n","  else","\n","    //on error","\n","    debug('Script p_out_values: \n Var not existing: ' +","\n","          Database.Legato.P_OUT_VALUES.VALUE_SYMBOL)","\n","  endif","\n","  datatosel := Database.Legato.P_OUT_VALUES.Next","\n","enddo","\n"," ","\n"],["\n","Wertänderungen, z.B. von OPC-Variablen (aber auch allen \n anderen Variablen), sollen vom Cloud Connector erfasst und in die Datenbank \n gebucht und / oder direkt an die Web-Applikation zur Anzeige im WebClient \n geschickt werden.","\n","Dazu wird in den Variablen-Eigenschaften als Reaktion \n \"Skript ausführen\" angewählt. Ein Beispiel für ein solches Script \n ist \"GwValNumIn\" für numerische Variablenwerte vom Typ \"long\". \n Entsprechend dem zu buchenden Datentyp kann das Script auch für \"Bool\", \n \"String\", \"Double\" etc. angepasst werden.","\n","Das Script GwValNumIn ruft auf:","\n","Script.CommonFunctions.Check_PLC_ChangeRate(string \n plc, bool test)","\n","Vor allem in der Testphase von Kopplungen kann es aufgrund \n von Fehlern immer wieder vorkommen, dass sich Variablenwerte sehr häufig \n (\"zyklisch\") ändern, ohne dass diese Änderungen als prozessrelevant \n gebucht werden sollen. Zur Überwachung der Aktivität von Datenquellen \n (z.B. SPS) wird dieses Script aufgerufen, das als Rückgabewert den Status \n der Verbindung liefert (zyklische Aktivität oder OK).","\n","Automation.LeWePoServ.ILeWePoServ.ValIn(string \n varname, string value)","\n","Einbuchen der Variable in die Automation-Schnittstelle \n mit der Methode ValIn. Die Variable kann in der Web-Applikation direkt \n angezeigt werden.","\n","Database.Legato.GW_VAL_NUM_IN(long ProjectID, \n string varname, long value, string updtime)","\n","Einbuchen des Variablenwertes in die Datenbank unter \n Angabe der Projekt-ID des Cloud Connectors, des Variablensymbols wie in \n der Datenbank parametriert, des Wertes und dem Zeitstempel der Wertänderung.","\n","Parameter des Scripts",":","\n","\n\t","\n\t\t","FULLNAME","\n\t\t","Übergabe \n\t\t des Variablennamens mit vollständigem Pfad. Es wird dabei angenommen, \n\t\t dass das Variablen-Symbol in der Datenbank identisch mit FULLNAME \n\t\t im Cloud Connector ist.","\n\t\t","Beim Aufruf des Scripts als Reaktion auf eine \n\t\t Wertänderung kann für diesen Parameter die Systemvariable @fullname \n\t\t angegeben werden.","\n\t","\n\t","\n\t\t","VALUE","\n\t\t","Übergabe \n\t\t des aktuellen Variablenwerts an das Script.","\n\t\t","Beim Aufruf des Scripts als Reaktion auf eine \n\t\t Wertänderung kann für diesen Parameter die Systemvariable @value \n\t\t angegeben werden.","\n\t","\n","\n"," ","\n","Aufrufbeispiel",":","\n","Script.CommonFunctions.GwValNumIn(@fullname, @value)","\n"," ","\n","Listing",":","\n","////////////////////////////////////////////////////////////////////","\n","//  script GwValNumIn","\n","//  called as reaction on value-change of \n variables","\n","//  revision :","\n","//  author   :","\n","//","\n","//  revision history:","\n","//","\n","////////////////////////////////////////////////////////////////////","\n"," ","\n","string plc, updtime","\n","bool   ok","\n","long   err","\n"," ","\n","// get PLC-Name from fullname of the var","\n","// Fullname like \"OPC.GOPS.PLC.Foldername.Varname\"","\n"," ","\n","plc := StrToken(FULLNAME,'.',3)","\n"," ","\n","// Check the cyclic-state of the PLC-connection","\n","// If there are to many value-changes in a certain \n period,","\n","// the changes are not entered into the database to \n aviod","\n","// overload of database and connections.","\n","ok := Script.CommonFunctions.Check_PLC_ChangeRate(plc,false)","\n"," ","\n","if not ok then","\n","  debug('Script GwValNumIn: PLC ' + plc +","\n","        ' sends \n cyclic value-changes!')","\n","  return","\n","endif","\n"," ","\n","// Send new value as string to the WebServer","\n","Automation.LeWePoServ.ILeWePoServ.ValIn(FULLNAME,LtoStr(VALUE,10))","\n"," ","\n","// Call procedure to enter new value into the database","\n","updtime := eventtimestr('YYYY-MM-DD HH:mm:ss')","\n","err := Database.Legato.GW_VAL_NUM_IN(Value.System.GwProjectID,","\n","                                     FULLNAME,","\n","                                     VALUE,","\n","                                     updtime)","\n"," ","\n","if err <> 0 then","\n","  debug('Script GwValNumIn: Error ' + LToStr(err,10) \n +","\n","        ' calling \n DB-procedure GW_VAL_NUM_IN!')","\n","endif","\n"," ","\n"],["\n","Vor allem in der Testphase von Kopplungen kann es aufgrund \n von Fehlern immer wieder vorkommen, dass sich Variablenwerte sehr häufig \n (\"zyklisch\") ändern, ohne dass diese Änderungen als prozessrelevant \n gebucht werden sollen. Zur Überwachung der Aktivität von Datenquellen \n (z.B. SPS) wird dieses Script aufgerufen, das als Rückgabewert den Status \n der Verbindung liefert (zyklische Aktivität oder OK).","\n","Das Beispielscript legt Arrays für Steuerungsnummern \n von 0 bis 100 an. Die Arraygrößen können an die realen Gegebenheiten angepasst \n werden.","\n","Das Script GwValNumIn ruft auf:","\n","Script.Tools.GetPlcNo(string plc)","\n","Dieses Script ist sehr projektabhängig. Das Script \n muss anhand des übergebenen Strings plc (Name der Verbindung) eine eindeutige \n numerische Kennung zurückgeben. Dies kann z.B. durch ein internes Array \n im Script oder feste Zuweisungen geschehen.","\n","Parameter des Scripts",":","\n","\n\t","\n\t\t","PLC","\n\t\t","Übergabe \n\t\t des Verbindungsnamens der zu checkenden (SPS-)Verbindung.","\n\t","\n\t","\n\t\t","TEST","\n\t\t","Angabe \n\t\t der Betriebsart des Scripts:","\n\t\t","TEST = 0: Vollständige Auswertung des Zustands \n\t\t der Verbindung","\n\t\t","TEST = 1: Rückgabe des aktuellen Zustands der \n\t\t Verbindung.","\n\t","\n","\n"," ","\n","Listing",":","\n","////////////////////////////////////////////////////////////////////","\n","//  script Check_PLC_ChangeRate","\n","//  called from GwValNumIn","\n","//  revision :","\n","//  author   :","\n","//","\n","//  revision history:","\n","//","\n","////////////////////////////////////////////////////////////////////","\n"," ","\n","long        plcnr","\n","static long firsttimecyclic[100]","\n","static long lastchange[100]","\n","static long OKstart[100]","\n","static bool blocked[100]","\n","static long i","\n"," ","\n","string      act_time_s","\n","long        act_time","\n","long        delta","\n"," ","\n"," ","\n","plcnr := Script.Tools.GetPlcNo(PLC)","\n"," ","\n","// When testing only return status of the connection \n (cyclic/OK)","\n","if Test then","\n","  if i < 100 then i := i + 1 else i := \n 1 endif","\n","  // enter every 100th value even with status \n cyclic","\n","  if i = 100 then","\n","    return true","\n","  else","\n","    // return status","\n","    return not blocked[plcnr]","\n","  endif","\n","endif","\n"," ","\n","// Check real status of the connection (cyclic/OK)","\n","act_time_s := TimeStr('YYYY/MM/DD HH:mm:ss')","\n","act_time   := TimeToL('YYYY/MM/DD HH:mm:ss', \n act_time_s)","\n"," ","\n","delta := act_time - lastchange[plcnr]","\n"," ","\n","// cyclic ?","\n","if delta > 3 then","\n","  firsttimecyclic[plcnr] := 0","\n","else","\n","  if firsttimecyclic[plcnr] = 0 then","\n","    firsttimecyclic[plcnr] := act_time","\n","  endif","\n","endif","\n"," ","\n","// Analyse rate","\n","if not blocked[plcnr] then","\n","  // If there are to many value-changes in \n the last 60 secs or more:","\n","  // Set connection-status to \"blocked, \n cyclic value-changes\"","\n","  if (firsttimecyclic[plcnr] > 0) and \n (firsttimecyclic[plcnr] + 60 < act_time) then","\n","    blocked[plcnr] := true","\n","    debug('Script Check_PLC_ChangeRate: \n Connection ' +","\n","          PLC \n + ': Value-changes blocked')","\n","  endif","\n","else","\n","  // If the value-change-cycle is valid since \n more than 60 secs:","\n","  // Set connection-status to \"OK\"","\n","  if (firsttimecyclic[plcnr] = 0) or","\n","  (firsttimecyclic[plcnr] + 60 > act_time) \n then","\n","    if OKStart[plcnr] = 0 then","\n","      OKStart[plcnr] \n := lastchange[plcnr]","\n","    endif","\n","  else","\n","    OKStart[plcnr] := 0","\n","  endif","\n","  if (OKStart[plcnr] > 0) and (OKStart[plcnr] \n + 30 < act_time) then","\n","    blocked[plcnr] := false","\n","    firsttimecyclic[plcnr] := 0","\n","    OKStart[plcnr] := 0","\n","    debug('Script Check_PLC_ChangeRate: \n Connection ' +","\n","          PLC \n + ': Value-changes cyclic-state OK')","\n","  endif","\n","endif","\n"," ","\n"," ","\n","// Diagnose for testing","\n","string lt","\n"," ","\n","lt := 'Script Check_PLC_ChangeRate: Connection ' + \n PLC","\n","if blocked[plcnr] then","\n","  lt := lt + ' Blocked'","\n","else","\n","  lt := lt + ' OK     '","\n","endif","\n"," ","\n","lt := lt + ' Delta: ' + ltostr(delta, 10)","\n","Debug(lt)","\n"," ","\n","// Save processingtime","\n","lastchange[plcnr] := act_time","\n"," ","\n","return not blocked[plcnr]","\n"," ","\n"],["\n","Scriptbeispiel, bei dem angenommen wird, dass Störmeldungen \n in der Steuerung als Datenblock zur Verfügung stehen, und jedes Bit im \n Block einer Störmeldung zugeordnet ist. Der Datenblock wird z.B. über \n die OPC-Schnittstelle zyklisch gepollt und bitweise auf Änderung überprüft. \n Array beginnt bei der Adressierung mit 0, d.h., Array[0] ist das erste \n Feld.","\n","Im Cloud Connector-Projekt ist der Datenblock als OPC-Item \n angelegt, z.B. \"OPC.GOPS.PLC1.AlarmBlock\".","\n","Im gleichen Knoten muss ein Vergleichsblock parametriert \n werden, im dem jeweils das alte Blockabbild abgelegt werden kann, z.B. \n \"OPC.GOPS.PLC1.AlarmBlock_Compare\".","\n","Das Script vergleicht bitweise den \"AlarmBlock\" \n mit \"AlarmBlock_Compare\" und ruft bei einem geänderten Bit das \n Script \"OnChangeAlarmBit\" auf, das die Information für die Datenbankprozedur \n aufbereitet.","\n","Das Script AlarmBitArray ruft auf:","\n","Script.AlarmHandler.OnChangeAlarmBit","\n","Der Aufruf erfolgt indirekt aus dem Befehl CompBitArray. \n Die Parameter von OnChangeAlarmBit werden automatisch versorgt.","\n","Parameter des Scripts",":","\n","\n\t","\n\t\t","FULLNAME","\n\t\t","Übergabe \n\t\t des Variablennamens mit vollständigem Pfad. Es wird dabei angenommen, \n\t\t dass das Variablen-Symbol in der Datenbank identisch mit FULLNAME \n\t\t im Cloud Connector ist.","\n\t\t","Beim Aufruf des Scripts als Reaktion auf eine \n\t\t Wertänderung kann für diesen Parameter die Systemvariable @fullname \n\t\t angegeben werden","\n\t","\n\t","\n\t\t","VALUE","\n\t\t","Übergabe \n\t\t des aktuellen Variablenwerts an das Script.","\n\t\t","Beim Aufruf des Scripts als Reaktion auf eine \n\t\t Wertänderung kann für diesen Parameter die Systemvariable @value \n\t\t angegeben werden.","\n\t","\n","\n"," ","\n","Aufrufbeispiel",":","\n","Script.AlarmHandler.AlarmBitArray(@fullname, @value)","\n"," ","\n","Listing",":","\n","////////////////////////////////////////////////////////////////////","\n","//  script AlarmBitArray","\n","//  called as reaction on value-change of \n alarmblocks","\n","//  revision :","\n","//  author   :","\n","//","\n","//  revision history:","\n","//","\n","////////////////////////////////////////////////////////////////////","\n"," ","\n","block  b","\n","string vb","\n","long   bllen","\n"," ","\n","// Save temporary","\n","Value.Temp.VarName := FULLNAME","\n","b     := BlkVar(FULLNAME)","\n","bllen := BlockSize(b)","\n"," ","\n","// Name of Block to compare (oldblock)","\n","vb    := FULLNAME + '_Compare'","\n"," ","\n","// Check changes in datablock bitwise","\n","if IsVar(vb) then","\n","  CompBitArray(b, blkvar(vb), bllen, Script.AlarmHandler.OnChangeAlarmBit)","\n","  BlkVar(vb) := b","\n","else","\n","  debug('Script AlarmBitArray: Varname not \n valid: ' + vb)","\n","endif","\n"," ","\n"],["\n","Das Script bereitet die übergebenen Informationen für \n das Einbuchen in die Datenbank auf. Dies sind die Byte- und Bit-Adresse \n und der neue Zustand des Bits.","\n","Die Aufbereitung ist sehr projektspezifisch. Im Beispiel \n wird angenommen, dass Meldetexte mit einer Meldungsnummer in der Datenbank \n als einfache Verkettung von Byte- und Bit-Adresse bestehen, und dass das \n Operandensymbol aus Byte.Bit besteht.","\n","Das Script OnChangeAlarmBit ruft auf:","\n","Script.LegatoDB. DBAlarmIn2(string connection_symbol, \n long ext_code, string operand, long action, long associated_value)","\n","Parameter des Scripts",":","\n","\n\t","\n\t\t","BYTEADR","\n\t\t","Nummer \n\t\t des Bytes im Datenblock, in dem das geänderte Bit liegt","\n\t","\n\t","\n\t\t","BITADR","\n\t\t","Nummer \n\t\t des geänderten Bits im Datenblock","\n\t","\n\t","\n\t\t","VALUE","\n\t\t","Neuer \n\t\t Wert des Bits","\n\t","\n","\n"," ","\n","Listing",":","\n","////////////////////////////////////////////////////////////////////","\n","//  script OnChangeAlarmBit","\n","//  called from AlarmBitArray","\n","//  revision :","\n","//  author   :","\n","//","\n","//  revision history:","\n","//","\n","////////////////////////////////////////////////////////////////////","\n"," ","\n","string plc, operator","\n","long   err, ext_code, action, av","\n"," ","\n","// Get Connection Symbol (PLC-Name) from FULLNAME","\n","plc := StrToken(Value.Temp.VarName, '.', 4)","\n"," ","\n","// Create ID of alarm, like messagenumber in database,","\n","// p.ex. by chaining byte- and bitadress in the datablock)","\n","ext_code := StrToL(LToStr(BYTEADR, 10) + LToStr(BITADR, \n 10))","\n"," ","\n","// Create symbol for operator","\n","// p.ex. \"ByteNo.BitNo\"","\n","operator := LToStr(BYTEADR, 10) + '.' + LToStr(BITADR, \n 10)","\n"," ","\n","// Create action of the alarm: coming or going","\n","if VALUE then","\n","  // Coming","\n","  action := 0","\n","  debug('Script OnChangeAlarmBit: PLC ' + \n plc +","\n","        ': \n Operator: ' + operator + ' Coming')","\n","else","\n","  // Going","\n","  action := 1","\n","  debug('Script OnChangeAlarmBit: PLC ' + \n plc +","\n","        ': \n Operator: ' + operator + ' Going')","\n","endif","\n"," ","\n","// Associated value to the alarm (here 0)","\n","av := 0","\n"," ","\n","// Call script to enter dataset to the database","\n","err := Script.LegatoDB.DBAlarmIn2(plc, ext_code, operator, \n action, av)","\n"," ","\n","//on error","\n","if err <> 0 then","\n","  debug('Script OnChangeAlarmBit: Error calling \n Script.LegatoDB.DBAlarmIn2')","\n","endif","\n"," ","\n"],["\n","Das Script ruft die Datenbank-Prozedur GwAlarmIn2 auf \n und versorgt entsprechend deren Parameter.","\n","Parameter des Scripts",":","\n","\n\t","\n\t\t","CONNECTION_SYMBOL","\n\t\t","Name \n\t\t der Verbindung, wie sie in der Datenbank parametriert ist.","\n\t","\n\t","\n\t\t","EXT_CODE","\n\t\t","Meldungsnummer \n\t\t der Störmeldung, wie sie bei der Verbindung in der Meldetextliste \n\t\t parametriert ist.","\n\t","\n\t","\n\t\t","OPERATOR","\n\t\t","Symbolische \n\t\t Bezeichnung der Störmeldung in der Meldetextliste.","\n\t","\n\t","\n\t\t","ACTION","\n\t\t","Aktion \n\t\t dieser Buchung, wie sie in der Datenbank verarbeitet wird:","\n\t\t","0 = Störmeldung kommend","\n\t\t","1 = Störmeldung gehend","\n\t\t","2 = Verbindung ist fehlerfrei, alle evtl. offenen \n\t\t Störmeldungen werden abgeschlossen","\n\t","\n\t","\n\t\t","ASSOCIATED_VALUE","\n\t\t","Begleitwert \n\t\t dieser Störmeldung, z.B. ein Prozesswert.","\n\t","\n","\n"," ","\n","Listing",":","\n","////////////////////////////////////////////////////////////////////","\n","//  script DBAlarmIn2","\n","//  called from OnChangeAlarmBit","\n","//  revision :","\n","//  author   :","\n","//","\n","//  revision history:","\n","//","\n","////////////////////////////////////////////////////////////////////","\n"," ","\n","long err","\n"," ","\n","// Call procedure GW_ALARM_IN2","\n","// CONNECTION_SYMBOL Name of the connection (source) \n in the database","\n","// EXT_CODE          Number \n of the alarm (numeric)","\n","// OPERAND           Operator \n (string)","\n","// ACTION            0: \n coming / 1: going / 2: connection without any pending alarm","\n","// ASSOCIATED_VALUE  Value to associate with \n this alarm in the database","\n"," ","\n","err := Database.Legato.GW_ALARM_IN2(CONNECTION_SYMBOL,","\n","                                    EXT_CODE,","\n","                                    OPERATOR,","\n","                                    ACTION,","\n","                                    ASSOCIATED_VALUE)","\n"," ","\n","// on error","\n","if err <> 0 then","\n","  debug('Script DBAlarmIn2: Error ' + LToStr(err, \n 10) +","\n","        ' Connection \n ' + CONNECTION_SYMBOL            +","\n","        ' Ext_Code \n ' + LToStr(EXT_CODE, 10)           +","\n","        ' Operator \n ' + OPERATOR                       +","\n","        ' Action \n ' + LToStr(ACTION, 10))","\n","endif","\n"," ","\n","return err","\n"," ","\n"],["\n","Die Standard-Logbuchfunktion per \"debug\"-Befehl \n erfolgt in das Projekt-Logbuch. Protokollierung in eigene Protokolldateien \n von einem Win64-Cloud Connector aus in ein beliebiges Verzeichnis kann \n über folgende Scripte projektiert werden.","\n","Bei Aufruf von \"WriteToProtFile\" wird in \n die angegebene Protokolldatei im vorbelegten Pfad \"ProtFilePath\" \n der angegebene Text geschrieben. Vor den Text wird der aktuelle Zeitstempel \n gesetzt. Würde die vorbelegte Maximalgröße \"ProtFileMaxSize\" \n der Datei überschritten, werden die Protokoll-Archivdateien um einen Index \n verschoben, und die aktuelle Protokolldatei mit Index 1 archiviert. Das \n Protokollarchiv mit Index \"ProtFileMaxNumber\" wird gelöscht.","\n","Für die Protokolle sind im Projekt-Start-Script einige \n Vorbelegungen festzulegen. Hier der Auszug aus dem Script \"OnPrjStart\":","\n","//Protocols","\n","Value.Protocol.ProtFilePath      := \n 'C:\\\\temp\\\\'","\n","Value.Protocol.ProtFileMaxSize   := \n 1024","\n","Value.Protocol.ProtFileMaxNumber := 10","\n","if Script.Protocol.CheckPath <> 0 then","\n","  debug('Script OnPrjStart: Error calling \n CheckPath')","\n","endif","\n"," ","\n","Interne Variable:","\n","String Value.Protocol.ProtFilePath","\n","Angabe des Pfads, in den die Protokolldateien geschrieben \n werden. Der Cloud Connector unter dem zur Laufzeit aktuellen Benutzer \n muss Schreib/Leserechte auf diesem Laufwerk besitzen.","\n","Int Value.Protocol.ProtFileMaxSize","\n","Maximalgröße einer Protokolldatei in Bytes.","\n","Int Value.Protocol.ProtFileMaxNumber","\n","Anzahl der Archiv-Protokolldateien bezogen auf einen \n Protokolldatei-Namen.","\n"," ","\n","Das Script WriteToProtFile ruft auf","\n","Script.Protocol.MoveProtFiles(string fullname)","\n","Der fullname ist der vollständige Pfad mit Dateiname \n der Protokolldatei.","\n","Parameter des Scripts",":","\n","\n\t","\n\t\t","FILENAME","\n\t\t","Name \n\t\t der Datei (mit Extension), in die protokolliert werden soll.","\n\t","\n\t","\n\t\t","PROTTEXT","\n\t\t","Zu \n\t\t protokollierender Text.","\n\t","\n","\n"," ","\n","Aufrufbeispiel für \n WriteToProtFile",":","\n","Script.Protocol.WriteToProtFile('Prot_1.log',","\n","                                'The \n quick brown fox jumps over the lazy dog')","\n"," ","\n","Listing",":","\n","////////////////////////////////////////////////////////////////////","\n","//  script     : \n WriteToProtFile","\n","//  called from: Scripts to write to protocol-file","\n","//  revision   :","\n","//  author     :","\n","//","\n","//  revision history:","\n","//","\n","////////////////////////////////////////////////////////////////////","\n"," ","\n","long     proterr, i","\n","bool     fileok","\n","file     f","\n","string   fullname, fulltext","\n"," ","\n","/*","\n","//Optional calling here or in OnPrjStart!","\n","proterr := Script.Protocol.CheckPath","\n","if proterr <> 0 then return endif","\n","*/","\n"," ","\n","fullname := Value.Protocol.ProtFilePath + FILENAME","\n","fulltext := TimeStr('YYYY-MM-DD HH:mm:ss') + ': ' + \n PROTTEXT","\n"," ","\n","f.open(fullname, 4)","\n","if f.size + (StrLen(fulltext)/2) > Value.Protocol.ProtFileMaxSize \n then","\n","  f.close","\n","  Script.Protocol.MoveProtFiles(fullname)","\n","  f.open(fullname, 2)","\n","  f.writeln('*********************************************************')","\n","  f.writeln('*  Created  : \n ' + TimeStr('YYYY-MM-DD HH:mm:ss') +","\n","            '                       *')","\n","  f.writeln('*********************************************************')","\n","  f.writeln('*  Attention: Do NOT \n leave this file opened in editors  *')","\n","  f.writeln('*             like \n NOTEPAD. You will lose data !        *')","\n","  f.writeln('*             Use \n tools like TEXTPAD or TAIL instead !  *')","\n","  f.writeln('*********************************************************')","\n","endif","\n","f.seek(f.size)","\n","f.writeln(SubStr(fulltext, 0, 1024))","\n","f.close","\n"," ","\n"],["\n","Im Projekt-Anlauf, bei Bedarf auch bei jedem Aufruf \n von \"WriteToProtFile\" (z.B. bei Netzlaufwerken), wird \"CheckPath\" \n ausgeführt, um die Zugriffsrechte auf das Protokoll-Verzeichnis zu prüfen.","\n","Listing",":","\n","////////////////////////////////////////////////////////////////////","\n","//  script     : \n CheckPath","\n","//  called from: Script WriteToProtFile or \n OnPrjStart","\n","//  revision   :","\n","//  author     :","\n","//","\n","//  revision history:","\n","//","\n","////////////////////////////////////////////////////////////////////","\n"," ","\n","string p","\n","long   err","\n","file   f","\n"," ","\n","if SubStr(Value.Protocol.ProtFilePath,","\n","          StrLen(Value.Protocol.ProtFilePath) \n - 1, 1) = '\\\\' then","\n","  p := Value.Protocol.ProtFilePath","\n","else","\n","  p := Value.Protocol.ProtFilePath + '\\\\'","\n","  Value.Protocol.ProtFilePath := p","\n","endif","\n"," ","\n","err := 0","\n","if not f.open(p + '~a.txt', 2) then","\n","  //Path invalid or access denied!","\n","  err := 1","\n","else","\n","  f.close","\n","  if not DeleteFile(p + '~a.txt') then","\n","    //Cannot delete testfile ~a.txt!","\n","    err := 2","\n","  endif","\n","endif","\n"," ","\n","switch err","\n","  case 0:  break","\n","  case 1:  p := '! 1: Path invalid \n or access denied' break","\n","  case 2:  p := '! 2: Cannot delete \n testfile ~a.txt' break","\n","  default: p := '!??: Unknown error'","\n","end","\n"," ","\n","return err","\n"," ","\n"],["\n","Bei Erreichen der max. Dateigröße einer Protokolldatei \n wird diese ins Archiv geschoben und bei Bedarf die älteste Archivdatei \n gelöscht.","\n","Parameter des Scripts",":","\n","\n\t","\n\t\t","FULLNAME","\n\t\t","Angabe \n\t\t von Pfad und Dateiname des Protokolls.","\n\t","\n","\n"," ","\n","Listing",":","\n","////////////////////////////////////////////////////////////////////","\n","//  script     : \n MoveProtFiles","\n","//  called from: Script WriteToProtFile","\n","//  revision   :","\n","//  author     :","\n","//","\n","//  revision history:","\n","//","\n","////////////////////////////////////////////////////////////////////","\n"," ","\n","long i","\n","bool fileok","\n"," ","\n","i := Value.Protocol.ProtFileMaxNumber","\n","if i < 1 then","\n","  i := 1","\n","  Value.Protocol.ProtFileMaxNumber := 1","\n","endif","\n"," ","\n","fileok := DeleteFile(fullname + '.' + LToStr(i, 10))","\n","while i > 0 do","\n","  i := i - 1","\n","  if i = 0 then","\n","    fileok := MoveFile(fullname, \n fullname + '.1')","\n","  else","\n","    fileok := MoveFile(fullname \n + '.' + LToStr(i, 10),","\n","                       fullname \n + '.' + LToStr(i + 1, 10))","\n","  endif","\n","  if not fileok then","\n","    debug('Script MoveProtFiles: \n ERROR moving ProtFiles near No ' + LToStr(i, 10))","\n","  endif","\n","enddo","\n"," ","\n\n\n"]],"2":[["Nur Classic: Nützliche Scriptbeispiele"]],"4":[["OnPrjStart"],["GwSyncSysModule"],["P_Out_Values"],["GwValNumIn"],["Check_PLC_ChangeRate"],["AlarmBitArray"],["OnChangeAlarmBit"],["DBAlarmIn2"],["WriteToProtFile"],["CheckPath"],["MoveProtFiles"]],"id":"31"})