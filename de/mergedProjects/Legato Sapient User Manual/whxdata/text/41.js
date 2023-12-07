rh._.exports({"0":[["Extern - iFrame"]],"1":[["\n"],["\n"],["\n","Dieses Boardlet kann verwendet werden, um eine externe \n Webseite oder ein SVG einzubetten. Es kann auch ein Knotenbezug hergestellt \n werden und so je nach Knoten ein anderes Bild / eine andere Seite angezeigt \n werden.","\n","\n","Im Beispiel ist die Webseite www.w3schools.com eingebettet.","\n"],["\n","\n","Die häufigsten Einstellungen auf den Reitern ","Einstellungen",", ","Layout"," \n und ","Filter"," sind unter ","Boardlet-Einstellungen"," \n beschrieben:","\n","\n\t","Reiter \n\t Einstellungen","\n\t","Reiter \n\t Layout","\n\t","Reiter \n\t Filter","\n","\n\n\n","\n","Für das iFrame-Boardlet stehen außerdem folgende Einstellungen \n zur Verfügung. ","\n"],["\n","URL:","\n","URL der anzuzeigenden Webseite oder Pfad zum \n SVG.","\n","Enthält die URL den Platzhalter $loginToken$, \n wird die Prozedur User_getLoginToken aufgerufen und der zurückgegebene \n Wert eingefügt. Gibt die Prozedur einen Fehler zurück, wird ein Leerstring \n in den Platzhalter eingesetzt. Dies ermöglicht die Anmeldung an einer \n anderen Applikation mit dem User, der an der Sapient Web App angemeldet \n ist.","\n","Um beispielsweise ein SVG aus Legato Classic \n anzuzeigen, muss der Pfad zunächst die Adresse der Classic-Webapplikation \n enthalten und kann zusätzlich um die Angabe des Views, eines Benutzers \n und ggf. einer Knoten-ID erweitert werden. Beispiel: http://legato.classic.de/Legato/visu.html?l_username=xxx&l_password=xxx","\n","Welche Parameter zum Aufruf von Legato Classic \n übergeben werden können, kann in der Onlinehilfe der Classic-Anwendung \n nachgeschlagen werden (\"Direktaufruf von Ansichten über eine URL).","\n","Zusätzlich können die Platzhalter $node$ und \n $detailInfo$ verwendet werden. Diese dienen dazu, um abhängig von den \n Werten dieser Parameter andere Informationen anzuzeigen. Befüllt werden \n die Parameter durch die Boardlets ","Knotenlayout"," \n / ","Knotenbaum"," und Generische \n Tabelle.","\n","Für Details zu den Platzhaltern, siehe bitte \n ","Platzhalter",".","\n"],["\n","Knoten-ID:","\n","ID des Knotens, der zuletzt im Layout-Boardlet \n / Knotenbaum selektiert wurde. Dieser Wert wird in den Parameter $node$ \n eingetragen und für die Abfrage verwendet.","\n","Detailinfo:","\n","Inhalt der selektierten Spalte, die in der Generische \n Tabelle als Detail-Info festgelegt wurde. Dieser Wert wird in den Parameter \n $detailInfo$ eingetragen und für die Abfrage verwendet.","\n","Für Details zu Filterstrings, siehe bitte ","Filterstrings",".","\n","Feld der Detailinformation:","\n","Soll das Boardlet Empfänger und nicht Sender \n sein, kann hier festgelegt werden, mit welchem Wert ein im Filter verwendeter \n Platzhalter $detailinfo$ aus der sendenden Tabelle ersetzt werden soll, \n z.B. name. Der Parametertyp sollte hier immer auf local gesetzt sein.","\n","Für weitere Infos zu Filterstrings, siehe bitte \n ","Filterstrings",".","\n","Für Details zur Bedeutung der einzelnen Platzhalter, \n siehe bitte ","Platzhalter",".","\n"],["\n","Für dieses Boardlet müssen keine Daten im LC2 konfiguriert \n werden.","\n"],["\n","\n\t","\n\t","\n\t","\n\t\t","Parameter","\n\t\t","Parametertyp","\n\t","\n\t","\n\t\t","url","\n\t\t","String","\n\t","\n\t","\n\t\t","detailInfo","\n\t\t","Object","\n\t","\n\t","\n\t\t","detailInfoValue","\n\t\t","String","\n\t","\n","\n"," ","\n\n\n"]],"4":[["$node$"]],"5":[["Allgemein"],["Einstellungen"],["Benötigte \n Parametrierung im LC2"],["Verfügbare \n Boardlet-Parameter"]],"6":[["Extern - iFrame"]],"8":[["Reiter Einstellungen"],["Reiter Filter"]],"id":"41"})