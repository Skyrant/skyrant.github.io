rh._.exports({"0":[["Meldearten"]],"1":[["Meldeart"]],"2":[["\n"],["\n","Werksverwaltung | Meldungsmanagement | Meldearten","\n"],["\n","Zusätzlich zur Einteilung der Meldungen über Klassen \n besteht die Möglichkeit, Meldungen in verschiedene Arten einzuteilen. \n Damit wird ein zusätzliches Selektionskriterium für spätere Filterfunktionen \n geschaffen. Die Art dient auch als Basis für die Berechnung verschiedener \n Verfügbarkeitsbetrachtungen (z.B. nach technischer, systembedingter oder \n organisatorischer Verfügbarkeit).","\n"],["\n"," ","\n","\n\t","\n\t\t","Feld","\n\t\t","Beschreibung","\n\t","\n\t","\n\t\t","ID","\n\t\t","Eindeutige Identifikationsnummer \n\t\t der Art.","\n\t\t","Negative IDs sowie die IDs 1, 2 und 3  sind \n\t\t für Systemmeldungen reserviert und dürfen nicht verändert werden.","\n\t\t","ID = 0 ist für die Art unbekannte Meldung \n\t\t reserviert und darf nicht verändert werden.","\n\t\t","ID-Zuordnungen der System-Arten analog \n\t\t Klassen.","\n\t","\n\t","\n\t\t","Name","\n\t\t","Name der Meldeart.","\n\t","\n\t","\n\t\t","Beschreibung (optional)","\n\t\t","Zusätzliche Beschreibung der Meldeart.","\n\t","\n\t\n\t\n\t\n\t","\n\t\t","Verfügbarkeits-Typ","\n\t\t","Lookup-Liste \n\t\t zur Auswahl eines Verfügbarkeits-Typs. Gibt an, wie Meldungen \n\t\t dieser Art bei der KPI-Berechnung berücksichtigt werden. Wird \n\t\t nur berücksichtigt, wenn zusätzlich bei der Meldeklasse \"KPI-relevant\" \n\t\t = 1.","\n\t\t","Diese \n\t\t Spalte wird nur angezeigt, wenn der Systemparameter -43 = 1 ist.","\n\t","\n","\n"," ","\n"],["\n","Meldearten mit negativer ID sind vom System reserviert \n und dürfen nicht verändert werden. Bei einer Standardinstallation werden \n auch die IDs 0, 1, 2 und 3 mit ausgeliefert, können aber auch projektspezifisch \n geändert werden. In diesem Fall ist bei Updates sicherzustellen, dass \n die projektspezifischen Änderungen nicht ungewollt durch den Standard \n überschrieben werden.","\n","Die reservierten Arten sind:","\n"," ","\n","\n\t","\n\t","\n\t","\n\t\t","Art-ID","\n\t\t","Beschreibung","\n\t","\n\t","\n\t\t","-13","\n\t\t","Puffer-Laufzeitüberwachung","\n\t","\n\t","\n\t\t","-12","\n\t\t","Überwachung AppEngine","\n\t","\n\t","\n\t\t","-11","\n\t\t","TPM Wartungsmeldung","\n\t","\n\t","\n\t\t","-10","\n\t\t","Rezepte","\n\t","\n\t","\n\t\t","-9","\n\t\t","Überwachung Daemon","\n\t","\n\t","\n\t\t","-8","\n\t\t","Kalenderpflege","\n\t","\n\t","\n\t\t","-7","\n\t\t","Zyklische Meldung: Ein Gateway meldet, \n\t\t dass von einer Verbindung eine sehr hohe Anzahl Meldungen (quasi \n\t\t zyklisch) auftritt und die Weiterleitung der Meldungen an die \n\t\t Datenbank aus Performancegründen temporär unterdrückt wurde","\n\t","\n\t","\n\t\t","-6","\n\t\t","Unterer Grenzwert (Alarmgrenze) einer \n\t\t Variablen unterschritten","\n\t","\n\t","\n\t\t","-5","\n\t\t","Untere Warngrenze einer Variablen \n\t\t unterschritten","\n\t","\n\t","\n\t\t","-4","\n\t\t","Obere Warngrenze einer Variablen \n\t\t überschritten","\n\t","\n\t","\n\t\t","-3","\n\t\t","Oberer Grenzwert (Alarmgrenze) einer \n\t\t Variablen überschritten","\n\t","\n\t","\n\t\t","-2","\n\t\t","Verbindungsstörung, wird vom Gateway \n\t\t gemeldet","\n\t","\n\t","\n\t\t","-1","\n\t\t","Modul-Verbindungsstörung: Time-Out-Überwachung \n\t\t einer Datenquelle (Gateway) hat angesprochen","\n\t","\n\t","\n\t\t","0","\n\t\t","unbekannt","\n\t","\n\t","\n\t\t","1","\n\t\t","technisch","\n\t","\n\t","\n\t\t","2","\n\t\t","systembedingt","\n\t","\n\t","\n\t\t","3","\n\t\t","organisatorisch","\n\t","\n","\n"," ","\n\n\n"]],"3":[["Meldearten"],["Funktion"],["Feldbeschreibung"],["Reservierte System-Meldearten"]],"id":"174"})