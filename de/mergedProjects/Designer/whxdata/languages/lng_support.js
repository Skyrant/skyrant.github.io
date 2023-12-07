(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*!
 * Lunr languages, `German` language
 * https://github.com/MihaiValentin/lunr-languages
 *
 * Copyright 2014, Mihai Valentin
 * http://www.mozilla.org/MPL/
 */
/*!
 * based on
 * Snowball JavaScript Library v0.3
 * http://code.google.com/p/urim/
 * http://snowball.tartarus.org/
 *
 * Copyright 2010, Oleg Mazko
 * http://www.mozilla.org/MPL/
 */

/**
 * export the module via AMD, CommonJS or as a browser global
 * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
 */
;
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(factory)
  } else if (typeof exports === 'object') {
    /**
     * Node. Does not work with strict CommonJS, but
     * only CommonJS-like environments that support module.exports,
     * like Node.
     */
    module.exports = factory()
  } else {
    // Browser globals (root is window)
    factory()(root.lunr);
  }
}(this, function() {
  /**
   * Just return a value to define the module export.
   * This example returns an object, but the module
   * can return a function as the exported value.
   */
  return function(lunr) {
    /* throw error if lunr is not yet included */
    if ('undefined' === typeof lunr) {
      throw new Error('Lunr is not present. Please include / require Lunr before this script.');
    }

    /* throw error if lunr stemmer support is not yet included */
    if ('undefined' === typeof lunr.stemmerSupport) {
      throw new Error('Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.');
    }

    /* register specific locale function */
    lunr.de = function() {
      this.pipeline.reset();
      this.pipeline.add(
        lunr.de.trimmer,
        lunr.de.stopWordFilter,
        lunr.de.stemmer
      );

      // for lunr version 2
      // this is necessary so that every searched word is also stemmed before
      // in lunr <= 1 this is not needed, as it is done using the normal pipeline
      if (this.searchPipeline) {
        this.searchPipeline.reset();
        this.searchPipeline.add(lunr.de.stemmer)
      }
    };

    /* lunr trimmer function */
    lunr.de.wordCharacters = "A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A";
    lunr.de.trimmer = lunr.trimmerSupport.generateTrimmer(lunr.de.wordCharacters);

    lunr.Pipeline.registerFunction(lunr.de.trimmer, 'trimmer-de');

    /* lunr stemmer function */
    lunr.de.stemmer = (function() {
      /* create the wrapped stemmer object */
      var Among = lunr.stemmerSupport.Among,
        SnowballProgram = lunr.stemmerSupport.SnowballProgram,
        st = new function GermanStemmer() {
          var a_0 = [new Among("", -1, 6), new Among("U", 0, 2),
              new Among("Y", 0, 1), new Among("\u00E4", 0, 3),
              new Among("\u00F6", 0, 4), new Among("\u00FC", 0, 5)
            ],
            a_1 = [
              new Among("e", -1, 2), new Among("em", -1, 1),
              new Among("en", -1, 2), new Among("ern", -1, 1),
              new Among("er", -1, 1), new Among("s", -1, 3),
              new Among("es", 5, 2)
            ],
            a_2 = [new Among("en", -1, 1),
              new Among("er", -1, 1), new Among("st", -1, 2),
              new Among("est", 2, 1)
            ],
            a_3 = [new Among("ig", -1, 1),
              new Among("lich", -1, 1)
            ],
            a_4 = [new Among("end", -1, 1),
              new Among("ig", -1, 2), new Among("ung", -1, 1),
              new Among("lich", -1, 3), new Among("isch", -1, 2),
              new Among("ik", -1, 2), new Among("heit", -1, 3),
              new Among("keit", -1, 4)
            ],
            g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 8, 0, 32, 8
            ],
            g_s_ending = [117, 30, 5],
            g_st_ending = [
              117, 30, 4
            ],
            I_x, I_p2, I_p1, sbp = new SnowballProgram();
          this.setCurrent = function(word) {
            sbp.setCurrent(word);
          };
          this.getCurrent = function() {
            return sbp.getCurrent();
          };

          function habr1(c1, c2, v_1) {
            if (sbp.eq_s(1, c1)) {
              sbp.ket = sbp.cursor;
              if (sbp.in_grouping(g_v, 97, 252)) {
                sbp.slice_from(c2);
                sbp.cursor = v_1;
                return true;
              }
            }
            return false;
          }

          function r_prelude() {
            var v_1 = sbp.cursor,
              v_2, v_3, v_4, v_5;
            while (true) {
              v_2 = sbp.cursor;
              sbp.bra = v_2;
              if (sbp.eq_s(1, "\u00DF")) {
                sbp.ket = sbp.cursor;
                sbp.slice_from("ss");
              } else {
                if (v_2 >= sbp.limit)
                  break;
                sbp.cursor = v_2 + 1;
              }
            }
            sbp.cursor = v_1;
            while (true) {
              v_3 = sbp.cursor;
              while (true) {
                v_4 = sbp.cursor;
                if (sbp.in_grouping(g_v, 97, 252)) {
                  v_5 = sbp.cursor;
                  sbp.bra = v_5;
                  if (habr1("u", "U", v_4))
                    break;
                  sbp.cursor = v_5;
                  if (habr1("y", "Y", v_4))
                    break;
                }
                if (v_4 >= sbp.limit) {
                  sbp.cursor = v_3;
                  return;
                }
                sbp.cursor = v_4 + 1;
              }
            }
          }

          function habr2() {
            while (!sbp.in_grouping(g_v, 97, 252)) {
              if (sbp.cursor >= sbp.limit)
                return true;
              sbp.cursor++;
            }
            while (!sbp.out_grouping(g_v, 97, 252)) {
              if (sbp.cursor >= sbp.limit)
                return true;
              sbp.cursor++;
            }
            return false;
          }

          function r_mark_regions() {
            I_p1 = sbp.limit;
            I_p2 = I_p1;
            var c = sbp.cursor + 3;
            if (0 <= c && c <= sbp.limit) {
              I_x = c;
              if (!habr2()) {
                I_p1 = sbp.cursor;
                if (I_p1 < I_x)
                  I_p1 = I_x;
                if (!habr2())
                  I_p2 = sbp.cursor;
              }
            }
          }

          function r_postlude() {
            var among_var, v_1;
            while (true) {
              v_1 = sbp.cursor;
              sbp.bra = v_1;
              among_var = sbp.find_among(a_0, 6);
              if (!among_var)
                return;
              sbp.ket = sbp.cursor;
              switch (among_var) {
                case 1:
                  sbp.slice_from("y");
                  break;
                case 2:
                case 5:
                  sbp.slice_from("u");
                  break;
                case 3:
                  sbp.slice_from("a");
                  break;
                case 4:
                  sbp.slice_from("o");
                  break;
                case 6:
                  if (sbp.cursor >= sbp.limit)
                    return;
                  sbp.cursor++;
                  break;
              }
            }
          }

          function r_R1() {
            return I_p1 <= sbp.cursor;
          }

          function r_R2() {
            return I_p2 <= sbp.cursor;
          }

          function r_standard_suffix() {
            var among_var, v_1 = sbp.limit - sbp.cursor,
              v_2, v_3, v_4;
            sbp.ket = sbp.cursor;
            among_var = sbp.find_among_b(a_1, 7);
            if (among_var) {
              sbp.bra = sbp.cursor;
              if (r_R1()) {
                switch (among_var) {
                  case 1:
                    sbp.slice_del();
                    break;
                  case 2:
                    sbp.slice_del();
                    sbp.ket = sbp.cursor;
                    if (sbp.eq_s_b(1, "s")) {
                      sbp.bra = sbp.cursor;
                      if (sbp.eq_s_b(3, "nis"))
                        sbp.slice_del();
                    }
                    break;
                  case 3:
                    if (sbp.in_grouping_b(g_s_ending, 98, 116))
                      sbp.slice_del();
                    break;
                }
              }
            }
            sbp.cursor = sbp.limit - v_1;
            sbp.ket = sbp.cursor;
            among_var = sbp.find_among_b(a_2, 4);
            if (among_var) {
              sbp.bra = sbp.cursor;
              if (r_R1()) {
                switch (among_var) {
                  case 1:
                    sbp.slice_del();
                    break;
                  case 2:
                    if (sbp.in_grouping_b(g_st_ending, 98, 116)) {
                      var c = sbp.cursor - 3;
                      if (sbp.limit_backward <= c && c <= sbp.limit) {
                        sbp.cursor = c;
                        sbp.slice_del();
                      }
                    }
                    break;
                }
              }
            }
            sbp.cursor = sbp.limit - v_1;
            sbp.ket = sbp.cursor;
            among_var = sbp.find_among_b(a_4, 8);
            if (among_var) {
              sbp.bra = sbp.cursor;
              if (r_R2()) {
                switch (among_var) {
                  case 1:
                    sbp.slice_del();
                    sbp.ket = sbp.cursor;
                    if (sbp.eq_s_b(2, "ig")) {
                      sbp.bra = sbp.cursor;
                      v_2 = sbp.limit - sbp.cursor;
                      if (!sbp.eq_s_b(1, "e")) {
                        sbp.cursor = sbp.limit - v_2;
                        if (r_R2())
                          sbp.slice_del();
                      }
                    }
                    break;
                  case 2:
                    v_3 = sbp.limit - sbp.cursor;
                    if (!sbp.eq_s_b(1, "e")) {
                      sbp.cursor = sbp.limit - v_3;
                      sbp.slice_del();
                    }
                    break;
                  case 3:
                    sbp.slice_del();
                    sbp.ket = sbp.cursor;
                    v_4 = sbp.limit - sbp.cursor;
                    if (!sbp.eq_s_b(2, "er")) {
                      sbp.cursor = sbp.limit - v_4;
                      if (!sbp.eq_s_b(2, "en"))
                        break;
                    }
                    sbp.bra = sbp.cursor;
                    if (r_R1())
                      sbp.slice_del();
                    break;
                  case 4:
                    sbp.slice_del();
                    sbp.ket = sbp.cursor;
                    among_var = sbp.find_among_b(a_3, 2);
                    if (among_var) {
                      sbp.bra = sbp.cursor;
                      if (r_R2() && among_var == 1)
                        sbp.slice_del();
                    }
                    break;
                }
              }
            }
          }
          this.stem = function() {
            var v_1 = sbp.cursor;
            r_prelude();
            sbp.cursor = v_1;
            r_mark_regions();
            sbp.limit_backward = v_1;
            sbp.cursor = sbp.limit;
            r_standard_suffix();
            sbp.cursor = sbp.limit_backward;
            r_postlude();
            return true;
          }
        };

      /* and return a function that stems a word for the current locale */
      return function(token) {
        // for lunr version 2
        if (typeof token.update === "function") {
          return token.update(function(word) {
            st.setCurrent(word);
            st.stem();
            return st.getCurrent();
          })
        } else { // for lunr version <= 1
          st.setCurrent(token);
          st.stem();
          return st.getCurrent();
        }
      }
    })();

    lunr.Pipeline.registerFunction(lunr.de.stemmer, 'stemmer-de');

    lunr.de.stopWordFilter = lunr.generateStopWordFilter('aber alle allem allen aller alles als also am an ander andere anderem anderen anderer anderes anderm andern anderr anders auch auf aus bei bin bis bist da damit dann das dasselbe dazu daß dein deine deinem deinen deiner deines dem demselben den denn denselben der derer derselbe derselben des desselben dessen dich die dies diese dieselbe dieselben diesem diesen dieser dieses dir doch dort du durch ein eine einem einen einer eines einig einige einigem einigen einiger einiges einmal er es etwas euch euer eure eurem euren eurer eures für gegen gewesen hab habe haben hat hatte hatten hier hin hinter ich ihm ihn ihnen ihr ihre ihrem ihren ihrer ihres im in indem ins ist jede jedem jeden jeder jedes jene jenem jenen jener jenes jetzt kann kein keine keinem keinen keiner keines können könnte machen man manche manchem manchen mancher manches mein meine meinem meinen meiner meines mich mir mit muss musste nach nicht nichts noch nun nur ob oder ohne sehr sein seine seinem seinen seiner seines selbst sich sie sind so solche solchem solchen solcher solches soll sollte sondern sonst um und uns unse unsem unsen unser unses unter viel vom von vor war waren warst was weg weil weiter welche welchem welchen welcher welches wenn werde werden wie wieder will wir wird wirst wo wollen wollte während würde würden zu zum zur zwar zwischen über'.split(' '));

    lunr.Pipeline.registerFunction(lunr.de.stopWordFilter, 'stopWordFilter-de');
  };
}))
},{}],2:[function(require,module,exports){
(function (global){
'use strict';

var rh = global.rh;
var lunrlang = require('../../node_modules/lunr-languages/lunr.de');
rh._.exports(lunrlang);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../node_modules/lunr-languages/lunr.de":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbHVuci1sYW5ndWFnZXMvbHVuci5kZS5qcyIsInNyYy9sYW5ndWFnZXMvZGUuanM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQy9YQSxJQUFJLEtBQUssT0FBTyxFQUFoQjtBQUNBLElBQUksV0FBVyxRQUFRLDJDQUFSLENBQWY7QUFDQSxHQUFHLENBQUgsQ0FBSyxPQUFMLENBQWMsUUFBZCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qIVxuICogTHVuciBsYW5ndWFnZXMsIGBHZXJtYW5gIGxhbmd1YWdlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTWloYWlWYWxlbnRpbi9sdW5yLWxhbmd1YWdlc1xuICpcbiAqIENvcHlyaWdodCAyMDE0LCBNaWhhaSBWYWxlbnRpblxuICogaHR0cDovL3d3dy5tb3ppbGxhLm9yZy9NUEwvXG4gKi9cbi8qIVxuICogYmFzZWQgb25cbiAqIFNub3diYWxsIEphdmFTY3JpcHQgTGlicmFyeSB2MC4zXG4gKiBodHRwOi8vY29kZS5nb29nbGUuY29tL3AvdXJpbS9cbiAqIGh0dHA6Ly9zbm93YmFsbC50YXJ0YXJ1cy5vcmcvXG4gKlxuICogQ29weXJpZ2h0IDIwMTAsIE9sZWcgTWF6a29cbiAqIGh0dHA6Ly93d3cubW96aWxsYS5vcmcvTVBML1xuICovXG5cbi8qKlxuICogZXhwb3J0IHRoZSBtb2R1bGUgdmlhIEFNRCwgQ29tbW9uSlMgb3IgYXMgYSBicm93c2VyIGdsb2JhbFxuICogRXhwb3J0IGNvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdW1kanMvdW1kL2Jsb2IvbWFzdGVyL3JldHVybkV4cG9ydHMuanNcbiAqL1xuO1xuKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICBkZWZpbmUoZmFjdG9yeSlcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAvKipcbiAgICAgKiBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAgKiBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAgKiBsaWtlIE5vZGUuXG4gICAgICovXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KClcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuICAgIGZhY3RvcnkoKShyb290Lmx1bnIpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuICAvKipcbiAgICogSnVzdCByZXR1cm4gYSB2YWx1ZSB0byBkZWZpbmUgdGhlIG1vZHVsZSBleHBvcnQuXG4gICAqIFRoaXMgZXhhbXBsZSByZXR1cm5zIGFuIG9iamVjdCwgYnV0IHRoZSBtb2R1bGVcbiAgICogY2FuIHJldHVybiBhIGZ1bmN0aW9uIGFzIHRoZSBleHBvcnRlZCB2YWx1ZS5cbiAgICovXG4gIHJldHVybiBmdW5jdGlvbihsdW5yKSB7XG4gICAgLyogdGhyb3cgZXJyb3IgaWYgbHVuciBpcyBub3QgeWV0IGluY2x1ZGVkICovXG4gICAgaWYgKCd1bmRlZmluZWQnID09PSB0eXBlb2YgbHVucikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMdW5yIGlzIG5vdCBwcmVzZW50LiBQbGVhc2UgaW5jbHVkZSAvIHJlcXVpcmUgTHVuciBiZWZvcmUgdGhpcyBzY3JpcHQuJyk7XG4gICAgfVxuXG4gICAgLyogdGhyb3cgZXJyb3IgaWYgbHVuciBzdGVtbWVyIHN1cHBvcnQgaXMgbm90IHlldCBpbmNsdWRlZCAqL1xuICAgIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIGx1bnIuc3RlbW1lclN1cHBvcnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTHVuciBzdGVtbWVyIHN1cHBvcnQgaXMgbm90IHByZXNlbnQuIFBsZWFzZSBpbmNsdWRlIC8gcmVxdWlyZSBMdW5yIHN0ZW1tZXIgc3VwcG9ydCBiZWZvcmUgdGhpcyBzY3JpcHQuJyk7XG4gICAgfVxuXG4gICAgLyogcmVnaXN0ZXIgc3BlY2lmaWMgbG9jYWxlIGZ1bmN0aW9uICovXG4gICAgbHVuci5kZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5waXBlbGluZS5yZXNldCgpO1xuICAgICAgdGhpcy5waXBlbGluZS5hZGQoXG4gICAgICAgIGx1bnIuZGUudHJpbW1lcixcbiAgICAgICAgbHVuci5kZS5zdG9wV29yZEZpbHRlcixcbiAgICAgICAgbHVuci5kZS5zdGVtbWVyXG4gICAgICApO1xuXG4gICAgICAvLyBmb3IgbHVuciB2ZXJzaW9uIDJcbiAgICAgIC8vIHRoaXMgaXMgbmVjZXNzYXJ5IHNvIHRoYXQgZXZlcnkgc2VhcmNoZWQgd29yZCBpcyBhbHNvIHN0ZW1tZWQgYmVmb3JlXG4gICAgICAvLyBpbiBsdW5yIDw9IDEgdGhpcyBpcyBub3QgbmVlZGVkLCBhcyBpdCBpcyBkb25lIHVzaW5nIHRoZSBub3JtYWwgcGlwZWxpbmVcbiAgICAgIGlmICh0aGlzLnNlYXJjaFBpcGVsaW5lKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoUGlwZWxpbmUucmVzZXQoKTtcbiAgICAgICAgdGhpcy5zZWFyY2hQaXBlbGluZS5hZGQobHVuci5kZS5zdGVtbWVyKVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKiBsdW5yIHRyaW1tZXIgZnVuY3Rpb24gKi9cbiAgICBsdW5yLmRlLndvcmRDaGFyYWN0ZXJzID0gXCJBLVphLXpcXHhBQVxceEJBXFx4QzAtXFx4RDZcXHhEOC1cXHhGNlxceEY4LVxcdTAyQjhcXHUwMkUwLVxcdTAyRTRcXHUxRDAwLVxcdTFEMjVcXHUxRDJDLVxcdTFENUNcXHUxRDYyLVxcdTFENjVcXHUxRDZCLVxcdTFENzdcXHUxRDc5LVxcdTFEQkVcXHUxRTAwLVxcdTFFRkZcXHUyMDcxXFx1MjA3RlxcdTIwOTAtXFx1MjA5Q1xcdTIxMkFcXHUyMTJCXFx1MjEzMlxcdTIxNEVcXHUyMTYwLVxcdTIxODhcXHUyQzYwLVxcdTJDN0ZcXHVBNzIyLVxcdUE3ODdcXHVBNzhCLVxcdUE3QURcXHVBN0IwLVxcdUE3QjdcXHVBN0Y3LVxcdUE3RkZcXHVBQjMwLVxcdUFCNUFcXHVBQjVDLVxcdUFCNjRcXHVGQjAwLVxcdUZCMDZcXHVGRjIxLVxcdUZGM0FcXHVGRjQxLVxcdUZGNUFcIjtcbiAgICBsdW5yLmRlLnRyaW1tZXIgPSBsdW5yLnRyaW1tZXJTdXBwb3J0LmdlbmVyYXRlVHJpbW1lcihsdW5yLmRlLndvcmRDaGFyYWN0ZXJzKTtcblxuICAgIGx1bnIuUGlwZWxpbmUucmVnaXN0ZXJGdW5jdGlvbihsdW5yLmRlLnRyaW1tZXIsICd0cmltbWVyLWRlJyk7XG5cbiAgICAvKiBsdW5yIHN0ZW1tZXIgZnVuY3Rpb24gKi9cbiAgICBsdW5yLmRlLnN0ZW1tZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAvKiBjcmVhdGUgdGhlIHdyYXBwZWQgc3RlbW1lciBvYmplY3QgKi9cbiAgICAgIHZhciBBbW9uZyA9IGx1bnIuc3RlbW1lclN1cHBvcnQuQW1vbmcsXG4gICAgICAgIFNub3diYWxsUHJvZ3JhbSA9IGx1bnIuc3RlbW1lclN1cHBvcnQuU25vd2JhbGxQcm9ncmFtLFxuICAgICAgICBzdCA9IG5ldyBmdW5jdGlvbiBHZXJtYW5TdGVtbWVyKCkge1xuICAgICAgICAgIHZhciBhXzAgPSBbbmV3IEFtb25nKFwiXCIsIC0xLCA2KSwgbmV3IEFtb25nKFwiVVwiLCAwLCAyKSxcbiAgICAgICAgICAgICAgbmV3IEFtb25nKFwiWVwiLCAwLCAxKSwgbmV3IEFtb25nKFwiXFx1MDBFNFwiLCAwLCAzKSxcbiAgICAgICAgICAgICAgbmV3IEFtb25nKFwiXFx1MDBGNlwiLCAwLCA0KSwgbmV3IEFtb25nKFwiXFx1MDBGQ1wiLCAwLCA1KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGFfMSA9IFtcbiAgICAgICAgICAgICAgbmV3IEFtb25nKFwiZVwiLCAtMSwgMiksIG5ldyBBbW9uZyhcImVtXCIsIC0xLCAxKSxcbiAgICAgICAgICAgICAgbmV3IEFtb25nKFwiZW5cIiwgLTEsIDIpLCBuZXcgQW1vbmcoXCJlcm5cIiwgLTEsIDEpLFxuICAgICAgICAgICAgICBuZXcgQW1vbmcoXCJlclwiLCAtMSwgMSksIG5ldyBBbW9uZyhcInNcIiwgLTEsIDMpLFxuICAgICAgICAgICAgICBuZXcgQW1vbmcoXCJlc1wiLCA1LCAyKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGFfMiA9IFtuZXcgQW1vbmcoXCJlblwiLCAtMSwgMSksXG4gICAgICAgICAgICAgIG5ldyBBbW9uZyhcImVyXCIsIC0xLCAxKSwgbmV3IEFtb25nKFwic3RcIiwgLTEsIDIpLFxuICAgICAgICAgICAgICBuZXcgQW1vbmcoXCJlc3RcIiwgMiwgMSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBhXzMgPSBbbmV3IEFtb25nKFwiaWdcIiwgLTEsIDEpLFxuICAgICAgICAgICAgICBuZXcgQW1vbmcoXCJsaWNoXCIsIC0xLCAxKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGFfNCA9IFtuZXcgQW1vbmcoXCJlbmRcIiwgLTEsIDEpLFxuICAgICAgICAgICAgICBuZXcgQW1vbmcoXCJpZ1wiLCAtMSwgMiksIG5ldyBBbW9uZyhcInVuZ1wiLCAtMSwgMSksXG4gICAgICAgICAgICAgIG5ldyBBbW9uZyhcImxpY2hcIiwgLTEsIDMpLCBuZXcgQW1vbmcoXCJpc2NoXCIsIC0xLCAyKSxcbiAgICAgICAgICAgICAgbmV3IEFtb25nKFwiaWtcIiwgLTEsIDIpLCBuZXcgQW1vbmcoXCJoZWl0XCIsIC0xLCAzKSxcbiAgICAgICAgICAgICAgbmV3IEFtb25nKFwia2VpdFwiLCAtMSwgNClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnX3YgPSBbMTcsIDY1LCAxNiwgMSwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgICAgICAgICAgICAgMCwgMCwgMCwgMCwgMCwgMCwgOCwgMCwgMzIsIDhcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnX3NfZW5kaW5nID0gWzExNywgMzAsIDVdLFxuICAgICAgICAgICAgZ19zdF9lbmRpbmcgPSBbXG4gICAgICAgICAgICAgIDExNywgMzAsIDRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBJX3gsIElfcDIsIElfcDEsIHNicCA9IG5ldyBTbm93YmFsbFByb2dyYW0oKTtcbiAgICAgICAgICB0aGlzLnNldEN1cnJlbnQgPSBmdW5jdGlvbih3b3JkKSB7XG4gICAgICAgICAgICBzYnAuc2V0Q3VycmVudCh3b3JkKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNicC5nZXRDdXJyZW50KCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGZ1bmN0aW9uIGhhYnIxKGMxLCBjMiwgdl8xKSB7XG4gICAgICAgICAgICBpZiAoc2JwLmVxX3MoMSwgYzEpKSB7XG4gICAgICAgICAgICAgIHNicC5rZXQgPSBzYnAuY3Vyc29yO1xuICAgICAgICAgICAgICBpZiAoc2JwLmluX2dyb3VwaW5nKGdfdiwgOTcsIDI1MikpIHtcbiAgICAgICAgICAgICAgICBzYnAuc2xpY2VfZnJvbShjMik7XG4gICAgICAgICAgICAgICAgc2JwLmN1cnNvciA9IHZfMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIHJfcHJlbHVkZSgpIHtcbiAgICAgICAgICAgIHZhciB2XzEgPSBzYnAuY3Vyc29yLFxuICAgICAgICAgICAgICB2XzIsIHZfMywgdl80LCB2XzU7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICB2XzIgPSBzYnAuY3Vyc29yO1xuICAgICAgICAgICAgICBzYnAuYnJhID0gdl8yO1xuICAgICAgICAgICAgICBpZiAoc2JwLmVxX3MoMSwgXCJcXHUwMERGXCIpKSB7XG4gICAgICAgICAgICAgICAgc2JwLmtldCA9IHNicC5jdXJzb3I7XG4gICAgICAgICAgICAgICAgc2JwLnNsaWNlX2Zyb20oXCJzc1wiKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodl8yID49IHNicC5saW1pdClcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIHNicC5jdXJzb3IgPSB2XzIgKyAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzYnAuY3Vyc29yID0gdl8xO1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgdl8zID0gc2JwLmN1cnNvcjtcbiAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICB2XzQgPSBzYnAuY3Vyc29yO1xuICAgICAgICAgICAgICAgIGlmIChzYnAuaW5fZ3JvdXBpbmcoZ192LCA5NywgMjUyKSkge1xuICAgICAgICAgICAgICAgICAgdl81ID0gc2JwLmN1cnNvcjtcbiAgICAgICAgICAgICAgICAgIHNicC5icmEgPSB2XzU7XG4gICAgICAgICAgICAgICAgICBpZiAoaGFicjEoXCJ1XCIsIFwiVVwiLCB2XzQpKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIHNicC5jdXJzb3IgPSB2XzU7XG4gICAgICAgICAgICAgICAgICBpZiAoaGFicjEoXCJ5XCIsIFwiWVwiLCB2XzQpKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZfNCA+PSBzYnAubGltaXQpIHtcbiAgICAgICAgICAgICAgICAgIHNicC5jdXJzb3IgPSB2XzM7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNicC5jdXJzb3IgPSB2XzQgKyAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gaGFicjIoKSB7XG4gICAgICAgICAgICB3aGlsZSAoIXNicC5pbl9ncm91cGluZyhnX3YsIDk3LCAyNTIpKSB7XG4gICAgICAgICAgICAgIGlmIChzYnAuY3Vyc29yID49IHNicC5saW1pdClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgc2JwLmN1cnNvcisrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKCFzYnAub3V0X2dyb3VwaW5nKGdfdiwgOTcsIDI1MikpIHtcbiAgICAgICAgICAgICAgaWYgKHNicC5jdXJzb3IgPj0gc2JwLmxpbWl0KVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICBzYnAuY3Vyc29yKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gcl9tYXJrX3JlZ2lvbnMoKSB7XG4gICAgICAgICAgICBJX3AxID0gc2JwLmxpbWl0O1xuICAgICAgICAgICAgSV9wMiA9IElfcDE7XG4gICAgICAgICAgICB2YXIgYyA9IHNicC5jdXJzb3IgKyAzO1xuICAgICAgICAgICAgaWYgKDAgPD0gYyAmJiBjIDw9IHNicC5saW1pdCkge1xuICAgICAgICAgICAgICBJX3ggPSBjO1xuICAgICAgICAgICAgICBpZiAoIWhhYnIyKCkpIHtcbiAgICAgICAgICAgICAgICBJX3AxID0gc2JwLmN1cnNvcjtcbiAgICAgICAgICAgICAgICBpZiAoSV9wMSA8IElfeClcbiAgICAgICAgICAgICAgICAgIElfcDEgPSBJX3g7XG4gICAgICAgICAgICAgICAgaWYgKCFoYWJyMigpKVxuICAgICAgICAgICAgICAgICAgSV9wMiA9IHNicC5jdXJzb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiByX3Bvc3RsdWRlKCkge1xuICAgICAgICAgICAgdmFyIGFtb25nX3Zhciwgdl8xO1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgdl8xID0gc2JwLmN1cnNvcjtcbiAgICAgICAgICAgICAgc2JwLmJyYSA9IHZfMTtcbiAgICAgICAgICAgICAgYW1vbmdfdmFyID0gc2JwLmZpbmRfYW1vbmcoYV8wLCA2KTtcbiAgICAgICAgICAgICAgaWYgKCFhbW9uZ192YXIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICBzYnAua2V0ID0gc2JwLmN1cnNvcjtcbiAgICAgICAgICAgICAgc3dpdGNoIChhbW9uZ192YXIpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICBzYnAuc2xpY2VfZnJvbShcInlcIik7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgc2JwLnNsaWNlX2Zyb20oXCJ1XCIpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgc2JwLnNsaWNlX2Zyb20oXCJhXCIpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgc2JwLnNsaWNlX2Zyb20oXCJvXCIpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgaWYgKHNicC5jdXJzb3IgPj0gc2JwLmxpbWl0KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICBzYnAuY3Vyc29yKys7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIHJfUjEoKSB7XG4gICAgICAgICAgICByZXR1cm4gSV9wMSA8PSBzYnAuY3Vyc29yO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIHJfUjIoKSB7XG4gICAgICAgICAgICByZXR1cm4gSV9wMiA8PSBzYnAuY3Vyc29yO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIHJfc3RhbmRhcmRfc3VmZml4KCkge1xuICAgICAgICAgICAgdmFyIGFtb25nX3Zhciwgdl8xID0gc2JwLmxpbWl0IC0gc2JwLmN1cnNvcixcbiAgICAgICAgICAgICAgdl8yLCB2XzMsIHZfNDtcbiAgICAgICAgICAgIHNicC5rZXQgPSBzYnAuY3Vyc29yO1xuICAgICAgICAgICAgYW1vbmdfdmFyID0gc2JwLmZpbmRfYW1vbmdfYihhXzEsIDcpO1xuICAgICAgICAgICAgaWYgKGFtb25nX3Zhcikge1xuICAgICAgICAgICAgICBzYnAuYnJhID0gc2JwLmN1cnNvcjtcbiAgICAgICAgICAgICAgaWYgKHJfUjEoKSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoYW1vbmdfdmFyKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHNicC5zbGljZV9kZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHNicC5zbGljZV9kZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgc2JwLmtldCA9IHNicC5jdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzYnAuZXFfc19iKDEsIFwic1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgIHNicC5icmEgPSBzYnAuY3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChzYnAuZXFfc19iKDMsIFwibmlzXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2JwLnNsaWNlX2RlbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBpZiAoc2JwLmluX2dyb3VwaW5nX2IoZ19zX2VuZGluZywgOTgsIDExNikpXG4gICAgICAgICAgICAgICAgICAgICAgc2JwLnNsaWNlX2RlbCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNicC5jdXJzb3IgPSBzYnAubGltaXQgLSB2XzE7XG4gICAgICAgICAgICBzYnAua2V0ID0gc2JwLmN1cnNvcjtcbiAgICAgICAgICAgIGFtb25nX3ZhciA9IHNicC5maW5kX2Ftb25nX2IoYV8yLCA0KTtcbiAgICAgICAgICAgIGlmIChhbW9uZ192YXIpIHtcbiAgICAgICAgICAgICAgc2JwLmJyYSA9IHNicC5jdXJzb3I7XG4gICAgICAgICAgICAgIGlmIChyX1IxKCkpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFtb25nX3Zhcikge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBzYnAuc2xpY2VfZGVsKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBpZiAoc2JwLmluX2dyb3VwaW5nX2IoZ19zdF9lbmRpbmcsIDk4LCAxMTYpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBzYnAuY3Vyc29yIC0gMztcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc2JwLmxpbWl0X2JhY2t3YXJkIDw9IGMgJiYgYyA8PSBzYnAubGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNicC5jdXJzb3IgPSBjO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2JwLnNsaWNlX2RlbCgpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNicC5jdXJzb3IgPSBzYnAubGltaXQgLSB2XzE7XG4gICAgICAgICAgICBzYnAua2V0ID0gc2JwLmN1cnNvcjtcbiAgICAgICAgICAgIGFtb25nX3ZhciA9IHNicC5maW5kX2Ftb25nX2IoYV80LCA4KTtcbiAgICAgICAgICAgIGlmIChhbW9uZ192YXIpIHtcbiAgICAgICAgICAgICAgc2JwLmJyYSA9IHNicC5jdXJzb3I7XG4gICAgICAgICAgICAgIGlmIChyX1IyKCkpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFtb25nX3Zhcikge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBzYnAuc2xpY2VfZGVsKCk7XG4gICAgICAgICAgICAgICAgICAgIHNicC5rZXQgPSBzYnAuY3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2JwLmVxX3NfYigyLCBcImlnXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2JwLmJyYSA9IHNicC5jdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgICAgdl8yID0gc2JwLmxpbWl0IC0gc2JwLmN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNicC5lcV9zX2IoMSwgXCJlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYnAuY3Vyc29yID0gc2JwLmxpbWl0IC0gdl8yO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJfUjIoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2JwLnNsaWNlX2RlbCgpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdl8zID0gc2JwLmxpbWl0IC0gc2JwLmN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzYnAuZXFfc19iKDEsIFwiZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgIHNicC5jdXJzb3IgPSBzYnAubGltaXQgLSB2XzM7XG4gICAgICAgICAgICAgICAgICAgICAgc2JwLnNsaWNlX2RlbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBzYnAuc2xpY2VfZGVsKCk7XG4gICAgICAgICAgICAgICAgICAgIHNicC5rZXQgPSBzYnAuY3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICB2XzQgPSBzYnAubGltaXQgLSBzYnAuY3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNicC5lcV9zX2IoMiwgXCJlclwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgIHNicC5jdXJzb3IgPSBzYnAubGltaXQgLSB2XzQ7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFzYnAuZXFfc19iKDIsIFwiZW5cIikpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzYnAuYnJhID0gc2JwLmN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJfUjEoKSlcbiAgICAgICAgICAgICAgICAgICAgICBzYnAuc2xpY2VfZGVsKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBzYnAuc2xpY2VfZGVsKCk7XG4gICAgICAgICAgICAgICAgICAgIHNicC5rZXQgPSBzYnAuY3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICBhbW9uZ192YXIgPSBzYnAuZmluZF9hbW9uZ19iKGFfMywgMik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbW9uZ192YXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzYnAuYnJhID0gc2JwLmN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAocl9SMigpICYmIGFtb25nX3ZhciA9PSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2JwLnNsaWNlX2RlbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnN0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB2XzEgPSBzYnAuY3Vyc29yO1xuICAgICAgICAgICAgcl9wcmVsdWRlKCk7XG4gICAgICAgICAgICBzYnAuY3Vyc29yID0gdl8xO1xuICAgICAgICAgICAgcl9tYXJrX3JlZ2lvbnMoKTtcbiAgICAgICAgICAgIHNicC5saW1pdF9iYWNrd2FyZCA9IHZfMTtcbiAgICAgICAgICAgIHNicC5jdXJzb3IgPSBzYnAubGltaXQ7XG4gICAgICAgICAgICByX3N0YW5kYXJkX3N1ZmZpeCgpO1xuICAgICAgICAgICAgc2JwLmN1cnNvciA9IHNicC5saW1pdF9iYWNrd2FyZDtcbiAgICAgICAgICAgIHJfcG9zdGx1ZGUoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgLyogYW5kIHJldHVybiBhIGZ1bmN0aW9uIHRoYXQgc3RlbXMgYSB3b3JkIGZvciB0aGUgY3VycmVudCBsb2NhbGUgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbih0b2tlbikge1xuICAgICAgICAvLyBmb3IgbHVuciB2ZXJzaW9uIDJcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbi51cGRhdGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiB0b2tlbi51cGRhdGUoZnVuY3Rpb24od29yZCkge1xuICAgICAgICAgICAgc3Quc2V0Q3VycmVudCh3b3JkKTtcbiAgICAgICAgICAgIHN0LnN0ZW0oKTtcbiAgICAgICAgICAgIHJldHVybiBzdC5nZXRDdXJyZW50KCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHsgLy8gZm9yIGx1bnIgdmVyc2lvbiA8PSAxXG4gICAgICAgICAgc3Quc2V0Q3VycmVudCh0b2tlbik7XG4gICAgICAgICAgc3Quc3RlbSgpO1xuICAgICAgICAgIHJldHVybiBzdC5nZXRDdXJyZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgbHVuci5QaXBlbGluZS5yZWdpc3RlckZ1bmN0aW9uKGx1bnIuZGUuc3RlbW1lciwgJ3N0ZW1tZXItZGUnKTtcblxuICAgIGx1bnIuZGUuc3RvcFdvcmRGaWx0ZXIgPSBsdW5yLmdlbmVyYXRlU3RvcFdvcmRGaWx0ZXIoJ2FiZXIgYWxsZSBhbGxlbSBhbGxlbiBhbGxlciBhbGxlcyBhbHMgYWxzbyBhbSBhbiBhbmRlciBhbmRlcmUgYW5kZXJlbSBhbmRlcmVuIGFuZGVyZXIgYW5kZXJlcyBhbmRlcm0gYW5kZXJuIGFuZGVyciBhbmRlcnMgYXVjaCBhdWYgYXVzIGJlaSBiaW4gYmlzIGJpc3QgZGEgZGFtaXQgZGFubiBkYXMgZGFzc2VsYmUgZGF6dSBkYcOfIGRlaW4gZGVpbmUgZGVpbmVtIGRlaW5lbiBkZWluZXIgZGVpbmVzIGRlbSBkZW1zZWxiZW4gZGVuIGRlbm4gZGVuc2VsYmVuIGRlciBkZXJlciBkZXJzZWxiZSBkZXJzZWxiZW4gZGVzIGRlc3NlbGJlbiBkZXNzZW4gZGljaCBkaWUgZGllcyBkaWVzZSBkaWVzZWxiZSBkaWVzZWxiZW4gZGllc2VtIGRpZXNlbiBkaWVzZXIgZGllc2VzIGRpciBkb2NoIGRvcnQgZHUgZHVyY2ggZWluIGVpbmUgZWluZW0gZWluZW4gZWluZXIgZWluZXMgZWluaWcgZWluaWdlIGVpbmlnZW0gZWluaWdlbiBlaW5pZ2VyIGVpbmlnZXMgZWlubWFsIGVyIGVzIGV0d2FzIGV1Y2ggZXVlciBldXJlIGV1cmVtIGV1cmVuIGV1cmVyIGV1cmVzIGbDvHIgZ2VnZW4gZ2V3ZXNlbiBoYWIgaGFiZSBoYWJlbiBoYXQgaGF0dGUgaGF0dGVuIGhpZXIgaGluIGhpbnRlciBpY2ggaWhtIGlobiBpaG5lbiBpaHIgaWhyZSBpaHJlbSBpaHJlbiBpaHJlciBpaHJlcyBpbSBpbiBpbmRlbSBpbnMgaXN0IGplZGUgamVkZW0gamVkZW4gamVkZXIgamVkZXMgamVuZSBqZW5lbSBqZW5lbiBqZW5lciBqZW5lcyBqZXR6dCBrYW5uIGtlaW4ga2VpbmUga2VpbmVtIGtlaW5lbiBrZWluZXIga2VpbmVzIGvDtm5uZW4ga8O2bm50ZSBtYWNoZW4gbWFuIG1hbmNoZSBtYW5jaGVtIG1hbmNoZW4gbWFuY2hlciBtYW5jaGVzIG1laW4gbWVpbmUgbWVpbmVtIG1laW5lbiBtZWluZXIgbWVpbmVzIG1pY2ggbWlyIG1pdCBtdXNzIG11c3N0ZSBuYWNoIG5pY2h0IG5pY2h0cyBub2NoIG51biBudXIgb2Igb2RlciBvaG5lIHNlaHIgc2VpbiBzZWluZSBzZWluZW0gc2VpbmVuIHNlaW5lciBzZWluZXMgc2VsYnN0IHNpY2ggc2llIHNpbmQgc28gc29sY2hlIHNvbGNoZW0gc29sY2hlbiBzb2xjaGVyIHNvbGNoZXMgc29sbCBzb2xsdGUgc29uZGVybiBzb25zdCB1bSB1bmQgdW5zIHVuc2UgdW5zZW0gdW5zZW4gdW5zZXIgdW5zZXMgdW50ZXIgdmllbCB2b20gdm9uIHZvciB3YXIgd2FyZW4gd2Fyc3Qgd2FzIHdlZyB3ZWlsIHdlaXRlciB3ZWxjaGUgd2VsY2hlbSB3ZWxjaGVuIHdlbGNoZXIgd2VsY2hlcyB3ZW5uIHdlcmRlIHdlcmRlbiB3aWUgd2llZGVyIHdpbGwgd2lyIHdpcmQgd2lyc3Qgd28gd29sbGVuIHdvbGx0ZSB3w6RocmVuZCB3w7xyZGUgd8O8cmRlbiB6dSB6dW0genVyIHp3YXIgendpc2NoZW4gw7xiZXInLnNwbGl0KCcgJykpO1xuXG4gICAgbHVuci5QaXBlbGluZS5yZWdpc3RlckZ1bmN0aW9uKGx1bnIuZGUuc3RvcFdvcmRGaWx0ZXIsICdzdG9wV29yZEZpbHRlci1kZScpO1xuICB9O1xufSkpIiwibGV0IHJoID0gZ2xvYmFsLnJoXHJcbmxldCBsdW5ybGFuZyA9IHJlcXVpcmUoJy4uLy4uL25vZGVfbW9kdWxlcy9sdW5yLWxhbmd1YWdlcy9sdW5yLmRlJylcclxucmguXy5leHBvcnRzKCBsdW5ybGFuZykiXX0=
