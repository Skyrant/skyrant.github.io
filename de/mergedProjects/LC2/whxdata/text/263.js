rh._.exports({"0":[["Beschreibung der Trigger-Typen"]],"1":[["Trigger"]],"2":[["\n"],["\n"],["\n","Folgende \n Parameter werden von allen Trigger-Typen unterstützt:","\n","\n\t","\n\t","\n\t","\n\t\t","Name","\n\t\t","Bedeutung","\n\t","\n\t","\n\t\t","valid_from","\n\t\t","gültig ab ...","\n\t","\n\t","\n\t\t","valid_till","\n\t\t","gültig bis ...","\n\t","\n\t","\n\t\t","inactive_from","\n\t\t","inaktiv ab ...","\n\t","\n\t","\n\t\t","inactive_till","\n\t\t","inaktiv bis ...","\n\t","\n\t","\n\t\t","exclude_holidays","\n\t\t","Boole'sche Angabe, ob Feiertage (Einträge \n\t\t in der Tabelle \"Feiertage\") ausgeschlossen werden sollen \n\t\t (1) oder nicht (0).","\n\t","\n\t","\n\t\t","weekdays","\n\t\t","Durch Komma getrennte Liste von Wochentagen \n\t\t oder Bereichen davon. Der Trigger wird dann nur an den hier aufgezählten \n\t\t Wochentagen feuern.","\n\t\t","\n\t\t\t","einzelne Wochentage können als \n\t\t\t Zahl (1 für Montag bis 0 oder 7 für Sonntag) oder als Abkürzung \n\t\t\t des englischen Namens (Sun, Mon, Tue, Wed, Thu, Fri, Sat) \n\t\t\t angegeben werden.","\n\t\t\t","Bereiche werden durch ein Minus-Zeichen \n\t\t\t (-) gekennzeichnet und enthalten beide Grenzen, also steht \n\t\t\t 'mon - 3' für Montag, Dienstag und Mittwoch","\n\t\t","\n\t","\n\t","\n\t\t","timezone","\n\t\t","Zeitzone für diesen Trigger. Es wird \n\t\t empfohlen, die genauen Angaben aus https://www.iana.org/time-zones \n\t\t zu verwenden, z.B. also \"Europe/Berlin\" statt \"MEZ\". \n\t\t Die gültigen Namen der Zeitzonen können von jeder Sapient Engine \n\t\t über den Aufruf der Prozedur /de/gefasoft/sapient/sapieng/websrv/jsonapi/AvailableTimeZones \n\t\t abgefragt werden.","\n\t","\n","\n"," ","\n","Die einzelnen Trigger unterstützen zum Teil noch weitere \n Parameter, die im Folgenden aufgeführt werden. Für alle gilt übergreifend:","\n","Zeitintervalle oder Offsets werden als durch Leerzeichen \n getrennte Liste von Dauern angegeben. Dauern können auch mit einem Minus-Zeichen \n davor als negativ gekennzeichnet werden. Sie können entweder","\n","im Uhrzeit-Format hh:mm:ss.SSS oder","\n","als Wert-und-Einheit angegeben werden. Folgende \n Einheiten sind möglich:","\n","y \n für Jahre","\n","M \n für Monate","\n","w \n für Wochen","\n","d \n für Tage","\n","h \n für Stunden","\n","m \n für Minuten","\n","s \n für Sekunden","\n","ms \n für Millisekunden","\n"," ","\n","So könnte z.B. der Wert \"5 1/2 Minuten vorher\" \n unter anderem als \"-00:05:30\", \"-5m -30s\", \"-330s\" \n oder \"-6m 30s\" angegeben werden.","\n"],["\n","Plant Job-Starts in einem regelmäßigen Zeit-Intervall \n ein. ","\n","Mögliche Parameter (zusätzlich zu den allgemeinen Parametern):","\n","\n\t","\n\t","\n\t","\n\t\t","Name","\n\t\t","Bedeutung","\n\t","\n\t","\n\t\t","interval","\n\t\t","Intervall der Ausführung, Angabe \n\t\t in Stunden (h), Minuten (m), Sekunden (s) oder Millisekunden (ms), \n\t\t z.B. 30s. Die genaue Syntax ist oben beschrieben. ","\n\t\t"," Der Job wird zu jedem Vielfachen \n\t\t dieses Intervalls ab dem Startzeitpunkt (valid_from) gestartet. \n\t\t Ist kein Startzeitpunkt angegeben, wird der Beginn des Tages benutzt, \n\t\t an dem die Sapient Engine gestartet wurde. Es dürfen nur Intervalle \n\t\t angegeben werden, die genau in Millisekunden umgerechnet werden \n\t\t können (also z.B. nicht Monate mit ihren unterschiedlichen Längen \n\t\t etc.) Umstellung von Sommer-/Winterzeit wird nicht berücksichtigt.","\n\t","\n","\n"," ","\n"],["\n","Plant Job-Starts in einem regelmäßigen Intervall ein, \n aber nur zwischen bestimmten Uhrzeiten an bestimmten Tagen. Damit lassen \n sich recht einfach Trigger der Art \"Alle Viertelstunde werktags zwischen \n 8 und 18 Uhr\" einrichten.","\n","Mögliche Parameter (zusätzlich zu den allgemeinen Parametern):","\n","\n\t","\n\t","\n\t","\n\t\t","Name","\n\t\t","Bedeutung","\n\t","\n\t","\n\t\t","interval","\n\t\t","Intervall der Ausführung, Angabe \n\t\t in Stunden (h), Minuten (m), Sekunden (s) oder Millisekunden (ms), \n\t\t z.B. 30s. Die genaue Syntax ist oben beschrieben. ","\n\t","\n\t","\n\t\t","dailystarttime","\n\t\t","(optional) Tägliche Start-Zeit, ab \n\t\t der der Trigger beginnen soll im Uhrzeit-Format, z.B. 05:31:17.5. \n\t\t Falls nicht angegeben, beginnt er um 0 Uhr.","\n\t","\n\t","\n\t\t","dailyendtime","\n\t\t","(optional) Tägliche Ende-Zeit, ab \n\t\t der der Trigger nicht mehr feuern soll im Uhrzeit-Format. Falls \n\t\t nicht angegeben, stellt er das Feuern um 24:00 Uhr ein. ","\n\t","\n","\n"," ","\n"],["\n","Plant Job-Starts nach bestimmten Kalender-Intervallen \n ein. Damit können Zeitpläne erstellt werden wie \"alle 5 Monate\", \n die weder mit einem zyklischen Trigger (weil Monate nicht gleich lang \n sind), noch mit einem cron-Trigger (weil 5 kein Teiler von 12 ist) möglich \n wären.","\n","Andererseits ist auch Vorsicht angesagt bezüglich des \n Zusammenspiels von Startzeit und Intervall: Bei einem Intervall in Monaten \n und einem Startzeitpunkt nahe dem Monats-Ende, kann sich der Tag des Auslösens \n ändern, nachdem einmal ein kürzerer Monat getroffen wurde, z.B. würde \n ein monatlicher Trigger ab dem 30.11. im nächsten Februar auf den 28. \n vor verschoben und würde ab da immer am 28. jeden Monats feuern. Für solche \n Zeitpläne ist dann ein cron-Trigger meist die bessere Wahl.","\n","Mögliche Parameter (zusätzlich zu den allgemeinen \n Parametern):","\n","\n\t","\n\t","\n\t","\n\t\t","Name","\n\t\t","Bedeutung","\n\t","\n\t","\n\t\t","interval","\n\t\t","Intervall der Ausführung, Angabe \n\t\t in Jahren (y), Monaten (M), Wochen (w), Tagen (d), Stunden (h), \n\t\t Minuten (m) oder Sekunden (s), z.B. 2w. Die genaue Syntax \n\t\t ist oben beschrieben. ","\n\t\t"," Der Job wird zu jedem Vielfachen \n\t\t dieses Intervalls ab dem Startzeitpunkt (valid_from) gestartet. \n\t\t Ist kein Startzeitpunkt angegeben, kann der Trigger nicht angelegt \n\t\t werden. Es dürfen nur Intervalle angegeben werden, die genau in \n\t\t Millisekunden umgerechnet werden können (also z.B. nicht Monate \n\t\t mit ihren unterschiedlichen Längen etc.) Umstellung von Sommer-/Winterzeit \n\t\t wird nicht berücksichtigt.","\n\t","\n\t","\n\t\t","daylightsaving","\n\t\t","(optional, true oder false) \n\t\t Ob die Uhrzeit über die Umstellung auf Sommerzeit und zurück beibehalten \n\t\t werden soll (also z.B. immer um 09:00, egal ob Sommerzeit oder \n\t\t nicht). Standardeinstellung: false. ","\n\t","\n\t","\n\t\t","skipsavinghours","\n\t\t","(optional, true oder false). \n\t\t Falls true, wird die Ausführung des Jobs übersprungen, falls sie \n\t\t in der ersten der \"doppelten\" Stunden bei der Umstellung \n\t\t von Sommer- auf Winterzeit fallen würde. Wird ignoriert, wenn \n\t\t daylightsaving false ist. ","\n\t","\n","\n"," ","\n"],["\n","Plant Job-Starts so ein, wie das der Unix/Linux-Dienst ","cron"," tut.","\n","cron-Ausdrücke","\n","siehe auch ","​Dokumentation \n der Quartz-Bibliothek"," (englisch). Die in Quartz-Bibliothek verwendeten \n Ausdrücke sind ","​Standard-Cron-Ausdrücke"," mit \n geringen Abweichungen:","\n","in Quartz \n gibt es ein zusätzliches Feld für Sekunden","\n","in Quartz \n verwendet eine abweichende Nummerierung der Wochentage (1 für SUN bis \n 7 für SAT). Um Verwirrungen zu vermeiden, sollten deshalb in Legato Sapient \n Wochentage als Abkürzung (SUN, MON, TUE, WED, THU, FRI, SAT) angegeben \n werden","\n"," ","\n","Ausdrücke bestehen aus 6 bis 7 Unter-Ausdrücken, die \n in einer Zeile durch Leerzeichen oder Tabs getrennt angegeben werden. \n Die Unter-Ausdrücke gelten jeweils für:","\n","1. Sekunden","\n","2. Minuten","\n","3. Stunden","\n","4. Tag (des Monats)","\n","5. Monat","\n","6. Wochentag","\n","7. (optional) Jahr","\n","Der Ausdruck \"0 0 12 ? * WED\" würde z.B. \n bedeuten \"jeden Mittwoch um 12\".","\n","Unter-Ausdrücke können Bereiche oder Aufzählungen enthalten, \n also könnte eine Wochentags-Angabe z.B. auch \"MON-FRI\", \"MON,WED,SAT\" \n oder auch \"MON-WED,FRI\" lauten. Bitte beachten: keine Leerzeichen!","\n","Ein * als Unter-Ausdruck bedeutet \"jeder \n mögliche Wert dieses Feldes\", in obigem Beispiel also (* im \n Monats-Feld) \"jeden Monat\". Die gültigen Werte für jedes Feld \n sind in den meisten Fällen recht offensichtlich: 0 mit 59 für Sekunden \n und Minuten, 0 mit 23 für Stunden usw. Für Wochentage sind die Werte 1 \n (Sonntag) mit 7 (Samstag) oder alternativ die Abkürzungen SUN, MON, TUE, \n WED, THU, FRI, SAT erlaubt. Monate können als Werte 1 (Januar) mit 12 \n (Dezember) oder als Abkürzungen JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, \n SEP, OCT, NOV und DEC angegeben werden.","\n","Von den beiden Feldern \"Tag des Monats\" und \n \"Wochentag\" sollte nur jeweils eines pro cron-Ausdruck angegeben \n werden. Für das jeweils nicht benutzte muss dann ein Fragezeichen (?) \n angegeben werden.","\n","Mit einem Schrägstrich (/) können Inkrementalwerte \n angegeben werden. Der Wert \"3/15\" im \"Minuten\"-Feld \n würde bedeuten \"alle 15 Minuten ab 3 Minuten nach\", wäre also \n gleichbedeutend mit \"3,18,33,48\". Die Zählung beginnt immer \n ab Beginn des nächstgrößeren Intervalls, also \"volle Minute\" \n für Sekunden-, \"volle Stunde\" für Minuten-Angaben etc. Die Angabe \n \"0/35\" bedeutet also \"0,35\", nicht \"jede 35. \n Minute\" (\"0,35,10,45....\").","\n","Ein L in den Feldern für Tag des Monats oder \n Wochentag bedeutet \"der letzte\". L als Tag des Monats \n würde z.B. den 31. Januar, 28. Februar (außer in Schaltjahren) usw. bedeuten. \n Dabei kann auch ein Offset zum letzten Tag des Monats angegeben werden, \n z.B. würde \"L-3\" \"3 Tage vor dem Letzten\" bedeuten. \n Im Wochentags-Feld bedeutet L nach einem Wert \"der letzte \n x-Tag im Monat\", also würden \"6L\" oder \"FRIL\" \n beide den letzten Freitag des Monats bezeichnen.","\n","Durch Anhängen eines W an den Tag des Monats \n kann der zum angegebenen Datum näheste Werktag (MON-FRI) bestimmt werden, \n also z.B. \"15W\" für den nähesten Werktag zum 15. des Monats.","\n","Im Wochentags-Feld kann mittels # der \"n-te \n x-Tag des Monats\" angegeben werden, also würden \"6#3\" oder \n \"FRI#3\" beide den 3. Freitag im Monat angeben.","\n","Mögliche Parameter (zusätzlich zu den allgemeinen \n Parametern):","\n","\n\t","\n\t","\n\t","\n\t\t","Name","\n\t\t","Bedeutung","\n\t","\n\t","\n\t\t","cron","\n\t\t","crontab-Ausdruck der festlegt, wann \n\t\t dieser Trigger feuern soll.","\n\t","\n\t","\n\t\t","crontype","\n\t\t","Art der cron-Syntax. Einer der Werte \n\t\t \"quartz\" (default), \"unix\" oder \"cron4j\".","\n\t","\n","\n"," ","\n"],["\n","Plant Job-Starts eine einstellbare Zeit vor oder nach \n Schichtereignissen eines Knotens der Fertigungsstruktur ein. ","\n","Mögliche Parameter (zusätzlich zu den allgemeinen Parametern):","\n","\n\t","\n\t","\n\t","\n\t\t","Name","\n\t\t","Bedeutung","\n\t","\n\t","\n\t\t","event_type","\n\t\t","Art des Schicht-Ereignisses. Kann \n\t\t folgende Werte haben:","\n\t\t","\n\t\t\t","shift_start oder -1 für Schichtbeginn","\n\t\t\t","shift_end oder -2 für Schichtende","\n\t\t\t","break_start oder -3 für Pausenbeginn","\n\t\t\t","break_end oder -4 für Pausenende","\n\t\t","\n\t","\n\t","\n\t\t","offset","\n\t\t","Zeit vor (negativer Offset) oder \n\t\t nach (positiver Offset) dem Schichtereignis, zu dem der Job ausgeführt \n\t\t werden soll.","\n\t","\n\t","\n\t\t","node","\n\t\t","ID des Knotens der Fertigungsstruktur, \n\t\t dessen Schichtereignisse ausgewertet werden sollen.","\n\t","\n\t","\n\t\t","check_interval","\n\t\t","Zeit-Intervall, in dem auf Änderungen \n\t\t der Schichtplanung des Knotens geprüft werden soll. Standardwert \n\t\t 1 Stunde, muss üblicherweise nicht verkürzt werden, da die Planung \n\t\t bei Änderung des Schicht-Caches automatisch angepasst wird.","\n\t","\n","\n"," ","\n","Die Größe der erlaubten \"Offsets\" vor- oder \n nach Schicht-Ereignissen hängen von der Parametrierung des Task \"shiftcache\" \n der Sapient Engine ab:","\n","Negative Angaben (also Ausführung vor dem Schicht-Ereignis) \n dürfen maximal so groß sein, wie der Parameter futureInterval der Task","\n","Positive Angaben (also Ausführung nach dem Schicht-Ereignis) \n dürfen maximal so groß sein, wie der Parameter historyInterval der Task","\n"," ","\n","Grund ist, dass Schicht-Trigger den Cache der Task \n benutzen, um den Ausführungs-Zeitpunkt des Jobs zu bestimmen und folglich \n nur den davon abgedeckten Zeitraum auswerten können.","\n"],["\n","Plant Job-Starts abhängig von einer Variablenänderung \n ein.","\n","Mögliche Parameter (zusätzlich zu den allgemeinen Parametern):","\n","\n\t","\n\t","\n\t","\n\t\t","Name","\n\t\t","Bedeutung","\n\t","\n\t","\n\t\t","vars","\n\t\t","Eine Variablen-ID oder ein Array \n\t\t von Variablen-IDs aus P_VALUES_CONFIG.","\n\t","\n\t","\n\t\t","evcheck_func","\n\t\t","Einen \"function path\" (Angabe \n\t\t einer Script- oder Java-Funktion).","\n\t","\n","\n"," ","\n","Bei Änderung einer Variablen, deren ID in \"vars\" \n angegeben ist, wird \"evcheck_func\" nicht ausgewertet, sondern \n gleich der Job getriggert.","\n","Die \"evcheck_func\" hat 2 Parameter:","\n","event: Angaben über das zu prüfende Ereignis:","\n","timestamp: \n Zeitstempel der Änderung","\n","id: \n ID der Variablen","\n","val: \n Neuer Wert der Variablen","\n","old: \n Vorheriger Wert der Variablen","\n","value_config: Konfiguration der Variablen, d.h. \n kompletter Datensatz aus P_VALUES_CONFIG als JSON:","\n","id: \n ID der Variablen","\n","value_type: \n ID des P_VALUE_TYPES der Variablen","\n","value_format: \n ID des Datentyps (numerisch, boole'sch, String) der Variablen","\n","... \n alle weiteren Felder des Datensatzes","\n"," ","\n","Gibt die \"evcheck_func\" den boole'schen Wert \n \"true\" zurückgeben, wird der Job getriggert, sonst nicht.","\n"],["\n","Plant Job-Starts basierend auf Meldungs-Ereignissen \n ein. Damit lassen sich Trigger der Art \"Immer wenn eine Meldung der \n Meldungsdefinition xx auftritt\" erstellen.","\n","Mögliche Parameter (zusätzlich zu den allgemeinen Parametern):","\n","\n\t","\n\t","\n\t","\n\t\t","Name","\n\t\t","Bedeutung","\n\t","\n\t","\n\t\t","message_defs","\n\t\t","ID der Meldungsdefinition al_messages.id, \n\t\t die den Trigger auslöst.","\n\t","\n\t","\n\t\t","evcheck_func_path","\n\t\t","Einen \"function path\" (Angabe \n\t\t einer Script- oder Java-Funktion).","\n\t","\n\t","\n\t\t","evcheck_func_params","\n\t\t","JSON-Objekt mit den benötigten Parametern \n\t\t der Funktion.","\n\t","\n","\n"," ","\n","Beispiel:","\n","{","\n","\"evcheck_func_path\":\"SetupTimeExceededAlLeaving/checkEvt\", \n ","\n","\"evcheck_func_params\":{\"al_class\":-14}","\n","}","\n"," ","\n"],["\n","Plant Job-Starts basierend auf Paging-Ereignissen ein.","\n"],["\n","Plant Job-Starts basierend auf Änderungen an Konfig-Tabellen \n ein.","\n","Mögliche Parameter (zusätzlich zu den allgemeinen Parametern):","\n","\n\t","\n\t","\n\t","\n\t\t","Name","\n\t\t","Bedeutung","\n\t","\n\t","\n\t\t","tables","\n\t\t","Name der Konfigurations-Tabelle(n), \n\t\t die den Trigger auslöst. Kann auf folgende Arten angegeben werden:","\n\t\t","\n\t\t\t","String mit dem Namen einer Konfigurations-Tabelle","\n\t\t\t","String mit einer komma-separierten \n\t\t\t Liste von Namen von Konfigurations-Tabellen","\n\t\t\t","Array mit mehreren Strings mit \n\t\t\t Namen oder Namenslisten von Konfigurations-Tabellen","\n\t\t","\n\t","\n\t","\n\t\t","caches","\n\t\t","Name \n\t\t des internen Konfigurations-Caches, der/die aktualisiert werden \n\t\t müssen, um den Trigger auszulösen. Wenn angegeben, löst also nicht \n\t\t jede Änderung einer Konfig-Tabelle den Trigger aus, sondern nur \n\t\t ein Update des Caches.  Kann auf folgende Arten angegeben \n\t\t werden:","\n\t\t","\n\t\t\t","String mit dem Namen eines Konfigurations-Caches","\n\t\t\t","String mit einer komma-separierten \n\t\t\t Liste von Namen von Konfigurations-Caches","\n\t\t\t","Array mit mehreren Strings mit \n\t\t\t Namen oder Namenslisten von Konfigurations-Caches","\n\t\t","\n\t\t","Aktuell werden folgende Cache-Namen unterstützt: \n\t\t \"LNodesCache\", \"HolidaysCache\" und \"TargetChainsCache \n\t\t ","\n\t","\n","\n"," ","\n","Wird ein Job durch diesen Trigger ausgelöst, erhält \n er als Trigger-Parameter ein oder mehrere Objekte, jedes mit folgenden \n Eigenschaften:","\n","\"timestamp\" - der Zeitstempel der Tabellenänderung","\n","\"table\" - der Name der geänderten Tabelle","\n"," ","\n"],["\n","Neuer Triggertyp für die Planung der Einzelausführung.","\n"," ","\n","Beispiel:","\n","{","\n","\"time\": \"time_of_execution\" ","\n","}","\n"," ","\n\n\n"]],"4":[["Beschreibung der Trigger-Typen"]],"5":[["Alle Trigger-Typen"],["zyklisch"],["tägliches Intervall"],["Kalender-Intervall"],["cron"],["Schicht"],["Wert"],["Meldung"],["Paging"],["Konfig-Änderung"],["Einmalige Ausführung"]],"id":"263"})