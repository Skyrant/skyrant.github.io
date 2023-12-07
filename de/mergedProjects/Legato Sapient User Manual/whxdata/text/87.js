rh._.exports({"0":[["TPM Wartungsaufträge"]],"1":[["\n"],["\n"],["\n","Das Boardlet ","TPM \n Wartungsaufträge"," zeigt alle offenen Wartungsaufträge zum selektierten \n Knoten an. Es werden verschiedene Informationen angeboten, beispielsweise \n die geplante Fälligkeit, der Auslöser und der aktuelle Status.","\n","\n","\n","Mittels Drag & Drop \n lassen sich die Breite oder Position der Spalten einfach verändern. Durch \n Klick auf eine Zeilenüberschrift wird nach dieser Spalte sortiert. ","\nNach welcher Spalte sortiert ist, und ob auf- oder absteigend sortiert \n ist, wird durch die dreieckigen Symbole angezeigt: ","\n\n\n","\n","Nach Spalten, die mehr als einen Eintrag enthalten \n können, kann nicht sortiert werden, z.B. Auslöser oder Instandhaltungs-Gruppe \n (IH-Gruppe).","\n","Die Symbole in der ersten Spalte zeigen an, wodurch \n der Wartungsauftrag angefordert wurde:","\n","\n\t","\n\t","\n\t","\n\t\t","\n\t\t","durch Wartungsplan angefordert","\n\t","\n\t","\n\t\t","\n\t\t","durch Benutzer angefordert","\n\t","\n","\n"," ","\n","Symbole auf der Boardlet-Menüleiste","\n","\n\t","\n\t","\n\t","\n\t\t","\n\t\t","Neuer Wartungsauftrag.","\n\t","\n\t","\n\t\t","\n\t\t","Aktualisieren. Lädt die Liste der Wartungsaufträge \n\t\t erneut.","\n\t","\n\t","\n\t\t","\n\t\t","Menü ","Quick-Edit",". \n\t\t Dieses Menü enthält die Funktionen, die in ","Quick \n\t\t Edit"," beschrieben sind, plus die Funktionen, die in dieser \n\t\t Tabelle aufgeführt sind.","\n\t","\n\t","\n\t\t","Wenn ein Wartungsauftrag \n\t\t in der Liste ausgewählt ist, dann erscheinen zusätzliche Symbole \n\t\t auf der Boardlet-Menüleiste und im Menü ","Quick-Edit",".","\n\t\t\n\t","\n\t","\n\t\t","\n\t\t","Wartungsauftrag bearbeiten.","\n\t","\n\t","\n\t\t","\n\t\t","Ablehnen. Setzt den Wartungsauftrag \n\t\t in den Status ","abgelehnt",".","\n\t","\n\t","\n\t\t","\n\t\t","Order zuordnen. Weist den Wartungsauftrag \n\t\t dem Verantwortlichen zu.","\n\t","\n\t","\n\t\t","\n\t\t","Arbeiten Sie auf Bestellung. Der Verantwortliche \n\t\t (= zugewiesener Benutzer) arbeitet am Wartungsauftrag.","\n\t","\n\t","\n\t\t","\n\t\t","Order beenden. Der Verantwortliche hat \n\t\t den Wartungsauftrag abgeschlossen und den Status auf ","\n\t","\n\t","\n\t\t","\n\t\t","Tätigkeitsverwaltung. Öffnet den Dialog \n\t\t zur Verwaltung der Tätigkeiten im Rahmen dieses Wartungsauftrags. \n\t\t Siehe ","Tätigkeitsverwaltung",".","\n\t","\n\t","\n\t\t","\n\t\t","Datei anhängen.","\n\t","\n","\n"," ","\n","\n","INFO: ","\n","Pflichtfelder in den Seitenleisten sind mit einem Ausrufezeichen \n "," gekennzeichnet.","\n\n\n","\n"],["\n","\n\t","\n\t","\n\t","\n\t","\n\t\t","Der aktuelle \n\t\t Status des Wartungsauftrags wird in der Spalte ","State"," \n\t\t des Boardlets ","TPM Wartungsaufträge ","angezeigt. \n\t\t Durch Klick auf die jeweiligen Symbole in der Boardlet-Menüleiste \n\t\t wird der ausgewählte Wartungsauftrag in den nächsten Status gesetzt.","\n\t\t","Es gibt folgende Statusarten:","\n\t\t","\n\t\t\t","zu \n\t\t\t planen","\n\t\t\t","geplant","\n\t\t\t","übernommen","\n\t\t\t","erledigt","\n\t\t\t","abgelehnt","\n\t\t","\n\t\t\n\t","\n\t","\n\t\t","zu planen: \n\t\t ","\n\t\t","\n\t\tDer Auftrag muss einem Benutzer zugewiesen werden, der ihn ausführen \n\t\t soll. Durch Klick auf das Symbol "," in der Boardlet-Menüleiste \n\t\t öffnet sich der Dialog ","Order zuordnen"," \n\t\t in der Seitenleiste: ------>>","\n\t\t","Nachdem Sie die Felder bearbeitet und \n\t\t auf ","Bestätigen"," geklickt haben, zeigt \n\t\t die Zelle in der Spalte ","State"," den nächsten \n\t\t Status an: ","geplant",".","\n\t\t","Sie können auch mehrere Wartungsaufträge \n\t\t im Boardlet auswählen und einem Verantwortlichen zuweisen, wenn \n\t\t folgende Bedingungen erfüllt sind:","\n\t\t","\n\t\t\t","Bedingung \n\t\t\t 1",": Nur der jüngste Wartungsauftrag eines Wartungsplans \n\t\t\t ist ausgewählt. ","\n\t\t\t","Beispiel",": Wenn Plan A die Aufträge \n\t\t\t ","X"," \n\t\t\t (10.05.2020), ","Y"," \n\t\t\t (30.05.2020) und ","Z"," \n\t\t\t (21.06.2020) hat, dann ist die Zuweisung nur für Auftrag ","Z"," möglich.","\n\t\t\t","Bedingung 2",": \n\t\t\t Die markierten Aufträge haben dieselbe IH-Gruppe.","\n\t\t","\n\t\t","Eine Fehlermeldung erscheint, wenn die \n\t\t Mehrfachauswahl die Bedingungen für die Zuweisung an einen Verantwortlichen \n\t\t nicht erfüllt.","\n\t\t"," ","\n\t\t"," ","\n\t\t","\n\t","\n\t","\n\t\t","Beispiel \n\t\t zur Veranschaulichung von Bedingung 1 und 2",":"," \n\t\t ","\n\t\t","\n\t\t","\n\t\t\t","\n\t\t\t","\n\t\t\t","\n\t\t\t\t","A","\n\t\t\t\t","Jede Reihe steht für einen Wartungsauftrag.","\n\t\t\t","\n\t\t\t","\n\t\t\t\t","B","\n\t\t\t\t","Diese Spalte zeigt die Namen \n\t\t\t\t der Wartungspläne, zu denen die Wartungsaufträge gehören.","\n\t\t\t","\n\t\t\t","\n\t\t\t\t","C","\n\t\t\t\t","Zwei Wartungsaufträge für denselben \n\t\t\t\t Plan \"Ölwechsel\", aber nur der jüngste Auftrag \n\t\t\t\t ist ausgewählt.","\n\t\t\t","\n\t\t\t","\n\t\t\t\t","D","\n\t\t\t\t","Alle ausgewählten Wartungsaufträge \n\t\t\t\t gehören zur selben IH-Gruppe \"IHGruppe1\".","\n\t\t\t","\n\t\t\t","\n\t\t\t\t"," ","\n\t\t\t\t","Ergebnis von B, C und D: Sie \n\t\t\t\t können mit der Zuweisung "," fortfahren.","\n\t\t\t","\n\t\t","\n\t\t","\n\t\t\n\t","\n\t","\n\t\t","geplant: \n\t\t ","\n\t\t","\n\t\tDer Auftrag wurde einem Benutzer zugewiesen und wartet auf Erledigung. \n\t\t Der Name des ","zugewiesenen \n\t\t Benutzers"," wird in der Spalte ","Responsible"," \n\t\t angezeigt.","\n\t\tNachdem der ","zugewiesene \n\t\t Benutzer"," das Symbol "," \n\t\t in der Boardlet-Menüleiste geklickt hat, zeigt die Zelle in der \n\t\t Spalte ","State"," den nächsten Status: ","übernommen",".","\n\t\t","\n\t\t\t","\n\t\t\t","\n\t\t\t","\n\t\t\t\t"," ","\n\t\t\t\t","INFO:","\n\t\t\t\t","Das Symbol "," ist \n\t\t\t\t für alle anderen Benutzer ausgeblendet, die diesen speziellen \n\t\t\t\t Wartungsauftrag anklicken.","\n\t\t\t","\n\t\t","\n\t\t"," ","\n\t\t"," ","\n\t","\n\t","\n\t\t","übernommen: \n\t\t ","\n\t\t","\n\t\tDer ","zugewiesene Benutzer"," \n\t\t hat den Wartungsauftrag angenommen und arbeitet daran. ","\n\t\t","Durch Klick auf das Symbol "," in der Boardlet-Menüleiste \n\t\t öffnet sich der Dialog ","Order beenden"," \n\t\t in der Seitenleiste: ------>>","\n\t\t","Nachdem Sie eine Beschreibung eingegeben \n\t\t und auf ","Bestätigen"," geklickt haben, zeigt \n\t\t die Zelle in der Spalte ","State"," den Status \n\t\t an: ","erledigt",".","\n\t\t"," ","\n\t\t"," ","\n\t\t","\n\t","\n\t","\n\t\t","erledigt: \n\t\t ","\n\t\t","\n\t\tDer Wartungsauftrag wurde vom ","zugewiesenen \n\t\t Benutzer"," durchgeführt.","\n\t\t"," ","\n\t\t"," ","\n\t","\n\t","\n\t\t","abgelehnt: \n\t\t ","\n\t\t","\n\t\tSolange der Wartungsauftrag im Status ","zu planen",", \n\t\t ","geplant"," oder ","übernommen"," \n\t\t vorliegt, kann der Wartungsauftrag vom Benutzer abgelehnt werden. \n\t\t ","\n\t\t","Durch Klick auf das Symbol "," in der Boardlet-Menüleiste \n\t\t öffnet sich der Dialog ","Refuse Order"," \n\t\t in der Seitenleiste: ------>>","\n\t\t","Nachdem Sie eine Beschreibung eingegeben \n\t\t und auf ","Bestätigen"," geklickt haben, zeigt \n\t\t die Zelle in der Spalte ","State"," den Status \n\t\t an: ","abgelehnt",".","\n\t\t"," ","\n\t\t"," ","\n\t\t","\n\t","\n","\n"],["\n","\n\t","\n\t","\n\t","\n\t","\n\t\t","Durch Klick auf "," in der \n\t\t Menüleiste des Boardlet ","TPM Wartungsaufträge \n\t\t ","kann ein neuer Wartungsauftrag angelegt werden. Es erscheint \n\t\t der Dialog ","Neuer Wartungsauftrag ","in \n\t\t der Seitenleiste: -->>","\n\t\t","\n\t\t\t","\n\t\t\t","\n\t\t\t","\n\t\t\t\t","So liegen \n\t\t\t\t Sie einen neuen Wartungsauftrag an:","\n\t\t\t\t\n\t\t\t","\n\t\t\t","\n\t\t\t\t","1","\n\t\t\t\t","Wählen Sie den Knoten, \n\t\t\t\t für den der Auftrag angelegt wird.","\n\t\t\t","\n\t\t\t","\n\t\t\t\t","2","\n\t\t\t\t","Führen Sie einen der beiden \n\t\t\t\t Schritte aus:","\n\t\t\t\t","\n\t\t\t\t\t","Wenn es sich bei dem Auftrag \n\t\t\t\t\t um einen einmaligen Wartungsauftrag handelt, dann \n\t\t\t\t\t geben Sie einen ","Namen"," für \n\t\t\t\t\t den Auftrag ein. Das Ausrufezeichen "," kennzeichnet \n\t\t\t\t\t das Feld ","Name"," als Pflichtfeld. \n\t\t\t\t\t Ignorieren Sie für einmalige Wartungsaufträge die \n\t\t\t\t\t Dropdown-Liste ","Wartungsplan",".","\n\t\t\t\t\t","Wenn Sie den Auftrag einem \n\t\t\t\t\t Wartungsplan zuweisen wollen, dann wählen Sie den \n\t\t\t\t\t gewünschten Plan aus der Dropdown-Liste ","Wartungsplan",". \n\t\t\t\t\t Daraufhin wird das Feld ","Name"," \n\t\t\t\t\t ausgeblendet und ist kein Pflichtfeld mehr.","\n\t\t\t\t\t ","\n\t\t\t\t","\n\t\t\t","\n\t\t\t","\n\t\t\t\t","3","\n\t\t\t\t","Restliche Schritte:","\n\t\t\t\t","\n\t\t\t\t\t","Legen Sie ","Plandatum"," \n\t\t\t\t\t und Uhrzeit fest.","\n\t\t\t\t\t","Wählen Sie eine oder mehrere \n\t\t\t\t\t ","IH-Gruppen",". Die Namensliste \n\t\t\t\t\t in der Dropdown-Liste ","Verwantwortlich"," \n\t\t\t\t\t passen sich automatisch an. Sie können jedoch nur \n\t\t\t\t\t einen Verantwortlichen für den Wartungsauftrag auswählen.","\n\t\t\t\t\t","Legen Sie die Priorität \n\t\t\t\t\t das Wartungsauftrags fest: hoch, mittel, niedrig.","\n\t\t\t\t\t ","\n\t\t\t\t","\n\t\t\t","\n\t\t\t","\n\t\t\t\t","4","\n\t\t\t\t","Wenn Sie fertig sind, klicken \n\t\t\t\t Sie ","Bestätigen",".","\n\t\t\t","\n\t\t","\n\t\t"," ","\n\t\t","\n\t","\n","\n"],["\n","\n\t","\n\t","\n\t","\n\t","\n\t\t","Ist ein Wartungsauftrag im Boadlet ","TPM Wartungsaufträge"," markiert, erscheinen \n\t\t in der Boardlet-Menüleiste weitere Symbole.","\n\t\t","Durch Klick auf "," können Sie \n\t\t sich den Wartungsauftrag anzeigen lassen und bearbeiten. Es erscheint \n\t\t der Dialog ","Wartungsauftrag bearbeiten"," \n\t\t in der Seitenleiste: ------>>","\n\t\t","Siehe ","Neuen \n\t\t Wartungsauftrag anlegen",".","\n\t\t","  ","\n\t\t","\n\t","\n","\n"],["\n","\n\t","\n\t","\n\t","\n\t","\n\t\t","Ist ein Wartungsauftrag im Boadlet ","TPM Wartungsaufträge"," markiert, erscheinen \n\t\t in der Boardlet-Menüleiste weitere Symbole.","\n\t\t","Durch Klick auf "," haben Sie \n\t\t Zugriff auf die Tätigkeitsverwaltung des Wartungsauftrags. Der \n\t\t Dialog ","Aktivitätsmanagement"," erscheint \n\t\t in der Seitenleiste, siehe Reiter ","[","A","]",": ------->>","\n\t\t","Wenn der Wartungsauftrag auf einem Wartungsplan \n\t\t beruht, für den die Tätigkeiten bereits festgelegt sind, dann \n\t\t werden diese Tätigkeiten hier angezeigt.","\n\t\t","Wenn Sie die Tätigkeitsverwaltung für einen \n\t\t neu angelegten Wartungsauftrag geöffnet haben, dann ist noch keine \n\t\t Checkbox ausgewählt.","\n\t\t","Auf Reiter ","[","A","]"," können \n\t\t Sie die folgenden Aktionen ausführen:","\n\t\t","\n\t\t\t","Hinzufügen von Tätigkeiten zum Wartungsauftrag, \n\t\t\t indem Sie die Checkboxen neben den erforderlichen Tätigkeiten \n\t\t\t aktivieren.","\n\t\t\t","Entfernen von Tätigkeiten aus dem \n\t\t\t Wartungsauftrag, indem Sie die Checkboxen neben den erforderlichen \n\t\t\t Tätigkeiten deaktivieren.","\n\t\t","\n\t\t","Eine Beschreibung von Reiter ","[","B","]"," finden \n\t\t Sie in ","Tätigkeitsverwaltung: \n\t\t Tätigkeit hinzufügen/bearbeiten"," below.","\n\t\t"," ","\n\t\t","\n\t","\n","\n\n"],["\n","\n\t","\n\t","\n\t","\n\t","\n\t\t","Ist ein Wartungsauftrag im Boardlet ","TPM Plans"," markiert, erscheinen oben in der \n\t\t Boardlet-Menüleiste weitere Symbole.","\n\t\t","Mit Klick auf "," und auf \n\t\t den zweiten Reiter ","[","B","]"," können \n\t\t Sie den Dialog ","Aktivitätsbeschreibung hinzufügen \n\t\t ","in der Seitenleiste öffnen. Dort können Sie neue Tätigkeitsbeschreibungen \n\t\t anlegen.","\n\t\t","Die neuen Tätigkeitsbeschreibungen stehen danach \n\t\t auf dem Reiter ","[","A","]"," zur Auswahl bereit.","\n\t\t","\n\t\t\t","\n\t\t\t","\n\t\t\t","\n\t\t\t\t","So fügen \n\t\t\t\t Sie eine neue Tätigkeitsbeschreibung zur Liste der Tätigkeiten \n\t\t\t\t hinzu: ","\n\t\t\t\t\n\t\t\t","\n\t\t\t","\n\t\t\t\t","1","\n\t\t\t\t","Geben Sie eine ","Beschreibung"," \n\t\t\t\t für die neue Tätigkeit ein.","\n\t\t\t","\n\t\t\t","\n\t\t\t\t","2","\n\t\t\t\t","Weisen Sie die neue Tätigkeitsbeschreibung \n\t\t\t\t einer ","Kategorie"," zu.","\n\t\t\t","\n\t\t\t","\n\t\t\t\t","3","\n\t\t\t\t","Wenn Sie fertig sind, klicken \n\t\t\t\t Sie ","Bestätigen",".","\n\t\t\t\t","Die neue Tätigkeit steht nun \n\t\t\t\t auf dem Reiter ","[","A","]"," \n\t\t\t\t zur Auswahl bereit.","\n\t\t\t","\n\t\t","\n\t\t","  ","\n\t\t","\n\t","\n","\n\n\n\n\n"],["\n","\n\t","\n\t","\n\t","\n\t","\n\t\t","Ist ein Wartungsauftrag im Boadlet ","TPM Wartungsaufträge"," markiert, erscheinen \n\t\t in der Boardlet-Menüleiste weitere Symbole.","\n\t\t","Durch Klick auf "," können Sie \n\t\t *.pdf Dateien, z.B. Wartungsberichte, an den markierten Wartungsauftrag \n\t\t anhängen. Der Dialog ","Angehängte Dokumente"," \n\t\t erscheint in der Seitenleiste: ------>>","\n\t\t","\n\t\t\t","\n\t\t\t","\n\t\t\t","\n\t\t\t\t","Datei(en) \n\t\t\t\t auswählen","\n\t\t\t\t","Öffnet einen Browser-spezifischen \n\t\t\t\t Dialog zur Dateiauswahl. Sie können nun die *.pdf Dateien \n\t\t\t\t auswählen, die Sie an den Wartungsauftrag anhängen wollen. \n\t\t\t\t ","\n\t\t\t\tKlicken Sie ","Bestätigen",", um die \n\t\t\t\t ausgewählten Dateien hochzuladen. ","\n\t\t\t","\n\t\t\t","\n\t\t\t\t","\n\t\t\t\t","Markiert eine Datei zur Löschung. \n\t\t\t\t ","\n\t\t\t\tKlicken Sie ","Bestätigen",", um die \n\t\t\t\t Datei zu löschen.","\n\t\t\t","\n\t\t\t","\n\t\t\t\t","\n\t\t\t\t","Öffnet eine *.pdf Datei in einem \n\t\t\t\t neuen Browser-Tab oder ","\n\t\t\t\t-Fenster.","\n\t\t\t","\n\t\t","\n\t\t","  ","\n\t\t","\n\t","\n","\n"],["\n","Im Boardlet ","TPM Wartungsaufträge"," \n kann nach dem Benutzer, der gerade angemeldet ist (\"aktuelle Person\") \n gefiltert werden. Der Filter zeigt dem die jeweiligen Benutzer zugeordneten \n TPM Wartungsaufträge. Wenn die TPM Wartungsaufträge mehreren Personen \n zugeordnet sind, kann jede Person, die zu dieser Personengruppe gehört, \n die TPM Wartungsaufträge sehen.","\n"," ","\n","\n","Beim Ad-hoc-Druck übergibt das ","TPM"," \n ","Wartungsaufträge"," Boardlet den \n aktuellen Benutzer (Auftraggeber) an den Print Task.","\n"," ","\n","Der zugehörige Boardlet-Filter sieht wie folgt aus:","\n","\n","Der zugehörige Filtername lautet <Aktuelle Person>","\n"," ","\n","Die zusätzliche Option zum Dropdown-Filter \"Verantwortliche Person \n für Wartungsaufträge\" ermöglicht es, den Filter für die aktuelle \n Person festzulegen.","\n","Das Housekeeping Script zur Aktualisierung der bestehenden Dashboards \n lautet:","\n","jobs/housekeeping/tpm_orders_boardlets/update_responsible_person_filter","\n","Parameter:","\n","{","\n","   \"DASHBOARD_ID\": \"resource_id\" \n -- optional","\n","}","\n"," ","\n","Parameterdefinition:","\n","NumberArrayWithComputedValues","\n"," ","\n","Beispiel-Parameterdefinition mit der Verwendung von ","\n","person-dropdown-multiselect-component ","\n","als Editor.","\n"," ","\n","Konfigurations-Beispiel/Definition of TPM Order Boardlet Filter:","\n","\"Order Responsible\": {","\n","    \"definition\": {","\n","      \"displayKey\": \n \"tpm.maint-jobs-boardlet.persons\",","\n","      \"context\": \n 1,","\n","      \"category\": \n \"filters\",","\n","      \"parameterType\": \n \"NumberArrayWithComputedValues\",","\n","      \"value\": \n [],","\n","      \"editor\": \n {","\n","        \"component\": \n \"person-dropdown-multiselect-component\",","\n","        \"parameters\": \n {","\n","          \"placeholder\": \n \"tpm.maint-jobs-boardlet.persons\",","\n","          \"translatePlaceholder\": \n true,","\n","          \"hasIcon\": \n true,","\n","          \"displayProperty\": \n \"full_name\",","\n","          \"query\": \n {","\n","            \"resources\": \n [","\n","              {","\n","                \"resource\": \n \"bas_persons_active\",","\n","                \"as\": \n \"p\"","\n","              },","\n","              {","\n","                \"resource\": \n \"tpm_group_person_rel\",","\n","                \"as\": \n \"g\"","\n","              }","\n","            ],","\n","            \"relations\": \n [","\n","              {","\n","                \"src\": \n \"p\",","\n","                \"dst\": \n \"g\",","\n","                \"how\": \n \"i\",","\n","                \"on\": \n {","\n","                  \"left\": \n \"p.id\",","\n","                  \"op\": \n \"EQ\",","\n","                  \"right\": \n \"g.person_id\"","\n","                }","\n","              }","\n","            ],","\n","            \"fields\": \n [","\n","              \"p.id\",","\n","              \"p.full_name\"","\n","            ],","\n","            \"filter\": \n [","\n","              {","\n","                \"left\": \n \"g.person_id\",","\n","                \"op\": \n \"NN\"","\n","              }","\n","            ],","\n","            \"sort\": \n {","\n","              \"field\": \n \"p.full_name\"","\n","            },","\n","            \"distinct\": \n true","\n","          }","\n","        }","\n","      },","\n","      \"filter\": \n {","\n","        \"model\": \n \"bas_persons\"","\n","      }","\n","    }","\n","  },","\n"," ","\n"],["\n","Wenn die verantwortliche Person aus dem Instandhaltungsauftrag gestrichen \n wird, wird diese Person auch aus jeder aktiven Instandhaltungstätigkeit \n (nicht abgelehnt und nicht abgeschlossen) gestrichen.  Der Status \n dieser TPM-Aktivitäten wird ebenfalls zurückgesetzt. Der Status der betroffenen \n Tätigkeiten wird auf \"zuzuordnen\" geändert.","\n"," ","\n","\n"],["\n","Das Boardlet ","TPM-Pläne"," (siehe \n ","TPM Plans",") verfügt über die Funktion \"Dateien \n verknüpfen\", mit der der Benutzer Dateien aus dem TPM-Verzeichnis \n mit den jeweiligen TPM-Plänen verknüpfen und auch wieder entknüpfen kann. \n Diese Funktion stellt somit eine Möglichkeit zur Auswahl von Dateien/Verzeichnissen \n aus einem speziellen tpm-Dokumentenverzeichnis dar.","\n","Beim Klicken auf ","(1)"," \n öffnet sich die Seitenleiste \"Dateien verknüpfen\". Hier kann \n der Benutzer im oberen Teil ","(2)"," \n durch die verfügbaren Dateien navigieren und die Dateien auswählen, die \n verknüpft/entknüpft werden sollen.","\n"," ","\n","Im unteren Teil der Seitenleiste wird Folgendes angezeigt:","\n","(3) ","Die verknüpften, \n aber im Dateisystem fehlenden Dateien (graue Schriftfarbe).","\n","(4) ","Die zu ","ent","knüpfenden Dateien (rote Schriftfarbe).","\n","(5) ","Die Liste \n der bereits verknüpften Dateien (normale Schriftfarbe).","\n","(6) ","Die Liste \n der zu verknüpfenden Dateien (grüne Schriftfarbe).","\n"," ","\n","\n","Der Benutzer kann auch eine Datei in einer neuen Registerkarte öffnen \n und die Beschreibung für verknüpfte Dateien festlegen (die Beschreibung \n wird immer der TPM-Datei zugewiesen). Wenn der Benutzer eine Datei verknüpft, \n der bereits eine Beschreibung zugewiesen wurde, enthält die Datei diese \n Beschreibung im Beschreibungsfeld.","\n","Nach dem Klicken auf die Schaltfläche \"Absenden\" werden alle \n Änderungen gespeichert.","\n"," ","\n"],["\n","Der Benutzer muss über die Berechtigung \"","edit","\" \n für die Datenquellen"," ","\n","\n\t","tpm_linked_files"," und \n\t ","\n\t","tpm_file_plan_rel"," ","\n","\n","verfügen, um Dateien verlinken oder die Verlinkung aufheben oder deren \n Beschreibung ändern zu können. Wenn \"","edit","\"-Rechte \n fehlen, der Benutzer aber \"","view","\"-Rechte \n auf"," tpm_linked_files","- und ","tpm_file_plan_rel","-Datenquellen hat, \n kann er nur verknüpfte Dateien und Dateibeschreibungen ansehen und Dateien \n in einem neuen Tab öffnen.","\n","In der Dateiliste in der Seitenleiste erscheint bei fehlenden Dateien \n ein Hinweis.","\n"," ","\n"],["\n","\n\t","Das \"TPM-Verzeichnis\", \n\t in dem die TPM-Dateien gespeichert werden und auf das in der Webanwendung \n\t zugegriffen werden kann, kann über die Eigenschaft ","tpmrefsPath"," \n\t konfiguriert werden. ","\n\t","Diese \n\t sollte in der Konfigurationsdatei ","sapieng.properties"," angegeben werden. \n\t Wenn diese Eigenschaft nicht angegeben wird, wird das Standardverzeichnis \n\t \"","tpmrefs","\" \n\t im Verzeichnis \"","shared","\" erstellt.","\n","\n"],["\n","Es ist möglich, die verlinkten Dateien des entsprechenden Plans im ","TPM"," ","Wartungsaufträge"," \n Boardlet zu sehen. Dies gilt für TPM-Benutzer, die nur TPM Wartungsaufträge \n und TPM Aktivitäten verwenden.","\n","Dateiverknüpfungen (verlinkte Dateien) in TPM-Plänen gehören zu jedem \n TPM Wartungsauftrag. Jedoch ist es nicht notwendig, die Dateien mit jedem \n Auftrag zu verknüpfen.","\n"," ","\n","Beachten Sie zusätzlich folgende Informationen:","\n","\n\t","Die verknüpften Dateien werden aufgelistet und können schreibgeschützt geöffnet \n\t werden. Dies ist in der Seitenleiste möglich, die sich öffnet, wenn \n\t angehängte Dateien angezeigt werden.","\n\t","Es kann die Beschreibung einer Datei eingesehen werden (schreibgeschützt).","\n\t","Es werden die gleichen Informationen angezeigt (schreibgeschützt \n\t und im gleichen Stil) wie bei der Anzeige der verknüpften Dateien \n\t für einen Plan.","\n\t","Die Spalte im ","TPM"," ","Wartungsaufträge"," Boardlet heißt \n\t \"Links/Anhänge\".","\n\t","In der entsprechenden Zelle des ","TPM"," \n\t ","Wartungsaufträge"," Boardlets \n\t steht z.B. \"3 Datei(en) angehängt, 2 Datei(en) verlinkt\".","\n\t","Die Spalte TPM-Pläne heißt \"Links\".","\n\t","Der entsprechende Zelleninhalt ist bei \"2 Datei(en) verlinkt\".","\n","\n","Der Screenshot zeigt, dass der Zugriff auf die mit dem Plan verknüpften \n Dateien aus dem Auftrag heraus möglich ist.","\n","\n"],["\n","Es ist nicht möglich, den Status eines TPM Wartungsauftrags direkt (manuell) \n über das TPM Wartungsaufträge Boardlet zu ändern. Falls der Auftrag abgelehnt \n wird, ist dies dennoch möglich. Der Status eines TPM Wartungsauftrags \n basiert auf dem Status der zugehörigen Instandhaltungsaktivitäten.","\n"," ","\n","Außerdem wirkt sich das Ändern des Pools der verantwortlichen Personen \n eines Auftrags nicht auf den Status des Auftrags aus. Das TPM Wartungsaufträge \n Boardlet wird regelmäßig aktualisiert, damit neue Zustände angezeigt werden.","\n"],["\n","Der Status des TPM Wartungsauftrags basiert auf dem Status seiner TPM \n Maintenance Activities (Instandhaltungstätigkeiten). Wenn eine Aktivität \n eines Auftrages einen bestimmten Zustand hat, hat der Auftrag den gleichen \n Zustand (ein Auftrag hat mehrere Aktivitäten mit unterschiedlichen Zuständen). \n ","\n","Benutzer können Aktivitäten zugewiesen werden, ohne dass der Status \n der Aktivität auf \"","in"," ","Bearbeitung","\" wechselt.","\n","Es gibt folgende Prioritäten von TPM Status:","\n","\n\t","\"zu planen\" --> \"zuzuordnen\"","\n\t","\"übernommen\" --> \"in \n\t Bearbeitung\"","\n\t","\"geplant\" --> \"zugewiesen\"","\n\t","\"abgelehnt\" --> \"abgelehnt\"","\n\t","\"erledigt\" --> \"Erledigt\"","\n","\n"," ","\n","Es gilt:","\n","\n\t","Wenn mindestens eine Tätigkeit den Status \n\t \"","zuzuordnen","\" hat, \n\t hat der Auftrag auch den Status \"","zuzuordnen","\".","\n\t","Wenn keine Tätigkeit den Status \"","zuzuordnen","\" hat und mindestens \n\t eine Tätigkeit den Status \"","in"," \n\t ","Bearbeitung","\" hat, hat \n\t der Auftrag den Status \"","in"," \n\t ","Bearbeitung","\".","\n\t","Wenn jeder Vorgang den Status \"","zuordnen","\" hat, hat der Auftrag \n\t den Status \"","zuzuordnen","\".","\n\t","Wenn ein Vorgang eines Auftrags den \n\t Status \"","abgelehnt","\" \n\t hat und alle anderen haben den Status \"","erledigt","\", \n\t dann hat der Auftrag den Status\"","abgelehnt","\".","\n\t","Wenn alle Tätigkeiten eines Auftrags \n\t den Status \"","erledigt","\" \n\t hat, hat der Auftrag ebenfalls den Status\"","erledigt","\".","\n","\n"," ","\n"],["\n","\n","Die häufigsten Einstellungen auf den Reitern ","Einstellungen",", ","Layout"," \n und ","Filter"," sind unter ","Boardlet-Einstellungen"," \n beschrieben:","\n","\n\t","Reiter \n\t Einstellungen","\n\t","Reiter \n\t Layout","\n\t","Reiter \n\t Filter","\n","\n\n\n","\n","Für das Boardlet ","Wartungsaufträge"," \n stehen folgende weitere Einstellungen zur Verfügung.","\n"],["\n","Selektierte Knoten:","\n","Hier können Sie nach einer Knoten ID oder mehrerer \n Knoten IDs filtern. Geben Sie die Knoten IDs als Komma-separierte Liste \n ein.","\n","Überfällig:","\n","Über diesen Schieberegler wird definiert, ob \n nur Wartungsaufträge angezeigt werden sollen, die bereits überfällig sind \n oder alle.","\n","Wartungsauftrag:","\n","Hier kann auf den Namen eines Wartungsauftrags \n gefiltert werden.","\n","Zustand:","\n","Über diese Dropdown-Liste kann ein Zustand ausgewählt \n werden, in dem sich die angezeigten Wartungsaufträge befinden sollen.","\n","Priorität:","\n","Über diese Dropdown-Liste kann die Priorität \n der angezeigten Wartungsaufträge ausgewählt werden. ","\n","Auslöser:","\n","Über diese Dropdown-Liste kann ausgewählt werden, \n was den Wartungsauftrag ausgelöst hat.","\n","Verantw. für Wartungsauftrag:","\n","Über diese Dropdown-Liste kann ein Verantwortlicher \n für den Wartungsauftrag selektiert werden, auf den gefiltert wird.","\n","Verantw. für Tätigkeiten:","\n","Über diese Dropdown-Liste kann ein Verantwortlicher \n für Tätigkeiten des Wartungsauftrags selektiert werden, auf den gefiltert \n wird.","\n","Zugeordnete IH-Gruppe:","\n","Über diese Dropdown-Liste kann eine IH-Gruppe \n selektiert werden, die dem Wartungsauftrag zugeordnet ist.","\n","Plan-id:","\n","Hier kann auf die ID eines Wartungsauftrags \n gefiltert werden.","\n\n\n\n\n\n\n\n\n\n\n"],["\n","\n\t","Tätigkeiten werden im ","LC2"," \n\t unter ","Werksverwaltung"," "," \n\t ","TPM"," "," \n\t ","Tätigkeiten"," angelegt.","\n\t","Typische Begründungen werden im ","LC2"," \n\t unter ","Werksverwaltung"," "," \n\t ","TPM"," "," \n\t ","Tätigkeiten"," "," ","Bez. \n\t Tätigkeit"," "," ","Begründung"," angelegt.","\n\t","Komponenten werden im ","LC2"," \n\t unter ","Werksverwaltung"," "," \n\t ","TPM"," "," \n\t ","Komponentenarten"," angelegt und ein Knotenbezug \n\t hergestellt.","\n\t","TPM-Gruppen werden im ","LC2"," \n\t unter ","Werksverwaltung"," "," \n\t ","TPM"," "," \n\t ","TPM-Gruppen"," angelegt. Hier können auch Personen \n\t den Gruppen zugeordnet werden.","\n","\n"],["\n","\n\t","\n\t","\n\t","\n\t\t","Parameter","\n\t\t","Parametertyp","\n\t","\n\t","\n\t\t","timeFrame","\n\t\t","TimeFrame","\n\t","\n\t","\n\t\t","overdue","\n\t\t","Boolean","\n\t","\n\t","\n\t\t","timeSelection","\n\t\t","Boolean","\n\t","\n\t","\n\t\t","nodeList","\n\t\t","NumberArray","\n\t","\n\t","\n\t\t","selectedMaintOrder","\n\t\t","Number","\n\t","\n\t","\n\t\t","selectedMaintPlan","\n\t\t","Number","\n\t","\n\t","\n\t\t","statesList","\n\t\t","NumberArray","\n\t","\n\t","\n\t\t","prioritiesList","\n\t\t","NumberArray","\n\t","\n\t","\n\t\t","triggersList","\n\t\t","NumberArray","\n\t","\n\t","\n\t\t","personsList","\n\t\t","NumberArray","\n\t","\n\t","\n\t\t","actPersonsList","\n\t\t","NumberArray","\n\t","\n\t","\n\t\t","groupsList","\n\t\t","NumberArray","\n\t","\n","\n"," ","\n\n\n"]],"5":[["Allgemein"],["Tätigkeitsverwaltung: \n Tätigkeitsbeschreibung hinzufügen"],["Dateien anhängen"],["Filter \"Aktuelle Person\""],["Entfernen von verantwortlichen Personen aus den TPM \n Wartungstätigkeiten "],["Wie man die Dateien mit dem TPM-Boardlet verknüpft"],["Abrufen von Plan-Dateien"],["Deaktivieren des manuellen Änderns des Auftragsstatus"],["Priorität von TPM Status"],["Einstellungen"],["Benötigte \n Parametrierung im LC2"],["Verfügbare \n Boardlet-Parameter"]],"6":[["TPM Wartungsaufträge"]],"7":[["Status \n ändern "],["Neuen \n Wartungsauftrag anlegen"],["Wartungsauftrag bearbeiten"],["Tätigkeitsverwaltung: Tätigkeit \n hinzufügen/entfernen"]],"8":[["Notwendige Parametrierung"],["Reiter Filter"]],"10":[["Beachten Sie außerdem"]],"id":"87"})