rh._.exports({"0":[["Read/Write DB Benutzer Einstellungen"]],"1":[["Read/Write DB Benutzer Einstellung"]],"2":[["\n"],["\n","Systemadministration \n | Systemeinstellungen | Read/Write DB Benutzer Einstellungen","\n","Sofern die Authentifizierung des Benutzers nicht gegenüber \n der Datenbank erfolgt (","à"," \n Benutzerverwaltung), erfolgt die Anmeldung in drei Schritten","\n","Anmeldung \n mit einem DB-Benutzer mit Minimalrechten (normalerweise erscheint dieser \n Dialog nicht, da das Kennwort für diesen Benutzer problemlos gespeichert \n werden kann)","\n","Es wird \n in der Datenbank die Authentifizierungsart gelesen (intern, LDAP, Kerberos…) \n und der entsprechende Anmeldedialog für den Benutzer gezeigt.","\n","Nach erfolgreicher \n Benutzerprüfung wird der read/write-Benutzer aus der Datenbank gelesen \n und intern für alle Datenbankzugriffe verwendet (das Passwort ist verschlüsselt \n im Systemparameter 1103 gespeichert!).","\n"," ","\n","Über den DB-Benutzer (read/write)-Dialog wird dieser \n interne Datenbankbenutzer festgelegt. Dieser Benutzer benötigt uneingeschränkten \n Zugriff auf alle Legato-Objekte in der Datenbank.","\n","\n\n\n"]],"4":[["Read/Write DB Benutzer Einstellungen"]],"id":"249"})