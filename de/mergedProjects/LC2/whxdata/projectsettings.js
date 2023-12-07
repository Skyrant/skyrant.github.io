// Publish project specific data
(function() {
rh = window.rh;
model = rh.model;
var defaultTopic = "First Topic.htm";
rh._.exports(defaultTopic);
rh.consts('DEFAULT_TOPIC', encodeURI("First Topic.htm"));
rh.consts('HOME_FILEPATH', encodeURI('index.htm'));
rh.consts('START_FILEPATH', encodeURI('index.htm'));
rh.consts('HELP_ID', '8585c105-09d4-4735-8e8c-de59304c11f4' || 'preview');
rh.consts('LNG_SUBSTR_SEARCH', 0);

model.publish(rh.consts('KEY_LNG_NAME'), "de");
model.publish(rh.consts('KEY_DIR'), "ltr");
model.publish(rh.consts('KEY_LNG'), {"Contents":"Inhalt","Index":"Index","Search":"Suchen","Glossary":"Glossar","Logo/Author":"Bereitgestellt von","Show":"Anzeigen","Hide":"Ausblenden","SyncToc":"SyncToc","Prev":"Zurück","Next":"Weiter","Disabled Prev":"<<","Disabled Next":">>","Separator":"|","OpenLinkInNewTab":"In neuer Registerkarte öffnen","SearchOptions":"Suchoptionen","Loading":"Ladevorgang läuft...","UnknownError":"Unbekannter Fehler","Logo":"Logo","HomeButton":"Startseite","SearchPageTitle":"Suchergebnisse","PreviousLabel":"Zurück","NextLabel":"Weiter","TopicsNotFound":"Keine Ergebnisse gefunden","JS_alert_LoadXmlFailed":"XML-Datei nicht geladen","JS_alert_InitDatabaseFailed":"Datenbank konnte nicht initialisiert werden","JS_alert_InvalidExpression_1":"Der von Ihnen eingegebene Suchstring ist ungültig.","Searching":"Suche wird ausgeführt...","Cancel":"Abbrechen","Canceled":"Abgebrochen","ResultsFoundText":"%1 Ergebnis(se) gefunden für %2","SearchResultsPerScreen":"Suchergebnisse pro Seite","Back":"Zurück","TableOfContents":"Inhaltsverzeichnis","IndexFilterKewords":"Schlüsselwörter filtern","GlossaryFilterTerms":"Begriffe filtern","ShowAll":"Alle","HideAll":"Alles ausblenden","ShowHide":"Ein-/Ausblenden","IeCompatibilityErrorMsg":"Diese Seite kann nicht in Internet Explorer 8 oder einer früheren Version angezeigt werden.","NoScriptErrorMsg":"JavaScript-Support im Browser aktivieren, um diese Seite anzuzeigen.","EnableAndSearch":"Alle Wörter in Suche einbeziehen","HighlightSearchResults":"Suchergebnisse markieren","Print":"Drucken","Filter":"Filter","SearchTitle":"Suchen","ContentFilterChanged":"Inhaltsfilter wurde geändert. Noch einmal suchen","EndOfResults":"Ende der Suchergebnisse.","Reset":"Zurücksetzen","NavTip":"Schließen","ToTopTip":"Nach oben","ApplyTip":"Anwenden","SidebarToggleTip":"Einblenden/Ausblenden","Copyright":"© Copyright 2019. All rights reserved.","FavoriteBoxTitle":"Favoriten","setAsFavorites":"Zu Favoriten hinzufügen","unsetAsFavorite":"Festlegung als Favorit aufheben","favoritesNameLabel":"Name","favoritesLabel":"Favoriten","setAsFavorite":"Als Favoriten festlegen","nofavoritesFound":"Sie haben kein Thema als Favoriten festgelegt.","Welcome_header":"Willkommen in unserem Hilfe-Center","Welcome_text":"Womit können wir Ihnen heute helfen?","SearchButtonTitle":"Suchen nach...","ShowTopicInContext":"Klicken Sie hier, um diese Seite mit vollem Kontext anzuzeigen.","TopicHiddenText":"Dieses Thema wird von den ausgewählten Filtern ausgeblendet.","NoTermsFound":"Keine Begriffe gefunden","NoKeywordFound":"Kein Stichwort gefunden","SkipToMainContent":"Überspringen zu Hauptinhalt"});

model.publish(rh.consts('KEY_HEADER_TITLE'), "Legato Configuration Center (LC2)");
model.publish(rh.consts('PDF_FILE_NAME'), "");
model.publish(rh.consts('MAX_SEARCH_RESULTS'), "20");
model.publish(rh.consts('KEY_SKIN_FOLDER_NAME'), "Charcoal_Grey");
model.publish(rh.consts('CHAT_API_SESSION_TOKEN'), "");
model.publish(rh.consts('CHAT_API_PROJ_ID'), "");

model.publish(rh.consts('KEY_SUBSTR_SEARCH'), "");
})();
