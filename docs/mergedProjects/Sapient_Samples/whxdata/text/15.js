rh._.exports({"0":[["Fertigungsknoten"]],"1":[["\n"],["\n","Anwendungsstruktur | Fertigungsstruktur | Fertigungsknoten","\n"],["\n","In dieser Tabelle können neue ","(reelle \n und virtuelle) ","Knoten erstellt werden. Die Knoten können \n hierarchisch strukturiert werden.","\n","Reelle \n Knoten können als Standardknoten bei der Meldungsdefinition der Datenquellen \n angegeben werden (im Gegensatz zu virtuellen Knoten). Reelle Knoten dienen \n der Abbildung der realen Fertigungsstruktur,"," ","z.B."," \n ","Hallen|Fertigungsbereiche|Anlagengruppen|Anlagen|Anlagengruppen"," \n etc.","\n","Virtuelle \n Knoten können ebenfalls in beliebiger Anzahl angelegt werden und dienen \n oftmals einer organisatorischen Aufteilung des Produktionsprozesses und \n zur Zuordnung von Störmeldungen zu Kostenstellen oder Verantwortungsbereichen \n der Personal-Hierarchie, um auf verschiedenen Basen Auswertungen durchführen \n zu können.","\n"],["\n"," ","\n","\n\t","\n\t\t","Feld","\n\t\t","Beschreibung","\n\t","\n\t","\n\t\t","ID","\n\t\t","Eindeutige Identifikationsnummer. \n\t\t Wird vom System vergeben. Schreibgeschützt.","\n\t","\n\t","\n\t\t","Virtuell","\n\t\t","Checkbox. \n\t\t Wenn aktiv, handelt es sich um einen virtuellen Knoten, sonst \n\t\t um einen reellen. Ist der Parent-Knoten virtuell, kann nur ein \n\t\t virtueller Knoten angelegt werden. Bei einer nachträglichen Umschaltung \n\t\t von virtuell zu reell bzw. anders herum wird geprüft, ob dies \n\t\t überhaupt möglich ist.","\n\t","\n\t","\n\t\t","Parent (optional)","\n\t\t","Lookup-Liste zur Auswahl eines übergeordneten \n\t\t Knotens.","\n\t","\n\t","\n\t\t","Kurzname (optional)","\n\t\t","Symbolische Kurzbezeichnung des Knotens.","\n\t","\n\t","\n\t\t","Name","\n\t\t","Knotenname.","\n\t","\n\t","\n\t\t","Beschreibung (optional)","\n\t\t","Zusätzliche Beschreibung des Knotens.","\n\t","\n\t","\n\t\t","Hierarchiestufe","\n\t\t","Lookup-Liste zur Auswahl der Hierarchiestufe \n\t\t des Knotens aus der Grundkonfiguration.","\n\t","\n\t","\n\t\t","Produktionsbereich","\n\t\t","Lookup-Liste \n\t\t zur Auswahl eines Produktionsbereichs, dem der Knoten zugeordnet \n\t\t ist.","\n\t","\n\t","\n\t\t","Zeitschema (optional)","\n\t\t","Lookup-Liste zur Auswahl des Zeitschemas, \n\t\t das für diesen Knoten Verwendung findet, zur Zuordnung von Schicht- \n\t\t und Pausenzeiten.","\n\t\t","Werden für untergeordnete Knoten andere \n\t\t Zeitschemata verwendet, so erscheint eine Abfrage, ob das neue \n\t\t Zeitschema auch für die untergeordneten Knoten geändert werden \n\t\t soll oder nicht. Falls nicht, wird es nur für den aktuell selektierten \n\t\t Knoten geändert.","\n\t\t","Eine Änderung des Zeitschemas wird ab \n\t\t dem folgenden Produktionstag nach dem nächsten Lauf des zyklischen \n\t\t AE Jobs \"Ereignisse generieren\" wirksam (im Standard \n\t\t läuft dieser Job jede Stunde).","\n\t","\n\t","\n\t\t","Knotentyp (optional)","\n\t\t","Lookup-Liste zur Auswahl eines unter \n\t\t Grundkonfiguration definierten Knotentyps.","\n\t","\n\t","\n\t\t","Stückzahl-Faktor","\n\t\t","Faktor für Sollwertvorgaben vom Typ \n\t\t Sollstückzahl. Wird die Sollwertvorgabe vom übergeordneten Knoten \n\t\t vererbt, kann dieser für den eigenen Knoten mit dem Faktor multipliziert \n\t\t werden. Default ist 1.","\n\t\t","Anwendung z.B. bei der Aufteilung eines \n\t\t Montagebandes auf zwei parallele Teilbänder mit je 0.5 * Sollstückzahl \n\t\t des Gesamtmontagebandes.","\n\t\t","Siehe auch das Kapitel \"Automatische \n\t\t Sollwertberechnung\".","\n\t","\n\t","\n\t\t","Stückzahl-Offset","\n\t\t","Offset für die Sollwertverarbeitung. \n\t\t Default ist 0.","\n\t\t","Verwendung, wenn eine feste Stückzahl \n\t\t z.B. für die zerstörerische Materialprüfung ausgeschleust werden \n\t\t soll.","\n\t\t","Siehe auch das Kapitel \"Automatische \n\t\t Sollwertberechnung\".","\n\t","\n\t","\n\t\t","SVG Ansicht (optional)","\n\t\t","Link \n\t\t auf die SVG-Quelldatei. Mit Visualisierungsansichten können in \n\t\t den WebClient beliebige grafische Ansichten mit dynamischen Elementen \n\t\t je Knoten eingebunden werden.","\n\t\t","Die Angabe erfolgt als <Dateiname>.SVG, \n\t\t ohne Pfadangaben","\n\t\t (bezogen auf das Standard-Visu-Verzeichnis [SvgSrc]).","\n\t\t Der Ablagepfad der Dateien ist in der WebApplikation hinterlegt \n\t\t und kann dort geändert werden.","\n\t","\n\t","\n\t\t","Report-Verzeichnis (optional)","\n\t\t","Relatives \n\t\t Unterverzeichnis des Verzeichnisses \"user\" des Reportverzeichnisses, \n\t\t in dem Reports für diesen Knoten (über den die Benutzerberechtigungen \n\t\t vergeben werden) abgelegt werden.","\n\t","\n\t","\n\t\t","Funkruf-Empfänger (optional)","\n\t\t","Lookup-Liste \n\t\t zur Auswahl eines standardmäßigen Meldungsempfängers für den Funkruf \n\t\t für Meldungen, die diesem Knoten zugeordnet sind. Diese Spalte \n\t\t ist nur pflegbar, wenn das \"klassische\" Funkruf-Konzept \n\t\t verwendet wird (Systemparameter 325 = 0). Für das erweiterte Funkruf-Konzept \n\t\t wird der Empfänger im Reiter \"Funkruf\" konfiguriert.","\n\t","\n\t","\n\t\t","Funkruf gesperrt 1/2 (optional)","\n\t\t","Lookup-Liste \n\t\t zur Auswahl einer Variablen, die Sperren/Freigeben der Weitergabe \n\t\t von Meldungen z.B. an ein Funkrufsystem bedingt.","\n\t\t","Projektspezifische Einstellungen. Bitte \n\t\t wenden Sie sich bei Bedarf an Ihren Vertriebspartner der Gefasoft \n\t\t GmbH.","\n\t","\n\t","\n\t\t","Taktzeit-Faktor (optional)","\n\t\t","Faktor für Sollwertvorgaben vom Typ \n\t\t Solltaktzeit. Wird die Sollwertvorgabe vom übergeordneten Knoten \n\t\t vererbt, kann dieser für den eigenen Knoten mit dem Faktor multipliziert \n\t\t werden. Default ist 1.","\n\t\t","Anwendung z.B. bei der Aufteilung eines \n\t\t Montagebandes auf zwei parallele Teilbänder mit je 0.5 * Sollstückzahl \n\t\t des Gesamtmontagebandes.","\n\t\t","Siehe auch das Kapitel \"Automatische \n\t\t Sollwertberechnung\".","\n\t","\n\t","\n\t\t","Taktzeit-Offset (optional)","\n\t\t","Offset für die Sollwertverarbeitung. \n\t\t Default ist 0. Siehe auch das Kapitel \"Automatische Sollwertberechnung\".","\n\t","\n\t","\n\t\t","Sortiernummer (optional)","\n\t\t","Sortierreihenfolge. Mehrere Unterelemente \n\t\t auf gleicher Knotenebene können mit Angabe einer Sortiernummer \n\t\t aufsteigend sortiert werden. Die Angabe dient der Strukturierung \n\t\t des Hierarchiebaums vor allem in der Anzeige des WebClients.","\n\t","\n\t","\n\t\t","Vorlageninstanz","\n\t\t","Vorlageninstanz, \n\t\t von der der Wert stammt. Nur zur Information; schreibgeschützt.","\n\t","\n\t","\n\t\t","Vorlagenreferenz","\n\t\t","Vorlagenreferenz. \n\t\t Nur zur Information; schreibgeschützt.","\n\t","\n\t","\n\t\t","Ausgeblendet?","\n\t\t","Checkbox. Soll der Knoten in der \n\t\t WebApp ausgeblendet werden? 0 = Nein (Standard), 1 = Ja.","\n\t\t","Daten werden auch für ausgeblendete Knoten \n\t\t erfasst.","\n\t\t","Ausgeblendete Knoten werden in der WebApp \n\t\t weder im Fertigungsbaum noch in den Filtern angezeigt.","\n\t","\n\t","\n\t\t","Display-Optionen","\n\t\t","Anzeige-Optionen \n\t\t für generische Layouts.","\n\t","\n\t","\n\t\t","Funkruf inaktiv","\n\t\t","Funkrufweiterleitung \n\t\t inaktiv setzen.","\n\t","\n\t","\n\t\t","Erstwertmeldungs-Ebene","\n\t\t","Ebene \n\t\t in Fertigungsbaum, wo die Erstwertmeldung für den Funkruf zu suchen \n\t\t ist. ","\n\t","\n\t","\n\t\t","Sende-Verzögerung","\n\t\t","Verzögerung \n\t\t der Funkrufweiterleitung in Sekunden.","\n\t","\n\t","\n\t\t","Rücksetzen-Verzögerung","\n\t\t","Verzögerung \n\t\t des Zurücksetzens in Sekunden.","\n\t","\n\t","\n\t\t","Empfänger","\n\t\t","FK \n\t\t - Verweis auf einen Funkruf-Empfänger.","\n\t","\n\t","\n\t\t","LGD \n\t\t Dateipfad","\n\t\t","Referenz \n\t\t auf eine XML-Datei, die für diesen Knoten im Legato Graphic Designer \n\t\t Boardlet visualisiert werden soll, z.B. Node1.xml. Wenn für den \n\t\t Knoten keine Datei angegeben ist, wird die des nächsthöheren Knotens \n\t\t verwendet.","\n\t\t","Datei \n\t\t muss im Verzeichnis \\SapiEng_xxx\\web\\app\\custom\\detail-layout\\ \n\t\t gespeichert sein","\n\t","\n\t","\n\t\t","Erw. \n\t\t Eigenschaften","\n\t\t","Die definierten erweiterten Eigenschaften \n\t\t werden hier als eigene Spalten angehängt und können mit Werten \n\t\t versehen werden.","\n\t\t","Die \n\t\t Parametrierung von erweiterten Eigenschaften ist in einem separaten \n\t\t Kapitel beschrieben, zu finden hier: ","Erweiterte Eigenschaften",".","\n\t","\n\t","\n\t\t","Erweiterte Eigenschaften","\n\t\t","Die \n\t\t unter Grundkonfiguration | Erweiterte Eigenschaften | Zuordnungen \n\t\t von Erweiterten Eigenschaften | Erw. Eigenschaften (Fertigungsstruktur) \n\t\t verwalteten erweiterten Knoteneigenschaften werden hier angehängt \n\t\t (je Eigenschaft eine Spalte) und können hier mit Werten versehen \n\t\t werden. Die Standard-Eigenschaften werden im Folgenden beschrieben.","\n\t","\n\t","\n\t\t","Kostenstelle","\n\t\t","Erweiterte \n\t\t Eigenschaft. Hier kann eine Kostenstelle gewählt werden, die unter \n\t\t Grundkonfiguration | Erweiterte Eigenschaften | Eigenschaftslisten \n\t\t definiert wurde.","\n\t","\n\t","\n\t\t","Meldung gehend manuell","\n\t\t","Erweiterte \n\t\t Eigenschaft. Checkbox. Wenn aktiv, können Meldungen dieses Knotens \n\t\t in der WebApplikation manuell auf Gehend gesetzt werden.","\n\t","\n\t","\n\t\t","Zulässige TPM-Zeit","\n\t\t","Erweiterte \n\t\t Eigenschaft. Zulässige TPM-Zeit in Minuten.","\n\t","\n\t","\n\t\t","Begründungszusatz","\n\t\t","Erweiterte \n\t\t Eigenschaft. Standard-Begründungszusatz für Meldungen dieses Knotens.","\n\t","\n\t","\n\t\t","Formel z. Verfügbarkeitsb. nach VDI \n\t\t 3581","\n\t\t","Erweiterte \n\t\t Eigenschaft. Ermöglicht die Eingabe einer Formel zur Berechnung \n\t\t der KPIs für Verfügbarkeit. Wird für verkettete Systeme benötigt, \n\t\t um zu bestimmen, wie die KPIs berechnet werden soll. Z.B. können \n\t\t drei Maschinen hintereinander geschaltet sein; steht eine davon, \n\t\t stehen alle. In diesem Fall könnte man die Verfügbarkeit der Anlage \n\t\t (die die drei Maschinen enthält) durch Multiplikation berechnen. \n\t\t Für weitere Details siehe folgendes Unterkapitel.","\n\t","\n","\n"," ","\n"],["\n","Layout-Snippet \n erstellen (Meldungsstatus)","\n","Erstellt \n ein Layout-Snippet mit den Databinding-Informationen des selektierten \n Knotens (Mehrfachauswahl möglich) und kopiert diese Info in die Zwischenablage. \n Es wird eine Zeile je selektiertem Knoten erstellt. Aus der Zwischenablage \n kann die Information in eine Visualisierung eingefügt werden, um Meldungsstatus \n für Knoten anzubinden. Für weitere Informationen, siehe bitte Kapitel \n Erweiterte Bedienung - Legato Graphic Designer.","\n\n\n"]],"5":[["Fertigungsknoten"],["Funktion"],["Feldbeschreibung"],["Kontextmenü"]],"id":"15"})