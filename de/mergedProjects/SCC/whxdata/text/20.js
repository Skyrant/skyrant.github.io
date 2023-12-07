rh._.exports({"0":[["Publish-Subscribe-Schnittstelle"]],"1":[["\n"],["\n","Zusätzlich zu den klassischen Kommunikationsmöglichkeiten \n über OPC, OPC-UA oder SendRecv-Telegrammschnittstelle nimmt der Datenaustausch \n über Publish-Subscribe Protokolle zu.","\n","Für diese Protokolle steht der Knoten PubSub zur Verfügung.","\n"],["\n","Es sind Treiber für folgende Standardprotokolle verfügbar:","\n","MQTT","\n","Kafka","\n"],["\n","Selektieren Sie das Grundelement \"PubSub\" \n im Projektbaum und wählen Sie im Kontextmenü den Befehl \"Neues Item\". \n Wählen Sie dann die MQTT-Verbindung aus.","\n","\n","Der \"Name\" ist frei wählbar. Der \"Clientname\" \n dient der Anmeldung beim Broker. Er sollte so gewählt werden, dass er \n auf Broker-Seite eindeutig ist.","\n","Unter \"URI\" muss der Verbindungsstring zum \n MQTT-Broker eingegeben werden.","\n","Im Bereich \"Connect parameters\" kann eine \n Authentifizierung für den Verbindungsaufbau definiert werden, falls notwendig \n oder gewünscht. In diesem Fall müssen ein Benutzer und ein Passwort eingegeben \n werden.","\n","Soll beim Broker eine \"Last Will Nachricht\" \n für den Fall einer Verbindungsunterbrechung hinterlegt werden, muss diese \n im folgenden Menüpunkt aktiviert werden. Es können dann ein Thema für \n die Nachricht, der Inhalt der Nachricht sowie die Qualität der Nachricht \n definiert werden.","\n","Soll der Broker nach Beendigung der Session alle Informationen \n aufräumen, muss \"Clean session\" aktiviert werden.","\n","Unter \"Keep Alive\" kann die Zeitdauer eingegeben \n werden, die der Broker die Verbindung aufrecht erhalten soll, wenn kein \n Telegramm vom Client gesendet wird. Die Hälfte dieser Zeit wird als Basis \n für das Lebendtelegramm (PINGREQ) auf Client-Seite verwendet.","\n","\"Timer Reconnect\" schließlich gibt an, nach \n welchem Zeitraum ein neuer Verbindungsaufbau nach einer Unterbrechung \n versucht wird.","\n","Ist \"Variablenverbindung\" aktiviert, so kann \n darunter der Namensbereich eingegeben werden.","\n"],["\n","Unter dem Element kann nun ein Topic Modul angelegt \n werden. Dies entspricht einem Sapient Maschinen-Client (SMC).","\n","\n","Durch Klick auf ... können die Details aus der .los-Datei \n geladen werden.","\n"],["\n","Unter dem Modul kann nun eine Topic-Gruppe angelegt \n werden. Dies entspricht einer SPS.","\n","\n","Nach dem Anlegen können über rechte Maus - Importieren \n die Details aus der .los-Datei geladen werden.","\n"],["\n","Unter der Gruppe können nun Werte angelegt werden.","\n","\n","Der Name kann manuell eingegeben werden; Typ und Topic-Name \n können durch Klick auf ... aus der .los-Datei geladen werden. Dabei kann \n die .los-Datei durchsucht werden.","\n","\n","Es kann ein bestimmtes Suchmuster eingegeben werden. \n Durch Klick auf \"Alle\" werden alle in der .los-Datei vorhandenen \n Werte angezeigt.","\n","\n"],["\n","Selektieren Sie das Grundelement \"PubSub\" \n im Projektbaum und wählen Sie im Kontextmenü den Befehl \"Neues Item\". \n Wählen Sie dann die Kafka Consumer Verbindung aus.","\n","\n","Der \"Name\" ist frei wählbar. Unter \"Broker \n list\" wird eine Liste der Broker angegeben, die über diese Verbindung \n angesprochen werden. Unter dem Verbindungselement können nun verschiedene \n Ereignisse angelegt werden.","\n"],["\n","\n","Dieses Ereignis wird ausgelöst, wenn für ein unterschriebenes \n Topic ein neuer Wert empfangen wird. Das Topic wird durch \" @Consumer\" \n und \"@Topic\" spezifiziert. Der Wert wird als Datenblock (\"@Value\") \n übergeben.","\n"],["\n","\n","Dieses Ereignis wird ausgelöst, wenn ein Fehler in \n der Übertragung auftritt. \"Consumer\" liefert den Namen der Consumer \n Verbindung. Der Fehler wird als Fehlercode \"ErrNum\" und als \n Fehlertext \"ErrTxt\" zur Verfügung gestellt.","\n"],["\n","\n","OnStatus liefert den Verbindungsstatus als Integerwert:","\n","• 0 Verbindung ist Ok","\n","• 1 Verbindung wird aufgebaut","\n","• -1 Verbindung ist unterbrochen","\n\n\n"]],"2":[["Publish-Subscribe-Schnittstelle"]],"4":[["Verfügbare Protokolle"],["Anlegen des MQTT-Verbindungselements"],["Neues Modul"],["Neue Gruppe"],["Neuer Wert"],["Anlegen des Kafka \n Consumer Elements"],["Ereignis OnConsumMsg"],["Ereignis OnConsumErr"],["Ereignis OnStatus"]],"5":[["MQTT,Subscribe,Publish,Publish-Subscribe"]],"id":"20"})