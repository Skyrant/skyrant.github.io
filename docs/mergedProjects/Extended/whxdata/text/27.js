rh._.exports({"0":[["Spezifische Zeichnung anzeigen"]],"1":[["\n"],["\n","Gehen Sie zum \n Boardlet und legen Sie den Ordnernamen der Zeichnung fest, der angezeigt \n werden soll. Der Pfad ist relativ zu dem Detail-Layout Verzeichnis in \n dem gemeinsamen Ordner. Das bedeutet, dass, wenn die Zeichnung direkt \n im Detail-Layout Verzeichnis (dem standardmäßigen Speicherort des Designers) \n gespeichert wird, muss kein Pfad festgelegt werden – geben Sie einfach \n den Ordnernamen einschließlich der Dateiendung xml ein. Falls Ordner im \n Detail-Layout Verzeichnis verwendet werden, muss der relative Pfad spezifiziert \n werden. Verwenden Sie einen Schrägstrich (keinen Gegenschrägstrich!) als \n Pfadtrenner, aber verwenden Sie keinen Schrägstrich am Pfadanfang. Stellen \n Sie sicher, dass ","Load Node Layout"," nicht aktiviert ist, z. B.:","\n","\n","S","pezifische \n Parameter für dieses Boardlet:","\n","• Load node layout: Deaktivieren, um eine spezielle \n Zeichnung anzuzeigen (weitere Informationen im Kapitel „Knotenspezifische \n Zeichnungen anzeigen“)","\n","• Enable compact view mode: Wird nur verwendet, \n wenn knotenspezifische Zeichnungen geladen werden","\n","• Animate changes: Die Laufzeit versucht automatisch \n reibungslöse Übergänge durchzuführen, wenn sich ein Style wie Sichtbarkeit \n während der Laufzeit ändert. Deaktivieren Sie diesen Parameter, um dieses \n Verhalten auszuschalten. Da der Systemparameter -360 gesetzt ist, werden \n Animationen komplett deaktiviert – der Boardlet-Parameter wird in diesem \n Fall übergangen.","\n","• Last update time from server: Zeigt die Zeit des \n letzten Werteupdates in der linken, oberen Ecke des Boardlets an.","\n","• Debug mode: Ermöglicht es, die Debug-Seitenleiste \n für die Boardlet-Instanz anzuzeigen.","\n"," ","\n"],["\n","Wenn der ","Logical \n Structure Tree"," mit LC2 erstellt wird, können jedem Knoten zwei Zeichnungen \n zugewiesen werden – der LGD ","file path"," und der LGD ","compact view \n file path",":","\n","\n","Wenn der \n Boardlet-Parameter ","Load node layout"," aktiviert ist, lädt das Boardlet \n die Zeichnung, die dem momentan gewählten Knoten zugeordnet ist. Zuerst \n wird die Zeichnung, die im ","LGD file path"," Bereich spezifiziert ist, \n angezeigt. Wenn dem ausgewählten Knoten keine spezielle Zeichnung zugeordnet \n ist, sucht das Boardlet den Baum (alle Parents) ab und verwendet die Zeichnung, \n die dem nächsten Parent zugeordnet ist.","\n","Wenn der \n Boardlet-Parameter ","Enable compact \n view mode"," aktiviert ist, wird der ","compact \n view file path"," verwendet. In diesem Fall – wenn hier keine Eingabe \n gemacht wird, wird der reguläre Dateipfad genutzt – wenn nichts Weiteres \n festgelegt ist, sucht das Boardlet den Baum erneut in Root-Richtung ab, \n um eine Zeichnung zu finden.","\n\n\n"]],"2":[["Spezifische Zeichnung anzeigen"]],"5":[["Knotenspezifische \n Zeichnungen anzeigen"]],"id":"27"})