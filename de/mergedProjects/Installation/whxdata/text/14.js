rh._.exports({"0":[["Systemvoraussetzungen"]],"1":[["\n"],["\n","\n","\n","Falls noch nicht vorhanden, kann ODAC hier heruntergeladen \n werden:","\n","http://www.oracle.com/technetwork/topics/dotnet/utilsoft-086879.html","\n",":","\n","Bei der Installation von Oracle Server und \n OraClient (als Teil des ODAC) auf demselben Rechner unter Windows kommt \n es zu Problemen mit den Pfadangaben in den Umgebungsvariablen. Dort werden \n der Client- und der Serverpfad in der falschen Reihenfolge eingetragen, \n weshalb die benötigten Dateien zur Ausführung der Datenbank nicht gefunden \n werden. Gehen Sie folgendermaßen vor, um die Reihenfolge zu korrigieren: \n Unter Systemeigenschaften - System - Erweiterte Systemeinstellungen - \n Umgebungsvariablen - Path mit Doppelklick den Eintrag öffnen. Hier sind \n alle Pfadangaben als kommaseparierte Liste eingetragen. Am besten kopieren \n Sie den kompletten Eintrag in einen Editor. Dort kopieren Sie den Pfad \n des Oracle Servers von hinter dem Client-Pfad VOR den Clientpfad. Meist \n finden sich die beiden Pfadangaben ganz am Anfang, weil die zugehörigen \n Programme als letztes installiert wurden. Kopieren Sie nun den geänderten \n Eintrag wieder in die Umgebungsvariable und speichern Sie die Änderung.","\n","Zusätzlich werden diverse Komponenten benötigt. Diese \n werden vom Setup geprüft und, sofern möglich, mitinstalliert. Die im LC2 \n Setup mitgelieferten Pre-Installs sind:","\n","Microsoft .NET Framework 4.5.1 (je nach Betriebssystem \n 64- bzw. 32-Bit)","\n","Microsoft Visual C++ Runtime 8.0 (includes ATL \n and MFC) (32-Bit). Bei Programmen und Funktionen registriert sich diese \n Runtime als Microsoft Visual C++ 2005 Redistributable","\n","Microsoft Visual C++ Runtime 8.0 (includes ATL \n and MFC) (32-Bit) Service Pack 1. Bei Programmen und Funktionen registriert \n sich diese Runtime als eine weitere Microsoft Visual C++ 2005 Redistributable \n mit höherer Versionsnummer","\n","Microsoft Visual C++ Runtime 8.0 (includes ATL \n and MFC) (32-Bit) Service Pack 2. Bei Programmen und Funktionen registriert \n sich diese Runtime als eine weitere Microsoft Visual C++ 2005 Redistributable \n mit höherer Versionsnummer.","\n","Microsoft Windows Installer 3.0 (32-Bit)","\n","Microsoft Windows Installer 3.1 (32-Bit)","\n\n\n"]],"3":[["Systemvoraussetzungen"]],"id":"14"})