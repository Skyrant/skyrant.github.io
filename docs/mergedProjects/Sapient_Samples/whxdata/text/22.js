rh._.exports({"0":[["Meldeklassen"]],"1":[["\n"],["\n","Werksverwaltung | Meldungsmanagement | Meldeklassen","\n"],["\n","Durch die Zuordnung von Meldeklassen wird die Darstellung \n und Verarbeitung einer Meldung bestimmt. Hier können die Meldeklassen \n bearbeitet und neue Klassen hinzugefügt werden.","\n"],["\n"," ","\n","\n\t","\n\t\t","Feld","\n\t\t","Eigenschaft","\n\t","\n\t","\n\t\t","ID","\n\t\t","Eindeutige Identifikationsnummer \n\t\t der Klasse.","\n\t\t","Siehe auch weiter unten \"Reservierte \n\t\t System-Meldeklassen\".","\n\t","\n\t","\n\t\t","Name","\n\t\t","Frei wählbarer Name der Meldeklasse.","\n\t","\n\t","\n\t\t","Beschreibung (optional)","\n\t\t","Zusätzliche Beschreibung der Meldeklasse.","\n\t","\n\t","\n\t\t","Quittierart","\n\t\t","Lookup-Liste zur Auswahl einer Quittierart \n\t\t für die Meldeklasse. Die Quittierart legt fest, unter welchen \n\t\t Voraussetzungen die Meldung abgeschlossen wird. Folgende Quittierarten \n\t\t sind standardmäßig vorhanden:","\n\t\t","·         Quittiert \n\t\t & Protokoll: die Meldung wird mit der manuellen Quittierung \n\t\t in der Übersicht im WebClient abgeschlossen. Danach wird die Meldung \n\t\t im Archiv angezeigt.","\n\t\t","·         Protokoll: \n\t\t die Meldung erscheint nie in der Aktuellansicht, sondern wird \n\t\t automatisch abgeschlossen und im Archiv angezeigt. Die Melde-Dauer \n\t\t ist 0.","\n\t\t","·         Gehend: \n\t\t die Meldung wird in der Übersicht angezeigt. Mit dem Gehend-Telegramm \n\t\t wird sie abgeschlossen und ins Archiv verschoben.","\n\t\t","·         Quittiert: \n\t\t die Meldung wird mit der manuellen Quittierung im WebClient abgeschlossen \n\t\t und ins Archiv geschoben.","\n\t\t","·         Quittiert \n\t\t & Gehend: die Meldung muss im WebClient quittiert (abgeschlossen) \n\t\t werden und das Gateway muss ein Gehend-Ereignis übermitteln. Die \n\t\t Reihenfolge der beiden Ereignisse ist beliebig. Danach wird die \n\t\t Meldung im Archiv angezeigt.","\n\t\t","·         Quittiert \n\t\t nach Gehend: für die Meldung muss vom Gateway ein Gehend-Ereignis \n\t\t übermittelt werden. Die zusätzliche manuelle Quittierung durch \n\t\t den Anwender im WebClient ist erst anschließend möglich. Bis diese \n\t\t erfolgt ist, bleibt die Meldung in der Übersicht. Nach der manuellen \n\t\t Quittierung wird die Meldung abgeschlossen und ins Archiv verschoben.","\n\t\t","·         Quittierung \n\t\t optional: Meldung kann quittiert werden. Quittierung ist aber \n\t\t nicht zwingend erforderlich. Die Meldung wird mit dem Gehend-Telegramm \n\t\t ins Archiv verschoben und kann ggf. dort quittiert werden.","\n\t","\n\t","\n\t\t","Priorität (optional)","\n\t\t","Priorität der Meldeklasse. Wird hier \n\t\t ein Eintrag vorgenommen, so wird dieser unter \"Funkruf\" \n\t\t bei der Fertigungsstruktur als \"Vererbte Priorität\" \n\t\t angezeigt und kann dort knotenspezifisch überschrieben werden. \n\t\t Die Priorität beeinflusst zudem, ob diese Meldung unterdrückt \n\t\t wird, wenn in der Aktuellansicht der Filter auf \"Erstwert \n\t\t nach Priorität\" gesetzt ist. Je niedriger die Zahl, desto \n\t\t höher die Priorität (d.h. 1 = höchste Prio). Wird nichts eingetragen, \n\t\t wird von niedrigster Prio ausgegangen. Außerdem wird die Prio \n\t\t der Meldeklasse für Berechnete Werte verwendet.","\n\t\t","Die \n\t\t Priorität der Meldung beeinflusst auch, wie der Knoten im Layout-Boardlet \n\t\t eingefärbt wird, an dem die Meldung ansteht. Für Prio 1-9 wird \n\t\t die im Theme definierte Farbe für \"error\" verwendet, \n\t\t von 10-19 die Farbe für \"warning\", >= 20 die Farbe \n\t\t für \"info\". Bei 0 oder NULL erfolgt keine Einfärbung \n\t\t des Knotens im Layout.","\n\t","\n\t","\n\t\t","Aktive anzeigen (optional)","\n\t\t","Checkbox. \n\t\t Wenn aktiv, werden Meldungen dieser Klasse in der Meldungsübersicht \n\t\t der WebApp angezeigt, solange sie nicht abgeschlossen sind (nicht \n\t\t sinnvoll für die Quittierart Protokoll).","\n\t\t","Wenn nicht aktiv, werden Meldungen dieser \n\t\t Klasse nicht in der Meldungsübersicht angezeigt sondern nur ins \n\t\t Meldungsarchiv gebucht, sobald die Meldung abgeschlossen ist.","\n\t\t","Default ist 1.","\n\t","\n\t","\n\t\t","Archivieren (optional)","\n\t\t","Checkbox. \n\t\t Wenn aktiv, werden Meldungen dieser Klasse nach dem Abschließen \n\t\t im Meldungsarchiv gespeichert.","\n\t\t","Wenn nicht aktiv, werden Meldungen dieser \n\t\t Klasse nach Abschluss nicht im Meldungsarchiv gespeichert, sondern \n\t\t lediglich in der Meldungsübersicht angezeigt, solange die Meldung \n\t\t aktiv ist (nicht sinnvoll für Quittierart Protokoll).","\n\t\t","Default ist 1.","\n\t","\n\t","\n\t\t","Vererbungsrichtung","\n\t\t","Lookup-Liste zur Auswahl der Richtung, \n\t\t in der Meldungen in der Fertigungsstruktur vererbt werden (Meldungen \n\t\t eines Knotens auch für über- oder untergeordnete Knoten anzeigen).","\n\t\tDiese Einstellung gilt in den meisten Fällen nicht für Wertgrenzen! \n\t\t Siehe auch VALUE_ALARMS.","\n\t","\n\t","\n\t\t","Hierarchiestufe (optional)","\n\t\t","Lookup-Liste zur Auswahl einer Hierarchiestufe, \n\t\t bis zu der eine Vererbung von Meldungen erfolgt (um z.B. Meldungen \n\t\t nicht komplett bis zur Wurzel zu vererben, sondern nur bis zu \n\t\t einer bestimmten Knotenebene).","\n\t","\n\t","\n\t\t","Begründung erf. (optional)","\n\t\t","Checkbox. \n\t\t Wenn aktiv, wird der Bediener beim Quittieren der Meldung im WebClient \n\t\t aufgefordert, eine Begründung zur Meldung auszuwählen (siehe Begründungstexte). \n\t\t Die Begründung wird zusammen mit der Meldung im Meldearchiv gespeichert \n\t\t (nur sinnvoll bei quittierpflichtigen Meldungen).","\n\t","\n\t","\n\t\t","Benutzer erf. (optional)","\n\t\t","Checkbox. \n\t\t Wenn aktiv, wird der Bediener beim Quittieren der Meldung im WebClient \n\t\t zur Anmeldung mit Name und Kennwort aufgefordert. Eine Quittierung \n\t\t ohne Benutzeranmeldung ist nicht möglich. Der Name wird zusammen \n\t\t mit der Meldung im Meldearchiv gespeichert (nur sinnvoll bei quittierpflichtigen \n\t\t Meldungen).","\n\t","\n\t","\n\t\t","Kommentar erf. (optional)","\n\t\t","Checkbox. Wenn aktiv, wird der Bediener \n\t\t beim Quittieren der Meldung im WebClient aufgefordert, einen zusätzlichen \n\t\t Kommentar zur Meldungsursache einzugeben. Der Kommentar wird zusammen \n\t\t mit der Meldung im Meldearchiv gespeichert (nur sinnvoll bei quittierpflichtigen \n\t\t Meldungen).","\n\t","\n\t","\n\t\t","Weiterleitungsart \n\t\t ","Funkruf-Art"," \n\t\t (optional)","\n\t\t","Lookup-Liste zur Auswahl einer Weiterleitungsart \n\t\t für den Funkruf oder eine andere, wie Funkrufsysteme parametrierte \n\t\t weiterführende Behandlung der Meldungen.","\n\t\t","Folgende Arten sind standardmäßig wählbar:","\n\t\t","·         Keine \n\t\t Weiterleitung: Meldungen werden nicht an unter Funkruf-Empfänger \n\t\t parametrierte Module weitergeleitet.","\n\t\t","·         Erstwerterkennung: \n\t\t nur die Erstwert-Meldung wird an einen Funkruf-Empfänger weitergeleitet.","\n\t\t","·         generelle \n\t\t Weiterleitung: alle Meldungen dieser Klasse werden an einen Funkruf-Empfänger \n\t\t weitergeleitet.","\n\t\t","·         Erstwertverarb. \n\t\t innerhalb der Klasse: nur die Erstwert-Meldung innerhalb der Klasse \n\t\t wird an einen Funkruf-Empfänger weitergeleitet.","\n\t\t","·         Erstwertverarbeitung \n\t\t über Priorität: nur die Erstwert-Meldung der Priorität wird an \n\t\t einen Funkruf-Empfänger weitergeleitet.","\n\t\t","·         Sofortige \n\t\t Weiterleitung: Meldungen werden sofort an einen Funkruf-Empfänger \n\t\t weitergeleitet.","\n\t\t"," ","\n\t\t","Unter Anwendungsstruktur | Datenaustausch \n\t\t | Datenaustausch-Module | Verbindungen | Meldungsdefinitionen \n\t\t können die einzelnen Meldungen bei Bedarf mit einer anderen Parametrierung \n\t\t überschrieben werden.","\n\t","\n\t","\n\t\t","KPI-relevant","\n\t\t","Checkbox. Wenn aktiv, werden Meldungen \n\t\t dieser Klasse bei der KPI-Berechnung berücksichtigt. Der Verfügbarkeitstyp \n\t\t der Meldung wird über die Meldeart festgelegt.","\n\t\t","Diese \n\t\t Spalte wird nur angezeigt, wenn der Systemparameter -43 = 1 ist.","\n\t","\n\t","\n\t\t","Verfügbarkeits-Typ","\n\t\t","Lookup-Liste zur Auswahl eines \n\t\t Verfügbarkeits-Typs. Gibt an, wie Meldungen dieser Klasse bei \n\t\t der KPI-Berechnung berücksichtigt werden. ","\n\t\t","Diese \n\t\t Spalte wird nur angezeigt, wenn der Systemparameter -43 = 0 ist.","\n\t","\n\t","\n\t\t","Statistik-relevant (optional)","\n\t\t","Checkbox. \n\t\t Wenn aktiv, werden Meldungen dieser Klasse nach dem Erstwertprinzip \n\t\t (je Art und Knoten) für Verfügbarkeitsberechnungen herangezogen.","\n\t\t","Wenn nicht aktiv sind Meldungen dieser \n\t\t Klasse nicht verfügbarkeitsrelevant und haben keinen Einfluss \n\t\t auf statistische Berechnungen.","\n\t","\n\t","\n\t\t","Verfügbarkeits-Typ (optional)","\n\t\t",": Die Eingabe in diesem Feld wird nur berücksichtigt, \n\t\t wenn die Spalte \"Verfügbarkeitsrelevant\" auf 1 gesetzt \n\t\t ist. Andernfalls werden Meldungen dieser Klasse nicht für Verfügbarkeitsberechnungen \n\t\t herangezogen.","\n\t\t","Diese Spalte wird hier nur angezeigt, \n\t\t wenn der Systemparameter 106 = 0. Andernfalls wird der Verfügbarkeitstyp \n\t\t über die Art der Meldung bestimmt (siehe Meldearten).","\n\t\t","Lookup-Liste zur Auswahl des Verfügbarkeitstyps \n\t\t der Meldung. Gibt an, wie die Meldeklasse in der KPI-Berechnung \n\t\t (Anlagen-Verfügbarkeit) berücksichtigt wird. Keine Auswahl bedeutet, \n\t\t die Meldung ist nicht verfügbarkeitsrelevant.","\n\t\t","Zur Auswahl stehen:","\n\t\t","(Meldung gesamt / intern)","\n\t\t","(Pause gesamt / intern)","\n\t\t","Freizeit","\n\t\t","Meldung sonstige","\n\t\t","organisatorisch","\n\t\t","Pause geplant","\n\t\t","Pause TPM","\n\t\t","Pause zusätzlich","\n\t\t","systembedingt","\n\t\t","technisch","\n\t\t","Verbindungs-Unterbrechung","\n\t","\n\t","\n\t\t","MM relevant","\n\t\t","Checkbox. \n\t\t Wenn aktiv, steht die Meldeklasse im Meldungsmanagement des Webclients \n\t\t zur Auswahl zur Verfügung und kann somit z.B. für manuelle Meldungen \n\t\t verwendet werden.","\n\t\t","Default ist 1.","\n\t","\n\t","\n\t\t","Erstwerterkennung (optional)","\n\t\t","Checkbox. \n\t\t Wenn aktiv, werden Meldungen der gleichen Klasse auf Erstwertmeldung \n\t\t ausgewertet. Die Auswertung erfolgt auf der Hierarchiestufe (siehe \n\t\t Grundkonfiguration | Hierarchiestufen), bei der eine Art der Erstwerterkennung \n\t\t angegeben ist.","\n\t\t","Wenn nicht aktiv erfolgt keine Erstwerterkennung.","\n\t","\n\t","\n\t\t","Folgemeldungen löschen (optional)","\n\t\t","Checkbox.","\n\t\t","Für Meldungen von Klassen, die auf Erstwert \n\t\t ausgewertet werden (Checkbox Erstwerterkennung = 1), wird die \n\t\t Art der Behandlung von dem Erstwert folgenden Meldungen (Folgemeldungen), \n\t\t festgelegt. Eine Folgemeldung ist eine Meldung, die als Kommend \n\t\t gemeldet wird und bereits eine nicht abgeschlossene Meldung dieser \n\t\t Klasse vorhanden ist.","\n\t\t","Checkbox aktiv: Folgemeldungen der gleichen \n\t\t Klasse mit Erstwertmeldung werden nicht gebucht (gelöscht oder \n\t\t auch unterdrückt).","\n\t\t","Nur relevant bei Erstwerterkennung.","\n\t\t","Checkbox nicht aktiv: Folgemeldungen \n\t\t werden nicht gelöscht, d.h. jede Meldung wird gebucht.","\n\t","\n\t","\n\t\t","Bauteilbezogen speichern (optional)","\n\t\t","Checkbox. \n\t\t Wenn aktiv, wird die Meldung automatisch dem entsprechenden Bauteil \n\t\t zugeordnet. Das Bauteil muss unter Produktionsmanagement | Bauteilverfolgung \n\t\t dem entsprechenden Geltungsbereich zugeordnet sein.","\n\t","\n\t","\n\t\t","Störprotokoll (optional)","\n\t\t","Lookup-Liste \n\t\t zur Auswahl der Störprotokollbeschreibung, wenn für diese Meldeklasse \n\t\t ein Störprotokoll möglich sein soll.","\n\t","\n\t","\n\t\t","HF / SF (aktiv / gegangen / quittiert \n\t\t / erkannt / archiviert) (optional)","\n\t\t","Über \n\t\t diese Spalten können die Hintergrundfarbe (HF) und die Schriftfarbe \n\t\t (SF) der Meldungen im jeweiligen Status der Meldung bestimmt werden.","\n\t\t","·         aktiv: \n\t\t Die Meldung steht aktiv an und wird in der Meldungsübersicht angezeigt.","\n\t\t","·         gegangen: \n\t\t Die Meldung ist bereits gegangen, wird aber wegen fehlender Quittierung \n\t\t / Kommentar noch in der Meldungsübersicht angezeigt.","\n\t\t","·         quittiert: \n\t\t Die Meldung ist bereits quittiert, wird aber wegen fehlendem Gehend-Ereignis \n\t\t noch in der Meldungsübersicht angezeigt.","\n\t\t","·         erkannt: \n\t\t Die Meldung wurde auf den Status \"Erkannt\" gesetzt, \n\t\t ist aber noch nicht abgeschlossen.","\n\t\t","·         archiviert: \n\t\t Anzeige der Meldung im Meldungsarchiv.","\n\t","\n\t","\n\t\t","CSS Style","\n\t\t","CSS \n\t\t Style zur Formatierung von Meldungen. Für jeden Status einer Meldung \n\t\t kann eine Schriftart, eine Farbe, ein Symbol etc. definiert werden. \n\t\t Alle verfügbaren States, Styles und Icons sind unter \"","Formatierung","\" beschrieben.","\n\t","\n","\n"," ","\n"],["\n",":","\n","Es \n ist darauf zu achten, dass insbesondere die Spalten \"Quittierart\", \n \"Archivieren\" und \"Aktive anzeigen\" korrekt befüllt \n sind, da diese in logischer Abhängigkeit zueinander stehen. Andernfalls \n kann es zu Fehlern kommen, wenn z.B. eine quittierpflichtige Meldung nicht \n in der WebApp angezeigt wird und somit auch nicht quittiert werden kann \n (wenn die \"Quittierart\" auf \"Quittiert & Gehend\" \n steht und die Checkbox \"Aktive anzeigen\" nicht aktiviert ist).","\n","Die folgende \n Tabelle gibt Aufschluss über mögliche Kombinationen.","\n"," ","\n","\n\t","\n\t\t","Quittierungstyp","\n\t\t","Archivieren","\n\t\t","Aktive anzeigen","\n\t","\n\t","\n\t\t","Gehend","\n\t\t","x","\n\t\t","optional","\n\t","\n\t","\n\t\t","Protokoll","\n\t\t","x","\n\t\t","-","\n\t","\n\t","\n\t\t","Quittiert","\n\t\t","optional","\n\t\t","x","\n\t","\n\t","\n\t\t","Quittiert & Gehend","\n\t\t","optional","\n\t\t","x","\n\t","\n\t","\n\t\t","Quittiert nach Gehend","\n\t\t","optional","\n\t\t","x","\n\t","\n\t","\n\t\t","Quittierung optional","\n\t\t","x","\n\t\t","optional","\n\t","\n","\n"," ","\n"],["\n","Meldeklassen mit negativer ID sind vom System reserviert \n und dürfen nicht verändert werden. Bei einer Standardinstallation werden \n auch die IDs 0, 1 und 2 mit ausgeliefert, können aber auch projektspezifisch \n geändert werden. In diesem Fall ist bei Updates sicherzustellen, dass \n die projektspezifischen Änderungen nicht ungewollt durch den Standard \n überschrieben werden.","\n","Negative Meldeklassen-IDs korrespondieren mit den Verbindungs-IDs \n der Datenquelle System, der die Meldungen beim Auftreten zugeordnet werden.","\n","ID = 0 ist für die Klasse unbekannte Meldung reserviert \n und darf nicht verändert werden. Diese Klasse wird Meldungen zugeordnet, \n deren Meldungsnummer nicht in den Meldungsdefinitionen vorhanden ist. \n Die Meldung wird automatisch als nicht parametriert angelegt","\n","Die reservierten Klassen sind:","\n"," ","\n","\n\t","\n\t","\n\t","\n\t\t","Klassen-ID","\n\t\t","Beschreibung","\n\t","\n\t","\n\t\t","-13","\n\t\t","Puffer-Laufzeitüberwachung","\n\t","\n\t","\n\t\t","-12","\n\t\t","Überwachung AppEngine","\n\t","\n\t","\n\t\t","-11","\n\t\t","TPM Wartungsmeldung","\n\t","\n\t","\n\t\t","-10","\n\t\t","Rezepte","\n\t","\n\t","\n\t\t","-9","\n\t\t","Überwachung Daemon","\n\t","\n\t","\n\t\t","-8","\n\t\t","Kalenderpflege","\n\t","\n\t","\n\t\t","-7","\n\t\t","Zyklische Meldung: Ein Gateway meldet, \n\t\t dass von einer Verbindung eine sehr hohe Anzahl Meldungen (quasi \n\t\t zyklisch) auftritt und die Weiterleitung der Meldungen an die \n\t\t Datenbank aus Performancegründen temporär unterdrückt wurde","\n\t","\n\t","\n\t\t","-6","\n\t\t","Unterer Grenzwert (Alarmgrenze) einer \n\t\t Variablen unterschritten","\n\t","\n\t","\n\t\t","-5","\n\t\t","Untere Warngrenze einer Variablen \n\t\t unterschritten","\n\t","\n\t","\n\t\t","-4","\n\t\t","Obere Warngrenze einer Variablen \n\t\t überschritten","\n\t","\n\t","\n\t\t","-3","\n\t\t","Oberer Grenzwert (Alarmgrenze) einer \n\t\t Variablen überschritten","\n\t","\n\t","\n\t\t","-2","\n\t\t","Verbindungsstörung, wird vom Gateway \n\t\t gemeldet","\n\t","\n\t","\n\t\t","-1","\n\t\t","Modul-Verbindungsstörung: Time-Out-Überwachung \n\t\t einer Datenquelle (Gateway) hat angesprochen","\n\t","\n\t","\n\t\t","0","\n\t\t","unbekannte Meldung","\n\t","\n\t","\n\t\t","1","\n\t\t","Störung","\n\t","\n\t","\n\t\t","2","\n\t\t","Meldung","\n\t","\n","\n"," ","\n\n\n"]],"3":[["Parametrierungs-Hinweise"]],"5":[["Meldeklassen"],["Funktion"],["Feldbeschreibung"],["Reservierte System-Meldeklassen"]],"id":"22"})