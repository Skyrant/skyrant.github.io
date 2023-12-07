rh._.exports({"0":[["Konfiguration der Legato Application Engine"]],"1":[["\n"],["\n"],["\n","Die Grundkonfiguration der Application Engine wird \n in der Datei ","appengine.properties"," \n im Programmverzeichnis festgelegt. Beispiel für eine 2-DB Installation \n (die Einträge mit \"dbarch\" sind für eine 1-DB Installation zu \n entfernen):","\n","# Main configuration file for Legato Application Engine","\n"," ","\n","# ID of this Application Engine in LegatoDB AE_CYC_JOBS.AE_INST","\n","AeInstance=1","\n"," ","\n","# Number of seconds to wait on startup before initializing \n DB connection(s)","\n","DelayAtStart=0","\n"," ","\n","# Thread Pools","\n","InitExecutors=main, highprio","\n"," ","\n","# configure Executor \"main\"","\n","main.scheduling=true","\n","main.threads=10","\n","main.dbpools=dboper, dbarch","\n","main.dboper.initActive=4","\n","main.dboper.maxActive=10","\n","main.dboper.propfile=dboper.properties","\n","main.dboper.defaults=dboper.","\n","main.dbarch.initActive=3","\n","main.dbarch.maxActive=10","\n","main.dbarch.propfile=dbarch.properties","\n","main.dbarch.defaults=dbarch.","\n"," ","\n","# configure Executor \"highprio\"","\n","highprio.scheduling=true","\n","highprio.threads=5","\n","highprio.dbpools=dboper, dbarch","\n","highprio.dboper.initActive=3","\n","highprio.dboper.maxActive=5","\n","highprio.dboper.propfile=dboper.properties","\n","highprio.dboper.defaults=dboper.","\n","highprio.dbarch.initActive=0","\n","highprio.dbarch.maxActive=5","\n","highprio.dbarch.propfile=dbarch.properties","\n","highprio.dbarch.defaults=dbarch.","\n"," ","\n","# configure general DB access","\n","dbpool.driver=oracle.jdbc.OracleDriver","\n","dbpool.testquery=SELECT 1 FROM DUAL","\n","dbpool.testOnBorrow=true","\n","dbpool.testOnReturn=false","\n","dbpool.testOnIdle=false","\n","dbpool.maxIdle=-1","\n","dbpool.maxWait=-1","\n","dbpool.examEvery=-1","\n","dbpool.idleTimeout=-1","\n","dbpool.TestsPerRun=-4","\n"," ","\n","# Initial jobs","\n","InitJobs=pollsysjobs","\n"," ","\n","# define Job \"pollsysjobs\"","\n","pollsysjobs.jobclass=de.gefasoft.legato.appeng.job.AeJobPoller","\n","pollsysjobs.schedulerclass=de.gefasoft.legato.appeng.scheduler.OnTimeScheduler","\n","pollsysjobs.props.executor=main","\n","pollsysjobs.props.period=60000              # \n once every minute","\n","pollsysjobs.props.basetime=2005-01-01 00:00:00,000    # \n at full minute","\n","pollsysjobs.props.initialrun=true","\n"," ","\n","# configure XML parsers","\n","XMLReaders=org.apache.xerces.parsers.SAXParser, oracle.xml.parser.v2.SAXParser","\n"," ","\n","Die Datenbank-Verbindungen werden in externen Konfigurationsdateien \n definiert, damit sie von mehreren Instanzen der Application Engine gemeinsam \n benutzt werden können. In obigem Beispiel würde die Verbindung zur Operativ-Datenbank \n von Legato in der Datei ","dboper.properties"," \n z.B. folgendermaßen definiert:","\n","# configure access to operative db","\n","url=jdbc:oracle:thin:@localhost:1521:LEGATO_OP","\n","user=legato_write","\n","pwd=0C6718832977C59B615F31B6824BB6F5","\n"," ","\n","Die Konfiguration der Verbindung zu Archiv-Datenbank \n würde analog in der Datei ","dbarch.properties"," \n erfolgen.","\n","Definieren der Instanz-Kennung","\n","Es können mehrere Instanzen der Application Engine \n gestartet werden. Jede dieser Instanzen führt nur diejenigen Jobs aus \n der Datenbank aus, die eine bestimmte Kennung aufweisen. Diese Kennung \n muss in ","AeInstance"," \n angegeben werden (bei nur einer Instanz z.B. 1).","\n","Wartezeit beim Start","\n","Falls Application Engine und Datenbank am gleichen \n Rechner installiert werden und beide beim Hochfahren des Rechners gestartet \n werden, versucht die Application Engine u.U. bereits, Verbindungen zur \n Datenbank aufzubauen, bevor diese bereit ist. Um die betreffenden Fehlermeldungen \n in den Logs der Application Engine zu vermeiden, kann über ","DelayAtStart"," die Anzahl Sekunden \n angegeben werden, die die Application Engine beim Start verstreichen lassen \n soll, bevor sie beginnt, die Datenbankverbindungen zu initialisieren.","\n","Anlegen von Start-Jobs","\n","Beim Start der Application Engine muss mindestens ein \n Job angelegt werden. In der Regel wird dies ein Job sein, der zyklisch \n die Tabelle ","AE_CYC_JOBS"," \n der Legato-Datenbank auswertet, um daraus weitere Jobs zu lesen.","\n","Die Namen der beim Start anzulegenden Jobs stehen, \n wie üblich durch Kommata getrennt, im Eintrag ","InitJobs"," der Konfigurationsdatei. \n Für jeden Job werden noch weitere Einstellungen benötigt:","\n","<jobname>.jobclass gibt den Namen der Java-Klasse \n an, die den betreffenden Job implementiert. Zum Auswerten der oben erwähnten \n Tabelle AE_CYC_JOBS ist dies de.gefasoft.legato.appeng.job.AeJobPoller. \n Für JavaScript-Skripten wäre de.gefasoft.legato.appeng.job.JsJob zuständig, \n der Name des betreffenden Skripts wird in der Einstellung <jobname>.props.script \n angegeben.","\n","<jobname>.schedulerclass gibt den Namen \n der Java-Klasse an, welche die Zeitplanung für die Ausführung des Jobs \n übernimmt. Die möglichen Klassen sind auch in der Tabelle AE_SCHEDULE_TYPE \n der Legato-Datenbank aufgeführt.","\n","Weitere Einstellungen zum Job befinden sich in \n Einträgen der Form <jobname>.props.<einstellung>. Nach diesem \n Schema können auch Job-spezifische Einstellungen angegeben werden. Die \n Folgenden werden jedoch allgemein benötigt:","\n","<jobname>.props.executor \n gibt den Namen des Thread-Pools an, in dem der betreffende Job ausgeführt \n werden soll, z.B. main.","\n","<jobname>.props.period \n gibt bei zyklisch auszuführenden Jobs das Ausführungsintervall in Millisekunden \n an.","\n","<jobname>.props.basetime \n gibt bei Jobs, die zu bestimmten Zeitpunkten laufen sollen, die Basis \n der Berechnung an. Soll ein Job z.B. alle zwei Tage um 4 Uhr morgens laufen, \n geben Sie hier das Datum eines Tages in der Vergangenheit und die Uhrzeit \n 4 Uhr an.","\n","<jobname>.props.initialrun \n gibt an, ob der Job beim Start der Application Engine einmal sofort ausgeführt \n werden soll (true) oder erst, wenn die Zeitplanung ihn freigibt.","\n"],["\n","Threads sind Ausführungs-Pfade in einem Programm. Auf \n Maschinen mit mehreren Prozessoren können Threads parallel auf verschiedenen \n Prozessoren ausgeführt werden, aber auch auf Systemen mit nur einem einzigen \n Prozessor haben Programme mit mehreren Threads Vorteile: Wenn ein Thread \n auf irgendwelche externe Ereignisse warten muss (z.B. das Bearbeiten einer \n Datenbank-Abfrage), kann der Prozessor in der Zwischenzeit einen anderen \n Thread ausführen.","\n","In der Legato Application Engine werden Thread-Pools \n dazu benutzt, Aufgaben (","Jobs",") für bestimmte Zeitpunkte zu planen \n und um mehrere Aufgaben parallel auszuführen. Beim Start der Application \n Engine muss mindestens ein Thread-Pool namens ","main"," angelegt werden, damit \n die Initialisierungs-Jobs überhaupt ausgeführt werden können und sich \n die Application Engine nicht sofort wieder beendet.","\n","Der Eintrag InitExecutors in der Konfigurationsdatei \n enthält, durch Kommata getrennt, die Namen aller beim Start anzulegenden \n Thread-Pools. Jeder Thread-Pool benötigt zwei Angaben für seine Konfiguration:","\n","<poolname>.threads gibt die Anzahl der parallel \n ausführbaren Jobs in diesem Pool an","\n","<poolname>.scheduling gibt an, ob dieser \n Thread-Pool das Planen von Jobs für bestimmte Zeitpunkte unterstützen \n soll:","\n","true bedeutet, dass Zeitplanung unterstützt wird. \n Der Haupt-Thread-Pool main benötigt Zeitplanung.","\n","false bedeutet dass keine Zeitplanung benötigt \n wird.","\n","<poolname>.dbpools enthält eine Komma-getrennte \n Liste der Datenbankverbindungs-Pools, die in dem betreffenden Thread-Pool \n benutzt werden sollen. Für den Haupt-Thread-Pool main ist diese Angabe \n verpflichtend. Andere Thread-Pools benutzen die Datenbankverbindungs-Pools \n von main mit, falls für sie keine eigenen konfiguriert wurden. Die hier \n angegebenen Pool-Namen beziehen sich auf den jeweiligen Thread-Pool, die \n weiteren Einstellungen der Verbindungs-Pools müssen also in der Form <threadpoolname>.<dbpoolname> \n erfolgen.","\n"," ","\n","Es ist in der Regel sinnvoll, jedem Thread-Pool einen \n eigenen Satz an Datenbank-Verbindungen zuzuweisen, damit sich Threads \n der unterschiedlichen Pools nicht beim Zugriff auf Datenbankverbindungen \n gegenseitig sperren.","\n"],["\n","Datenbank-Verbindungen werden in der Application Engine \n immer in Verbindungs-Pools verwaltet. Ein solcher Pool enthält jeweils \n eine bestimmte Anzahl Verbindungen zu einer bestimmten Datenbank. Wird \n eine solche benötigt, \"leiht\" sich die betreffende Funktion \n eine Verbindung aus dem Pool aus, führt damit ihre Datenbank-Abfragen \n durch und gibt die Verbindung wieder an den Pool zurück. Das steigert \n die Performance (Anlegen und Aufbauen einer Datenbank-Verbindung kann \n lange dauern) und begrenzt auch den Ressourcen-Verbrauch (es können nie \n mehr Verbindungen gleichzeitig benutzt werden, als der Pool groß ist).","\n","Datenbankverbindungs-Pools werden pro Thread-Pool definiert. \n Zwei Datenbankverbindungs-Pools haben eine besondere Bedeutung in der \n Application Engine:","\n","dboper gibt den Pool mit Verbindungen zur Legato \n Produktiv-Datenbank an und","\n","dbarch den Pool mit Verbindungen zur Archiv-Datenbank \n von Legato.","\n"," ","\n","In einer Konfiguration ohne getrennte Datenbanken (nur \n eine Legato-Datenbank), geben Sie bitte nur einen der beiden Pools an.","\n","Die Konfigurationen der einzelnen Datenbankverbindungs-Pools \n weisen einige gleiche Teile auf, die entsprechend auch gemeinsam konfiguriert \n werden können. Es bietet sich also an, die Konfiguration in die folgenden \n Arten von Angaben aufzuteilen:","\n","Angaben, die pro Pool unterschiedlich sind, z.B. \n Größe (Anzahl der darin enthaltenen Datenbankverbindungen). Diese Angaben \n werden in der Regel durch direkte Einträge der Form <threadpoolname>.<dbpoolname>.<parameter>=<wert> \n vorgenommen.","\n","Angaben, die pro Legato-Datenbank (Operativ / \n Archiv) unterschiedlich sind (z.B. URL zur Datenbank, Benutzer und Kennwort). \n Diese Angaben werden gerne in eigene Konfigurationsdateien ausgelagert, \n um sie durch mehrere Instanzen der Application Engine gemeinsam benutzen \n zu können. Auf diese Dateien wird dann mittels der Angabe propfile in \n der jeweiligen Pool-Konfiguration verwiesen (z.B. main.dboper.propfile=dboper.properties).","\n","Angaben, die für alle Pools gleich sind (z.B. \n Name der Treiberklasse, Verbindungstest-Abfrage etc.). Diese werden meist \n in einem eigenen Abschnitt der appengine.properties aufgeführt, auf den \n mittels der Angabe defaults verwiesen wird (z.B. main.dboper.defaults=dbpool. \n (Punkt am Ende beachten).","\n"," ","\n","Konfiguration Pool-spezifischer Eigenschaften","\n","Diese Angaben werden üblicherweise direkt zur Definition \n des betreffenden Thread-Pools hinzugefügt. Üblicherweise werden an dieser \n Stelle nur die Angaben zur Größe des Pools (Anzahl der darin zu verwaltenden \n Datenbankverbindungen) gemacht:","\n","<threadpoolname>.<dbpoolname>.maxActive \n gibt an, wie viele Verbindungen maximal hergestellt werden dürfen.","\n","<threadpoolname>.<dbpoolname>.initActive \n stellt ein, wie viele Verbindungen schon beim Anlegen des Pools aufgebaut \n werden sollen.","\n"," ","\n","Auf alle weiteren Einstellungen wird an dieser Stelle \n nur verwiesen:","\n","<threadpoolname>.<dbpoolname>.propfile \n verweist auf die Angaben zur Legato-Datenbank, die in einer externen Datei \n enthalten sind.","\n","<threadpoolname>.<dbpoolname>.defaults \n verweist auf den Abschnitt in der Konfigurationsdatei, der die allgemeinen \n Einstellungen für alle Pools enthält. Bitte beachten: Angaben hier überschreiben \n solche aus externen Konfigurationsdateien.","\n"," ","\n","Angaben zur Datenbank-Verbindungen","\n","Diese Angaben betreffen den Aufbau der Verbindungen \n zu der oder den Legato-Datenbank(en). Es handelt sich dabei um:","\n","url gibt, wie bei JDBC üblich, den Treiber, Server, \n Port und die Instanz der Datenbank an.","\n","user gibt den Namen des Datenbank-Benutzers an, \n mit dem sich die Application Engine bei der Datenbank anmelden soll.","\n","pwd enthält das zugehörige Kennwort in verschlüsselter \n Form. Diese Angabe können Sie aus den ","Systemparametern \n \"ProdDbPassword\""," bzw. \"","ArvDBPassword","\" \n entnehmen (Tabelle SYS_PARAMS in der Legato Operativ-DB, IDs ","1103"," \n bzw. ","1106","). \n Alternativ können Sie statt pwd einen Eintrag pass anlegen und darin das \n Kennwort als Klartext eintragen.","\n","Den Eintrag schema sollten Sie nur angeben, falls \n ein anderes Datenbankschema als das Standardschema des Benutzers verwendet \n werden soll (siehe auch user).","\n"," ","\n","Gemeinsame Angaben für alle Datenbankverbindungen","\n","Üblicherweise werden Angaben, die für alle Datenbankverbindungen \n der Application Engine gelten sollen, in einem eigenen Abschnitt der Konfigurationsdatei \n zusammengefasst und aus den Pool-Konfigurationen darauf verwiesen. Es \n handelt sich dabei um folgende Punkte:","\n","class gibt an, welche Pool-Implementierung benutzt \n werden soll. Es gibt 3 Möglichkeiten:","\n","Apache \n DBCP: de.gefasoft.legato.util.DbConPoolDBCP","\n","Oracle \n UCP: de.gefasoft.legato.util.DbConPoolUCP","\n","Oracle \n Implicit Connection Cache: de.gefasoft.legato.util.DbConPoolOracle","\n","connectionFactory: wird nur benötigt, wenn als \n class UCP benutzt wird. Um Verbindung zu anderen Datenbanken herzustellen, \n muss hier eine entsprechende Klasse des betreffenden Treibers angegeben \n werden, die zum Anlegen von Verbindungen benutzt werden kann. Standard: \n oracle.jdbc.pool.OracleDataSource.","\n","driver gibt den Namen des Datenbanktreibers an \n (z.B. für Oracle auf oracle.jdbc.OracleDriver zu setzen).","\n","testquery gibt eine SQL-Anweisung an, die zum \n Prüfen der Verbindungen benutzt wird. Standard-Wert ist \"select 1 \n from dual\" (Anmerkung: Das noch schnellere \"select 1\" funktioniert \n nicht, weil der Treiber diese Anweisung gar nicht erst zum Server sendet, \n die Verbindung dahin folglich auch nicht geprüft wird).","\n","testOnBorrow gibt an, ob Verbindungen vor dem \n Ausleihen aus dem Pool getestet werden sollen, also bevor sie einer Funktion \n der Application Engine zur Benutzung übergeben werden. Mit dem Standardwert \n true wird dies eingeschaltet.","\n",":","\n","Wir raten dringend davon ab, diesen Test \n auszuschalten, da ohne ihn einmal abgebrochene Datenbank-Verbindungen \n nicht wieder aufgebaut, sondern immer wieder (erfolglos) benutzt werden. \n Der Pool ist dann nicht mehr \"reconnect\"-fähig und die Application \n Engine muss nach jedem solchen Fehler neu gestartet werden.","\n","testOnReturn gibt an, ob Verbindungen bei der \n Rückgabe an den Pool getestet werden sollen, also wenn die ausleihende \n Funktion der Application Engine die Verbindung wieder in den Pool zurücklegt. \n Standardmäßig ausgeschaltet, weil der Test beim Ausleihen ausreicht.","\n","maxWait Die maximale Dauer in Millisekunden, die \n ein Thread auf eine Verbindung warten darf, bevor der Pool einen Fehler \n meldet, indem er eine Ausnahme auslöst. Der Standardwert -1 bedeutet \"ewig\", \n d.h. der Thread wartet so lange, bis eine Verbindung verfügbar wird.","\n","testOnIdle gibt an, ob im Pool befindliche Verbindungen \n in einem Hintergrund-Thread periodisch getestet werden sollen. Dieser \n Test kann nur ausgeführt werden, wenn freie Verbindungen überhaupt überwacht \n werden (siehe maxIdle, idleTimeout und examEvery). Standardmäßig ausgeschaltet.","\n","maxIdle Maximale Anzahl unbenutzter Verbindungen, \n die im Pool verbleiben dürfen (überzählige Verbindungen werden wieder \n freigegeben). Der Standardwert -1 bewirkt, dass einmal aufgebaute Verbindungen \n nicht freigegeben, sondern für spätere Wiederverwendung aufgehoben werden.","\n","idleTimeout Minimale Dauer in Millisekunden, die \n eine unbenutzte Verbindung im Pool verbleibt, bevor sie freigegeben werden \n kann. Nur wirksam, falls maxIdle größer 0 ist. Der Standardwert -1 bewirkt, \n dass Verbindungen \"ewig\" behalten werden.","\n","examEvery Intervall in Millisekunden, in dem unbenutzte \n Verbindungen gesucht und freigegeben werden sollen. Der Standardwert -1 \n schaltet den dafür sonst nötigen Thread aus, es wird also nicht nach unbenutzten \n Verbindungen gesucht (siehe auch maxIdle).","\n","TestsPerRun Anzahl der pro Lauf des Prüf-Threads \n zu untersuchenden Verbindungen. Werte kleiner 0 schalten die Überprüfung \n ab. Standardmäßig ausgeschaltet.","\n"],["\n","Die Legato Application Engine benutzt die Bibliothek \n Log4J2 der Apache Foundation für die Ausgabe von Logmeldungen.","\n","Anmerkung",": Der plattformspezifische Wrapper \n für Windows (procrun) generiert ebenfalls Logmeldungen. Ob und wohin diese \n aufgezeichnet werden, stellen Sie bitte wie im Kapitel \"Installation\" \n angegeben in den Start-Skripten ein.","\n","Die Ausgabe von Logmeldungen wird über die Datei ","log4j2.xml"," \n gesteuert. Die mitgelieferte Beispieldatei sieht so aus:","\n","<Configuration monitorInterval=\"30\" status=\"WARN\">","\n","<Appenders>","\n","<Console name=\"Console\" target=\"SYSTEM_OUT\">","\n","<PatternLayout>","\n","<Pattern>","\n","%d{ABSOLUTE} [%thread] %-5level %logger{1} - %message%n%throwable","\n","</Pattern>","\n","</PatternLayout>","\n","</Console>","\n","<RollingRandomAccessFile name=\"logfile\" fileName=\"leappeng.log\" filePattern=\"leappeng.%i.log\" immediateFlush=\"false\" append=\"true\">","\n","<Policies>","\n","<OnStartupTriggeringPolicy/>","\n","<SizeBasedTriggeringPolicy size=\"10 MB\"/>","\n","</Policies>","\n","<DefaultRolloverStrategy min=\"1\" max=\"9\"/>","\n","<PatternLayout charset=\"UTF-8\">","\n","<Pattern>","\n","%date{DEFAULT} [%thread] %-5level %logger{1} - %message%n%throwable","\n","</Pattern>","\n","</PatternLayout>","\n","</RollingRandomAccessFile>","\n","<RollingRandomAccessFile name=\"errfile\" fileName=\"leapperr.log\" filePattern=\"leapperr.%i.log\" immediateFlush=\"false\" append=\"true\">","\n","<ThresholdFilter level=\"WARN\" onMatch=\"ACCEPT\" onMismatch=\"DENY\"/>","\n","<Policies>","\n","<OnStartupTriggeringPolicy/>","\n","<SizeBasedTriggeringPolicy size=\"10 MB\"/>","\n","</Policies>","\n","<DefaultRolloverStrategy min=\"1\" max=\"9\"/>","\n","<PatternLayout charset=\"UTF-8\">","\n","<Pattern>","\n","%date{DEFAULT} [%thread] %-5level %logger{1} - %message%n%throwable","\n","</Pattern>","\n","</PatternLayout>","\n","</RollingRandomAccessFile>","\n","</Appenders>","\n","<Loggers>","\n","<AsyncRoot level=\"info\" includeLocation=\"false\">","\n","<AppenderRef ref=\"Console\"/>","\n","<AppenderRef ref=\"logfile\"/>","\n","<AppenderRef ref=\"errfile\"/>","\n","</AsyncRoot>","\n","<AsyncLogger name=\"httpclient.wire\" level=\"error\"/>","\n","<AsyncLogger name=\"oracle.ucp\" level=\"error\"/>","\n","<AsyncLogger name=\"org.apache.commons.httpclient\" level=\"error\"/>","\n","<AsyncLogger name=\"javax.management\" level=\"error\"/>","\n","<AsyncLogger name=\"de.gefasoft.legato.appeng.job.AeJobPoller\" level=\"trace\"/>","\n","<AsyncLogger name=\"JsJob-KPI_abhaengigkeits-gesteuert\" level=\"trace\"/>","\n","<AsyncLogger name=\"OnlineKPI\" level=\"trace\"/>","\n","<AsyncLogger name=\"de.gefasoft.legato.appeng.timeslice.AggregatorJob\" level=\"trace\"/>","\n","</Loggers>","\n","</Configuration>","\n"," ","\n","In der ersten Zeile wird das \"MonitorInterval\" \n definiert. Dieses legt fest, alle wieviel Sekunden soll Log4j nachschauen, \n ob die Logdatei geändert wurde. Zum Abschalten dieser Überprüfung kann \n man den Wert auf 0 setzen; alternativ kann auch ein höherer Wert eingetragen \n werden. Für die Inbetriebnahme werden 30 Sekunden empfohlen.","\n","Unter \"RollingRandomAccessFile\" (der \n Parameter existiert 2 Mal) wird oben der Pfad für das Log-File und unten \n der Pfad für das Error-File angegeben. Der Pfad wird dabei sowohl bei \n \"fileName\" als auch bei \"filePattern\" eingegeben, \n z.B. fileName=\"/var/log/leappeng/leappeng_DEV11DB.log\" filePattern=\"/var/log/leappeng/leappeng_DEV11DB.%i.log\"","\n","\"OnStartupTriggeringPolicy\" legt fest, \n dass bei jedem Start der AE neues Logfile begonnen wird; wenn dies nicht \n gewünscht ist, kann der Parameter gelöscht werden.","\n","\"DefaultRolloverStrategy\" legt fest, \n wie viele Files erstellt werden, ehe das älteste überschrieben wird.","\n","\"AsyncRoot\" definiert das Standardlevel \n für das Erfassen von Meldungen.","\n","\"AsyncLoggers\" definiert Ausnahmen zum \n \"AsyncRoot\". Damit wird für einzelne Logger (Jobs) angegeben, \n dass sie anders loggen sollen als die anderen. Die oben angegebene Werte \n sind nur Beispiele; mindestens die letzten 4 sollten entfernt werden.","\n","Wenn die AE als Dienst betrieben wird, sollte \n der \"ConsoleAppender\" (<AppenderRef ref=\"Console\"/>) \n gelöscht werden.","\n"," ","\n","In der Beispiel-Datei werden Meldungen der Level TRACE \n und DEBUG gar nicht erfasst, weil bei AsyncRoot \"Info\" eingestellt \n ist. Ausnahmen dazu sind über den AsyncLogger definiert, z.B. das Level \n Trace für die KPI-Jobs.","\n","Alle Meldungen ab Level INFO werden ins Log-File geschrieben \n (hier ist kein eigener Filter definiert ","à"," \n alle erfassten Meldungen (= AsyncRoot-Level) werden gespeichert). Alle \n Meldungen ab Level WARN werden zusätzlich ins Error-File geschrieben.","\n","Die Application Engine benutzt folgende Kategorien:","\n","FATAL für schwere Fehler, die eine weitere Ausführung \n des Programms verhindern.","\n","ERROR für Fehler, die mindestens die Ausführung \n eines Jobs, z.B. KPI-Berechnung, gesamt stören.","\n","WARN für Warnungen und Fehler, die wahrscheinlich \n nur lokale Wirkung haben, z.B. die KPI-Berechnung nur für einen bestimmten \n Knoten verhindern.","\n","INFO für Initialisierung und globalen Ablauf, \n z.B. Anlegen, Start und Stopp von Jobs.","\n","DEBUG für Aktivitäten innerhalb Jobs, z.B. Start/Stopp \n der KPI-Berechnung für eine bestimmte Schicht.","\n","TRACE für Meldungen zur Fehlersuche, z.B. SQL-Anweisungen.","\n"," ","\n","Die vielen weiteren Möglichkeiten von Log4J2 würden \n den Rahmen dieser Beschreibung sprengen, Sie können sie bei Bedarf unter \n ","http://logging.apache.org/log4j/2.x/"," \n nachlesen. Für weiterführende Konfigurationen hier die von der Application \n Engine benutzten Logger:","\n","de.gefasoft.legato.appeng.main.AppEngine - Initialisierung, \n Start, Stopp des Programms","\n","JsJob-<Jobname> - Meldungen des betreffenden \n Scripts (z.B. JsJob-KPI_abhaengigkeits-gesteuert)","\n","de.gefasoft.legato.util.DbConPool - Datenbankverbindungs-Pools \n anlegen/löschen","\n\n\n"]],"3":[["Konfiguration der Legato Application Engine"]],"6":[["Grundkonfiguration"],["Anlegen \n von Thread-Pools"],["Anlegen \n von Datenbankverbindungs-Pools"],["Konfiguration \n von Logmeldungen"]],"id":"20"})