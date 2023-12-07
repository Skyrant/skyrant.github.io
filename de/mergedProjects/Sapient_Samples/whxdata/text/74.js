rh._.exports({"0":[["Schichttypen"]],"1":[["\n"],["\n","Werksverwaltung | Arbeitszeit-Einstellungen \n | Grundeinstellungen | Schichttypen","\n"],["\n","In dieser Tabelle müssen die unterschiedlichen Schichttypen \n definiert werden, die in einem Schichtmodell der im Projekt enthaltenen \n Fertigungsstruktur enthalten sein können. Schichttypen unterscheiden logische \n Schichtbezeichnungen, die innerhalb des Fertigungsbereichs bekannt sind \n und meist einer bestimmten Arbeitszeit zugeordnet sind, ohne dass mit \n dem Schichttyp bereits festgelegte Arbeitszeiten fest verknüpft sind.","\n","Beispiele für Schichttypen sind Frühschicht, Spätschicht \n oder Nachtschicht.","\n","Die hier definierten Schichttypen gelten übergreifend \n für alle Zeitschemata. In den verschiedenen Auswertungen können Schichttypen \n als Filterkriterium genutzt werden.","\n"],["\n"," ","\n","\n\t","\n\t\t","Feld","\n\t\t","Beschreibung","\n\t","\n\t","\n\t\t","ID","\n\t\t","Eindeutige Identifikationsnummer. \n\t\t Wird vom System vergeben. Schreibgeschützt.","\n\t","\n\t","\n\t\t","Name","\n\t\t","Name des Schichttyps.","\n\t","\n\t","\n\t\t","CSS Style","\n\t\t","CSS Style zur Formatierung der Farbe \n\t\t des Schichttyps sowie eines Symbols zur Anzeige im Schichtplan.","\n\t\t","Beispiel:","\n\t\t","{","\n\t\t","    \"image\": \n\t\t {","\n\t\t","        \"filename\": \n\t\t \"icon-moon-white.svg\",","\n\t\t","        \"width\": \n\t\t 20","\n\t\t","    },","\n\t\t","    \"style\": \n\t\t \"night-shift\"","\n\t\t","}","\n\t","\n","\n"," ","\n"],["\n","Die im Legato-Projekt abzubildende Fertigungsstruktur \n umfasst die Produktionsbereiche Vormontage, Montage und Logistikhalle. \n Vormontage und Montage arbeiten im 3-Schicht-Betrieb, der Versand in der \n Logistikhalle arbeitet in Normalschicht.","\n","Aus ablauftechnischen Gründen beginnt die Frühschicht \n der Vormontage bereits um 05:30 Uhr eines Arbeitstages, die Frühschicht \n der Montage beginnt um 06:00 Uhr. Die folgenden Schichten Spätschicht \n und Nachtschicht beginnen ebenfalls um 30 Min. versetzt. Trotzdem werden \n die Schichten allgemein als Früh- Spät- und Nachtschicht bezeichnet.","\n","Hingegen beginnt die Schicht des Versands um 06:30 \n Uhr und dauert bis 16:00 Uhr. Sie wird intern nur als Normalschicht bezeichnet. \n Sie ist auch von der Abfolge her nicht an diejenige des Montagebereichs \n gekoppelt.","\n\n\n"]],"2":[["Schichttypen"]],"5":[["Funktion"],["Feldbeschreibung"],["Beispiel"]],"id":"74"})