rh._.exports({"0":[["Dialoge"]],"1":[["\n"],["\n"],["\n","Dieser Dialog ist das zentrale Instrument zur Zuweisung \n von Variablen, die bei den Dynamic-Funktionen genutzt werden sollen. Dieser \n Dialog kann aus den diversen Parametrierungsdialogen heraus aufgerufen \n werden.","\n","Durch Einlesen des Variablen-Files aus der der WebApp \n (Var-File) stehen in diesem Dialog alle parametrierten Variablen aus der \n Datenbank sowie dem Gateway zur Verfügung.","\n","\n\t","\n\t\t","Tab","\n\t\t","Beschreibung","\n\t","\n\t","\n\t\t","Db-Var","\n\t\t","Variablen \n\t\t aus der Legato-Datenbank.","\n\t","\n\t","\n\t\t","Gw-Var","\n\t\t","Variablen \n\t\t aus dem Gateway.","\n\t","\n\t","\n\t\t","Nodes \n\t\t with Vars","\n\t\t","Variablen, \n\t\t die auf Knoten in der Fertigungsstruktur liegen.","\n\t","\n\t","\n\t\t","User \n\t\t Defined Vars","\n\t\t","Variablen, \n\t\t die vom Benutzer definiert wurden (z.B. KPI-Referenzen).","\n\t","\n","\n"," ","\n","Durch Klicken auf einen Eintrag in den Listen werden \n im Bereich \"Details\" Einzelheiten zum gewählten Eintrag angezeigt. \n Sind für einen Eintrag keine Details ersichtlich, ist dieser Eintrag keine \n gültige Variable.","\n","Die beiden Auswahlmöglichkeiten im Feld \"Variable \n Type\" bieten eine Auswahl, welcher Name einer Variable genutzt werden \n soll. Eine Variable hat meistens zwei Namen. Einen, der aus dem Gateway \n stammt und einen, der durch das Legato Configuration Center in der Datenbank \n angelegt wird. ","\n","Das Kästchen \"User defined\" unter \"Value\" \n ermöglicht eine manuelle Eingabe der Variablen. Eine Auswahl aus den Listen \n ist nun nicht mehr möglich.","\n",": ","\n","Wird ein falscher Variablenname eingegeben, \n kann die Funktion nicht richtig arbeiten, da für nicht existente Variablen \n der Wert \"NULL\" geliefert wird.","\n","Der Button \"Set to empty value\" setzt die \n Auswahl auf leer zurück. Dies führt auch zum Löschen der Dynamik-Funktion.","\n"],["\n","In diesem Tab werden alle vom Benutzer definierten \n Instanzen angezeigt. Je nach Instanztyp ergeben sich unterschiedliche \n Variablen zum Einbinden. Zusätzlich zu den unten angeführten Variablen \n können auch die parametrierten Eingaben (z.B. Knotennummer, Variablennamen) \n angezeigt und sogar beeinflusst werden.","\n","KPIRel","\n","Die einzelnen KPI-Werte als einzelne Variablen","\n","ShiftProtoValRel","\n","Der protokollierte Wert einer Variable","\n","ShiftInfoRel","\n","Schichtnummer","\n","Schicht-Typ (numerisch, ID aus der Datenbank)","\n","Produktionsdatum im Format YYYY-MM-DD, z.B. \"2015-12-21\"","\n","Schichtbeginn im Format YYYY-MM-DD HH:MI:SS, z.B. \"2015-12-21 \n 14:44:00\"","\n","Schichtende im Format YYYY-MM-DD HH:MI:SS, z.B. \"2015-12-21 \n 14:44:00\"","\n","Name des Schicht-Typs in der aktuell eingestellten \n Sprache","\n","Produktionsdatum in der aktuell eingestellten Sprache \n und der über \"localformat\" eingestellten Ausführlichkeit","\n","Schichtbeginn in der aktuell eingestellten Sprache \n und der über \"localformat\" eingestellten Ausführlichkeit","\n","Schichtende in der aktuell eingestellten Sprache und \n der über \"localformat\" eingestellten Ausführlichkeit","\n"],["\n","Soll zusätzlich zur Formatierung noch eine Berechnung \n einer Variablen durchgeführt werden, kann dies entweder direkt im Scriptcode \n erzeugt werden, oder man verwendet die Expression-Funktion des Designers. \n Dazu aktiviert man die Checkbox \"Expression\". Wurde zuvor eine \n Variable ausgewählt, wird diese gleich in eine Expression umgewandelt, \n andernfalls öffnet sich über die drei Punkte ein leerer Eingabe-Dialog, \n in dem Expressions definiert werden können.","\n","Mit der rechten Maustaste – Insert Variable können \n weitere Variablen in den Expression-Dialog hinzugefügt werden. Diese können \n dann durch verschiedene mathematische Operatoren miteinander verbunden \n werden.","\n","Grundsätzlich können die vier Grundrechenarten (+, \n -, *, /) direkt in den SVG-Bildern berechnet werden. Neben mehreren Variablen \n können auch Berechnungen von Variablen und Zahlen durchgeführt werden. \n Ein Beispiel verdeutlicht die Implementierung:","\n","<text x=\"691\" y=\"93\">x<?Gefasoft","\n","   <dyndef>","\n","      <jsfncall name=\"SvgSetText\">","\n","         <eleid/>","\n","         <jsfncall \n name=\"SvgFmtInt\" tgtobj=\"parent\" nparams=\"2\">","\n","            <jsexpr \n quotes=\"0\">(","\n","               parseInt(<varref \n var=\"legatodb.Test1\"/>) ?","\n","               parseInt(<varref \n var=\"legatodb.test2\"/>))","\n","            </jsexpr>","\n","            <jsexpr \n quotes=\"\">10</jsexpr>","\n","         </jsfncall>","\n","      </jsfncall>","\n","   </dyndef> ?>","\n","</text>","\n"," ","\n","An der Stelle des Fragezeichens sollte der gewünschte \n Rechenoperator stehen. Zahlen und numerische Variablen können auch ohne \n parseInt() übergeben werden.","\n"],["\n","Jede Dynamic-Funktion wird als Script im Quelltext \n der SVG Datei verankert. Über diesen Dialog kann für ein Objekt und für \n eine Funktion das Script bequem verändert werden. Dieser Dialog ist teilweise \n aus anderen Dialogen aufrufbar, jedoch immer über den Button \"Script\" \n im Hauptdialog einer Dynamik (z.B. TDynBlink).","\n","Wurde für ein ausgewähltes Objekt eine Dynamic-Funktion \n gewählt und ist sie vollständig parametriert, dann ist in diesem Dialog \n ein Script eingetragen. Dieses kann beliebig geändert werden. Ein Klick \n auf \"Validate\" überprüft das XML-Format des Scripts auf Richtigkeit \n und meldet Fehler.","\n","Der wichtigste Aspekt des Script Editors ist das Copy&Paste \n von sich wiederholenden Dynamisierungen. So muss ein und dieselbe Dynamisierung, \n die mitunter sehr aufwändig sein kann, nicht für jedes einzelne Objekt \n über die anderen Dialoge durchgeführt werden. Man kann hier den Scriptcode \n in die Zwischenablage laden und für ein anderes Objekt wieder einfügen. \n Nun bleibt unter Umständen die Änderung der Variable. Entweder kann hier \n händisch der Name eingegeben werden, oder es kann eine Abkürzung zum \"Select \n Variable\"-Dialog genutzt werden. Zu diesem Zweck im oberen Bereich \n mit der rechten Maustaste klicken und ein Menü wird ersichtlich mit Insert \n Variable. Dieser Punkt führt direkt zu dem oben beschriebenen \"Select \n Variable\"-Dialog.","\n","Tipp:"," ","\n","Vor Betätigen der rechten Maustaste empfiehlt \n es sich, die komplette Variable zu selektieren. Wird nun eine Variable \n ausgewählt, wird die alte Variable komplett ersetzt.","\n"],["\n","Dieser Dialog wird durch Klick auf bestimmte Dynamiken \n geöffnet (z.B. bei TDynBlink). Über \"Variable\" wird die referenzierte \n Variable ersichtlich, der Button mit den drei Punkten führt zum \"Select \n Variable\"-Dialog. Grundsätzlich sollte die gewählte Variable einen \n Zahlenwert liefern oder eine Bitleiste darstellen. Buchstaben oder andere \n Zeichen führen zu einem Fehler in der Funktionalität.","\n","Wird ein Zahlenwert ausgewertet, sollte im \"Select \n Visibility\"-Dialog der Tab \"by Values\" gewählt werden. \n Soll eine Bitleiste als Grundlage dienen, sollte die Parametrierung im \n Tab \"by Bits\" durchgeführt werden.","\n"],["\n","Die Parametrierung arbeitet mit Limits. Vor und hinter \n jedem Textfeld ist eine Checkbox die entscheidet, ob ein Objekt sichtbar \n ist oder nicht. Das Kästchen vor einem Eingabefeld geht jeweils vom vorangegangenen \n Limit (eingeschlossen) bis zu dem nächstfolgenden (nicht eingeschlossen). \n Es können bis zu 16 Limits festgelegt werden, es müssen jedoch nicht alle \n definiert werden. Nur diejenigen Checkboxen sind anwählbar, deren Limits \n ausgefüllt wurden. Der erste Bereich geht von minus Unendlich bis zu dem \n eingegebenen Limit (nicht eingeschlossen). Der letzte Bereich geht vom \n letzten ausgefüllten Limit (eingeschlossen) bis zu plus Unendlich.","\n","Beispiel:","\nFür DynVisibility wird die erste Checkbox nicht aktiviert, das erste Limit \n auf 10 gesetzt und die zweite Checkbox aktiviert. Wenn die Variable einen \n Wert von 9 oder weniger hat, ist das Objekt unsichtbar. Falls 10 oder \n ein Wert größer 10 erreicht wird, wird das Objekt sichtbar.","\n"],["\n","In diesem Fall wird eine Bitleiste analysiert.","\n","Die gelieferte Zahl wird in Bits aufgeschlüsselt, wobei \n das erste Bit die interne Nummer 0 hat, das zweite 1 usw.","\n","Die Eingabefelder, die von 0 bis 15 nummeriert sind, \n geben die Priorität / Reihenfolge der Auswertung an. Je niedriger die \n Nummer ist, desto höher die Priorität, bzw. die Eingabe bei 0 wird zuerst \n ausgewertet.","\n","Die Checkbox hinter jedem Eingabefeld gibt an, ob das \n Objekt sichtbar sein soll oder nicht.","\n","Die Funktion überprüft, ob das angegebene Bit auf 1 \n steht. Wird für das angegeben Bit 1 geliefert, wird anhand der Angabe \n das Attribut gesetzt.","\n","Die Reihenfolge der Bits ist egal, es wird entsprechend \n der Priorität vorgegangen.","\n"],["\n","Wenn ein Attribut Zahlenwerte akzeptiert, werden die \n Dynamic-Funktionen durch diesen Dialog parametriert. Es werden jeweils \n Start- und Endpunkte parametriert. Werte zwischen den Grenzen werden durch \n die WebApp interpoliert.","\n","Falls das Attribut Prozentwerte nutzt, wird dies bei \n den Feldern \"Attribute max value\" und \"Attribute min value\" \n durch ein Prozentzeichen (%) kenntlich gemacht. Wenn dieses Zeichen nicht \n angegeben ist, sind die Angaben dieser Felder in Pixel zu treffen. String-Variablen \n führen zu einem Fehler.","\n","Die Felder mit \"max/upper\" geben die Endparameter \n an. \"Variable upper limit\" gibt den maximalen gelieferten Wert \n der Variable an. \"Attribute max value\" gibt an, welchen Wert \n das Attribut bekommen soll, wenn der Wert in \"Variable upper limit\" \n erreicht ist. \"Attribute max value\" wird nicht überschritten, \n falls die Variable einen größeren Wert liefert als in \"Variable upper \n limit\" spezifiziert. Wenn die Funktion \"DynHeight\" oder \n \"DynWidth\" parametriert wird, wird das Feld \"Attribute \n max value\" automatisch mit der Höhe bzw. Breite des aktuellen Objektes \n ausgefüllt.","\n","Die Felder mit \"min/lower\" geben den Startpunkt \n an. Normalerweise sind diese auf 0 gesetzt. Dementsprechend hat das Attribut \n den Wert 0, wenn die Variable 0 liefert. Falls das nicht der Fall sein \n soll, muss ein entsprechendes Offset definiert werden. \"Variable \n lower limit\" gibt an, unter welchem Wert der Variable nicht weiter \n interpoliert werden soll. \"Attribute min value\" gibt an, welcher \n Attributwert nicht unterschritten werden darf.","\n","Wenn die Funktionen \"DynXPos\" oder \"DynYPos\" \n parametriert werden, kann das Feld bei den \"Attribute max/min Values\" \n negative Werte annehmen. Da hier eine Verschiebung parametriert werden \n soll, werden hier die Anzahl Pixel der Verschiebung angegeben. Für eine \n Bewegung nach links oder oben muss entsprechend dem Koordinatensystem \n von SVG ein negativer Wert angegeben werden.","\n"],["\n","Dieser Dialog setzt Farben nach gelieferten Nummern \n oder Bitleisten. Der Dialog funktioniert vergleichbar \"Select Visibility\".","\n"],["\n","Anstatt Checkboxen hat dieser Dialog Felder zum Definieren \n von Farben. Diese Felder sind zwischen den Limits gelegen. Die Farbfelder \n sind nur auswählbar, wenn das entsprechende Limit ausgefüllt wurde. Ein \n Feld vor einem Limit geht von dem vorangegangenen Limit (eingeschlossen \n / beim ersten von -Unendlich) bis zum Limit rechts davon (nicht eingeschlossen).","\n","Beispiel:","\n","Die erste Farbe ist rot, die zweite gelb und die dritte grün. Das erste \n Limit wurde mit 10 festgelegt und das zweite mit 20. Wenn die Variable \n 9 oder weniger liefert, wird das Objekt rot. Bei Werten zwischen 10 und \n 20 (nicht eingeschlossen) wird das Objekt gelb. Bei Werten von 20 oder \n größer wird es schließlich grün.","\n"],["\n","Die Reihenfolge / Wichtigkeit wird durch die Zahlen \n vor den Kästchen repräsentiert (0 das Wichtigste usw.). In dem Textfeld \n schreibt man die Nummer des Bits hinein, das ausgewertet werden soll. \n Wird für das Bit eine 1 geliefert, wird die parametrierte Farbe gesetzt.","\n\n\n"]],"2":[["Dialoge"]],"3":[["Dialog"]],"4":[["Select Variable"],["Expression-Funktion"],["Script Dialog"],["Select Visibility"],["Scale Range"],["Select Colors"]],"5":[["User Defined Vars"],["by Values"],["by Bits"],["by Values"],["by Bits"]],"id":"27"})