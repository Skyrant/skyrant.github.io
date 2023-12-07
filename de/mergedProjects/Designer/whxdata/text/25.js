rh._.exports({"0":[["SvgShowDialog"]],"1":[["\n"],["\n","Öffnet einen Dojo-Dialog über dem SVG-Bild und zeigt \n darin den per URL referenzierten oder im Aufruf direkt angegebenen HTML-Inhalt \n an. Es kann immer nur ein Dialog angezeigt werden. Wird diese Funktion \n aufgerufen, während bereits ein Dialog sichtbar ist, wird dieser durch \n den neuen Dialog ersetzt.","\n","Die Angaben zu Breite und Höhe sind optional. Fehlen \n sie, wird der Dialog so groß dargestellt, wie sein Inhalt es erfordert. \n Ist die Größe des Inhalts unbekannt, sollten beide Parameter angegeben \n werden, damit der Dialog nicht zu groß und somit unbedienbar wird. Dann \n gibt es gegebenenfalls im Dialog Bildlaufleisten für den dargestellten \n Inhalt (zwar nicht unbedingt schön, aber immerhin bedienbar). Größenangaben \n in Prozent beziehen sich auf die Größe der Visu-Ansicht (Browserfenster \n minus Baum links und Menü oben).","\n","Externe Seiten können hier nur aufgerufen werden, wenn \n die Systemeinstellungen (z.B. X-Frame Options) dies erlauben!","\n","Beim jeweiligen Event wird beispielsweise Folgendes \n eingetragen:","\n","SvgShowDialog(\"URL\",\"Title\",\"iframe\",\"width\",\"height\")","\n","Alternativ kann der Code auch in die SVG Source eingetragen \n werden. Hierbei kann beispielsweise auch ein Array für den Titel eingegeben \n werden, um je Systemsprache einen anderen Text anzuzeigen:","\n","<a><?gefasoft","\n","<attrrepl attr = \"xlink:href\">","\n","        <jsfncall \n name = \"SvgShowDialog\">","\n","                <jsexpr \n quotes = \"1\">/help/de/CntHelp.htm</jsexpr>","\n","                <jsnewarr \n nelems = \"2\">","\n","                        <jsexpr \n quotes = \"1\">Titel</jsexpr>","\n","                        <jsexpr \n quotes = \"1\">Title</jsexpr>","\n","                </jsnewarr>","\n","                <jsexpr \n quotes = \"0\">true</jsexpr>","\n","                <jsexpr \n quotes = \"0\">320</jsexpr>","\n","                <jsexpr \n quotes = \"0\">240</jsexpr>","\n","        </jsfncall>","\n","</attrrepl>?>","\n","Die Parameter haben folgende Bedeutung:","\n","\n\t","\n\t\t","Parameter","\n\t\t","Beschreibung","\n\t","\n\t","\n\t\t","url","\n\t\t","String. \n\t\t Gibt an, was angezeigt werden soll.","\n\t\t","1. Falls sie mit http:!!!!!!!// oder \n\t\t https:!!!!!!!// beginnt, wird sie als absolute URL (z.B. für externe \n\t\t Inhalte) angesehen. Beachten Sie hier die Sicherheitseinstellungen \n\t\t Ihres Systems. Ggf. verwenden Sie für externe Seiten die Funktion \n\t\t \"SvgOpenWindow\".","\n\t\t","2. Falls sie mit einem Schrägstrich (/) \n\t\t beginnt wird sie als relative URL bezüglich der Legato-Web-Applikation \n\t\t ausgewertet.","\n\t\t","3. Falls sie mit einem oder zwei Punkten \n\t\t und einem Schrägstrich beginnt (./ oder ../), wird sie als relative \n\t\t URL bezogen auf die Visu-Ansicht ausgewertet.","\n\t\t","4. Falls sie mit einem Kleiner-Zeichen \n\t\t (<) beginnt, wird angenommen, dass es keine URL, sondern der \n\t\t fertige HTML-Code ist, der im Dialog angezeigt werden soll.","\n\t","\n\t","\n\t\t","title","\n\t\t","String. \n\t\t Titel des Dialogs. In zweisprachigen Installationen sollte statt \n\t\t eines Titels besser ein Array angegeben werden, das den Titel \n\t\t in beiden Sprachen enthält.","\n\t","\n\t","\n\t\t","iframe","\n\t\t","Boolean. \n\t\t Ob der im Dialog anzuzeigende Inhalt eine komplette HTML-Seite \n\t\t ist (true), oder nur ein HTML-Fragment (false). Ein Fragment hat \n\t\t weder ein <html> noch ein <body> Tag.","\n\t","\n\t","\n\t\t","width","\n\t\t","Any, \n\t\t optional. Gewünschte Breite des Dialogs. Ist dies nur eine Zahl, \n\t\t wird automatisch px als Maßeinheit angenommen. Es kann auch die \n\t\t gewünschte Einheit mit übergeben werden.","\n\t","\n\t","\n\t\t","height","\n\t\t","Any, \n\t\t optional. Gewünschte Höhe des Dialogs. Ist dies nur eine Zahl, \n\t\t wird automatisch px als Maßeinheit angenommen. Es kann auch die \n\t\t gewünschte Einheit mit übergeben werden.","\n\t","\n","\n"," ","\n","Weitere Beispiele zu JavaScript-Funktionen und deren \n Verwendung finden Sie auch ein der Workshop-Dokumentation GefasoftDesigner.","\n\n\n"]],"2":[["SvgShowDialog"]],"3":[["SvgShowDialog"]],"id":"25"})