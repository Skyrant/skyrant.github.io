rh._.exports({"0":[["KPI Versand"]],"1":[["\n  "],["\n  "],["\n  ","Sendet KPI-Mailings an abonnierte Empfänger.","\n     ","\n  "],["\n  ","\n    ","\n      ","\n        ","\n          ","Symbol:","\n        ","\n      ","\n      ","\n        ","\n          ","Name:","\n        ","\n        ","\n          ","n/a","\n        ","\n      ","\n      ","\n        ","\n          ","Modul:","\n        ","\n        ","\n          ","n/a","\n        ","\n      ","\n      ","\n        ","\n          ","SE Instanz:","\n        ","\n        ","\n          "," Die Sapient Engine Instanz. ","\n        ","\n      ","\n      ","\n        ","\n          ","Scheduler:","\n        ","\n        ","\n          ","main","\n        ","\n      ","\n      ","\n        ","\n          ","Funktions-Pfad:","\n        ","\n        ","\n          ","/de/gefasoft/sapient/sapieng/jobs/kpimail/KpiMails/formatKpiMail","\n        ","\n      ","\n      ","\n        ","\n          ","Parameter (JSON):","\n        ","\n        ","{","\n              ","\"text\"",": ","\"Shift ending at ${SHIFT!1!END}: avtec=[!K:${NODE!ID}:1:avtec!],ftcon=[!K:${NODE!ID}:1:ftcon!],","\n            wtn=[!K:${NODE!ID}:1:wtn!], protobool [!P:${NODE!ID}:1:","var"," bool shift end!], curr [!V:online.sh DB","\n            Anlage[118].preal!], avtecL=[!KL:${NODE!ID}:1:avtec!], avtecU=[!KU:${NODE!ID}:1:avtec!], done!\"",",","\n              ","\"topic\"",": ","\"Testing ${TEMPLATE!SYM} / ${SCHEDULE!SYM}\"",",","\n              ","\"nodeId\"",": 118,","\n              ","\"useBCC\"",": true,","\n              ","\"langIndex\"",": 1,","\n              ","\"mailDebug\"",": true,","\n              ","\"contentType\"",": ","\"text/plain\"",",","\n              ","\"mailDefaultSession\"",": true","\n          }","\n      ","\n      ","\n        ","\n          ","Timeout (s) (optional):","\n        ","\n        ","\n          ","n/a","\n        ","\n      ","\n    ","\n  ","\n  "],["\n  ","n","odeId"," ","\n    (integer) ID des abzufragenden Anlagenknotens.","\n  ","langIndex","\n    (integer) Index in der Sapient-Installation der Sprache (Locale), in der sich der Mailingtext und die Themenvorlagen (siehe unten) befinden.","\n  ","contentType","\n    (string, default \"text/plain\") MIME-Inhaltstyp, der für die generierte E-Mail festgelegt wird. Muss gesetzt werden, wenn der Mail-Inhalt kein reiner Text ist, sondern ein anderes Format wie z.B. HTML.","\n  ","topic","\n    (text) Vorlage für das Thema der generierten Mails. Kann \"1st pass\"-Platzhalter enthalten, wie im Abschnitt \"Parametrisierung\" beschrieben.default \"text/plain\") MIME-Inhaltstyp, der für die generierte E-Mail festgelegt werden soll. Muss gesetzt werden, wenn der Mail-Inhalt kein reiner Text ist, sondern ein anderes Format wie z.B. HTML.","\n  ","text","\n    (text) Vorlage für den Inhalt der generierten Mails. Kann sowohl Platzhalter für den 1. als auch für den 2. \"Durchlauf\" enthalten, wie im Abschnitt \"Parametrisierung\" beschrieben.","\n  ","useBCC","\n    (true/false) Wenn ","true ","(Standardeinstellung), sendet der Auftrag eine E-Mail pro Auslöser und fügt alle Empfänger als BCC (\"blind carbon copy\") hinzu. Bei ","false ","sendet der Auftrag eine eigene Mail an jeden einzelnen Empfänger.","\n\n"]],"4":[["KPI Versand"]],"6":[["Beschreibung"],["Parametrierung"],["Bedeutung der Parameter"]],"id":"65"})