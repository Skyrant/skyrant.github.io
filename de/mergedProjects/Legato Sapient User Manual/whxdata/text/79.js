rh._.exports({"0":[["KPI Versand"]],"1":[["\n  "],["\n  "," ","\n  "],["\n  ","Das KPI Mailing Boardlet wird verwendet, um Parameter für den KPI Versand Job zu konfigurieren.","\n  ","Weitere Informationen über den KPI Versand Job finden Sie in der Onlinehilfe unter den Kapitel: Prozeduren - KPIs - KPI Versand.","\n  "," ","\n  ","\n  "],["\n  ","\n","Die häufigsten Einstellungen auf den Reitern ","Einstellungen",", ","Layout"," \n und ","Filter"," sind unter ","Boardlet-Einstellungen"," \n beschrieben:","\n","\n\t","Reiter \n\t Einstellungen","\n\t","Reiter \n\t Layout","\n\t","Reiter \n\t Filter","\n","\n\n\n","\n  "],["\n  ","Vorlagen definieren die Parameter und den Zeitplan des zu konfigurierenden kpi-Versandauftrags.","\n  ","Wählen Sie ","+ Neue Vorlage hinzufügen,"," um den Konfigurationsdialog für Vorlagen zu öffnen.","\n  ","Vorlagensymbol","\n    Eindeutiges Symbol für den KPI-Versandauftrag.","\n  ","Vorlagenname","\n    Der Name der Vorlage in der Sprache der Vorlage. Sprachindizes können definiert und hinterlegt werden.","\n  ","Vorlagenbeschreibung","\n    Fügen Sie dem ausgewählten kpi-Mailing-Auftrag relevante Notizen für Empfänger hinzu.","\n  ","Knoten","\n    ID des abzufragenden Anlagenknotens.","\n  ","SE Module","\n    Ausführende Instanz des ausgewählten SE-Auftrags.","\n  ","Sprachgebietsschema","\n    Legt die Parameter Datum, Sprache und Einheit fest. Nur für das installierte System konfigurierte Sprachen sind auswählbar.","\n  ","E-Mail-Thema","\n    Vorlage für den Betreff der generierten Mails.","\n  ","E-Mail-Text","\n    Vorlage für den Inhalt der generierten Mails. ","\n  ","Content-Typ","\n    MIME-Inhaltstyp, der für die generierte E-Mail festgelegt werden soll. Muss gesetzt werden, wenn der Mail-Inhalt nicht reiner Text ist, sondern ein anderes Format wie z.B. HTML.","\n  ","Aktiv","\n    Aktiviert/ deaktiviert den Auftrag.","\n  ","Test"," ","\n    Prüft, ob eingefügte Parameter logisch sind.","\n  "],["\n  ","\n    ","${TEMPLATE!field!langix}"," Wird durch das angegebene Feld der Vorlage ersetzt. Das Feld kann sein:\n      ","\n        ","SYM"," - Symbol der Vorlage (Sprache wird ignoriert).","\n        ","NAME"," - Der Name der Vorlage in der Sprache der Vorlage, sofern kein spezifischer Sprachindex angegeben ist.","\n        ","DESC"," - Die Beschreibung der Vorlage in der Sprache der Vorlage. Es können spezifische Sprachindizes angegeben werden.","\n      ","\n    ","\n    ","${SCHEDULE!field!langix}"," Wird durch das angegebene Feld des Zeitplans ersetzt:\n      ","\n        ","SYM"," - Symbol der Vorlage (Sprache wird ignoriert).","\n        ","NAME"," - Der Name des Zeitplans in der Sprache der Vorlage. Zusätzliche Sprachindizes können definiert werden.","\n        ","DESC"," - Die Zeitplanbeschreibung in der Vorlagensprache, sofern kein spezifischer Sprachindex angegeben ist.","\n      ","\n    ","\n    ","${NODE!field!langix}"," Wird durch das angegebene Feld des für die Vorlage eingerichteten Anlagenknotens ersetzt:\n      ","\n        ","ID"," - Die Knoten ID (Sprache wird ignoriert)","\n        ","SYM"," - Kurzbezeichnung des Knotens (Sprache wird ignoriert)","\n        ","NAME"," - Der Knotenname in der Vorlagensprache, sofern kein spezifischer Sprachindex angegeben ist.","\n        ","DESC"," - Die Knotenbeschreibung in der Vorlagensprache, sofern kein spezifischer Sprachindex angegeben ist.","\n      ","\n    ","\n    ","${DATE!format!langix}"," - Formatiert den aktuellen Zeitstempel entsprechend dem angegebenen Format.","\n    ","${SHIFT!offset!...}"," - Informationen über die abgeschlossene Schicht:\n      ","\n        ","${SHIFT!offset!ID}"," - ID der Schicht.","\n        ","${SHIFT!offset!NAME!langix}"," - Name der Schicht in der Vorlagensprache, sofern kein spezifischer Sprachindex angegeben ist.","\n        ","${SHIFT!offset!START!format!langix}"," - Startzeit der Schicht wie angegeben formatiert.","\n        ","${SHIFT!offset!END!format!langix}"," - Ende der Schicht, formatiert wie angegeben.","\n        ","${SHIFT!offset!PDAY!format!langix}"," - Produktionstag der Schicht, wie angegeben formatiert.","\n      ","\n    ","\n  ","\n  "],["\n  ","\n    ","KPI values: ","[!K:node:offset:kpi!]"," - fügt den angegebenen KPI des angegebenen Knotens aus der n-ten abgeschlossenen Schicht ein.\n      ","\n        ","node"," - Die ID des Knotens oder sein Kurzname (einer der Platzhalter des 1. Durchgangs ${NODE!ID} oder ${NODE:SYM} kann verwendet werden)","\n        ","offset"," - gibt den Knotenpunkt der Schicht an. Z.B. 1 ist die letzte (neueste) abgeschlossene Schicht, 2 die davor usw.","\n        ","kpi"," - Das Symbol für den KPI-Typ","\n      ","\n    ","\n    ","KPI Limits: Die für eine Kennzahl konfigurierten Ober- und Untergrenzen, verwenden Sie ","KU ","für die Ober- oder ","KL"," für die Untergrenze.","\n    ","Shift protocol values: ","[!P:node:offset:varsym!]"," wird durch Werte aus dem Schichtprotokoll ersetzt.","\n    ","Aktuelle Werte: ","[!V:varsym!]","\n  ","\n  "," ","\n  ","Beispiel für Job Parameter","\n  ","{","\n        ","\"text\"",": ","\"Shift ending at ${SHIFT!1!END}: avtec=[!K:${NODE!ID}:1:avtec!],ftcon=[!K:${NODE!ID}:1:ftcon!],","\n      wtn=[!K:${NODE!ID}:1:wtn!], protobool [!P:${NODE!ID}:1:","var"," bool shift end!], curr [!V:online.sh DB","\n      Anlage[118].preal!], avtecL=[!KL:${NODE!ID}:1:avtec!], avtecU=[!KU:${NODE!ID}:1:avtec!], done!\"",",","\n        ","\"topic\"",": ","\"Testing ${TEMPLATE!SYM} / ${SCHEDULE!SYM}\"",",","\n        ","\"nodeId\"",": 118,","\n        ","\"useBCC\"",": true,","\n        ","\"langIndex\"",": 1,","\n        ","\"mailDebug\"",": true,","\n        ","\"contentType\"",": ","\"text/plain\"",",","\n        ","\"mailDefaultSession\"",": true","\n    }","\n  ","Wählen Sie ","Bestätigen",",um die Konfiguration für die gewählte Vorlage zu speichern.","\n  "],["\n  ","Selektierte Knoten","\n    ID des gewählten Knotens.","\n  ","Zeitbereich","\n    Legen Sie verschiedene Modi für die anzeige des Zeitfensters fest, wie ","Relative Zeit",","," Absolute Zeit",", ","Individueller Zeitraum"," oder ","Klicken & Wählen",".","\n  "],["\n  ","KPI Versand Jobs können über Auslöser automatisiert ausgeführt werden. Der Dialog ","Auslöser hinzufügen"," hilft dabei einem Mailing job einen bestimmten oder mehrere automatische Auslöser hinzuzufügen","\n  ","Wählen Sie ","Auslöser hinzufügen ",",um den Dialog Auslöser hinzufügen zu öffnen.","\n  ","Name","\n    Geben Sie einen Namen für den Trigger ein.","\n  ","Beschreibung","\n    Geben Sie eine kurze Beschreibung für den Trigger ein.","\n  ","Auslöser-Typ","\n    Wählen Sie einen Auslösertyp aus dem Dropdown-Menü.","\n  ","Zeitzone (Optional)","\n    Geben Sie die gewünschte Zeitzone aus dem Dropdown-Menü ein.","\n  ","Knoten","\n    Geben Sie den Knoten an, auf den der Trigger zugreifen soll, indem Sie den Knotennamen eingeben. (Für den Auslösertyp KPI-Berechnung)","\n  ","Versatz","\n    Definiert den Versatz von Schichten, deren Werte abgefragt werden sollen. Standardwert ist 1 für die letzte abgeschlossene Schicht. Der Wert 2 fragt die Schicht vor der letzten abgeschlossenen Schicht ab. (Für den Auslösertyp KPI-Berechnung)","\n  ","Schichtgruppe","\n    Geben Sie die Schichtgruppe an, die von dem Trigger betroffen ist. (Für den Auslösertyp KPI-Berechnung)","\n  ","Produktionsgruppe","\n    Geben Sie die Produktionsgruppe ein, die von dem Auslöser betroffen ist. (Für den Auslösertyp KPI-Berechnung)","\n  ","Klicken Sie auf ","Absenden",", um die Konfiguration des ausgewählten Parameters zu bestätigen.","\n  ","\n  "],["\n  ","KPI-Mailingaufträge können an ausgewählte Abonnenten gesendet werden. Der Dialog ","Abonnenten hinzufügen"," hilft Ihnen, eine Auswahl von Empfängern für einen ausgewählten Mailing-Job zu treffen.","\n  ","\n    Klicken Sie auf ","Abonnenten hinzufügen",", um das Dialogfeld Abonnenten hinzufügen zu öffnen.","\n  ","\n    ","Abonnenten","\n    Zeigt die Liste der eingestellten Abonnenten an, die eine E-Mail aus dem ausgewählten Mailing-Job erhalten können.\n  ","\n  ","\n    ","Neue Abonnenten hinzufügen","\n    Fügen Sie der Abonnentenliste aus dem Dropdown-Menü Empfänger hinzu, indem Sie die Sapient personID des Empfängers eingeben oder auswählen.\n  ","\n  ","Aktiv","\n    Aktiviert/deaktiviert den ausgewählten Empfänger für den Empfang von E-Mails des ausgewählten Jobs.","\n  ","\n    Anzahl und ausgewählte Empfänger eines Jobs werden in den Spalten ","Abonnements Liste ","und ","Abonnements Anzahl ","im KPI Mailing Boardlet angezeigt.","\n\n"]],"2":[["KPI Versand"]],"5":[["Allgemein"],["Einstellungen"],["Reiter Filter"],["Auslöser"],["Abonnements"]],"8":[["Vorlagen"],["Nutzbare Platzhalter für E-Mail Thema und Text:"],["Nutzbare Platzhalter für E-Mail Text"]],"id":"79"})