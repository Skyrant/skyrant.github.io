rh._.exports({"1":[["\n"],["\n","Die Installationsanleitung in diesem Abschnitt stützt \n sich auf den technischen Artikel \"How I Simplified Oracle Database \n 12c and 11g Installation on Oracle Linux 6\" (","http://www.oracle.com/technetwork/articles/servers-storage-admin/ginnydbinstallonlinux-488779.html","). \n Alle Schritte der automatisierten Installation (mithilfe des Oracle-preInstaller-Skripts) \n sind im Folgenden beschrieben und werden mit dem root-User ausgeführt.","\n","Hierfür wird eine registrierte Red Hat (oder Oracle \n Linux) Verbindung benötigt.","\n","Zunächst muss das Oracle-Repository angebunden werden:","\n","# cd /etc/yum.repos.d","\n","# wget http://public-yum.oracle.com/public-yum-ol6.repo","\n"," ","\n","TIPP:","\n","Das Repository heißt \" OL6.REPO\", \n nicht \"O16.REPO\"","\n","In der soeben heruntergeladenen Datei wird überprüft, \n ob tatsächlich das neueste Repository eingeschaltet und ansprechbar ist:","\n","# vi public-yum-ol6.repo","\n"," ","\n","In der letzten Zeile der beiden unten genannten Abschnitte \n muss enabled=1 stehen. Ist dies nicht der Fall, muss auf diesen Wert geändert \n werden:","\n","[ol6_latest]","\n","name=Oracle Linux $releasever Latest ($basearch)","\n","baseurl=http://public-yum.oracle.com/repo/OracleLinux/OL6/latest/$basearch/","\n","gpgkey=http://public-yum.oracle.com/RPM-GPG-KEY-oracle-ol6","\n","gpgcheck=1","\n","enabled=1","\n"," ","\n","...","\n"," ","\n","[ol6_UEK_latest]","\n","name=Latest Unbreakable Enterprise Kernel for Oracle \n Linux $releasever ($basearch)","\n","baseurl=http://public-yum.oracle.com/repo/OracleLinux/OL6/UEK/latest/$basearch/","\n","gpgkey=http://public-yum.oracle.com/RPM-GPG-KEY-oracle-ol6","\n","gpgcheck=1","\n","enabled=1","\n"," ","\n","Das so angebunden Repository kann nun zur Installation \n genutzt werden:","\n","# yum install oracle-rdbms-server-11gR2-preinstall","\n"," ","\n","Dieser Vorgang kann einige Minuten dauern. Nach der \n Prüfung erfolgt eine Information über die Download-Größe sowie eine Abfrage, \n ob die Installation der Packages starten soll. Diese muss mit \"y\" \n (Yes, Ja) bestätigt werden.","\n","\n","Danach werden die benötigten Dateien heruntergeladen \n bzw. aktualisiert und das Pre-Install Skript läuft durch. Hier folgen \n wieder einige Abfragen, die alle mit \"y\" (Yes, Ja) bestätigt \n werden müssen.","\n","\n","Wenn das Skript erfolgreich durchgelaufen ist, sind \n die Vorbereitungen abgeschlossen.","\n","TIPP:","\n","Sollte das Skript nicht erfolgreich durchgelaufen \n sein und die Fehlermeldung","\n","GPG key retrieval failed: [Errno 14] Could not open/read \n ","file:///etc/pki/rpm-gpg/RPM-GPG-KEY-oracle","\n"," ","\n","erscheinen, so kann man den Fehler folgendermaßen beheben:","\n","Geben Sie folgenden Befehl ein:","\n","wget"," ","https://public-yum.oracle.com/RPM-GPG-KEY-oracle-ol6"," ","-O /etc/pki/rpm-gpg/RPM-GPG-KEY-oracle","\n"," ","\n","Es erscheinen erneut zwei Abfragen, die beide mit \"y\" \n (Yes, Ja) bestätigt werden müssen.","\n","Danach wird das Pre-Install Skript automatisch erneut \n ausgeführt und sollte nun zum Erfolg führen.","\n\n\n"]],"3":[["Pre-Installation"]],"4":[["Pre-Installation"]],"id":"75"})