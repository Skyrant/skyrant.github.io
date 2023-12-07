rh._.exports({"0":[["Funkruf-Konzept"]],"2":[["\n"],["\n"],["\n","Zur Weitergabe einer Meldung \n werden folgende Angaben benötigt.","\n","Weiterleitungsart","\n","Empfänger","\n","Funkruf-Priorität","\n","Erstwertebene","\n","Kommend-Ereignis verzögern","\n","Gehend-Ereignis verzögern","\n"," ","\n"],["\n","Diese Informationen können an fünf Stellen in Sapient \n parametriert (bzw. von dort abgefragt) werden:","\n","1. Direkt an der Meldung","\n","In der Tabelle AL_ARCHIVE. Folgende Infos können dabei \n gespeichert werden:","\n","Funkrufempfänger - in der Spalte AL_ARCHIVE.M_RECIPIENT, \n Foreign Key auf Tabelle M_RECIPIENTS","\n"," ","\n","Diese Information wird durch das Gateway-Telegramm \n gesetzt und hat bei der Funkrufweiterleitung die erste Vorrangstelle.","\n"," ","\n","2. An der Meldungsdefinition","\n","In der Tabelle AL_MESSAGES. Folgende Infos können dabei \n gespeichert werden:","\n","Priorität der Erstwerterkennung für den Funkruf \n - in der Spalte AL_MESSAGES.M_PRIO","\n","Funkrufempfänger - in der Spalte AL_MESSAGES.M_RECIPIENT, \n Foreign Key auf Tabelle M_RECIPIENTS","\n","Art der Funkrufweiterleitung - in der Spalte AL_MESSAGES.M_MESSAGING_TYPE, \n Foreign Key auf die Tabelle M_MESSAGING_TYPES","\n"," ","\n","Diese Informationen können direkt im LC2 bei den ","Meldungsdefinitionen"," \n unter der jeweiligen Verbindung gepflegt werden, oder sie werden per ZULI-Import \n importiert. Sie haben bei der Funkrufweiterleitung die zweite Vorrangstelle. \n ","\n"," ","\n","3. Pro Knoten pro Meldeklasse","\n","In der Tabelle M_NODE_CLASS_CONFIG. Folgende Infos \n können dabei gespeichert werden:","\n","Priorität der Erstwerterkennung für den Funkruf \n - in der Spalte M_NODE_CLASS_CONFIG.M_PRIO","\n","Funkrufempfänger - in der Spalte M_NODE_CLASS_CONFIG.M_RECIPIENT, \n Foreign Key auf Tabelle M_RECIPIENTS","\n","Art der Funkrufweiterleitung - in der Spalte M_NODE_CLASS_CONFIG.M_MESSAGING_TYPE, \n Foreign Key auf die Tabelle M_MESSAGING_TYPES","\n"," ","\n","Diese Informationen werden im LC2 in den ","Funkrufeinstellungen \n Knoten/Klasse"," unter dem jeweiligen Knoten parametriert und haben bei \n der Funkrufweiterleitung die dritte Vorrangstelle.","\n"," ","\n","4. Pro Knoten","\n","In der Tabelle L_NODES. Folgende Infos können dabei \n gespeichert werden:","\n","Funkrufempfänger - in der Spalte L_NODES.M_RECIPIENT, \n Foreign Key auf Tabelle M_RECIPIENTS","\n","Verzögerung der Funkrufweiterleitung (in Sekunden) \n - in der Spalte L_NODES.M_S_DELAY. Falls nichts angegeben ist, wird der \n Wert aus dem Systemparameter -58 verwendet (Defaultwert: 3 Sekunden).","\n","Nachlauf der Funkrufweiterleitung (in Sekunden) \n - in der Spalte L_NODES.M_R_DELAY","\n","Erstwertlevel - Knotenlevel, ab dem die Erstwerterkennung \n für den Funkruf beginnt in der Spalte L_NODES.M_IA_LEVEL.","\n"," ","\n","Diese Informationen werden im LC2 beim jeweiligen ","Knoten"," \n parametriert und haben bei der Funkrufweiterleitung die vierte Vorrangstelle.","\n"," ","\n","5. An der Meldeklasse","\n","In der Tabelle AL_CLASSES. Folgende Infos können dabei \n gespeichert werden:","\n","Art der Funkrufweiterleitung - in der Spalte AL_CLASSES.M_MESSAGING_TYPE, \n Foreign Key auf die Tabelle M_MESSAGING_TYPES","\n"," ","\n","Diese Information wird im LC2 bei den ","Meldeklassen"," \n parametriert und hat bei der Funkrufweiterleitung die fünfte Vorrangstelle.","\n","Weitere Empfängereinstellungen wie z.B. das Medium \n (Pager, SMS, E-Mail, Fax …) sind abhängig vom Rufsystem und werden ausschließlich \n dort parametriert.","\n"],["\n","Die folgenden Systemparameter sind für den Funkruf \n relevant und können unter System-Administration - Systemeinstellungen \n - Systemparameter im LC2 gesetzt werden:","\n","-50: Funk Erstwert-Knotenlevel","\n","-51: Funk Meld Prüfzeit","\n","-52: Funk Meld MaxAnz","\n","-53: Funk SPS Prüfzeit","\n","-54: Funk SPS MaxAnz","\n","-55: Funk Empf Prüfzeit","\n","-56: Funk Empf MaxAnz","\n","-57: Funk Ignoreshift","\n","-58: Funk-Verzögerung","\n"," ","\n\n\n"]],"3":[["Parametrierung"],["Systemparameter"]],"4":[["Funkruf-Konzept"]],"5":[["Benötigte Angaben"]],"id":"168"})