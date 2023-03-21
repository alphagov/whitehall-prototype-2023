!function(){"use strict";function n(){return Date.now?Date.now():+new Date}function Ye(e){var t=r(e,"auto",!0);return{auto:t,beaconUrl:r(e,"beaconUrl","https://lux.speedcurve.com/lux/"),customerid:r(e,"customerid",undefined),debug:r(e,"debug",!1),errorBeaconUrl:r(e,"errorBeaconUrl","https://lux.speedcurve.com/error/"),jspagelabel:r(e,"jspagelabel",undefined),label:r(e,"label",undefined),maxBeaconUrlLength:r(e,"maxBeaconUrlLength",8190),maxBeaconUTEntries:r(e,"maxBeaconUTEntries",20),maxErrors:r(e,"maxErrors",5),maxMeasureTime:r(e,"maxMeasureTime",6e4),measureUntil:r(e,"measureUntil","onload"),minMeasureTime:r(e,"minMeasureTime",0),samplerate:r(e,"samplerate",100),sendBeaconOnPageHidden:r(e,"sendBeaconOnPageHidden",t),trackErrors:r(e,"trackErrors",!0),pagegroups:r(e,"pagegroups",undefined)}}function r(e,t,n){return"undefined"!=typeof e[t]?e[t]:n}function $e(e,t){return e|t}function a(e){return!(!e.parentNode||!e.parentNode.tagName)}function qe(e){var t=i(e);if(t)return t;if(e.id)return e.id;var n="INPUT"===e.tagName&&"submit"===e.type,r="BUTTON"===e.tagName,o="A"===e.tagName;return n&&e.value?e.value:(r||o)&&e.innerText?e.innerText:a(e)?qe(e.parentNode):""}function i(e){var t;if(e.hasAttribute("data-sctrack")){var n=null===(t=e.getAttribute("data-sctrack"))||void 0===t?void 0:t.trim();if(n)return n}return a(e)?i(e.parentNode):null}function Ge(){return ot.now?ot.now():n()-at.navigationStart}function Ze(e){if("function"==typeof ot.getEntriesByType){var t=ot.getEntriesByType(e);if(t&&t.length)return t}return[]}function Je(e,t,n){for(var r=e.slice(0,t.maxBeaconUTEntries),o=e.slice(t.maxBeaconUTEntries);(n+"&UT="+r.join(",")).length>t.maxBeaconUrlLength&&1<r.length;)o.unshift(r.pop());return[r,o]}var e,Ke=n(),Qe={EvaluationStart:1,EvaluationEnd:2,InitCalled:3,MarkCalled:4,MeasureCalled:5,AddDataCalled:6,SendCalled:7,ForceSampleCalled:8,DataCollectionStart:9,UnloadHandlerTriggered:10,OnloadHandlerTriggered:11,MarkLoadTimeCalled:12,SessionIsSampled:21,SessionIsNotSampled:22,MainBeaconSent:23,UserTimingBeaconSent:24,InteractionBeaconSent:25,CustomDataBeaconSent:26,NavigationStart:41,PerformanceEntryReceived:42,PerformanceEntryProcessed:43,PerformanceObserverError:51,InputEventPermissionError:52,InnerHtmlAccessError:53,EventTargetAccessError:54,CookieReadError:55,CookieSetError:56,PageLabelEvaluationError:57,NavTimingNotSupported:71,PaintTimingNotSupported:72},et=function(){function e(){this.events=[]}return e.prototype.logEvent=function(e,t){void 0===t&&(t=[]),this.events.push([n(),e,t])},e.prototype.getEvents=function(){return this.events},e}(),tt="LUX_start",nt="LUX_end",rt={InitCalled:1,NavTimingNotSupported:2,UserTimingNotSupported:4,VisibilityStateNotVisible:8,BeaconSentFromUnloadHandler:16,BeaconSentAfterTimeout:32,PageLabelFromDocumentTitle:64,PageLabelFromLabelProp:128,PageLabelFromGlobalVariable:256,PageLabelFromPagegroup:512},ot=window.performance||{},at=ot.timing||{navigationStart:(null===(e=window.LUX)||void 0===e?void 0:e.ns)||Ke},it=function(){function r(){}return r.isMatching=function(e,t){var n=r.createRegexpFromPattern(e);return!!t.match(n)},r.createRegexpFromPattern=function(e){return"/"==e?this.getRegexpForHostnameRoot():e.includes(r.wildcard)?this.createRegexpFromPathname(e):this.getRegexpForExactString(e)},r.createRegexpFromPathname=function(e){var t="/"==e.charAt(0);e=this.escapeStringForRegexp(e);var n="^"+(t?r.domainExpression:"")+e.replaceAll(r.wildcard,".*?")+"$";return new RegExp(n,"i")},r.getRegexpForHostnameRoot=function(){return new RegExp("^"+r.domainExpression+"/$","i")},r.getRegexpForExactString=function(e){var t="/"==e.charAt(0);return new RegExp("^"+(t?r.domainExpression:"")+this.escapeStringForRegexp(e)+"/?$","i")},r.escapeStringForRegexp=function(e){return e.replace(/[-/\\^$+?.()|[\]{}]/g,"\\$&")},r.wildcard="*",r.domainExpression="[a-zA-Z0-9-.]{1,61}[a-zA-Z0-9]\\.[a-zA-Z]{2,}",r}(),ut=window.LUX||{},ct=Ke;ut=function(){function e(e){Se.trackErrors&&(be++,e&&"undefined"!=typeof e.filename&&"undefined"!=typeof e.message&&(-1<e.filename.indexOf("/lux.js?")||-1<e.message.indexOf("LUX")||be<=Se.maxErrors&&L())&&((new Image).src=Se.errorBeaconUrl+"?v="+ye+"&id="+F()+"&fn="+encodeURIComponent(e.filename)+"&ln="+e.lineno+"&cn="+e.colno+"&msg="+encodeURIComponent(e.message)+"&l="+encodeURIComponent(ve())+(W()?"&ct="+W():"")+"&HN="+encodeURIComponent(document.location.hostname)+"&PN="+encodeURIComponent(document.location.pathname)))}function i(e){De||(De=Math.round(e),Oe.forEach(function(e){removeEventListener(e,t,Xe)}))}function u(e){function t(){i(e),r()}function n(){r()}function r(){window.removeEventListener("pointerup",t,Xe),window.removeEventListener("pointercancel",n,Xe)}window.addEventListener("pointerup",t,Xe),window.addEventListener("pointercancel",n,Xe)}function t(e){var t=!1;try{t=e.cancelable}catch(a){return void Te.logEvent(Qe.InputEventPermissionError)}if(t){var n=v(!0),r=e.timeStamp;if(152e7<r&&(n=Number(new Date)),n<r)return;var o=n-r;"pointerdown"===e.type?u(o):i(o)}}function v(e){var t=Ge(),n=h(tt);return n&&!e?t-n.startTime:t}function n(){for(var e,t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(Te.logEvent(Qe.MarkCalled,n),ot.mark)return ot.mark.apply(ot,n);if(__ENABLE_POLYFILLS){var o={entryType:"mark",duration:0,name:n[0],detail:(null===(e=n[1])||void 0===e?void 0:e.detail)||null,startTime:(null===(t=n[1])||void 0===t?void 0:t.startTime)||v()};return Me.push(o),Ne=$e(Ne,rt.UserTimingNotSupported),o}}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];Te.logEvent(Qe.MeasureCalled,e);var n,r=e[0],o=e[1],a=e[2];if("object"==typeof o&&(o=(n=e[1]).start,a=n.end),void 0===o&&(o=h(tt)?tt:"navigationStart",n?n.end&&n.duration||(e[1].start=o):e[1]=o),ot.measure)return ot.measure.apply(ot,e);if(__ENABLE_POLYFILLS){var i="number"==typeof o?o:0,u="number"==typeof a?a:v(),c=function(e){throw new DOMException("Failed to execute 'measure' on 'Performance': The mark '".concat(e,"' does not exist"))};if("string"==typeof o){var d=h(o);d?i=d.startTime:at[o]?i=at[o]-at.navigationStart:c(o)}if("string"==typeof a){var s=h(a);s?u=s.startTime:at[a]?u=at[a]-at.navigationStart:c(a)}var l=Math.round(u)-Math.round(i),f=null;n&&(n.duration&&(l=n.duration),f=n.detail);var m={entryType:"measure",name:r,detail:f,startTime:i,duration:l};return Ue.push(m),Ne=$e(Ne,rt.UserTimingNotSupported),m}}function h(e){return o(e,d())}function o(e,t){if(t)for(var n=t.length-1;0<=n;n--){var r=t[n];if(e===r.name)return r}return undefined}function d(){var e=Ze("mark");return e.length?e:Me}function s(){var e=Ze("measure");return e.length?e:Ue}function E(){var o={},a=h(tt),i=a?a.startTime:0;d().forEach(function(e){var t=e.name;if(t!==tt&&t!==nt){var n=Math.round(e.startTime-i);n<0||("undefined"==typeof o[t]?o[t]={startTime:n}:o[t].startTime=Math.max(n,o[t].startTime))}}),s().forEach(function(e){if(!(a&&e.startTime<a.startTime)){var t=e.name,n=Math.round(e.startTime-i),r=Math.round(e.duration);("undefined"==typeof o[t]||n>o[t].startTime)&&(o[t]={startTime:n,duration:r})}});var e=[];for(var t in o){var n=o[t],r=n.startTime,u=n.duration,c=[t,r];void 0!==u&&c.push(u),e.push(c.join("|"))}return e}function y(){var e=[];if(we.length)for(var t=0;t<we.length;t++){var n=we[t];"element"===n.entryType&&n.identifier&&n.startTime&&(Te.logEvent(Qe.PerformanceEntryProcessed,[n]),e.push(n.identifier+"|"+Math.round(n.startTime)))}return e.join(",")}function T(){if("function"!=typeof PerformanceLongTaskTiming)return"";var e="",t={},n={};if(we.length){var r=h(tt),o=r?r.startTime:0,a=at.loadEventEnd-at.navigationStart;if(r){var i=h(nt);i&&(a=i.startTime)}for(var u=0;u<we.length;u++){var c=we[u];if("longtask"===c.entryType){var d=Math.round(c.duration);if(c.startTime<o)d-=o-c.startTime;else if(c.startTime>=a)continue;Te.logEvent(Qe.PerformanceEntryProcessed,[c]);var s=c.attribution[0].name;t[s]||(t[s]=0,n[s]=""),t[s]+=d,n[s]+=","+Math.round(c.startTime)+"|"+d}}}var l="undefined"!=typeof t.script?"script":"unknown";"undefined"==typeof t[l]&&(t[l]=0,n[l]="");var f=g(n[l]),m=",n|"+f.count+",d|"+f.median+",x|"+f.max+(0===f.fci?"":",i|"+f.fci);return e+="s|"+t[l]+m+n[l]}function g(e){for(var t=0,n=C(),r=0===n,o=[],a=e.split(","),i=0;i<a.length;i++){var u=a[i].split("|");if(2===u.length){var c=parseInt(u[0]),d=parseInt(u[1]);o.push(d),t=t<d?d:t,!r&&n<c&&(5e3<c-n?r=!0:n=c+d)}}return{count:o.length,median:l(o),max:t,fci:n}}function S(){if("function"!=typeof LayoutShift)return!1;for(var e=0,t=0;t<we.length;t++){var n=we[t];"layout-shift"!==n.entryType||n.hadRecentInput||(Te.logEvent(Qe.PerformanceEntryProcessed,[n]),e+=n.value)}return e.toFixed(6)}function l(e){if(0===e.length)return 0;var t=Math.floor(e.length/2);return e.sort(function(e,t){return e-t}),e.length%2?e[t]:Math.round((e[t-1]+e[t])/2)}function b(){var e="";if(ot.getEntriesByName){var t=R("/js/lux.js");if(t){var n=ot.getEntriesByName(t.src);if(n&&n.length){var r=n[0],o=Math.round(r.domainLookupEnd-r.domainLookupStart),a=Math.round(r.connectEnd-r.connectStart),i=Math.round(r.responseStart-r.requestStart),u=Math.round(r.responseEnd-r.responseStart),c=o+a+i+u,d=ct-Ke,s=r.encodedBodySize?r.encodedBodySize:0;e="d"+o+"t"+a+"f"+i+"c"+u+"n"+c+"e"+d+"r"+Se.samplerate+("number"==typeof s?"x"+s:"")+("number"==typeof je?"l"+je:"")+"s"+(Ke-at.navigationStart)}}}return e}function a(){Be={}}function w(){var e=[];for(var t in Be)e.push(t+"|"+Be[t]);return e.join(",")}function c(e,t){Te.logEvent(Qe.AddDataCalled,[e,t]);var n=typeof t;"string"==typeof e&&("string"!==n&&"number"!==n&&"boolean"!==n||(Ce[e]=t),"undefined"!==n&&null!==t||delete Ce[e]),ke&&(xe&&clearTimeout(xe),xe=window.setTimeout(ee,100))}function L(){if(void 0===_e||"undefined"==typeof Se.samplerate)return!1;var e=(""+_e).substr(-2);return parseInt(e)<Se.samplerate}function f(){var e=[];for(var t in Ce){var n=""+Ce[t];t=t.replace(/,/g,"").replace(/\|/g,""),n=n.replace(/,/g,"").replace(/\|/g,""),e.push(t+"|"+n)}return encodeURIComponent(e.join(","))}function m(){h(nt)&&(Te.logEvent(Qe.InitCalled),a(),de(),ce(),Re=Fe=ke=Ie=0,He=se(),_e=le(He),we.splice(0),Ne=$e(Ne=be=0,rt.InitCalled),n(tt),G())}function x(){var e=V();if(!e)return p();for(var t=document.getElementsByTagName("script"),n=0,r=0,o=t.length;r<o;r++){var a=t[r];!a.src||a.async||a.defer||0==(4&a.compareDocumentPosition(e))||n++}return n}function P(){for(var e=0,t=document.getElementsByTagName("link"),n=0,r=t.length;n<r;n++){var o=t[n];o.href&&"stylesheet"===o.rel&&0!==o.href.indexOf("data:")&&(o.onloadcssdefined||"print"===o.media||"style"===o.as||"function"==typeof o.onload&&"all"===o.media||e++)}return e}function p(){for(var e=document.getElementsByTagName("script"),t=0,n=0,r=e.length;n<r;n++){var o=e[n];!o.src||o.async||o.defer||t++}return t}function N(){for(var e=document.getElementsByTagName("script"),t=0,n=0,r=e.length;n<r;n++){e[n].src&&t++}return t}function M(){for(var e=document.getElementsByTagName("link"),t=0,n=0,r=e.length;n<r;n++){var o=e[n];o.href&&"stylesheet"==o.rel&&t++}return t}function U(e){for(var t=document.getElementsByTagName(e),n=0,r=0,o=t.length;r<o;r++){var a=t[r];try{n+=a.innerHTML.length}catch(a){return Te.logEvent(Qe.InnerHtmlAccessError),-1}}return n}function B(){var e="",t=at.navigationStart,n=h(tt),r=h(nt);if(n&&r){var o=Math.round(n.startTime);e=(t+=o)+"fs0ls"+(d=Math.round(r.startTime)-o)+"le"+d}else if(ot.timing){var a=at,i=I(),u=C(),c=k();e=t+(a.redirectStart?"rs"+(a.redirectStart-t):"")+(a.redirectEnd?"re"+(a.redirectEnd-t):"")+(a.fetchStart?"fs"+(a.fetchStart-t):"")+(a.domainLookupStart?"ds"+(a.domainLookupStart-t):"")+(a.domainLookupEnd?"de"+(a.domainLookupEnd-t):"")+(a.connectStart?"cs"+(a.connectStart-t):"")+(a.secureConnectionStart?"sc"+(a.secureConnectionStart-t):"")+(a.connectEnd?"ce"+(a.connectEnd-t):"")+(a.requestStart?"qs"+(a.requestStart-t):"")+(a.responseStart?"bs"+(a.responseStart-t):"")+(a.responseEnd?"be"+(a.responseEnd-t):"")+(a.domLoading?"ol"+(a.domLoading-t):"")+(a.domInteractive?"oi"+(a.domInteractive-t):"")+(a.domContentLoadedEventStart?"os"+(a.domContentLoadedEventStart-t):"")+(a.domContentLoadedEventEnd?"oe"+(a.domContentLoadedEventEnd-t):"")+(a.domComplete?"oc"+(a.domComplete-t):"")+(a.loadEventStart?"ls"+(a.loadEventStart-t):"")+(a.loadEventEnd?"le"+(a.loadEventEnd-t):"")+(i?"sr"+i:"")+(u?"fc"+u:"")+(c?"lc"+c:"")}else if(r){var d;e=t+"fs0ls"+(d=Math.round(r.startTime))+"le"+d}return e}function C(){for(var e=Ze("paint"),t=0;t<e.length;t++){var n=e[t];if("first-contentful-paint"===n.name)return Math.round(n.startTime)}return 0}function k(){if(we.length)for(var e=we.length-1;0<=e;e--){var t=we[e];if("largest-contentful-paint"===t.entryType)return Te.logEvent(Qe.PerformanceEntryProcessed,[t]),Math.round(t.startTime)}return 0}function I(){if(ot.timing){var e=Ze("paint");if(e.length)for(var t=0;t<e.length;t++){var n=e[t];if("first-paint"===n.name)return Math.round(n.startTime)}else if(at.msFirstPaint&&__ENABLE_POLYFILLS)return Math.round(at.msFirstPaint-at.navigationStart)}return Te.logEvent(Qe.PaintTimingNotSupported),null}function F(){if("undefined"!=typeof ut.customerid)return ut.customerid;var e=R("/js/lux.js");return e?(ut.customerid=A(e.src,"id"),ut.customerid):""}function R(e){for(var t=document.getElementsByTagName("script"),n=0,r=t.length;n<r;n++){var o=t[n];if(o.src&&-1!==o.src.indexOf(e))return o}return null}function A(e,t){for(var n=e.split("?")[1].split("&"),r=0,o=n.length;r<o;r++){var a=n[r].split("=");if(t===a[0])return a[1]}return undefined}function H(){for(var e=document.getElementsByTagName("*"),t=e.length,n=0;t--;)n+=_(e[t]);return Math.round(n/e.length)}function _(e){var t=0;if(e.parentNode)for(;e=e.parentNode;)t++;return t}function D(e){var t=e.body,n=e.documentElement;return Math.max(t?t.scrollHeight:0,t?t.offsetHeight:0,n?n.clientHeight:0,n?n.scrollHeight:0,n?n.offsetHeight:0)}function j(e){var t=e.body,n=e.documentElement;return Math.max(t?t.scrollWidth:0,t?t.offsetWidth:0,n?n.clientWidth:0,n?n.scrollWidth:0,n?n.offsetWidth:0)}function O(){var e=Ze("navigation");return e.length&&e[0].encodedBodySize?e[0].encodedBodySize:0}function X(){return ot.navigation&&"undefined"!=typeof ot.navigation.type?ot.navigation.type:""}function W(){var e=navigator.connection,t="";return e&&e.effectiveType&&(t="slow-2g"===(t=e.effectiveType)?"Slow 2G":"2g"===t||"3g"===t||"4g"===t||"5g"===t?t.toUpperCase():t.charAt(0).toUpperCase()+t.slice(1)),t}function z(){var e=document.getElementsByTagName("img"),t=[];if(e)for(var n=0,r=e.length;n<r;n++){var o=e[n];Y(o)&&t.push(o)}return t}function V(e){var t;if(e||(e=document.body),e){var n=e.children;if(n)for(var r=0,o=n.length;r<o;r++){var a=n[r];Y(a)&&(t=a)}}return t?V(t):e}function Y(e){var t=document.documentElement.clientHeight,n=document.documentElement.clientWidth,r=$(e);return 0<=r[0]&&0<=r[1]&&r[0]<n&&r[1]<t&&0<e.offsetWidth&&0<e.offsetHeight}function $(e){for(var t=0,n=0;e;)t+=e.offsetLeft,n+=e.offsetTop,e=e.offsetParent;return[t,n]}function q(e){Te.logEvent(Qe.MarkLoadTimeCalled,[e]),e?n(nt,{startTime:e}):n(nt)}function G(){Z(),Pe=window.setTimeout(function(){Ne=$e(Ne,rt.BeaconSentAfterTimeout),K()},Se.maxMeasureTime-v())}function Z(){Pe&&clearTimeout(Pe)}function J(){var e=["v="+ye,"id="+F(),"sid="+He,"uid="+_e,"l="+encodeURIComponent(ve()),"HN="+encodeURIComponent(document.location.hostname),"PN="+encodeURIComponent(document.location.pathname)];Ne&&e.push("fl="+Ne);var t=f();return t&&e.push("CD="+t),Se.beaconUrl+"?"+e.join("&")}function K(){var e;if(Z(),F()&&He&&L()&&!ke){Te.logEvent(Qe.DataCollectionStart);var t=h(tt),n=h(nt);(!t||n&&n.startTime<t.startTime)&&q();var r=y(),o="";Fe||(o=w());var a=T(),i=S(),u=b();document.visibilityState&&"visible"!==document.visibilityState&&(Ne=$e(Ne,rt.VisibilityStateNotVisible));var c=J(),d=U("script"),s=U("style"),l=(Ie?"":"&NT="+B())+(Re?"&LJS="+u:"")+"&PS=ns"+N()+"bs"+x()+(-1<d?"is"+d:"")+"ss"+M()+"bc"+P()+(-1<s?"ic"+s:"")+"ia"+z().length+"it"+document.getElementsByTagName("img").length+"dd"+H()+"nd"+document.getElementsByTagName("*").length+"vh"+document.documentElement.clientHeight+"vw"+document.documentElement.clientWidth+"dh"+D(document)+"dw"+j(document)+(O()?"ds"+O():"")+(W()?"ct"+W()+"_":"")+"er"+be+"nt"+X()+(navigator.deviceMemory?"dm"+Math.round(navigator.deviceMemory):"")+(o?"&IX="+o:"")+(void 0!==De?"&FID="+De:"")+(a?"&CPU="+a:"")+(r?"&ET="+r:"")+(!1!==i?"&CLS="+i:""),f=Je(E(),Se,c+l),m=f[0],v=f[1],g=c+l+(0<m.length?"&UT="+m.join(","):"");for(Te.logEvent(Qe.MainBeaconSent,[g]),te(g),Ie=ke=1,Fe=o?1:0;v.length;){m=(e=Je(v,Se,c))[0],v=e[1];var p=c+"&UT="+m.join(",");Te.logEvent(Qe.UserTimingBeaconSent,[p]),te(p)}}}function Q(){if(F()&&He&&L()&&!Fe&&ke){var e=w();if(e){var t=J()+"&IX="+e+(void 0!==De?"&FID="+De:"");Te.logEvent(Qe.InteractionBeaconSent,[t]),te(t),Fe=1}}}function ee(){if(F()&&He&&L()&&ke&&f()){var e=J();Te.logEvent(Qe.CustomDataBeaconSent,[e]),te(e)}}function te(e){(new Image).src=e}function ne(){"undefined"==typeof Be.s&&(Be.s=Math.round(v()))}function re(e){if(de(),"undefined"==typeof Be.k){if(Be.k=Math.round(v()),e&&e.target instanceof Element){var t=qe(e.target);t&&(Be.ki=t)}Q()}}function oe(e){if(de(),"undefined"==typeof Be.c){Be.c=Math.round(v());var t=void 0;try{e&&e.target instanceof Element&&(t=e.target)}catch(e){Te.logEvent(Qe.EventTargetAccessError)}if(t){e.clientX&&(Be.cx=e.clientX,Be.cy=e.clientY);var n=qe(t);n&&(Be.ci=n)}Q()}}function ae(e,t,n){void 0===n&&(n=!1),window.addEventListener?window.addEventListener(e,t,n):window.attachEvent&&__ENABLE_POLYFILLS&&window.attachEvent("on"+e,t)}function ie(e,t,n){void 0===n&&(n=!1),window.removeEventListener?window.removeEventListener(e,t,n):window.detachEvent&&__ENABLE_POLYFILLS&&window.detachEvent("on"+e,t)}function ue(){var e=function(){Ne=$e(Ne,rt.BeaconSentFromUnloadHandler),Te.logEvent(Qe.UnloadHandlerTriggered),K(),Q()};"onpagehide"in self?ae("pagehide",e,!0):(ae("unload",e,!0),ae("beforeunload",e,!0)),ae("visibilitychange",function(){"hidden"===document.visibilityState&&e()},!0)}function ce(){ae("scroll",ne),ae("keydown",re),ae("mousedown",oe)}function de(){ie("scroll",ne),ie("keydown",re),ie("mousedown",oe)}function se(e){return void 0===e&&(e=!1),e?"".concat(Number(new Date),"00000"):"".concat(Number(new Date)).concat(he(String(Math.round(1e5*Math.random())),"00000"))}function le(e){var t=ge("lux_uid");if(!t||t.length<11)t=e;else{var n=parseInt(t.substring(0,10));86400<Number(new Date)/1e3-n&&(t=e)}return fe(t),t}function fe(e){return pe("lux_uid",e,Ae),e}function me(){return _e}function ve(){if(ut.label)return Ne=$e(Ne,rt.PageLabelFromLabelProp),ut.label;if("undefined"!=typeof ut.pagegroups){var n=ut.pagegroups,r="".concat(document.location.hostname).concat(document.location.pathname),o="",e=function(t){var e=n[t];if(Array.isArray(e)&&e.every(function(e){return!it.isMatching(e,r)||(o=t,!1)}),o.length)return Ne=$e(Ne,rt.PageLabelFromPagegroup),{value:o}};for(var t in n){var a=e(t);if("object"==typeof a)return a.value}}if("undefined"!=typeof ut.jspagelabel){var i=Function('"use strict"; return '.concat(ut.jspagelabel));try{var u=i();if(u)return Ne=$e(Ne,rt.PageLabelFromGlobalVariable),u}catch(c){Te.logEvent(Qe.PageLabelEvaluationError,[ut.jspagelabel,c])}}return Ne=$e(Ne,rt.PageLabelFromDocumentTitle),document.title}function ge(e){try{for(var t=document.cookie.split(";"),n=0;n<t.length;n++){var r=t[n].split("=");if(e===r[0].trim())return unescape(r[1])}}catch(o){Te.logEvent(Qe.CookieReadError)}return undefined}function pe(e,t,n){try{document.cookie=e+"="+escape(t)+(n?"; max-age="+n:"")+"; path=/; SameSite=Lax"}catch(r){Te.logEvent(Qe.CookieSetError)}}function he(e,t){return(t+e).slice(-t.length)}function Ee(e){var t=e[0],n=e.slice(1);"function"==typeof ze[t]&&ze[t].apply(ze,n)}ut.samplerate=1;var ye="305",Te=new et,Se=Ye(ut);Te.logEvent(Qe.EvaluationStart,[ye]);var be=0;window.addEventListener("error",e);var we=("object"==typeof window.LUX_al?window.LUX_al:[]).slice();if("function"==typeof PerformanceObserver){var Le=new PerformanceObserver(function(e){e.getEntries().forEach(function(e){Te.logEvent(Qe.PerformanceEntryReceived,[e]),"longtask"===e.entryType&&-1!==we.indexOf(e)||we.push(e)})});try{"function"==typeof PerformanceLongTaskTiming&&Le.observe({type:"longtask",buffered:!0}),"function"==typeof LargestContentfulPaint&&Le.observe({type:"largest-contentful-paint",buffered:!0}),"function"==typeof PerformanceElementTiming&&Le.observe({type:"element",buffered:!0}),"function"==typeof PerformancePaintTiming&&Le.observe({type:"paint",buffered:!0}),"function"==typeof LayoutShift&&Le.observe({type:"layout-shift",buffered:!0})}catch(Ve){Te.logEvent(Qe.PerformanceObserverError,[Ve])}}var xe,Pe,Ne=0,Me=[],Ue=[],Be={},Ce={},ke=0,Ie=0,Fe=0,Re=1,Ae=1800,He=se(),_e=le(He);L()?Te.logEvent(Qe.SessionIsSampled,[Se.samplerate]):Te.logEvent(Qe.SessionIsNotSampled,[Se.samplerate]);var De,je=ut.ns?ut.ns-at.navigationStart:0;ot.timing||(Te.logEvent(Qe.NavTimingNotSupported),Ne=$e(Ne,rt.NavTimingNotSupported)),Te.logEvent(Qe.NavigationStart,[at.navigationStart]);var Oe=["click","mousedown","keydown","touchstart","pointerdown"],Xe={passive:!0,capture:!0};if(Oe.forEach(function(e){window.addEventListener(e,t,Xe)}),Se.auto){var We=function(){var e=v(),t=Se.minMeasureTime-e;t<=0?(Te.logEvent(Qe.OnloadHandlerTriggered,[e,Se.minMeasureTime]),"complete"===document.readyState?K():ae("load",function(){setTimeout(K,200)})):setTimeout(We,t)};We()}Se.sendBeaconOnPageHidden&&ue(),ce(),G();var ze=Se;return ze.mark=n,ze.measure=r,ze.init=m,ze.markLoadTime=q,ze.send=function(){Te.logEvent(Qe.SendCalled),K()},ze.addData=c,ze.getSessionId=me,ze.getDebug=function(){return Te.getEvents()},ze.forceSample=function(){Te.logEvent(Qe.ForceSampleCalled),fe(se(!0))},ze.doUpdate=function(){},ze.cmd=Ee,ze.version=ye,ut.ac&&ut.ac.length&&ut.ac.forEach(Ee),"undefined"!=typeof window.LUX_ae&&window.LUX_ae.forEach(e),Te.logEvent(Qe.EvaluationEnd),ze}(),window.LUX=ut,ct=n(),ut.customerid=47044334}();