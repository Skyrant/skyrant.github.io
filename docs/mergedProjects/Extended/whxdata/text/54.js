rh._.exports({"0":[["Funkrufe mittels Polling abfragen"]],"1":[["\n"],["\n","Es wurde eine neue Java Datenquelle \"ds_m_sendlist\" \n implementiert, die die relevanten Informationen über einen Funkruf liefert, \n der an ein Paging-System weitergeleitet werden soll. Diese Datenquelle \n kann mit Hilfe der JSON-RPC Prozedur \"select\" abgefragt werden.","\n","Die Datenquelle liefert die folgenden Felder:","\n","m_id - \n M_ARCHIVE.ID","\n","m_alarm_id \n - M_ARCHIVE.ALARM_ID","\n","m_break_id \n - M_ARCHIVE.BREAK_ID","\n","m_manual \n - M_ARCHIVE.MANUAL","\n","m_messaging_state \n - M_ARCHIVE.MESSAGING_STATE (-1 oder -4, Zeilen mit anderen Werten werden \n herausgefiltert)","\n","m_node \n - M_ARCHIVE.NODE","\n","m_prod_group \n - M_ARCHIVE.PROD_GROUP","\n","m_shift_group \n - M_ARCHIVE.SHIFT_GROUP","\n","m_shift_id \n - M_ARCHIVE.SHIFT_ID","\n","m_text \n - M_ARCHIVE.TEXT","\n","m_time_end \n - M_ARCHIVE.TIME_END","\n","m_time_start \n - M_ARCHIVE.TIME_START","\n","r_rec_code \n - M_RECIPIENTS.REC_CODE","\n","r_server_addr \n - M_RECIPIENTS.SERVER_ADDR","\n","a_al_class \n - AL_ARCHIVE.AL_CLASS","\n","a_al_type \n - AL_ARCHIVE.AL_TYPE","\n","a_operand \n - AL_ARCHIVE.OPERAND","\n","a_symbol \n - AL_ARCHIVE.SYMBOL","\n","c_connection_symbol \n - P_CONNECTIONS.CONNECTION_SYMBOL","\n","c_name \n - P_CONNECTIONS.NAME","\n","n_description \n - L_NODES.DESCRIPTION","\n","n_name \n - L_NODES.NAME","\n","n_short_name \n - L_NODES.SHORT_NAME","\n","g_group_symbol \n - T_SHIFT_GROUPS.GROUP_SYMBOL","\n","p_name \n - T_PGROUPS.NAME","\n","s_shift_type \n - T_SHIFTS.SHIFT_TYPE","\n","b_break_type \n - T_BREAKS.BREAK_TYPE","\n","t_model_pattern_symbol \n - T_MODEL_PATTERN.MODEL_PATTERN_SYMBOL","\n"," ","\n","Clients können (und sollten) eine eingeschränkte Anzahl \n Felder für jeden Datensatz empfangen, indem sie eine Feldliste (\"fields\") \n mit ihrer Anfrage übergeben. Diese Datenquelle akzeptiert Strings mit \n einem oder mehreren Komma-getrennten Feldnamen oder einen Array solcher \n Strings als \"fields\"-Parameter.","\n","Die Datenquelle unterstützt Paginierung durch Verwendung \n der Parameter \"limit\" und \"offset\".","\n","Die aktuelle Implementierung hat folgende Einschränkungen:","\n","Filter \n auf M_RECIPIENTS.SERVER_ADDR wird nicht unterstützt","\n","Mehrsprachige \n Felder (wie Meldetext und die verschiedenen Namen und Beschreibungen) \n werden wie in allgemeinen Datenquellen behandelt, d.h., nur der Wert in \n der Sprachumgebung des Abfragenden wird zurückgegeben. Für Funkruf-Systeme, \n die Lokalisierung intern verarbeiten, müssen möglicherweise alle Übersetzungen \n übergeben werden.","\n\n\n"]],"4":[["Funkrufe mittels Polling abfragen"]],"id":"54"})