rh._.exports({"0":[["Funktionen mit indirekten Scriptaufrufen"]],"1":[["\n"],["\n"],["\n","\n","Deklaration: CompBitArray(block a, block b, long \n size,","\n                          script \n x(long byteoffset, long bitoffset,","\n                                   bool \n bitval))","\n","Block ","a"," wird mit Block ","b"," bitweise verglichen. \n Wird ein Unterschied festgestellt, wird das Script ","x"," aufgerufen. \n Die Parameter des Scripts ","x"," werden mit den Werten für den Byteoffset \n und den Bitoffset des Bits sowie dem Zustand ","bitval"," des Bits im \n Block a versorgt. Nach dem Aufruf von Script ","x"," wird das Bit im \n Block ","b"," auf den Zustand des Bits im Block ","a"," gesetzt. Array \n beginnt bei der Adressierung mit 0, d.h., Array[0] ist das erste Feld.","\n","Das aufgerufene Script ","x"," muss mit der festgelegten \n Parameterreihenfolge \"byteoffset\", \"bitoffset\" und \n \"bitvalue\" vorhanden sein. Die Parameter des Scripts ","x"," \n werden automatisch versorgt und müssen beim Aufruf über \"CompBitArray\" \n nicht angegeben werden. Das Script ","x"," darf keine weiteren Parameter \n haben.","\n","Beispiel",":","\n","block    a, b","\n","a := OPC.GOPS.PLC1.Alarmblock","\n","b := newblock(128)","\n","CompBitArray(a,b,128,script.CompBit)","\n"," ","\n"],["\n","\n","Deklaration: ScanBitArray(block b, long size, bool \n scanval,","\n                          script \n x(long byteoffset, long bitoffset,","\n                                   bool \n scanval))","\n","Block ","b"," wird bitweise auf den Zustand von ","scanval"," \n verglichen. Wird ein Bit gefunden, welches den gleichen Zustand wie ","scanval"," \n hat, wird das Script ","x"," aufgerufen. Die Parameter des Scripts ","x"," \n werden mit den Werten für den ","Byteoffset"," und den ","Bitoffset"," \n des Bits sowie dem Zustand des Bits versorgt. Array beginnt bei der Adressierung \n mit 0, d.h., Array[0] ist das erste Feld.","\n","Das aufgerufene Script ","x"," muss mit der festgelegten \n Parameterreihenfolge ","byteoffset",", ","bitoffset"," und ","scanval"," \n vorhanden sein. Die Parameter des Scripts ","x"," werden automatisch \n versorgt und müssen beim Aufruf über \"ScanBitArray\" nicht angegeben \n werden. Das Script ","x"," darf keine weiteren Parameter haben.","\n","Beispiel",":","\n","block    b","\n","bool     scanval","\n","b := OPC.GOPS.PLC1.Alarmblock","\n","scanval := true","\n","ScanBitArray(b, 128, scanval, Script.scanbit)","\n"," ","\n"],["\n","\n","Deklaration: ScanDir(string dir, script x(block \n b))","\n","Der Suchpfad ","dir"," wird durchsucht. Bei Finden \n einer Datei wird das Script ","x"," aufgerufen. Der Parameter des Scripts \n ","x"," wird mit der Dateiinformation versorgt. Die Dateiinformation \n wird in einer Struktur wie folgt abgelegt:","\n","struct fi","\n","begin","\n","  dword    dwFileAttributes","\n","  dword    ftCreationTimeHigh, \n ftCreationTimeLow","\n","  dword    ftLastAccessTimeHigh","\n","  dword    ftLastAccessTimeLow","\n","  dword    ftLastWriteTimeHigh","\n","  dword    ftLastWriteTimeLow","\n","  dword    nFileSizeHigh","\n","  dword    nFileSizeLow","\n","  dword    dwReserved0","\n","  dword    dwReserved1","\n","  byte     cFileName[260]","\n","  byte     cAlternateFileName[14]","\n","end","\n","Beispiel",":","\n","ScanDir('c:\\\\*.tmp', script.FileFound)","\n"," ","\n"],["\n","\n","Deklaration: ScanNode(string node, script x(string \n name, string fullname))","\n","Der Knoten ","node"," wird nach seinen Unterknoten \n durchsucht. Bei Finden eines Knotens wird das Script ","x"," aufgerufen. \n Die Parameter des Scripts ","x"," werden mit dem Namen des Unterknotens \n und dem gesamten Pfad des Unterknotens versorgt.","\n","Beispiel",":","\n","ScanNode('OPC.GOPS', script.NodeFound)","\n"," ","\n"],["\n","\n","Deklaration: ScanNodeRec(string node, script x(string \n name, string fullname), integer level)","\n","Der Knoten ","node"," und seine Unterknoten bis zum \n angegebenen ","Level"," werden nach \n seinen Unterknoten durchsucht. Bei Finden eines Knotens wird das Script \n ","x"," aufgerufen. Die Parameter des Scripts ","x"," werden mit dem \n Namen des Unterknotens und dem gesamten Pfad des Unterknotens versorgt.","\n","Beispiel",":","\n","ScanNodeRec('OPC.GOPS', script.NodeFound, 2)","\n"," ","\n\n\n"]],"2":[["Funktionen mit indirekten Scriptaufrufen"]],"4":[["CompBitArray"],["ScanBitArray"],["ScanDir"],["ScanNode"],["ScanNodeRec"]],"id":"36"})