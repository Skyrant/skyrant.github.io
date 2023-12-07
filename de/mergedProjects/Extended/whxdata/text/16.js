rh._.exports({"0":[["Bindings - Elementstile und -eigenschaften"]],"1":[["\n  "],["\n  ","Jeglicher Elementstil kann als Bindingziel genutzt werden. Um die Stilnamen zu untersuchen, fügen Sie einfach ein Element zu einer Zeichnung hinzu, gestalten Sie es wie gewünscht über die Seitenleiste und lassen Sie die Änderungen anzeigen, indem Sie auf den Stil bearbeiten Button in der Seitenleiste klicken:","\n  ","\n  "," ","\n  ","\n  "," ","\n  ","Jeder der hier aufgelisteten Stile kann also Bindingziel genutzt werden, z. B.","\n  ","• fillColor: Füllfarbe des Elements","\n  ","• strokeColor: Rahmenfarbe","\n  ","• fontStyle: Schriftart","\n  ","• dashed: “gestrichelte” Linie","\n  ","• rotation: Drehen um Gradzahlen","\n  ","Sogar die Form eines Elements kann als Bindingziel verwendet werden, um z. B. das Element mit einer bestimmten, von einem Wert abhängigen Form anzuzeigen. Um die möglichen Werte für Stileigenschaften herauszufinden, legen Sie den jeweiligen Stil über die korrespondierenden Tools des Designers fest (normalerweise die Stil-Seitenleiste) und überprüfen Sie den Wert im Stildialog.","\n  "],["\n  ","Einige Formen verfügen über individuelle Eigenschaften, wie der Fortschritt von Fortschrittsbalken, die ebenfalls als Bindingziel verwendet werden können:","\n  ","• Suchen Sie nach “Fortschritt” in der Formenbibliothek.","\n  ","• Wählen Sie “Cloud Fortschrittsbalken” und fügen Sie sie in eine Zeichnung ein.","\n  ","\n  ","• Überprüfen Sie die Stile:","\n  ","\n  ","• Die Eigenschaft barPos spezifiziert den Fortschritt in Prozentzahlen und kann als Bindingziel verwendet werden (angenommen, die Variable ist ein Prozentwert, aber natürlich kann auch jedes andere Rechenergebnis referenziert werden).","\n  ","{","\n  ","    \"datasources\": {","\n  ","        \"someVar\": {","\n  ","            \"source\": \"var\",","\n  ","            \"params\": {","\n  ","                \"sym\": \"varSym\"","\n  ","            }","\n  ","        }","\n  ","    },","\n  ","    \"bindings\": {","\n  ","        \"barPos\": {","\n  ","            \"value\": {","\n  ","                \"source\": \"dataref\",","\n  ","                \"params\": {","\n  ","                    \"ref\": \"someVar\"","\n  ","                },","\n  ","                \"defaultValue\": 0","\n  ","            }","\n  ","        }","\n  ","    }","\n  ","}","\n  "," ","\n  ","Linien sind ein weiteres Beispiel für Elemente, die besondere Stileigenschaften unterstützen, z. B. die Stilart des Anfangs und Endes einer Linie (startArrow, endArrow):","\n  ","\n  "," ","\n\n"]],"2":[["Bindings: Elementstile und -eigenschaften"]],"5":[["Sonderformen"]],"id":"16"})