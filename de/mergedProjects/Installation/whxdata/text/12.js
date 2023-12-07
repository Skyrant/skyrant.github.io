rh._.exports({"0":[["Installation"]],"1":[["\n"],["\n"],["\n","\n","\n"," ","\n",":","\n","Die Versionen der AE und der Legato-Datenbank \n müssen gleich sein, sonst kommt es zu Fehlern.","\n",":","\n","Für diverse Jobs fragt die AE die Datenbank \n ab. Damit es hier zu keinen Problemen kommt, muss die Java-VM eine korrekte \n Konfiguration der Zeitzone haben. Ob überhaupt eine Zeitzonen-Einstellung \n vorliegt, kann über Putty mit \"echo $LANG\" geprüft werden. Besteht \n kein Zugriff auf die Installation der Java-VM, kann die Zeitzone auch \n im Startskript der AE (in der Datei dosvc.cmd) gesetzt werden. Dazu muss \n die Umgebungs-Variable JAVA_OPTS um die Angabe \"-Duser.timezone=CET\" \n ergänzt werden (ggf. ist CET durch die korrekte Zeitzone zu ersetzen).","\n"],["\n","Unter Windows kann die Legato Application Engine mit \n Hilfe von Programmen der Apache Foundation (aus dem Projekt \"Jakarta \n Commons Daemon\") als Dienst installiert werden. Zur Installation \n gehen Sie bitte folgendermaßen vor:","\n","Legen Sie ein Verzeichnis für die Legato Application \n Engine an und entpacken Sie das Archiv (LeAppEng-x.y.z.b.zip) in dieses \n Verzeichnis.","\n","Kopieren Sie bitte unter Windows 32 Bit die Programme \n dosvc.sample.cmd, LeAppEng.exe und LeAppEngW.exe aus dem Unterverzeichnis \n \"win\", unter Windows 64 Bit die Programme dosvc.sample.cmd, \n prunsrv.exe und prunmgr.exe aus dem Unterverzeichnis \"win64\" \n in Ihr AE-Verzeichnis.","\n","Speichern Sie die Dateien ojdbc*.jar und orai18n*.jar \n (* = aktuelle Version) in das Verzeichnis LegatoAppEng\\lib. Sie können \n von der Oracle Homepage heruntergeladen werden. Die verwendete Version \n muss mindestens ojdbc6.jar (für Java 1.7) oder höher sein.","\n","Bei einer Neu-Installation benennen Sie bitte \n die folgenden Dateien um:","\n","appengine.sample.properties \n zu appengine.properties","\n","log4j2.sample.xml \n zu log4j2.xml","\n","Bearbeiten Sie die Datei ","dosvc.cmd"," in einem Text-Editor \n und nehmen Sie folgende Einstellungen vor:","\n",":","\n","Alle Pfadangaben müssen mit einem Backslash \n (\\) enden.","\n","Bei einer 1-DB Installation, löschen Sie die Angaben \n für \"dbarch\".","\n","Bearbeiten Sie die Zeile, in welcher die Umgebungsvariable \n JAVA_HOME gesetzt wird so, dass JAVA_HOME auf das Verzeichnis der Java-Umgebung \n des betreffenden Rechners verweist. Beispiel: set JAVA_HOME= C:\\Programme\\Java\\j2re1.7.2_08\\","\n","Falls Sie den Namen des installierten Dienstes \n ändern wollen, ändern Sie die Variable SVCNAME. (Falls Sie mehrere Instanzen \n der Application Engine am gleichen Rechner betreiben wollen, müssen Sie \n jeder Instanz einen eigenen Namen geben).","\n","Falls Sie dosvc.cmd in ein anderes Verzeichnis \n verschieben wollen (sodass dosvc.cmd und LeAppEngBoot.jar sich nicht im \n gleichen Verzeichnis befinden), setzen Sie die Variable HOMEDIR auf das \n Verzeichnis der Application Engine.","\n",":","\n","Enthält der Verzeichnis-Pfad der Application \n Engine Leerzeichen, so führt dies zu einem Fehler. In diesem Fall muss \n man entweder:","\n","das %HOMEDIR% bei SVCEXE und bei MONEXE löschen \n (set SVCEXE=prunsrv; set MONEXE=prunmgr)","\n","oder man definiert im obersten Teil der dosvc.cmd \n zwei neue Variablen 'set SLASH=\\' und 'set PLACEHOLDER=\"' und gibt \n diese immer bei Angabe des HOMEDIR mit an (z.B. set SVCEXE=%PLACEHOLDER%HOMEDIR%%SLASH%LeAppEng%PLACEHOLDER%; \n set MONEXE=%PLACEHOLDER%%HOMEDIR%%SLASH%LeAppEngW%PLACEHOLDER%; set SVCOPTS=--JvmOptions=-Xrs \n ++JvmOptions=-Dappeng.home=%PLACEHOLDER%%HOMEDIR%%PLACEHOLDER% ++JvmOptions=-Dappeng.config=%PLACEHOLDER%%CFGDIR%%PLACEHOLDER% \n ++JvmOptions=-Dappeng.scripts=%PLACEHOLDER%%SCRDIR%%PLACEHOLDER%)","\n","Optional: Falls Sie die Konfigurationsdateien \n der Application Engine nicht im Programmverzeichnis ablegen wollen, geben \n Sie das Verzeichnis der Konfigurationsdateien in der Variablen CFGDIR \n an.","\n","Optional: Falls Sie die JavaScript-Skripten in \n ein Verzeichnis außerhalb des Programmverzeichnisses legen wollen, geben \n sie dieses in der Variablen SCRDIR an.","\n","Optional: Setzen Sie den Pfad für die Logdateien \n des Dienste-Wrapper in der Variablen LOGDIR (wirkt sich nicht auf das \n Logging der eigentlichen Application Engine aus; dies wird in log4j2.xml \n konfiguriert).","\n","Optional: Setzen Sie die Ausführlichkeit der Logdateien \n des Dienste-Wrapper in der Variablen PR_LOGLEVEL (erlaubte Werte sind \n debug, info, warn oder error. \"Debug\" enthält alle Logmeldungen, \n also auch \"info\", \"warn\" und \"error\"; \"info\" \n enthält alle Logmeldungen außer \"debug\" usw.)","\n","Optional: Setzen Sie Namen und Pfad der Dateien \n mit den umgeleiteten Standard- und Fehler-Ausgaben der Application Engine \n in den Variablen PR_STDOUTPUT und PR_STDERROR.","\n","Optional: Setzen der Zeitzone. Ergänzen Sie in \n der Datei dosvc.cmd die Umgebungs-Variable JAVA_OPTS um die Angabe \"-Duser.timezone=CET\" \n (CET muss ggf. durch die korrekte Zeitzone ersetzt werden). Diese Angabe \n ist nötig, wenn die Java-VM keine oder eine falsche Konfiguration der \n Zeitzone hat und dies nicht in der Java-VM selbst korrigiert werden kann. \n Ob überhaupt eine Zeitzonen-Einstellung vorliegt, kann über Putty mit \n \"echo $LANG\" geprüft werden.","\n",":","\n","Wenn die Java-VM keine oder eine falsche \n Konfiguration der Zeitzone hat, werden keine Verfügbarkeits-Abschnitte \n online berechnet. Verfügbarkeitsrelevante Störungen werden dann für KPI-Berechnungen \n nicht berücksichtigt.","\n","Konfigurieren Sie die Application Engine (für \n die genauen Schritte siehe Kapitel ","Konfiguration \n der Legato Application Engine",").","\n","Installieren Sie den Dienst, indem Sie eine Eingabeaufforderung \n öffnen, in das Programmverzeichnis wechseln und darin den Befehl \"dosvc \n inst\" eingeben.","\n","Erstellen Sie eine Verknüpfung zur Monitor-Applikation \n im Startmenü (eventuell auch im \"Autostart-Ordner\" von \"Alle \n Benutzer\"). Geben Sie als \"Ziel\" den Befehl \"dosvc \n monitor\" (unter Windows 64 Bit \"C:\\Windows\\System32\\cmd.exe /C <Programmverzeichnis>dosvc \n monitor\") und als Arbeitsverzeichnis das Programmverzeichnis ein.","\n","Führen Sie die Monitor-Applikation mittels der \n eben erstellten Verknüpfung aus. Deren Programmsymbol erscheint daraufhin \n im Systembereich (\"system tray\") der Taskleiste. Durch Klicken \n mit der rechten Maustaste können Sie den Dienst starten oder dessen Konfiguration \n bearbeiten.","\n"," ","\n","Der Dienst-Eintrag der Legato Application Engine wird \n zunächst mit der Start-Einstellung \"manuell\" eingetragen, das \n heißt, der Dienst wird nicht automatisch beim Hochfahren des Systems gestartet. \n Wir empfehlen, dass Sie sie erst dann auf \"automatisch\" stellen, \n wenn Sie die Application Engine vollständig konfiguriert und die Konfiguration \n getestet haben.","\n"],["\n","Falls Sie die Application Engine als normales Programm \n ausführen, gehen Sie bitte folgendermaßen vor:","\n","Legen Sie ein Verzeichnis für die Legato Application \n Engine an und entpacken Sie das Archiv (LeAppEng-x.y.z.b.zip) in dieses \n Verzeichnis (falls Sie ein JDK installiert haben, können Sie das z.B. \n mittels des JAR-Tools durchführen).","\n","Kopieren Sie bitte unter Windows 32 Bit die Datei \n dosvc.sample.cmd aus dem Unterverzeichnis \"win\", unter Windows \n 64 Bit die Datei dosvc.sample.cmd aus dem Unterverzeichnis \"win64\" \n in Ihr Verzeichnis.","\n","Bei einer Neu-Installation benennen Sie bitte \n die folgenden Dateien um:","\n","appengine.sample.properties \n zu appengine.properties","\n","log4j2.sample.xml \n zu log4j2.xml","\n"," ","\n","Um die Application Engine zu starten, gehen Sie bitte \n wie folgt vor:","\n","Setzen Sie die Umgebungsvariable JAVA_HOME auf \n das Basis-Verzeichnis Ihrer Java Laufzeitumgebung.","\n","Rufen Sie die Application Engine auf: java -jar \n LeAppEngBoot.jar","\n"," ","\n","Die Application Engine läuft nun als normale Konsolen-Applikation. \n Um sie zu beenden, drücken Sie ","Strg+C",". \n Wenn Sie die Application Engine unter Unix oder Linux als Hintergrundprozess \n gestartet haben, können Sie sie durch das Signal SIGINT beenden (üblicherweise \n mit dem Befehl ","kill"," ","<process-id>","). In beiden Fällen \n wird die Application Engine geordnet heruntergefahren, das heißt, sie \n beendet sich erst nach Freigabe aller Jobs.","\n","Sie können beim Aufruf folgende Optionen angeben (vor \n der Angabe \"-jar\"):","\n","-Dappeng.home=<Verzeichnis> - Installationsverzeichnis \n der Application Engine. Dies ist nötig, wenn Sie die Application Engine \n aus einem anderen Verzeichnis heraus starten wollen (Sie müssen dann den \n Pfad zu LeAppEngBoot.jar auch in der Kommandozeile angeben).","\n","-Dappeng.config=<Verzeichnis> - Verzeichnis \n der Konfigurationsdateien, falls diese sich nicht im Installationsverzeichnis \n befinden.","\n","-Dappeng.scripts=<Verzeichnis> - Verzeichnis \n der JavaScript-Skripten für die Application Engine. Nützlich, falls Sie \n die Skripten in einem Verzeichnis ablegen wollen, auf das auch über das \n Netzwerk zugegriffen werden kann und Sie nicht das Verzeichnis scripts \n im Programmverzeichnis freigeben wollen.","\n","-Dappeng.properties=<Datei> - Abweichender \n Name der Konfigurationsdatei. Nützlich, falls Sie mehrere Instanzen der \n Application Engine auf dem gleichen Rechner starten wollen und dafür das \n gleiche Konfigurationsverzeichnis benutzen wollen (um z.B. die Datenbankverbindungen \n gemeinsam für mehrere Instanzen festzulegen).","\n","-Dlog4j.configurationFile=<Datei> - Falls \n Sie Log4J2 für die Log-Ausgaben der Application Engine nicht über die \n log4j2.xml im Konfigurations- oder Installationsverzeichnis konfigurieren \n wollen, sondern z.B. über eine andere XML-Datei.","\n",":","\n","Diese Angabe muss als URL erfolgen, nicht \n als Dateiname (also in der Regel im Format file://<pfad>/<","\n","datei>, mit Protokoll-Angabe file:// am \n Anfang und auch unter Windows mit Schrägstrich statt Backslash).","\n"],["\n","Um die Legato Application Engine in den Startprozess \n des Betriebssystems einzubinden, benötigen Sie ein Shell-Skript, das dann \n über symbolische Links in den entsprechenden Verzeichnissen (unter Linux \n üblicherweise ","/etc/rc.d/rc*.d",") \n referenziert wird. Unter Linux wird die Application Engine üblicherweise \n in den Runlevels 3 und 5 gestartet.","\n","Der Aufbau der Startskripten und –Verzeichnisse ist \n leider stark plattformabhängig. Mit der Application Engine kann folglich \n nur ein Beispiel-Script (","leappeng.sample.sh",") \n mitgeliefert werden, das Sie als Basis für eigene Skripten benutzen können. \n Die meisten Linux-Distributionen und Unix-Varianten enthalten zusätzliche \n Hilfsmittel, mit denen die entsprechenden Skripten stark vereinfacht werden \n können (z.B. ","startproc/checkproc/killproc"," \n in SuSE Linux, ","start-stop-daemon"," \n in Debian GNU/Linux, ","daemon/killproc"," \n in Mandrake Linux u.v.m.).","\n","Unter Unix-Servern ist im Allgemeinen der Headless \n Mode von Java zu nutzen, d.h. im Aufruf der JVM sollte jeweils ein Eintrag \n ","-Djava.awt.headless=true"," \n vorhanden sein.","\n","Im Folgenden wird als Beispiel erläutert, wie die Legato \n Application Engine mittels des mitgelieferten Shell-Skripts unter SuSE \n Linux in den Startprozess installiert wird:","\n","Optional: Legen Sie einen Benutzer an, unter dessen \n Benutzerkonto die Application Engine ablaufen soll (sie soll das schließlich \n nicht als root tun).","\n","Kopieren Sie leappeng.sample.sh nach /etc/rc.d/leappeng \n (ohne Endungen \".sample.sh\") und machen Sie /etc/rc.d/leappeng \n ausführbar (chmod a+x /etc/rc.d/leappeng).","\n","Bearbeiten Sie die Datei /etc/rc.d/leappeng mit \n einem Text-Editor. Die anzupassenden Zeilen sind im Skript als Konfigurations-Abschnitt \n gekennzeichnet, die anzupassenden Optionen entsprechen denen, die in den \n vorhergehenden Abschnitten bereits erläutert wurden.","\n","Legen Sie eine Verknüpfung namens rcleappeng irgendwo \n im PATH an, z.B. /usr/sbin/rcleappeng. Testen Sie, ob Sie die Application \n Engine nun mittels \"rcleappeng start\" starten und \"rcleappeng \n stop\" beenden können. Sie sollten dazu die Application Engine bereits \n soweit konfiguriert haben (siehe unten), dass sie sich nicht sofort beendet. \n Es empfiehlt sich aber, in der appengine.properties die Instanz (AeInstance) \n auf eine in der Datenbank nicht vorhandene ID zu setzen, damit beim Test \n keine Aufträge bearbeitet werden.","\n","Legen Sie unter /etc/rc.d/rc3.d und /etc/rc.d/rc5.d \n je zwei Verknüpfungen auf /etc/rc.d/leappeng an, z.B. S30leappeng für \n den Start und K02leappeng für das Beenden. ('S' bedeutet Start, 'K' bedeutet \n Kill, die Nummern geben die Reihenfolge an: ziemlich spät starten und \n früh beenden).","\n"," ","\n","Bitte beachten Sie immer, dass ","leappeng.sh"," \n und die obigen Erläuterungen nur als Beispiel gedacht sind und keine Referenz-Implementierung \n für das Einbinden in den Startprozess Ihres Systems darstellen. Auch unter \n SuSE Linux würde man nicht unbedingt die im Skript enthaltenen Methoden \n für das Starten und Beenden verwenden, sondern sein Skript den dort bereits \n vorhandenen rc-Skripten nachempfinden, welche meist die Befehle ","startproc",", ","checkproc"," \n und ","killproc"," benutzen.","\n\n\n"]],"3":[["Installation"]],"6":[["Voraussetzungen"],["Installation \n unter Windows"],["Aufruf \n als Applikation"],["Einbinden \n in den Startprozess von Linux oder Unix"]],"id":"12"})