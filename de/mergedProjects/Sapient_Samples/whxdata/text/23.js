rh._.exports({"0":[["Verbindungen"]],"1":[["\n"],["\n","Anwendungsstruktur | Datenaustausch | Datenaustausch-Module \n | Verbindungen","\n"],["\n","Unter dem jeweiligen Modul (Datenquelle) können Verbindungen \n parametriert werden.","\n"],["\n"," ","\n","\n\t","\n\t\t","Feld","\n\t\t","Beschreibung","\n\t","\n\t","\n\t\t","ID","\n\t\t","Eindeutige Identifikationsnummer. \n\t\t Wird vom System vergeben. Schreibgeschützt.","\n\t","\n\t","\n\t\t","Modul","\n\t\t","Lookup-Liste zur Auswahl des zugehörigen \n\t\t Moduls. Wird automatisch befüllt und kann geändert werden.","\n\t","\n\t","\n\t\t","Gerätetyp (optional)","\n\t\t","Lookup-Liste zur Auswahl des Gerätetyps.","\n\t\t","Die Auswahl des Gerätetyps dient standardmäßig \n\t\t nur Anzeigezwecken zur Strukturierung v.a. großer Projekte.","\n\t","\n\t","\n\t\t","ID (SPS Identifier)","\n\t\t","Eindeutige Bezeichnung der Steuerung \n\t\t (z.B. SPS) im Projekt, z.B. Ortskennzeichen oder Betriebsmittelkennzeichen. \n\t\t Standard-Gateway-Skripte verwenden diese ID für die Buchung von \n\t\t Verbindungszuständen diese Symbolik für die Adressierung der Verbindung \n\t\t in der Datenbank. Die Verbindungssymbolik im Gateway und hier \n\t\t sollten entsprechend gleichlautend sein.","\n\t","\n\t","\n\t\t","Name","\n\t\t","Verbindungsname. Der Name der Verbindung \n\t\t wird im WebClient an verschiedenen Stellen als Quelle visualisiert.","\n\t\t","Hinweis: Im Namen darf die Zeichenfolge \n\t\t \"##.\" nicht verwendet werden. Ansonsten wird eine Fehlermeldung \n\t\t angezeigt.","\n\t","\n\t","\n\t\t","Beschreibung (optional)","\n\t\t","Zusätzliche Beschreibung der Verbindung. \n\t\t Die Beschreibung der Verbindung wird im Webclient an verschiedenen \n\t\t Stellen als Quellenbeschreibung visualisiert.","\n\t","\n\t","\n\t\t","Knoten (Default)","\n\t\t","Lookup-Liste zur Auswahl eines Default-Knotens \n\t\t aus der Fertigungsstruktur. Diesem Knoten werden System-Meldung \n\t\t zur Verbindung und eventuell parametrierte Grenzwertverletzungen \n\t\t zugeordnet.","\n\t\t","Beim Import von Meldungstexten für das \n\t\t Meldesystem werden Meldungen standardmäßig diesem Knoten zugeordnet.","\n\t","\n\t","\n\t\t","Parent (optional)","\n\t\t","Lookup-Liste zur Auswahl einer übergeordneten \n\t\t Verbindung zur hierarchischen Darstellung.","\n\t","\n\t","\n\t\t","Sync (optional)","\n\t\t","Checkbox. 0 = Verbindung ist noch \n\t\t nicht synchronisiert; 1 = Verbindung ist synchronisiert. Default \n\t\t ist 0.","\n\t","\n\t","\n\t\t","Vorlageninstanz","\n\t\t","Vorlageninstanz, \n\t\t von der der Wert stammt. Nur zur Information; schreibgeschützt.","\n\t","\n\t","\n\t\t","Vorlagenreferenz","\n\t\t","Vorlagenreferenz. \n\t\t Nur zur Information; schreibgeschützt.","\n\t","\n\t","\n\t\t","Verbindungsstatus Nr.","\n\t\t","Anzeige des aktuellen Verbindungsstatus \n\t\t als Nummer. Nur zur Information; schreibgeschützt.","\n\t","\n\t","\n\t\t","Verbindungsstatus","\n\t\t","Anzeige des aktuellen Verbindungsstatus \n\t\t als Text. Nur zur Information; schreibgeschützt.","\n\t","\n\t","\n\t\t","Importeinstellungen (Meldungen)","\n\t\t","Hier \n\t\t werden die Importeinstellungen für den Zuli-Import eingetragen. \n\t\t Für Details, siehe unten.","\n\t","\n\t","\n\t\t","Auto \n\t\t Import","\n\t\t","Die \n\t\t Datei wird für einen automatischen Import durch die Legato Sapient \n\t\t Engine vorgemerkt. Über Jobs wird die angegebene Datei auf Änderungen \n\t\t überwacht und der Import bei Bedarf mit den gewählten Einstellungen \n\t\t automatisch durchgeführt.","\n\t","\n\t","\n\t\t","Letzter Zuli Import","\n\t\t","Datum des letzten Imports von Zuordnungslisten \n\t\t (Zuli). Nur zur Information; schreibgeschützt.","\n\t","\n\t","\n\t\t","Datum letzte Zuli","\n\t\t","Datum der zuletzt importierten Zuli. \n\t\t Nur zur Information; schreibgeschützt.","\n\t","\n\t","\n\t\t","Letzter Import-Fehler Text","\n\t\t","Text des letzten Import-Fehlers. \n\t\t Nur zur Information; schreibgeschützt.","\n\t","\n\t","\n\t\t","Letzter Import Variablenliste","\n\t\t","Datum \n\t\t des letzten erfolgreichen Variablen-Imports. Nur zur Information; \n\t\t schreibgeschützt.","\n\t","\n\t","\n\t\t","Datum letzte Datei Variablenliste","\n\t\t","Datum \n\t\t der Datei des letzten Variablen-Imports. Nur zur Information; \n\t\t schreibgeschützt.","\n\t","\n\t","\n\t\t","Letzter Import-Fehler Variablenliste","\n\t\t","Text \n\t\t des letzten Fehlers eines fehlerhaften Variablen-Imports. Nur \n\t\t zur Information; schreibgeschützt.","\n\t","\n\t","\n\t\t","Erweiterte Eigenschaften","\n\t\t","Die \n\t\t unter Grundkonfiguration | Erweiterte Eigenschaften | Zuordnungen \n\t\t von Erweiterten Eigenschaften | Erw. Eigenschaften (Verbindungen) \n\t\t verwalteten erweiterten Verbindungseigenschaften werden hier angehängt \n\t\t (je Eigenschaft eine Spalte) und können hier mit Werten versehen \n\t\t werden.","\n\t","\n\t","\n\t\t","Erw. Eigenschaften","\n\t\t","Die definierten erweiterten Eigenschaften \n\t\t werden hier als eigene Spalten angehängt und können mit Werten \n\t\t versehen werden.","\n\t\t","Die \n\t\t Parametrierung von erweiterten Eigenschaften ist in einem separaten \n\t\t Kapitel beschrieben, zu finden hier: ","Erweiterte Eigenschaften",".","\n\t","\n","\n"," ","\n"],["\n","Wie in der \n Feldbeschreibung erwähnt, gibt es abhängig von der Verbindungsart verschiedene \n erweiterte Eigenschaften, die unter Grundkonfiguration | Erweiterte Eigenschaften \n | Zuordnungen von Erweiterten Eigenschaften | Erw. Eigenschaften (Verbindungen) \n gepflegt werden.","\n","TIPP:","\n","Da \n diese erweiterten Eigenschaften von der selektierten Verbindungsart abhängen, \n können einige von ihnen nicht im Tabellengrid gepflegt werden, sondern \n nur im Details-View.","\n","Sollte eine \n erweiterte Eigenschaft für die gewählte Verbindungsart ein Pflichtfeld \n sein, so muss sie im Details View parametriert werden, um den neuen Eintrag \n in der Tabelle speichern zu können.","\n"],["\n","Die Steuerungen \n der Vormontage und Montage werden über ein Gateway, die der Logistikhalle \n über ein weiteres Gateway an die Datenbank angebunden. Entsprechend werden \n zwei Gateways (Gateway_1 und Gateway_2) angelegt. Gateway_1 erhält als \n Verbindungen zunächst die Bereiche Vormontage und Montage, unter denen \n jeweils die SPS-Systeme der Bereiche parametriert werden. Die Hierarchie \n erhält damit etwa folgendes Aussehen:","\n","Interne Werte     …","\n","Gateway_1         Vormontage \n SPS_VMON1","\n","                             SPS_VMON2","\n","                             SPS_VMON3","\n","                  Montage    SPS_MONT1","\n","                             SPS_MONT2","\n","Gateway_2         Logistik   SPS_LOGI1","\n","                             LOGI_PC_1","\n","                             LOGI_PC_2","\n"," ","\n"],["\n","In der Spalte \n \"Importeinstellungen (Meldungen)\" der Verbindung werden die \n Einstellungen für den Import festgelegt.","\n",":","\n","Bei \n den Parametern ist auf Groß-/Kleinschreibung zu achten!","\n"," ","\n","Folgende \n Einstellungen sind verbindlich in jedem Fall einzutragen:","\n","Filename='Pfad zur und Dateiname mit Endung' (Beispiel: \n C:\\Temp\\Importdateien\\GraphpicS5CSV.CSV)","\n","FileType='Angabe des Typs der Import-Datei' (Beispiel: \n 5)","\n","Default.AL_CLASS='ID der Default-Meldeklasse' \n Beispiel: 0) ","\n","Default.AL_TYPE='ID der Default-Meldeart' (Beispiel: \n 0)","\n"," ","\n","Folgende \n Einstellungen können optional eingetragen werden:","\n","Script='Name des auszuführenden Skripts' ","\n",":","\n","Bei \n Verwendung des FileType 20 (Benutzerdefiniertes Skript) ist diese Eingabe \n verbindlich.","\n","DeleteOldItems='Löschen alter Zuordnungen nach \n erneutem Import' (Beispiel: 1)","\n","UpdateItems='Aktualisieren bestehender Zuordnungen' \n (Beispiel: 1)","\n","Charset='Characterset der Import-Datei' (Beispiel: \n ISO8859_15)","\n"," ","\n","Folgende \n optionale Einstellungen werden nur bei den Datentypen 1 (S5-SEQ-Datei), \n 2 (S7-SEQ-Datei) und 7 (S7-SDF-Datei) ausgewertet und verarbeitet:","\n","ImportFilterOpType='ImportFilterOperationType' \n (mögliche Einträge: AB, EB, MB, SY); (Beispiel: SY)","\n",": \n ","\n","S","Y \n ist nur bei FileType 1 (S5-SEQ_Datei) zulässig.","\n","ImportFilterFirstByte='ImportFilter von (inklusive) \n erstem Byte' (Beispiel: 10)","\n","ImportfilterLastByte='ImportFilter bis (inklusive) \n letztem Byte' (Beispiel: 1000)","\n"," ","\n","Die \n beiden letzten dieser 3 Parameter werden nur ausgewertet, wenn der erste \n Parameter einen sinnvollen Eintrag enthält.","\n","Mit obigen \n Beispielwerten werden nur Zuordnungen von SY 10 bis SY 1000 importiert.","\n"," ","\n","Standardmäßig \n werden folgende Datenformate unterstützt:","\n","S5-SEQ-Dateien (*.seq) Sequenzielle Quelldatei \n eines Simatic S5-Programmes","\n","S7-SDF-Dateien (*.sdf) Empfohlene Quelldatei bei \n Verwendung eines Simatic S7-Programmes","\n","S7-SEQ-Dateien (*.seq) Sequenzielle Quelldatei \n eines Simatic S7-Programmes (beschränkt auf 40 Zeichen)","\n","P-DIAG (*.csv) aus Simatic PDiag exportierte Textdateien","\n","Textliste – Meldungsnr. & Text (*.txt) mit \n tabulatorgetrennter Meldungsnummer und Text","\n","P-DIAG XML (*.xml) Dateien","\n"," ","\n","Spezielle \n Formate für eine einheitliche Textbasis bei Verwendung von GEFASOFT GraphPic \n NT und Legato in einem Verbundprojekt sind:","\n","S5/S7-GraphPic-Importdateien (*.txt oder *.csv), \n die von GraphPic NT erzeugt werden können.","\n","Phönix CSV-Dateien","\n"," ","\n","Beispiele","\n","Typ 1 - S5-SEQ-Datei:","\n","FileName=C:\\Temp\\Sapient \n Meldungsimport\\ZuliTyp 1 S5Seq\\S5seq mit S-Merkern.SEQ","\n","FileType=1","\n","Default.AL_CLASS=0","\n","Default.AL_TYPE=0","\n","DeleteOldItems=1","\n","UpdateItems=1","\n","ImportFilterOpType=SY","\n","ImportFilterFirstByte=10","\n","ImportFilterLastByte=1000","\n"," ","\n","Typ 2 - S7-SEQ-Datei:","\n","FileName=C:\\Temp\\Sapient \n Meldungsimport\\ZuliTyp 2 S7Seq\\S7seq.SEQ","\n","FileType=2","\n","Default.AL_CLASS=0","\n","Default.AL_TYPE=0","\n","DeleteOldItems=1","\n","UpdateItems=1","\n","ImportFilterOpType=EB","\n","ImportFilterFirstByte=10","\n","ImportFilterLastByte=1000","\n"," ","\n","Typ 3 - S5-GraphPic-Importdatei \n txt:","\n","FileName=C:\\Temp\\Sapient \n Meldungsimport\\ZuliTyp 3 S5GraphpicTxt\\GP8-S57-txt.TXT","\n","FileType=3","\n","Default.AL_CLASS=0","\n","Default.AL_TYPE=0","\n","Charset=ISO8859_15","\n","DeleteOldItems=1","\n","UpdateItems=1","\n"," ","\n","Typ 4 - S7-GraphPic-Importdatei \n txt:","\n","FileName=C:\\Temp\\Sapient \n Meldungsimport\\ZuliTyp 4 S7GraphpicTxt\\GP8-S57-txt.TXT","\n","FileType=4","\n","Default.AL_CLASS=0","\n","Default.AL_TYPE=0","\n","Charset=ISO8859_15","\n","DeleteOldItems=1","\n","UpdateItems=1","\n"," ","\n","Typ 5 - S5-GraphPic-Importdatei \n csv:","\n","FileName=C:\\Temp\\Sapient \n Meldungsimport\\ZuliTyp 5 S5GraphpicCsv\\GP8-S57-csv.CSV","\n","FileType=5","\n","Default.AL_CLASS=0","\n","Default.AL_TYPE=0","\n","Charset=ISO8859_15","\n","DeleteOldItems=1","\n","UpdateItems=1","\n"," ","\n","Typ 6 - S7-GraphPic-Importdatei \n csv:","\n","FileName=C:\\Temp\\Sapient \n Meldungsimport\\ZuliTyp 6 S7GraphpicCsv\\GP8-S57-csv.CSV","\n","FileType=6","\n","Default.AL_CLASS=0","\n","Default.AL_TYPE=0","\n","Charset=ISO8859_15","\n","DeleteOldItems=1","\n","UpdateItems=1","\n"," ","\n","Typ 7 - S7-SDF-Datei:","\n","FileName=C:\\Temp\\Sapient \n Meldungsimport\\ZuliTyp 7 S7Sdf\\S7sdf.SDF","\n","FileType=7","\n","Default.AL_CLASS=0","\n","Default.AL_TYPE=0","\n","Charset=ISO8859_15","\n","DeleteOldItems=1","\n","UpdateItems=1","\n","ImportFilterOpType=MB","\n","ImportFilterFirstByte=10","\n","ImportFilterLastByte=1000","\n"," ","\n","Typ 8 - P-Diag-Datei:","\n","FileName=C:\\Temp\\Sapient \n Meldungsimport\\ZuliTyp 8 PDiagCsv\\PDiag_csv_Ger.csv","\n","FileType=8","\n","Default.AL_CLASS=0","\n","Default.AL_TYPE=0","\n","Charset=ISO8859_15","\n","DeleteOldItems=1","\n","UpdateItems=1","\n"," ","\n","Typ 9 - Einfache \n Textliste:","\n","FileName=C:\\Temp\\Sapient \n Meldungsimport\\ZuliTyp 9 EinfacheTextlisteTxt\\kurze_Textliste.txt","\n","FileType=9","\n","Default.AL_CLASS=0","\n","Default.AL_TYPE=0","\n","Charset=ISO8859_15","\n","DeleteOldItems=1","\n","UpdateItems=1","\n"," ","\n","Typ 10 - \n P-Diag-XML-Datei:","\n","FileName=C:\\Temp\\Sapient \n Meldungsimport\\ZuliTyp 10 PDiagXml\\K8SIM518.xml","\n","FileType=10","\n","Default.AL_CLASS=0","\n","Default.AL_TYPE=0","\n","Charset=ISO8859_15","\n","DeleteOldItems=1","\n","UpdateItems=1","\n"," ","\n","Typ 11 - \n Tab-Textdatei:","\n","FileName=C:\\Temp\\Sapient \n Meldungsimport\\ZuliTyp 11 TabText\\Tab_Text.txt","\n","FileType=11","\n","Default.AL_CLASS=0","\n","Default.AL_TYPE=0","\n","Charset=ISO8859_15","\n","DeleteOldItems=1","\n","UpdateItems=1","\n"," ","\n","Typ 12 - \n Phoenix-CSV-Datei:","\n","FileName=C:\\Temp\\Sapient \n Meldungsimport\\ZuliTyp 12 PhoenixCsv\\B8_BSP.csv","\n","FileType=12","\n","Default.AL_CLASS=0","\n","Default.AL_TYPE=0","\n","Charset=ISO8859_15","\n","DeleteOldItems=1","\n","UpdateItems=1","\n"," ","\n","FileName=C:\\Temp\\Sapient \n Meldungsimport\\ZuliTyp 12-1 PhoenixCsv\\ExtScript_CreateNode.csv","\n","FileType=12","\n","Script=imp_Phoenix_CSV_EXAMPLE_with_checkCreateNode.js","\n","Default.AL_CLASS=0","\n","Default.AL_TYPE=0","\n","Charset=ISO8859_15","\n","DeleteOldItems=1","\n","UpdateItems=1","\n"," ","\n","Typ 13 - \n Phoenix-M1-CSV-Datei:","\n","FileName=C:\\Temp\\Sapient \n Meldungsimport\\ZuliTyp 13 PhoenixM1Csv\\KB8A1-200.csv","\n","FileType=13","\n","Default.AL_CLASS=0","\n","Default.AL_TYPE=0","\n","Charset=ISO8859_15","\n","DeleteOldItems=1","\n","UpdateItems=1","\n"," ","\n","Typ 20 - \n Benutzerdefiniertes Skript:","\n","FileName=C:\\Temp\\Sapient \n Meldungsimport\\ZuliTyp 20 UserDefinedCsv\\ExtScript_UserDefined.csv","\n","FileType=20","\n","Script=imp_EXAMPLE_user_defined.js","\n","Default.AL_CLASS=0","\n","Default.AL_TYPE=0","\n","Charset=UTF8","\n","DeleteOldItems=1","\n","UpdateItems=1","\n"," ","\n"],["\n","Im Kontextmenü der Verbindungen (rechte Maustaste auf \n die Verbindung im Navigationsbaum) werden verschiedene Optionen angeboten.","\n"," ","\n","Alle Meldungen zurücksetzen","\n","Setzt alle anstehenden Meldungen der selektierten Verbindung \n (ohne untergeordnete Verbindungen) auf \"Gehend\".","\n"," ","\n","Alle Meldungen zurücksetzen (auch Unterverbindungen)","\n","Setzt alle anstehenden Meldungen der selektierten Verbindung \n (inklusive aller untergeordneter Verbindungen) auf \"Gehend\".","\n"," ","\n","Variablen: \n Import-Einstellungen…","\n","Öffnet einen \n Dialog zur Auswahl einer Variablendatei mit Variablen, die für die selektierte \n Verbindung importiert werden sollen.","\n","Über das \n Feld Zeichensatz\" kann aus einer Drop-down-Liste der zu verwendende \n Zeichensatz (z.B. UTF8) gewählt werden. Dies ist nur relevant, wenn die \n Importdatei Zeichen eines speziellen Zeichensatzes verwendet.","\n","Die folgenden \n Optionen stehen für den Import zur Verfügung:","\n","Existierende Variablen aktualisieren:","\n","Die \n Angaben von bereits vorhandenen Variablen werden beim Import ersetzt.","\n","Automatisch importieren:","\n","Die \n Datei wird für einen automatischen Import durch die Legato ApplicationEngine \n vorgemerkt. Über Jobs wird die angegebene Datei auf Änderungen überwacht \n und der Import bei Bedarf mit den gewählten Einstellungen automatisch \n durchgeführt.","\n"," ","\n","Variablen: \n Import starten","\n","Stößt den \n Import der Variablendatei mit den Einstellungen, die unter Import Settings… \n getroffen wurden, an.","\n","Nach dem \n Anstoß des Importvorgangs wird dem Anwender direkt eine Meldung angezeigt, \n dass der Import gestartet wurde und asynchron durch die AE ausgeführt \n wird.","\n"," ","\n","Meldungsdefinitionen: \n Import-Einstellungen…","\n","Öffnet einen \n Dialog, in dem Import-Einstellungen für Zuordnungslisten getroffen werden \n können. In der Regel werden die Meldungen aus vorhandenen Datenquellen \n manuell (über den LC2) oder automatisch (Systemprogramm ","Legato ApplicationEngine",") \n importiert. Die entsprechenden ApplicationEngine-Jobs sind in der separaten \n Dokumentation \"Legato_ApplicationEngine\"  genauer beschrieben. \n Die Scripting-Schnittstelle ermöglicht die Erstellung von Scripten zum \n Import spezieller Dateiformate sowie die automatische Festlegung von Meldungseigenschaften \n beim Import.","\n","Es kann eine \n Zuordnungsdatei für den Import ausgewählt werden.","\n","Unter \"Type\" \n legt man die Art der Zuordnungsdatei fest. Dies entscheidet darüber, wie \n die Meldungsnummer gebildet wird (das ist meist abhängig von der Erfassungsart \n der Meldung). Standardmäßig werden folgende Datenformate unterstützt:","\n","S5-SEQ-Dateien (*.seq) Sequenzielle Quelldatei \n eines Simatic S5-Programmes","\n","S7-SDF-Dateien (*.sdf) Empfohlene Quelldatei bei \n Verwendung eines Simatic S7-Programmes","\n","S7-SEQ-Dateien (*.seq) Sequenzielle Quelldatei \n eines Simatic S7-Programmes (beschränkt auf 40 Zeichen)","\n","P-DIAG (*.csv) aus Simatic PDiag exportierte Textdateien","\n","Textliste – Meldungsnr. & Text (*.txt) mit \n tabulatorgetrennter Meldungsnummer und Text","\n","P-DIAG XML (*.xml) Dateien","\n"," ","\n","Spezielle \n Formate für eine einheitliche Textbasis bei Verwendung von GEFASOFT GraphPic \n NT und Legato in einem Verbundprojekt sind:","\n","S5/S7-GraphPic-Importdateien (*.txt oder *.csv), \n die von GraphPic NT erzeugt werden können.","\n","Phönix CSV-Dateien","\n"," ","\n","Über das \n Feld \"Zeichensatz\" kann aus einer Drop-down-Liste der zu verwendende \n Zeichensatz (z.B. UTF8) gewählt werden. Dies ist nur relevant, wenn die \n Importdatei Zeichen eines speziellen Zeichensatzes verwendet.","\n","Das Feld \n \"Scriptname\" muss nur befüllt werden, wenn als Dateityp \"Benutzerdefiniert\" \n ausgewählt wurde. In diesem Fall wird hier der Scriptname der ApplicationEngine \n eingetragen, mit dem der Import durchgeführt werden soll. Diese Option \n wird verwendet, wenn für ein spezielles Dateiformat ein eigenes Importskript \n erstellt wurde.","\n","Die folgenden \n Optionen stehen zur Verfügung:","\n","Alte Zuordnungen löschen","\n","Bereits \n vorhandene Meldungen, die beim Import nicht mehr in der Datei erhältlich \n sind, werden gelöscht.","\n","Existierende Zuordnungen aktualisieren","\n","Die \n Angaben für bereits vorhandene Meldungen werden beim Import ersetzt.","\n","Nur Meldetexte aktualisieren","\n","Zusätzliche \n Anwahl, um die Eigenschaften einer Meldung (z.B. Klasse und Art) beim \n Import beizubehalten und nur den Meldungstext zu aktualisieren.","\n","Automatisch importieren","\n","Die \n Datei wird für einen automatischen Import durch das Programm durch die \n Legato ApplicationEngine vorgemerkt. Über Jobs wird die angegebene Datei \n auf Änderungen überwacht und der Import bei Bedarf mit den gewählten Einstellungen \n automatisch durchgeführt.","\n"," ","\n","Unter \"Operandenbereich\" \n können für umfangreiche Zuordnungsdateien Einschränkungen für den zu importierenden \n Operandenbereich festgelegt werden.","\n","Bei \"Vorgabewerte\" \n können Standardwerte für die Felder \"Klasse\" und \"Art\" \n definiert werden. Beim Import wird dann der Defaultwert verwendet, sofern \n durch den Import keine meldungsspezifischen Angaben übergeben werden (möglich \n bei den Dateiformaten von GraphPic).","\n"," ","\n","Meldungsdefinitionen: \n Import starten","\n","Stößt den \n Import der Zuordnungsdatei mit den Einstellungen, die unter Import Settings… \n getroffen wurden, an.","\n","Nach dem \n Anstoß des Importvorgangs wird dem Anwender direkt eine Meldung angezeigt, \n dass der Import gestartet wurde und asynchron durch die AE ausgeführt \n wird.","\n"," ","\n","Meldungsdefinitionen: \n Import starten","\n","Stößt den \n Import der Zuordnungsdatei an. Die Einstellungen werden im Feld \"Importeinstellungen \n (Meldungen)\" der Verbindung getroffen. Gibt es in diesem Feld keinen \n Eintrag, so wird eine entsprechende Fehlermeldung ausgegeben. Die entsprechenden \n Sapient Engine-Jobs sind in der separaten Dokumentation genauer beschrieben.","\n"," ","\n"],["\n","Für jede SPS-Verbindung gibt es im LC2 eine Synchronisationsfunktion, \n mit der Steuerungen synchronisiert/initialisiert werden können.","\n","Diese Funktion können Sie im LC2 im Bereich Anwendungsstruktur \n und der Datenaustausch-Tabelle (P_CONNECTIONS) finden:","\n"," ","\n","\n"," ","\n","Durch das Auswählen des Kontrollkästchens in der Spalte \n ","Sync"," aktivieren Sie die Synchronisation.","\n"," ","\n",":","\n","Das Aktivieren der Synchronisationsfunktion hat nur \n eine Auswirkung, wenn diese im entsprechenden ITC-Projekt programmiert \n und somit festgelegt ist, wie mit der aktivierten Synchronisation weiter \n verfahren werden soll. Dies ist die Voraussetzung für das Funktionieren \n der Sync-Funktion.","\n"," ","\n\n\n"]],"3":[["Erweiterte Eigenschaften"],["Importeinstellungen \n (Meldungen)"]],"5":[["Verbindungen"],["Funktion"],["Feldbeschreibung"],["Beispiel"],["Kontextmenü"],["Synchronisationsfunktion \n der Steuerelemente"]],"id":"23"})