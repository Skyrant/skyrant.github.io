rh._.exports({"0":[["DB Benutzer Passwort ändern"]],"2":[["\n"],["\n"],["\n","Der LC2 verwendet zwei unabhängige DB-Benutzer:","\n","\n\t","LC2-Login-User"," \n\t (niedrig privilegierter Benutzer)","\n\tDieser wird gemeinsam mit den Verbindungseinstellungen auf jedem Rechner \n\t lokal gespeichert und wird demnach von jedem LC2-Anwender selbst verwaltet.","\n\t","Intern für \n\t Schreibzugriffe verwendeter Benutzer"," (höher privilegierter \n\t Benutzer)","\n\tDieser wird systemweit zentral in einem Systemparameter gespeichert \n\t und in der Regel von einem Key User/Administrator festgelegt. Die \n\t Anpassung dieses Passwortes sollte unmittelbar nach der Passwortänderung \n\t durchgeführt werden.  ","\n","\n"," ","\n"],["\n"," ","\n","\n\t","Wählen Sie nach dem Starten des LC2 im ","Database Connections","-Dialog (Verbindungsdialog) \n\t die gewünschte Datenbank aus.","\n\t","\n\t","Klicken Sie auf die ","Edit","-Schaltfläche.","\n\t","\n\t","\n\t","Bearbeiten Sie im ","Properties","-Dialog \n\t anschließend die DB-Verbindung unter ","Connection \n\t > Legato Connection String [...]",".","\n\t","\n\t","\n\t","Ändern Sie im ","Connection \n\t Properties-","Dialog anschließend das Passwort. ","\n\t","\n\t","\n\t","Klicken Sie abschließend auf die ","Test \n\t Connection","-Schaltfläche, um die Verbindung zu testen.","\n","\n"," ","\n","\n","Das Passwort für den Login-User wird verschlüsselt \n lokal auf dem Rechner in der Datei global.config gespeichert.","\n"," ","\n"],["\n","Der LC2 verwendet intern den höher privilegierten Benutzer, um Konfigurationsänderungen \n in die Datenbank speichern zu können. Die Änderung des Passwortes dieses \n Benutzers erfolgt über den LC2.","\n"," ","\n","\n\t","Verbinden Sie sich mit der gewünschten Datenbank.","\n","\n","\n\t","Nach der Anmeldung mit dem Legato-Benutzer erscheint der ","Database Read/Write User","-Dialog. \n\t Geben Sie hier ","nicht"," den gewöhnlichen \n\t Sapient-Anmeldename an. An dieser Stelle muss der höher privilegierte \n\t Benutzer eingegeben werden.","\n\t","\n\t","\n","\n","\n","Dieser eingegebene Benutzer wird mit verschlüsseltem \n Passwort in den Systemparametern -202 und -203 hinterlegt.","\n"," ","\n"," ","\n"],["\n","In regelmäßigen Abständen müssen die Benutzerpasswörter \n für die Datenbank geändert werden. ","\n"," ","\n","\n","Einige Teile dieser Beschreibung sind \n kundenspezifisch. Klären Sie mit Ihrem Gefasoft-Ansprechpartner die genaue \n Vorgehensweise ab.","\n"," ","\n","Gehen Sie wie folgt vor, um diese DB-Änderungen für \n Benutzer durchzuführen.","\n"," ","\n","\n\t","Stoppen Sie alle Dienste, die sowohl direkt, \n\t als auch indirekt auf die DB zugreifen.","\n\t• SapientEngine(s)","\n\t• SCC(s)","\n\t• Applikation(en) zu Drittsystemen, welche Zugriff auf die Datenbank \n\t haben.","\n\t","\n","\n","\n\t","Ändern Sie die Passwörter der relevanten DB-Benutzer. \n\t Diese sind z.B.","\n\t• SAPIENT_CLIENT","\n\t• SAPIENT_OWNER","\n\t• SAPIENT_SERVER","\n\t• SAPIENT_READ (hat nur Leserechte)","\n","\n"," ","\n","\n\t","Passen Sie die Properties-Datei ","„sapieng.properties","“ \n\t für alle SapientEngine(s) an.","\n\t","Tragen Sie mit dem SQL-Developer/SQL-Workbench \n\t in der Tabelle “","GP_R_CONNECTION","S” \n\t unter ","PROPERTIES"," das neue \n\t Passwort ein. Dies gilt für die Datenbankverbindungen (","object_names"," \n\t in der Tabelle \"","GP_R_CONNECTIONS","\"):","\n\t","\n\t• REPOSITORY (Zugriff auf die GP_R-Tabellen)","\n\t• LEGATO (Zugriff auf alle anderen Tabellen)","\n","\n"," ","\n","\n\t","Starten Sie die SapientEngine(s).","\n","\n"," ","\n","\n\t","Starten Sie den LC2 und passen Sie die Verbindungsparameter \n\t an. Testen Sie anschließend die Verbindung.","\n","\n"," ","\n","\n\t","Melden Sie sich am LC2 mit dem eigenen User \n\t an. Die Anwendung erkennt die Änderungen und fragt nach neuem DB User. \n\t Verwenden Sie den User „","SAPIENT_OWNER","“ \n\t und tragen Sie das neue Passwort ein.","\n","\n"," ","\n","\n\t","Starten Sie alle anderen Programme (SCCs, Koppelung \n\t zu Drittsysteme) und kontrollieren Sie die Fehlerausgabe.","\n","\n"," ","\n"," ","\n","\n","\n\t","Die Passwörter müssen an allen Stellen \n\t geändert werden, an denen Benutzer existieren (z.B. beim Starten der \n\t Sapient Engine).","\n\t","Es gibt für die Sapient Engine eine \n\t Properties-Datei (sapieng.properties), die einen Link zur Datenbank \n\t enthält. Dieser Link wird benötigt, damit sich die Sapient Engine \n\t mit der Datenbank verbinden kann. ","\n\t","In der Properties-Datei sind die Passwörter \n\t abrufbar. Die Passwörter sind obfuscated (verschleiert/nicht im Klartext \n\t angezeigt, jedoch auch nicht verschlüsselt).","\n\t","Die Sapient Engine kann so gestartet \n\t werden, dass das Passwort nicht verschleiert dargestellt wird. ","\n\t","Für alle Sapient Engines müssen die \n\t Passwörter in den Properties-Dateien geändert werden.","\n","\n"," ","\n","Verschleierte/obfuscated \n Passwörter:","\n","Im SQL Workbench ist in der Tabelle ","gp_r_connections"," \n (Liste der Verbindungen im ","Repository",") \n unter ","Data"," und ","Properties"," \n das Passwort abrufbar (","entweder"," \n obfuscated ","oder"," auch im Klartext).","\n","(1)"," \n Passwort im Klartext","\n","(2)"," \n Verschleiertes (obfuscated) Passwort","\n"," ","\n","\n","Das unten stehende Beispiel zeigt zu Anschauungszwecken \n sowohl das ","Passwort im Klartext ","(1)",", als auch das \n ","verschleierte (obfuscated) Passwort ","(2)"," gezeigt. Im \n Realfall ist entweder das Passwort im Klartext oder das verschleierte \n (obfuscated) Passwort ersichtlich.","\n"," ","\n","\n"," ","\n\n\n"]],"4":[["Änderungen im LC2"],["Änderung \n des Passworts als LC2-Login-User (niedrig privilegierter Benutzer)"],["Änderung \n des Passwortes als höher privilegierter Benutzer"],["Änderungen in Sapient"]],"7":[["DB Benutzer Passwort ändern"]],"id":"255"})