rh._.exports({"0":[["Erläuterungen"]],"1":[["\n"],["\n"],["\n","\n","Hier können Aktionen referenziert werden, die für das \n Datasource-Model zur Verfügung stehen sollen (im Beispiel die Aktion \"archive-alarms\"). \n Dieser Aktion werden Parameter übergeben. Die genaue Beschreibung der \n Aktionen ist in JavaScript-Dateien ausgelagert, die unter folgendem Pfad \n gespeichert sind: \"\\sapient-app\\lib\\common\\app\\datasource-actions\\archive-alarms.js\".","\n"],["\n","\n","Hier können weitere Ressourcen referenziert werden, \n beispielsweise gescriptete Datenquellen.","\n"],["\n","\n","Required Fields werden IMMER angefordert (abgefragt), \n sind aber nicht zwingend sichtbar. Es können aber andere Aktionen von \n ihnen abhängen.","\n"],["\n","\n","Default-Felder werden standardmäßig angefordert und \n angezeigt, da ihr Inhalt für die Anzeige relevant ist. Sie können aber \n über die Feldeinstellungen im Boardlet ausgeblendet werden.","\n"],["\n","\n","Blacklisted Fields werden NIE in der WebApp angezeigt, \n da sie Informationen enthalten, die für den Benutzer nicht relevant sind. \n Durch diese Vorgehensweise ist sichergestellt, dass Felder, die später \n zur Tabelle hinzukommen, automatisch auch beim Datasource Model ergänzt \n werden und nicht manuell hinzugefügt werden müssen.","\n"],["\n","\n","Hier können statische Filter festgelegt werden, die \n vom Endanwender in der WebApp nicht verändert werden können. So kann die \n Ansicht auf bestimmte Einträge eingeschränkt werden (im Beispiel auf Meldungen \n mit \"isPending\" = false). ","\n"],["\n","\n","Hier werden die Standardfilter des Datasource-Models \n definiert. Für diese Filter muss in der WebApp ein Wert eingegeben werden, \n ehe die Abfrage erfolgreich gestartet werden kann.","\n","Weitere Filter auf jede beliebige Spalte der Datenquelle \n können in der WebApp festgelegt werden.","\n\n\n"]],"4":[["Erläuterungen"]],"5":[["Actions"],["Resources"],["Required Fields"],["Default Fields"],["Blacklisted Fields"],["Static Filter"],["Filter"]],"id":"1"})