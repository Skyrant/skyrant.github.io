rh._.exports({"1":[["\n"],["\n"],["\n","[Common]","\n","Port=1122","\n","MediaClientsConfigPath=/home/ap/supvis/mediaserver/mediaclients","\n","WavFilesPath=C:\\RL-BRASIL\\WavFiles","\n"," ","\n","[Database]","\n","Connect=TLEGO","\n","User=legato_write","\n","Password=F01D2092E5071540C91D8FF6FB46B4A49C7847F391684A37BB74FB93","\n","ProjectId=10000","\n","SQLMsgStmt=\"select a.ID, a.TIME_START, a.AL_TYPE, m.NODE, m.SYMBOL_1 as SYMBOL, l.NAME_0 as NODENAME from AL_PENDING a, AL_MESSAGE_ARCHIVE m, L_NODES l where a.TIME_END is NULL and a.AL_TYPE in(11, 12) and m.ID = a.MESSAGE and l.ID = m.NODE order by a.TIME_START\"","\n"," ","\n","In dieser Konfigurationsdatei sind allgemeine Einstellungen (Abschnitt [Common]) und Datenbankeinstellungen (Abschnitt [Database]) enthalten.","\n","Die Einträge haben folgende Bedeutung","\n","Abschnitt [Common]","\n\n","Port (Listenport des Servers für eingehende TCP Verbindungen der Clients)","\n\n","MediaClientsConfigPath (Konfigurationspfad der Clients)","\n\n","WavFilesPath (Pfad der WAV Dateien, in dem sich die WAV Dateien auf den Windows-Clients befinden)","\n\n"," ","\n","Abschnitt [Database]","\n\n","Connect (Name der Legato Datenbank)","\n\n","User (Datenbankbenutzer)","\n\n","Password (verschlüsseltes Datenbankpasswort)","\n\n","ProjectId (Kennung des Medienservers für den Aufruf von P_SYNC_SYSMODULE)","\n\n","SQLMsgStmt (SQL Statement zum Selektieren der Meldungen)","\n\n"," ","\n"],["\n","[Config]","\n","AlTypesCnt=2","\n"," ","\n","[AlType1]","\n","Type=11","\n","BitNo=1","\n","Melody=1","\n","Expression=\"\\D*\\d+(.*)?\"","\n"," ","\n","[AlType2]","\n","Type=12","\n","BitNo=0","\n","Melody=2","\n","Expression=\"\\D*\\d+(.*)?\"","\n"," ","\n","In dieser Konfigurationsdatei befindet sich die Konfiguration der Meldearten.","\n","Die Einträge haben folgende Bedeutung","\n","Abschnitt [Config]","\n\n","AlTypesCnt (Anzahl der Meldearten)","\n\n"," ","\n","Abschnitte [","AlType1, AlType2, …","]","\n\n","Type (Meldeart)","\n\n","BitNo (BitNummer, die in der Statusvariablen gesetzt wird, die Zählung beginnt mit 0)","\n\n","Expression (Regular Expression um die Taktnummer aus der Symbolik zu ermitteln)","\n\n","Melody (0 = keine Melodie abspielen (default), 1 = langsame Melodie abspielen, 2 = schnelle Melodie abspielen)","\n\n"," ","\n"],["\n","[Common]","\n","LinesCnt=1","\n","Line1Name=Montagem","\n"," ","\n","[Line1]","\n","StartScript=","\n","ShutdownScript=","\n","StatusVarsConnectionId=1303","\n","SectionsCnt=5","\n","Section1Name=Braco 1","\n","Section2Name=Braco 2","\n","Section3Name=Braco 3","\n","Section4Name=Braco 4","\n","Section5Name=Braco 5","\n"," ","\n","In dieser Konfigurationsdatei befindet sich die Konfiguration der Montagelinien.","\n","Die Einträge haben folgende Bedeutung","\n","Abschnitt [Common]","\n\n","LinesCnt (Anzahl der Montagelinien)","\n\n","Line1Name, Line2Name … (Namen der Montagelinien)","\n\n"," ","\n","Abschnitte [Line1, Line2, …]","\n\n","StartScript (Name des Scripts, das ausgeführt wird, wenn der Produktionsstatus der Montagelinie von 0 auf 1 wechselt.)","\n\n","ShutdownScript (Name des Scripts, das ausgeführt wird, wenn der Produktionsstatus der Montagelinie von 1 auf 0 wechselt.)","\n\n","StatusVarsConnectionId (VerbindungsId unter der das Konfigurationsprogramm MediaConfig die Statusvariablen anlegt)","\n\n","SectionsCnt (Anzahl der Bandabschnitte der Montagelinie)","\n\n","Section1Name, Section2Name … (Namen der Bandabschnitte der Montagelinie)","\n\n"," ","\n"],["\n","[Line1_Section1]","\n","Node=2048","\n"," ","\n","[Line1_Section2]","\n","Node=2049","\n"," ","\n","[Line1_Section3]","\n","Node=2050","\n"," ","\n","[Line1_Section4]","\n","Node=2051","\n"," ","\n","[Line1_Section5]","\n","Node=2052","\n"," ","\n","In dieser Konfigurationsdatei befindet sich die Konfiguration der Bandabschnitte.","\n","Die Einträge haben folgende Bedeutung","\n","Abschnitte [","Line","X","_Section","Y]","\n\n","Node (Id des Fertigungsknotens des Bandabschnitts)","\n\n"," ","\n"],["\n","[Config]","\n","FileCnt = 34","\n","1 = 'Melo 1'","\n","2 = 'Take 5'","\n","3 = 'Lolipop'","\n","4 = 'Pink Panther'","\n","5 = 'Entertainer'","\n","6 = 'Auld Lang Syne'","\n","7 = 'Bill Bailey'","\n","8 = 'Clementine'","\n","9 = 'Go tell it on the mountains'","\n","10 = 'Home on the Range'","\n","11 = 'John Browns Body'","\n","12 = 'Oh Susanna'","\n","13 = 'Yellow Rose of Texas'","\n","14 = 'Oh when the Saints'","\n","15 = 'Glory, glory Hallelujah'","\n","16 = 'Melodie 16'","\n","17 = 'Melodie 17'","\n","18 = 'Down by the Riverside'","\n","19 = 'Melodie 19'","\n","20 = 'Melodie 20'","\n","21 = 'Melodie 21'","\n","22 = 'Melodie 22'","\n","23 = 'Melodie 23'","\n","24 = 'Melodie 24'","\n","25 = 'Pause: Gong 1'","\n","26 = 'Pause: Gong 2'","\n","27 = 'Pause: Vierklang'","\n","28 = 'Pause: Jingle'","\n","29 = 'Pause: Ole, ole ...'","\n","30 = 'Bilder einer Ausstellung'","\n","31 = 'Menuett A-Dur'","\n","32 = 'An die Freude'","\n","33 = 'Auf in den Kampf'","\n","34 = 'Wilhelm Tell'","\n"," ","\n","In dieser Konfigurationsdatei befindet sich die Konfiguration der Melodien.","\n","Die Einträge haben folgende Bedeutung","\n","Abschnitt [","Config","]","\n\n","FileCnt (Anzahl der Melodien (WAV-Files))","\n\n","1 … N (Bezeichnung der Melodie)","\n\n"," ","\n","Der Dateiname einer Wavdatei setzt sich folgendermaßen zusammen:","\n","M<NR><1/2>.wav","\n","|  |   |     |","\n","|  |   |     |-------- Extension (.wav)","\n","|  |   |","\n","|  |   +-------------- 1 für Melodie langsam, 2 für Melodie schnell","\n","|  |","\n","|  +------------------ dreistellige Nummer der Melodie rechtsbündig (ggf. links","\n","|                      mit Nullen aufgefüllt)","\n","+--------------------- fixes Prefix M","\n"," ","\n"],["\n","[Config]","\n","1.111=1","\n","1.112=2","\n","2.111=11","\n","2.112=12","\n","1.121=11","\n","1.113=18","\n","1.122=12","\n"," ","\n","In dieser Konfigurationsdatei befindet sich die Zuordnung der Melodien zu Gruppen der Montagelinien. Die Einträge in dieser Datei werden vom Konfigurationsprogramm MediaConfig generiert.","\n","Die Einträge haben folgende Bedeutung","\n","Abschnitt [","Config","]","\n\n","X.Y=Z (X = Montageline, Y = Gruppe, Z = Nummer der Melodie))","\n\n"," ","\n"],["\n","[Config]","\n","GroupCnt=2","\n"," ","\n","Line1=1","\n","Group1=111","\n"," ","\n","Line2=1","\n","Group2=112","\n"," ","\n","Im Verzeichnis MediaClients ist für jede Anzeige eine Konfigurationsdatei (Name = Computername der Anzeige) abgelegt.","\n","Die Einträge haben folgende Bedeutung:","\n","Abschnitt [","Config","]","\n\n","GroupCnt (Anzahl der Gruppen, für die Daten benötigt werden)","\n\n","LineN (Nummer der Montagelinie von GroupN)","\n\n","GroupN (Bezeichnung der Gruppe)","\n\n"," ","\n\n\n"]],"2":[["Konfigurationsdateien"]],"3":[["Serverkonfiguration (Server.cfg)"],["Konfiguration der Meldearten (AlTypes.cfg)"],["Konfiguration der Montagelinien (Lines.cfg)"],["Konfiguration der Bandabschnitte (Sections.cfg)"],["Konfiguration der Melodien (WavFiles.ini)"],["Zuordnung der Melodien (WavFilesRel.ini)"],["Konfiguration Client (<COMPUTERNAME>.cfg)"]],"4":[["Konfigurationsdateien"]],"id":"117"})