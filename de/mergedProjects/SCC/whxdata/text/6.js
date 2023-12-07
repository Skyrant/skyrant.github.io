rh._.exports({"0":[["Unterstützte SPS-Datentypen"]],"1":[["\n"],["\n"],["\n","Die folgende Liste mit den Simatic-Steuerungen ist \n beispielhaft. Die Datentypen von anderen Steuerungssystemen werden unterstützt, \n sofern diese einen der in der Liste aufgeführten Datentypen unterstützen. \n Ab SCC Version 3.1 werden Datentypen mit 32- und 64-Bit unterstützt. In \n den Versionen davor gibt es nur eine 32-Bit-Unterstützung. Erfolgt die \n Kommunikation zwischen SCC und Nicht-Siemens-Steuerung über OPC-DA, so \n muss sichergestellt sein, dass die Datentypen dem OPC-DA-Standard entsprechen. \n Im Zweifelsfalle müssen bei Nicht-Siemens-Steuerungen je Datentyp entsprechende \n Tests erfolgen. Komplexe Datentypen wie z.B. Strukturen, Arrays oder Ähnliches \n werden grundsätzlich nicht unterstützt. Die Unterstützung von 64-Bit-Datentypen \n bei Simatic-Steuerungen ist für die nähere Zukunft geplant.","\n"],["\n","\n\t","\n\t","\n\t","\n\t","\n\t","\n\t","\n\t","\n\t","\n\t","\n\t\t","Datentyp","\n\t\t","Datenart","\n\t\t","Bitanzahl","\n\t\t","S7-300","\n\t\t","S7-400","\n\t\t","S7-1200","\n\t\t","S7-1500","\n\t\t","Sapient \n\t\t Cloud Connector","\n\t","\n\t","\n\t\t","BOOL","\n\t\t","Binärzahl","\n\t\t","1 \n\t\t (8)","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","ja","\n\t","\n\t","\n\t\t","BYTE","\n\t\t","Binärzahl","\n\t\t","8","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","ja","\n\t","\n\t","\n\t\t","WORD","\n\t\t","Binärzahl","\n\t\t","16","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","ja","\n\t","\n\t","\n\t\t","DWORD","\n\t\t","Binärzahl","\n\t\t","32","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","ja","\n\t","\n\t","\n\t\t","LWORD","\n\t\t","Binärzahl","\n\t\t","64","\n\t\t"," ","\n\t\t"," ","\n\t\t"," ","\n\t\t","x","\n\t\t","ja","\n\t","\n\t","\n\t\t","SINT","\n\t\t","Ganzzahl","\n\t\t","8","\n\t\t"," ","\n\t\t"," ","\n\t\t","x","\n\t\t","x","\n\t\t","ja","\n\t","\n\t","\n\t\t","INT","\n\t\t","Ganzzahl","\n\t\t","16","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","ja","\n\t","\n\t","\n\t\t","DINT","\n\t\t","Ganzzahl","\n\t\t","32","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","ja","\n\t","\n\t","\n\t\t","USINT","\n\t\t","Ganzzahl","\n\t\t","8","\n\t\t"," ","\n\t\t"," ","\n\t\t","x","\n\t\t","x","\n\t\t","ja","\n\t","\n\t","\n\t\t","UINT","\n\t\t","Ganzzahl","\n\t\t","16","\n\t\t"," ","\n\t\t"," ","\n\t\t","x","\n\t\t","x","\n\t\t","ja","\n\t","\n\t","\n\t\t","LINT","\n\t\t","Ganzzahl","\n\t\t","64","\n\t\t"," ","\n\t\t"," ","\n\t\t"," ","\n\t\t","x","\n\t\t","ja","\n\t","\n\t","\n\t\t","ULINT","\n\t\t","Ganzzahl","\n\t\t","64","\n\t\t"," ","\n\t\t"," ","\n\t\t"," ","\n\t\t","x","\n\t\t","ja","\n\t","\n\t","\n\t\t","REAL","\n\t\t","Fließkomma","\n\t\t","32","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","ja","\n\t","\n\t","\n\t\t","LREAL","\n\t\t","Fließkomma","\n\t\t","64","\n\t\t"," ","\n\t\t"," ","\n\t\t","x","\n\t\t","x","\n\t\t","ja","\n\t","\n\t","\n\t\t","S5TIME","\n\t\t","Zeitformat","\n\t\t","16","\n\t\t","x","\n\t\t","x","\n\t\t"," ","\n\t\t","x","\n\t\t","nein","\n\t","\n\t","\n\t\t","TIME","\n\t\t","Zeitformat","\n\t\t","32","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","nein","\n\t","\n\t","\n\t\t","LTIME","\n\t\t","Zeitformat","\n\t\t","64","\n\t\t"," ","\n\t\t"," ","\n\t\t"," ","\n\t\t","x","\n\t\t","nein","\n\t","\n\t","\n\t\t","CHAR","\n\t\t","Zeichenkette","\n\t\t","8","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","ja","\n\t","\n\t","\n\t\t","WCHAR","\n\t\t","Zeichenkette","\n\t\t","16","\n\t\t"," ","\n\t\t"," ","\n\t\t","x","\n\t\t","x","\n\t\t","ja","\n\t","\n\t","\n\t\t","STRING","\n\t\t","Zeichenkette","\n\t\t","n+2 \n\t\t Byte","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","ja","\n\t","\n\t","\n\t\t","WSTRING","\n\t\t","Zeichenkette","\n\t\t","n+2 \n\t\t Word","\n\t\t"," ","\n\t\t"," ","\n\t\t","x","\n\t\t","x","\n\t\t","ja","\n\t","\n\t","\n\t\t","DATE","\n\t\t","Datum/Uhrzeit","\n\t\t","16","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","nein","\n\t","\n\t","\n\t\t","TOD","\n\t\t","Datum/Uhrzeit","\n\t\t","32","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","nein","\n\t","\n\t","\n\t\t","LTOD","\n\t\t","Datum/Uhrzeit","\n\t\t","64","\n\t\t"," ","\n\t\t"," ","\n\t\t"," ","\n\t\t","x","\n\t\t","nein","\n\t","\n\t","\n\t\t","DT","\n\t\t","Datum/Uhrzeit","\n\t\t","64","\n\t\t","x","\n\t\t","x","\n\t\t"," ","\n\t\t","x","\n\t\t","nein","\n\t","\n\t","\n\t\t","LDT","\n\t\t","Datum/Uhrzeit","\n\t\t","64","\n\t\t"," ","\n\t\t"," ","\n\t\t"," ","\n\t\t","x","\n\t\t","nein","\n\t","\n\t","\n\t\t","DTL","\n\t\t","Datum/Uhrzeit","\n\t\t","96","\n\t\t"," ","\n\t\t"," ","\n\t\t","x","\n\t\t","x","\n\t\t","nein","\n\t","\n\t","\n\t\t","POINTER","\n\t\t","Zeiger","\n\t\t","48","\n\t\t","x","\n\t\t","x","\n\t\t"," ","\n\t\t","x","\n\t\t","nein","\n\t","\n\t","\n\t\t","ANY","\n\t\t","Zeiger","\n\t\t","80","\n\t\t","x","\n\t\t","x","\n\t\t"," ","\n\t\t","x","\n\t\t","nein","\n\t","\n\t","\n\t\t","VARIANT","\n\t\t","Zeiger","\n\t\t","0","\n\t\t"," ","\n\t\t"," ","\n\t\t","x","\n\t\t","x","\n\t\t","nein","\n\t","\n\t","\n\t\t","ARRAY","\n\t\t","Array","\n\t\t","n \n\t\t Byte","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","x","\n\t\t","nein","\n\t","\n\t","\n\t\t"," ","\n\t\t"," ","\n\t\t"," ","\n\t\t"," ","\n\t\t"," ","\n\t\t"," ","\n\t\t"," ","\n\t\t"," ","\n\t","\n","\n"," ","\n\n\n"]],"2":[["Allgemein"],["Unterstützte \n Datentypen bei Siemens Simatic S7-Steuerungen"]],"3":[["Unterstützte SPS-Datentypen"]],"id":"6"})