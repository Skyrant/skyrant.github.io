rh._.exports({"1":[["\n"],["\n"],["\n","Für die grafische Installation müssen weitere Vorbereitungen getroffen werden, und zwar:","\n\n","Anlegen der benötigten Installationsverzeichnisse, in denen der Oracle-Installer die Server-Software und die Daten ablegt - optional, wird aber gemäß OFA (s. u.) empfohlen","\n\n","Anlegen des OracleInstaller-Verzeichnisses, in dem die Oracle-Installer-Dateien liegen","\n\n","Eintragen der Server-Umgebungsvariablen in der Datei /etc/hosts und Freigabe des X Window-Displays","\n\n"," ","\n","Anschließend wird die eigentliche Installation vorgenommen. Die Schritte werden nun detailliert erklärt.","\n"],["\n","Hierfür gibt es mehrere Möglichkeiten. Im Folgenden wird die von Gefasoft empfohlene \"Optimal Flexible Architecture\" (OFA) beschrieben:","\n","Zunächst werden die folgenden Verzeichnisse angelegt:","\n"," ","\n","\n","\n","\n","Oracle Base directory","\n","\n","\n","/u01/app/oracle","\n","\n","\n","\n","\n","Oracle Home directory for Oracle Database","\n","\n","\n","/u01/app/oracle/product/12.1.0/dbhome_1","\n","\n","\n","\n","\n","Oracle Data directory","\n","\n","\n","/u02/app/oracle/oradata","\n","\n","\n","\n","\n","Data files for db_name1 database","\n","\n","\n","/u02/app/oracle/oradata/db_name1","\n","\n","\n","\n","\n","Sub-tree for Recovery files","\n","\n","\n","/u03/app/oracle/fast_recovery_area","\n","\n","\n","\n","\n","Recovery files for db_name1 database","\n","\n","\n","/u03/app/oracle/fast_recovery_area/db_name1","\n","\n","\n","\n"," ","\n","Der Name \"dbhome_1\" wird ","as is"," übernommen. Für \"db_name1\" wird die Oracle SID verwendet, also z. B. \"legato\". Mit der genannten OFA werden Oracle-Datenbanken so angelegt, dass sie mehrere Oracle-Home-Verzeichnisse beinhalten können.","\n","Wie weiter oben geschrieben, werden minimal etwa 4,5 GB für die Softwareinstallation selber und minimal 1,5 GB für Daten benötigt. Grundsätzlich können die Partitionen und Verzeichnisse nahezu beliebig (nur beschränkt durch Begrenzungen des Betriebssystems) angelegt werden. Solche Details werden hier nicht weiter betrachtet und einfach vorausgesetzt, dass die Directories /u01, /u02 und /u03 auf Partitionen mit ausreichend viel Speicherplatz angelegt werden.","\n","# mkdir -p /u01/app/oracle/product/12.1.0/dbhome_1","\n","# mkdir -p /u02/app/oracle/oradata","\n","# mkdir -p /u03/app/oracle/fast_recovery_area","\n"," ","\n","Alle Verzeichnisse werden (rekursiv) dem Betriebssystem-User oracle zugewiesen und die"," Zugriffsrechte ","entsprechend modifiziert:","\n","# chown -R oracle:oinstall /u01/app/ /u02/app/ /u03/app/","\n","# chmod -R 775 /u01/app/ /u02/app/ /u03/app/","\n"," ","\n"],["\n","Die Oracle-Installationsdateien können auf verschiedene Weisen installiert werden. Im Folgenden wird die Installation von der Festplatte beschrieben, aber natürlich sind auch Installationen von einer DVD oder anderweitig aus dem Netzwerk möglich.","\n","Für die Installation im Zusammenhang mit LEGATO werden die beiden Zip-Installationsdateien","\n\n","linuxamd64_12102_database_1of2.zip","\n\n","linuxamd64_12102_database_2of2.zip","\n\n"," ","\n","benötigt. Für die genannten Dateien wird ein geeignetes Verzeichnis (z. B. /tmp/OracleInstaller) angelegt und die Zip-Dateien hineinkopiert und dort (in dieselben Unterverzeichnisse hinein!) entpackt:","\n","# mkdir -p /tmp/OracleInstaller","\n","# cd /tmp/OracleInstaller","\n"," ","\n","# unzip ","linuxamd64_12102_database_1of2.zip","\n","# unzip ","linuxamd64_12102_database_2of2.zip","\n"," ","\n","Die beiden Dateien ","linuxamd64_12102_database_1of2.zip"," und ","linuxamd64_12102_database_2of2.zip"," werden in ein Unterverzeichnis ","database"," hinein entpackt. Die neue Unterverzeichnis database wird dem User ","oracle"," als neuem Eigentümer zugeordnet.","\n","# chown -R oracle:oinstall database","\n"," ","\n"],["\n","Außerdem muss noch die Host-Datei /etc/hosts konfiguriert werden. Dazu geht man wie folgt vor:","\n","Die eigene IP-Adresse wird ermittelt:","\n",":","\n","Dieser Befehl ist je nach Spracheinstellung des Betriebssystems unterschiedlich.","\n","Für ein deutsches Betriebssystem lautet der Befehl:","\n","# ifconfig|grep 'inet Adresse'| grep -v 127.0.0.1|cut -d':' -f2|awk '{print $1}' | sed -ne '1p'","\n"," ","\n","Für ein englisches Betriebssystem lautet der Befehl:","\n","# ifconfig|grep 'inet addr'| grep -v 127.0.0.1|cut -d':' -f2|awk '{print $1}' | sed -ne '1p'","\n"," ","\n","Dieser Befehl liefert zum Beispiel folgendes Ergebnis: 192.168.1.221","\n","Dann wird der Hostname ermittelt:","\n","# hostname","\n"," ","\n","Dieser Befehl liefert zum Beispiel folgendes Ergebnis: LEGATO-Server","\n","Über den Befehl","\n","# vi /etc/hosts","\n"," ","\n","werden die bereits bestehenden Hosts angezeigt. Bei einem neu aufgesetzten Betriebssystem sieht die Datei folgendermaßen aus:","\n","127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4","\n","::1         localhost localhost.localdomain localhost4 localhost4.localdomain4","\n"," ","\n","Hier muss nun eine dritte Zeile mit folgendem Inhalt ergänzt werden:","\n","[IP-Adresse] [mind. 1 Leerzeichen] [Hostname].[Domainname] [mind. 1 Leerzeichen] [Hostname]","\n"," ","\n","Mit den Beispielangaben von oben sieht das z.B. folgendermaßen aus:","\n","192.168.1.221    LEGATO-Server.muc.gefasoft.office     LEGATO-Server","\n"," ","\n"],["\n","Siehe auch: https://oracle-base.com/articles/12c/oracle-db-12cr1-installation-on-oracle-linux-6#additional_setup","\n","Passen Sie die Datei \"/etc/security/limits.d/90-nproc.conf\" wie unten beschrieben an. Siehe hierzu auch die MOS Note [ID 1487773.1].","\n","(","https://support.oracle.com/epmos/faces/DocContentDisplay?id=1487773.1",")","\n","Ändern Sie die Zeile:","\n","*          soft    nproc    1024","\n"," ","\n","nach","\n","* - nproc 16384","\n"," ","\n","Editieren Sie die Datei \"/etc/selinux/config\" wie folgt:","\n","SELINUX=permissive","\n"," ","\n","Dadurch werden die Sicherheitseinstellungen heruntergesetzt. Sobald diese Änderung vollständig ist, starten Sie bitte den Server neu.","\n"],["\n",":","\n","Auf Linux muss direkt vor der Installation die Firewall ausgeschaltet werden, da anderenfalls die Installation fehlschlägt.","\n","Öffnen Sie ein Terminal und geben Sie mit dem User root folgenden Befehl ein:","\n","# service iptables stop","\n"," ","\n\n\n"]],"3":[["Vorbereitung der grafischen Installation des RDBMS"]],"4":[["Vorbereitung der grafischen Installation des RDBMS"]],"6":[["Allgemein"],["Anlegen der Installationsverzeichnisse"],["Anlegen des Oracle-Installer Verzeichnisses"],["Konfiguration der Host-Datei"],["Weitere Vorbereitung (speziell für Oracle Linux 6)"],["Deaktivieren der Firewall"]],"id":"93"})