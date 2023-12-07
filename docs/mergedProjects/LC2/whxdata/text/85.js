rh._.exports({"0":[["Meldungsdefinitionen"]],"1":[["Weiterleitungsart,Manuelles Zurücksetzen von Meldungen,Manuelles Auslösen von Meldungen,Meldungsdefinition"]],"2":[["\n"],["\n","Anwendungsstruktur | Datenaustausch | Datenaustausch-Module \n | Verbindungen | Meldungsdefinitionen","\n","Siehe auch ","Fertigungsstruktur \n - Meldungszuordnung",".","\n"],["\n","Das Meldungsmanagement \n (näheres siehe eigener Abschnitt) erlaubt die Erfassung von Meldungen \n aus den Steuerungssystemen über verschiedene Methoden. Die Funktion der \n Datenbank ist aber für alle Erfassungsmethoden identisch: Aus dem Gateway \n wird eine eindeutige ID je Meldung"," mit Zeitstempel je Ereignis \n (getrennt für \"kommend\" und \"gehend\") an die Datenbank \n übergeben. In der Datenbank werden dann aus einer Zuordnungstabelle der \n Text der Meldung und andere Informationen zugefügt.","\n","Die Meldungen und deren Eigenschaften können manuell \n freigegeben werden, oder werden über eine Importfunktion aus anderen Datenquellen \n übernommen.","\n"],["\n"," ","\n","\n\t","\n\t\t","Feld","\n\t\t","Beschreibung","\n\t","\n\t","\n\t\t","ID","\n\t\t","Eindeutige Identifikationsnummer. \n\t\t Wird vom System vergeben. Schreibgeschützt.","\n\t","\n\t","\n\t\t","Verbindung","\n\t\t","Lookup-Liste zur Auswahl der Verbindung. \n\t\t Wird automatisch befüllt und kann geändert werden.","\n\t","\n\t","\n\t\t","Knoten","\n\t\t","Lookup-Liste zur Auswahl eines Knotens \n\t\t aus der Fertigungsstruktur. Die Zuordnung der Meldung zu einem \n\t\t Knoten erlaubt die gefilterte Darstellung der Meldungen im Client \n\t\t (bezogen auf einen Knoten und seine Unterelemente) und ist auch \n\t\t die Grundlage für alle knotenbezogenen Statistikfunktionen.","\n\t","\n\t","\n\t\t","Meldungsnummer","\n\t\t","Meldungsnummer. Muss innerhalb dieser \n\t\t Verbindung eindeutig sein (z.B. Code des Störoperanden im Steuerungssystem).","\n\t\t","Die Auslösung einer Störmeldung erfolgt \n\t\t mit Übergabe der Meldungsnummer vom Gateway an die Datenbank.","\n\t","\n\t","\n\t\t","Operand (optional)","\n\t\t","SPS-Operand (falls Operandenbezug \n\t\t vorhanden) der Meldung.","\n\t","\n\t","\n\t\t","Symbol (optional)","\n\t\t","SPS-Symbol (falls Operandenbezug \n\t\t vorhanden) der Meldung.","\n\t","\n\t","\n\t\t","Text","\n\t\t","Meldetext bis max. 80 Zeichen Länge.","\n\t","\n\t","\n\t\t","Meldeklasse","\n\t\t","Lookup-Liste zur Auswahl einer vorhandenen \n\t\t Melde-Klasse (siehe Abschnitt Meldungsmanagement) zur Klassifizierung \n\t\t der Meldung. Die Klasse regelt die Verarbeitung und Darstellung \n\t\t einer Meldung. Die Klassen Unterer / Oberer Grenzwert, Untere \n\t\t / Obere Warngrenze, Verbindungsstörung, Modul-Verbindungsstörung \n\t\t und Unbekannte Meldung sind fest im System vorhanden. Andere Klassen \n\t\t können bei der Definition des Meldesystems beliebig durch den \n\t\t Anwender erstellt werden.","\n\t","\n\t","\n\t\t","Meldeart","\n\t\t","Lookup-Liste zur Auswahl einer vorhandenen \n\t\t Melde-Art (siehe Abschnitt Meldungsmanagement). Meldearten sind \n\t\t eine weiteres Merkmal von Meldungen und können entsprechend ausgewertet \n\t\t werden.","\n\t\tTypische Arten sind:","\n\t\t","                technisch","\n\t\t                organisatorisch","\n\t\t                systembedingt","\n\t\t                Kalenderpflege","\n\t\t","                Zyklische \n\t\t Meldungen","\n\t\t                Unterer/Oberer \n\t\t Grenzwert","\n\t\t                Untere/Obere \n\t\t Warngrenze","\n\t\t                Verbindungsstörung","\n\t\t                Modul-Verbindungsstörung","\n\t","\n\t","\n\t\t","Weiterleitungsart (optional)","\n\t\t","Lookup-Liste zur Auswahl einer Weiterleitungsart \n\t\t für den Funkruf (siehe Kapitel Funkruf).","\n\t\t","Typische Weiterleitungsarten sind:","\n\t\t","keine Weiterleitung","\n\t\t","Erstwerterkennung (1. Meldung wird weitergeleitet, \n\t\t Folgemeldungen werden ausgeblendet)","\n\t\t","generelle Weiterleitung (alle Meldungen \n\t\t werden weitergeleitet).","\n\t\t","Überschreibt die indirekte (default) \n\t\t Weiterleitungsart der zugewiesenen Meldeklasse (Defaulteinstellung \n\t\t unter Meldungsmanagement | Meldeklassen – Spalte Weiterleitungsart).","\n\t","\n\t\n\t","\n\t\t","Funkruf-Empfänger (optional)","\n\t\t","Auswahlfeld zur Zuordnung eines im \n\t\t Meldungsmanagement definierten Funkruf-Empfängers (siehe Abschnitt \n\t\t Meldungsmanagement).","\n\t","\n\t","\n\t\t","Funkruf-Priorität (optional)","\n\t\t","Priorität der Meldung für den Funkruf \n\t\t (unabhängig von der Meldungs-Priorität).","\n\t","\n\t\n\t\n\t\n","\n"," ","\n"],["\n","Über die Liste der projektierten Meldungen kann eine \n Simulation von Meldeeinträgen durchgeführt werden. Selektiert man eine \n Meldung im Navigationsbaum oder in der Tabelle und betätigt die rechte \n Maustaste, erscheint ein Kontextmenü mit folgenden Funktionen:","\n","Meldung \n auslösen: ","Erzeugt ein"," \n Kommend","-Ereignis der \n Meldung.","\n","Meldung \n zurücksetzen: ","Erzeugt \n einen"," Gehend","-Ereignis \n der Meldung.","\n"," ","\n","Siehe auch ","Platzhalter \n im Meldetext"," ","\n","Soll eine Meldungsdefinition gelöscht werden, so wird \n zuerst geprüft, dass keine Meldung dafür mehr ansteht. Nur dann kann die \n Meldungsdefinition gelöscht werden; andernfalls wird eine Fehlermeldung \n ausgegeben.","\n\n\n"]],"3":[["Meldungsdefinitionen"],["Funktion"],["Feldbeschreibung"],["Kontextmenü"]],"id":"85"})