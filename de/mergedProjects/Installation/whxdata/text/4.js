rh._.exports({"0":[["Sapient Cloud Connector"]],"1":[["\n"],["\n"],["\n"],["\n","\n"," ","\n",":","\n","Für den Betrieb unter Windows gilt die Einschränkung, \n dass aus Performancegründen und zur Gewährleistung eines stabilen Betriebsverhaltens, \n nicht mehr als 50 Verbindungen je Cloud Connector-PC angelegt werden sollen. \n Das ist bei der Projektierung des Gesamtsystems und Festlegung der erforderlichen \n Cloud Connector-PCs zu berücksichtigen. Für den Betrieb des Cloud Connectors \n auf UNIX-Plattformen gelten keine Einschränkungen.","\n"],["\n","Oracle Client \n und Provider for OLE DB ab Version 11.2.0.1.0. 64-bit.","\n","Ab SCC 3.1 \n wird auch ODAC 12.2.0.1.0 (64-bit) unterstützt (nur für Oracle 12.2!). \n Hierfür gelten folgende Besonderheiten:","\n","Falls der \n Rechnername einen Unterstrich \"_\" enthält, kann die Installation \n nicht abgeschlossen werden. Ändern Sie ggf. den Rechnernamen.","\n","Deaktivieren \n Sie im Schritt 4 der Installation folgende Default-Option: Oracle Services \n for Microsoft Transaction Server.","\n",":","\n","Beim \n Oracle Client 11.2.0.3 kommt es gelegentlich zu Problemen, da der OLE \n DB Provider nicht korrekt installiert wird. Daher wird die Version 11.2.0.1 \n empfohlen.","\n",":","\n","Bei \n Cloud Connectors mit hohen Datendurchsatz wird empfohlen, die Datei sqlnet.ora \n vom Oracle Treiber zu suchen und dort den Parameter","\n","Sqlnet.outbound_connect_timeout=5","\n","zu \n setzen, damit auch im Fehlerfall der Ablauf gewährleistet bleibt.","\n","Ab SCC 3.2 \n wird auch ODAC 12.2.0.1.1 (64-bit) unterstützt (nur für Oracle 12.2!). \n Es gelten die gleichen Besonderheiten wie für ODAC 12.2.0.1.0.","\n"],["\n","Die Installation des Sapient Cloud Connectors erfolgt \n über das Installationsprogramm ","setupscc",".exe",". \n Nach dem Start der Exe kann die Sprache der Installation gewählt werden.","\n"],["\n","Wird die Cloud Connector Installation zur Laufzeit \n (online) als Win64-Cloud Connector betrieben, sind ggf. der OPC-Server \n GOPS und die zugehörigen Treiber ebenfalls am Cloud Connector PC zu installieren. \n Dies erfolgt über die Datei ","GopsSetup.exe",". Es empfiehlt sich, die \n Installation von Cloud Connector und GOPS gegebenenfalls in einem Schritt \n durchzuführen.","\n","Zur Kopplung mit TIA (Totally Integrated Automation) \n steht außerdem der GTOPS von Gefasoft zur Verfügung. Dieser kann mithilfe \n der Datei ","SetupGTOPS2.exe"," installiert \n werden.","\n",":","\n","Wird im Projekt eine Kopplung über OPC gefordert, \n kann ausschließlich die Windows-Variante des Cloud Connectors eingesetzt \n werden. OPC wird von UNIX nicht unterstützt.","\n"],["\n"],["\n"],["\n","Der Cloud Connector ist als 64 Bit Applikation verfügbar.","\n","\n"," ","\n"],["\n","Der Cloud Connector verwendet folgende Bibliotheken:","\n"],["\n","linux-vdso.so.1","\n","librt.so.1","\n","librfccm.so","\n","libACE.so.6.3.0","\n","libACE_SSL.so.6.3.0","\n","libcrypto.so.1.0.0","\n","libssl.so.1.0.0","\n","libxml2.so.2","\n","libstdc++.so.6","\n","libm.so.6","\n","libgcc_s.so.1","\n","libpthread.so.0","\n","libc.so.6","\n","libdl.so.2","\n","libz.so.1","\n","liblzma.so.5","\n","/lib64/ld-linux-x86-64.so.2","\n"," ","\n","Zur Installation des Cloud Connectors müssen die Bibliotheken, \n die nicht auf dem System ohnehin schon vorhanden sind, inkl. dem Cloud \n Connector Binary, in ein eigenes Verzeichnis kopiert werden (z.B. legato/bin) \n und die Ausführungsrechte gesetzt werden.","\n","Der Bibliothekspfad muss das o. g. Installationsverzeichnis \n enthalten.","\n\n\n"]],"2":[["Sapient Cloud Connector"]],"3":[["Installation \n auf einem Windows PC"],["Installation \n für UNIX"]],"6":[["Systemvoraussetzungen"],["Nur \n Classic: Zusätzlich"],["Installation Sapient \n Cloud Connector"],["Installation \n OPC-Server GOPS"],["Systemvoraussetzungen"],["Bibliotheken \n / Libraries"]],"7":[["Betriebssysteme"],["Linux 64 Bit"]],"id":"4"})