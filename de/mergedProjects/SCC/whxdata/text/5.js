rh._.exports({"0":[["Überblick MDX Manager"]],"1":[["\n"],["\n\n"],["\n","Die Produktfamilie \"Machine Data eXchange (MDX)\" \n dient im Kontext der industriellen Produktion der Implementierung des \n Datenaustauschs zwischen Maschinensteuerungen (Operational Technology \n / OT Devices) des Shopfloor und verschiedensten IT Systemen (Information \n Technology).","\n","Dazu bietet MDX auf den Betriebssystemen Windows und \n Linux verschiedene OT Connectors (OTC) zur Anbindung der OT Devices und \n einen IT Connector (ITC) zur Anbindung der IT Systeme an. Die Verbindung \n zwischen OT Connectors und IT Connectors erfolgt über das Message Queuing \n Telemetry Transport (MQTT) Protokoll. ","\n","Innerhalb der ITCs besteht die Möglichkeit projektspezifische \n Skripte auszuführen. Das ermöglicht eine dynamische Konfiguration der \n OTCs, die Vorverarbeitung und Anreicherung von Datenströmen sowie die \n Implementierung kundenspezifischer Businesslogik auf der Edge. ","\n","Für die Projektierung von ITCs und OTCs stellt die \n Produktfamilie MDX zwei Anwenderprogramme mit grafischer Benutzeroberfläche \n unter Windows zur Verfügung. Das eine Programm, der OTC Manager, dient \n der lokalen Installation und initialen Konfiguration von OT Connectors \n (OTC) auf Windows Betriebssystemen. Das andere Programm, der MDX Manager, \n erlaubt darüber hinaus auch die lokale Installation von IT Connectors \n sowie die Erstellung und das Debugging von Konfigurationen und Skripten \n zur Ausführung in ITCs.","\n","INFO zur Terminologie:","\n","\n\t","Die Bezeichnungen \"OT Connector\" \n\t und \"OTC\" ersetzen die bisherigen Bezeichnungen \"Sapient \n\t Maschinenclient\" / \"Sapient Maschinen-Client\" und \"SMC\".","\n\t","Die Bezeichnungen \"IT Connector\" \n\t und \"ITC\" ersetzen die bisherigen Bezeichnungen \"(Sapient \n\t Cloud Connector) Runtime\" / \"SCC Runtime\" und \"SCC\".","\n\t","Die Bezeichnung MDX Manager löst den Begriff \n\t \"(Sapient Cloud Connector) Editor\" bzw. \"SCC Editor\" \n\t ab. ","\n\t","In Teilen der Software aus der Produktfamilie \n\t MDX und deren Hilfeseiten werden bis auf Weiteres auch noch die bisherigen \n\t Begriffe verwendet.","\n","\n"],["\n","Die Anwendung ist eine 64-Bit-Applikation. Die Anwendung \n unterstützt aber ausschließlich 32-Bit-Datentypen. Die unterstützten Datentypen \n können hier nachgelesen werden: ","Unterstützte \n SPS-Datentypen",".","\n"],["\n","Der Cloud Connector besteht aus den folgenden zentralen \n Bausteinen, die auf verbreiteten technologischen Standards beruhen und \n eine maximale Flexibilität und Performance gewährleisten:","\n","\n\t","Amazon Web \n\t Services"," (Linux)","\n\t","OPC \n\t UA Schnittstelle"," (Win64, Linux/Unix)","\n\t","SendRecv \n\t Telegrammschnittstelle"," (Win64, Linux/Unix)","\n\t","Pub/Sub \n\t Schnittstelle"," (Win64, Linux/Unix)","\n\t","HTTP \n\t Schnittstelle"," (Win64, Linux/Unix)","\n\t","Datenbank-Schnittstelle"," \n\t (Win64, Linux/Unix)","\n\t","Script-Engine"," \n\t für Funktionslogik (Win64, Linux/Unix)","\n\t","Lokale \n\t Datenbank"," zur Erhöhung der Datensicherheit (Win64, Linux/Unix)","\n","\n"],["\n","Amazon Web Services (AWS) ist einer der führenden \n Anbieter im Cloud Computing. Als erste AWS-Schnittstelle ist der Simple \n Queue Service in der Linux-Version des IT Connectors integriert. Es stehen \n Verbindungen zum Senden oder Empfangen zur Verfügung.","\n"],["\n","Da der klassische OPC Standard auf den alternden COM/DCOM \n Technologien von Microsoft basiert, wurde durch die OPC Foundation eine \n neue Spezifikation unter dem Namen OPC UA eingeführt. Das Hauptziel dabei \n war eine Umstellung von COM/DCOM auf moderne web-basierte Technologien \n bei Erhaltung bzw. Verbesserung der OPC Funktionalität.","\n","Der Einsatz von OPC UA beschränkt sich damit - auch \n im IT Connector - nicht mehr wie der klassische OPC Standard auf Windows-Umgebungen. \n Es ist nun ebenfalls möglich den Standard unter Unix/Linux sowie auf Controllern \n und intelligenten Geräten mit entsprechenden Betriebssystemen zu implementieren.","\n","Im Cloud Connector ist eine OPC UA Client Schnittstelle \n mit folgender Funktionalität integriert:","\n","\n\t","Discovery","\n\t","Sessionverwaltung","\n\t","Browsefunktion mit Import","\n\t","Read/Write (einfach, ohne Registrierung)","\n\t","Subscribe/Unsubscribe","\n","\n"],["\n","Nicht alle Geräte oder Steuerungen können über OPC \n UA angesprochen werden. Um eine Kommunikation mit solchen Partnern aufzubauen, \n kann die SendRecv Telegrammschnittstelle verwendet werden. Diese ermöglicht \n die generelle Kommunikation des IT Connectors über die folgenden Treiber:","\n","\n\t","TCP/IP","\n\t","ISO-on-TCP","\n\t","UDP","\n\t","Serielle Kommunikation mit 3964R oder offenes \n\t Protokoll (feste Länge, festes Endezeichen oder Quittungsverzug, nur \n\t unter Windows)","\n","\n","Die Verwendung der SendRecv-Schnittstelle kann insbesondere \n bei großen Projekten sinnvoll sein, da damit ein Telegramm mit nur einem \n Script über alle SPSen verarbeitet werden kann. Somit wird auch die Wartbarkeit \n erhöht. Allerdings ist der initiale Aufwand bei der SPS-Programmierung \n recht hoch.","\n"],["\n","Zusätzlich zu den Kommunikationsmöglichkeiten von OPC \n UA oder der SND/RCV Telegrammschnittstelle nimmt der Datenaustausch über \n Protokolle basierend auf dem Publish/Subscribe-Prinzip aus dem Umfeld \n des industriellen Internet der Dinge (industrial Internet of Things, iIoT) \n beständig zu. Für diese Protokolle stellt der IT Connector eine PubSub-Schnittstelle \n zur Verfügung. Über diese Schnittstelle können mehrere Clients für verschiedene \n Publish/Subscribe Protokolle instanziiert werden. Derzeit sind die folgenden \n Protokolle und deren Versionen im IT Connector verfügbar:","\n","\n\t","Message Queuing Telemetry Transport (MQTT)","\n","\n","Im IT Connector können MQTT Clients entsprechend \n der Version 3.1.1 dieses Protokolls instanziiert werden. Der IT Connector \n unterstützt dabei sowohl SSL/TLS Verschlüsselung als auch Authentifizierung \n des Clients beim Broker mit Username/Password.","\n","\n\t","Apache Kafka","\n","\n","Im IT Connector können Consumer Verbindungen \n zum Lesen von Daten aus einem Kafka-Cluster angelegt werden.","\n"],["\n","Um auch Webinterfaces von anderen IT Systemen ansprechen \n zu können, verfügt der IT Connector über eine HTTP Schnittstelle. Über \n diese Schnittstelle ist es möglich Webservices von anderen IT Systemen \n aufzurufen.","\n","Die HTTP Schnittstelle des IT Connectors wird hauptsächlich \n für die Kommunikation mit dem MES Legato Sapient verwendet. Dieses bietet \n mehrere Webservices zur Kommunikation über eine JSON RPC Schnittstelle \n an.","\n"],["\n","Die Datenbank-Schnittstelle dient der Anbindung von \n verschiedenen Datenbanken mittels des IT Connectors. Der Haupt-Anwendungsfall \n dieser Schnittstelle ist die Anbindung von Maschinen an die Datenbank \n des MES \"Legato Classic\".","\n","Für Windows steht der ODBC-Treiber zur Anbindung an \n Datenbanken zur Verfügung. Die Vorteile von \"ODBC\" liegen in \n der hohen Verfügbarkeit für nahezu alle am Markt befindlichen Datenbanken \n und deren Versionen. Die in den IT Connector unter Windows implementierte \n Schnittstelle wurde bisher mit folgenden Datenbanken erfolgreich getestet:","\n","\n\t","Oracle","\n\t","MS SQL-Server","\n\t","DB2","\n","\n","Für Linux/Unix können nur Oracle Datenbanken mittels \n OCI (Oracle Call Interface) angebunden werden.","\n"],["\n","Zur Verknüpfung und Vorverarbeitung der Daten, für \n logische Funktionen oder einfache Ablaufsteuerungen bietet sich der Einsatz \n von Scripten an. Dabei ist die Auswahl der Scriptsprache ein oft diskutiertes \n Thema. Der Einsatz einer standardisierten Sprache mit großer Marktverbreitung, \n wie VB Script oder Javascript, bietet Vorteile in Bezug auf die Akzeptanz \n bei potentiellen Anwendern. Demgegenüber kann eine speziell für den IT \n Connector entwickelte Sprache mit einem auf die Aufgabenstellung abgestimmten \n Befehlssatz aufwarten. Auch das Zeitverhalten des Scriptinterpreters und \n die Einbindung in den Gesamtablauf kann für das System optimiert werden.","\n","Für die Ausführung von Scripten im IT Connector wurde \n in der Vergangenheit eine eigenständige Scriptsprache entwickelt, deren \n Syntax sich an eine standardisierte Sprache (\"Structured Text\" \n aus der IEC 61131-3) anlehnt.","\n","Die Bearbeitung der Scripte erfolgt streng ereignisgesteuert \n durch die Script-Engine innerhalb des IT Connectors. Als Ereignisse können \n wählbare Timer oder jede Änderung eines Variablenwertes herangezogen werden. \n Werte von Variablen können Scripten als Parameter übergeben werden können. \n Komplexe Applikationen können in mehrere, wiederverwendbare Scripte unterteilt \n und diese in einer Ordnerstruktur abgelegt werden.","\n"],["\n","Zuordnungs- oder Nachschlagetabellen können in einer \n lokalen (integrierten) Datenbasis (Redis) des Cloud Connectors gehalten \n werden. Wenn z.B. bei einem bestimmten Ereignis aus der Produktion jeweils \n ein Eintrag in einer Zuordnungstabelle gelesen werden soll, muss eine \n lokale Kopie dieser Tabelle im Cloud Connector existieren, da die ständige \n Abfrage der Datenbank zu einem inakzeptablen Zeitverhalten führen würde.","\n","Zur Überbrückung von Verbindungsproblemen können alle \n Daten über die lokale Datenhaltung in Redis zwischengespeichert werden. \n Über projektspezifische Scripte können Anwender so die Datensicherheit \n ihrer Applikation wesentlich verbessern.","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n"," ","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"]],"2":[["Allgemein"],["Systemumgebung"],["Der IT Connector"]],"3":[["Überblick MDX Manager"]],"4":[["Amazon Web Services"],["OPC UA Schnittstelle "],["SendRecv Telegrammschnittstelle \n "],["Pub/Sub Schnittstelle \n "],["HTTP Schnittstelle "],["Datenbank-Schnittstelle "],["Script-Engine "],["Lokale Datenbank "]],"id":"5"})