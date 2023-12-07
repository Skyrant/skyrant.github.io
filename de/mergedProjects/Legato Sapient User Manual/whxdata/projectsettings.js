// Publish project specific data
(function() {
rh = window.rh;
model = rh.model;
var defaultTopic = "de/Welcome.htm";
rh._.exports(defaultTopic);
rh.consts('DEFAULT_TOPIC', encodeURI("de/Welcome.htm"));
rh.consts('HOME_FILEPATH', encodeURI('index.htm'));
rh.consts('START_FILEPATH', encodeURI('index.htm'));
rh.consts('HELP_ID', '312d8a51-55d1-4b3f-9399-200681848c09' || 'preview');
rh.consts('LNG_SUBSTR_SEARCH', 0);

model.publish(rh.consts('KEY_LNG_NAME'), "de");
model.publish(rh.consts('KEY_DIR'), "ltr");
model.publish(rh.consts('KEY_LNG'), {"SyncToc":"SyncToc","Show":"Anzeigen","Next":">>","Hide":"Ausblenden","Search":"Suchen","Contents":"Inhalt","Logo/Author":"Bereitgestellt von","Disabled Next":">>","Seperate":"|","Index":"Index","Glossary":"Glossar","Disabled Prev":"<<","OpenLinkInNewTab":"In neuer Registerkarte öffnen","Prev":"<<","Separator":"|","SearchOptions":"Suchoptionen","Loading":"Ladevorgang läuft...","UnknownError":"Unbekannter Fehler","Logo":"Logo","HomeButton":"Pos1","SearchPageTitle":"Suchergebnisse","PreviousLabel":"Zurück","NextLabel":"Weiter","TopicsNotFound":"Keine Themen vorhanden.","JS_alert_LoadXmlFailed":"Fehler: XML-Datei konnte nicht geladen werden.","JS_alert_InitDatabaseFailed":"Fehler: Datenbank konnte nicht initalisiert werden.","JS_alert_InvalidExpression_1":"Die von Ihnen eingegebenen Wörter stellen keinen gültigen Ausdruck dar.","Searching":"Suche läuft...","Cancel":"Abbrechen","Canceled":"Abgebrochen","ResultsFoundText":"%1 Ergebnis(se) für %2 gefunden","SearchResultsPerScreen":"Suchergebnisse pro Seite","Back":"Zurück","TableOfContents":"Inhaltsverzeichnis","IndexFilterKewords":"Schlüsselwort suchen","GlossaryFilterTerms":"Begriff suchen","ShowAll":"Alle einblenden","HideAll":"Alle ausblenden","ShowHide":"Ein-/Ausblenden","IeCompatibilityErrorMsg":"Diese Seite kann in Internet Explorer 8 oder früheren Versionen nicht angezeigt werden..","NoScriptErrorMsg":"Zum Anzeigen dieser Seite JavaScript-Support im Browser aktivieren.","EnableAndSearch":"Ergebnisse mit allen Suchbegriffen anzeigen","HighlightSearchResults":"Suchergebnisse hervorheben","Print":"Drucken","Filter":"Filter","SearchTitle":"Suche","ContentFilterChanged":"Inhaltsfilter wurde geändert. Noch einmal suchen","EndOfResults":"Ende der Suchergebnisse.","Reset":"Zurücksetzen","NavTip":"Menü","ToTopTip":"Nach oben","ApplyTip":"Anwenden","SidebarToggleTip":"Einblenden/Ausblenden","Copyright":"© Copyright 2019. All rights reserved.","FavoriteBoxTitle":"Favoriten","setAsFavorites":"Zu Favoriten hinzufügen","unsetAsFavorite":"Festlegung als Favorit aufheben","favoritesNameLabel":"Name","favoritesLabel":"Favoriten","setAsFavorite":"Als Favoriten festlegen","nofavoritesFound":"Sie haben kein Thema als Favoriten festgelegt.","Welcome_header":"Willkommen in unserem Hilfe-Center","Welcome_text":"Womit können wir Ihnen heute helfen?","SearchButtonTitle":"Suchen nach...","ShowTopicInContext":"Hier klicken, um die Seite im Kontext zu sehen","TopicHiddenText":"Dieses Thema wird von den ausgewählten Filtern ausgeblendet.","NoTermsFound":"Keine Begriffe gefunden","NoKeywordFound":"Kein Stichwort gefunden","SkipToMainContent":"Überspringen zu Hauptinhalt"});

model.publish(rh.consts('KEY_HEADER_TITLE'), "Legato Sapient User Manual");
model.publish(rh.consts('PDF_FILE_NAME'), "");
model.publish(rh.consts('MAX_SEARCH_RESULTS'), "20");
model.publish(rh.consts('KEY_SKIN_FOLDER_NAME'), "Charcoal_Grey_adj");
model.publish(rh.consts('CHAT_API_SESSION_TOKEN'), "");
model.publish(rh.consts('CHAT_API_PROJ_ID'), "");

model.publish(rh.consts('KEY_SUBSTR_SEARCH'), "");
})();
