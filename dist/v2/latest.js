/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2020-03-02; 21e2) */

!function(o,n){if(o){function c(){var n=o.crypto||o.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11;return n?e.replace(/[018]/g,function(e){return(e^n.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}):e.replace(/[018]/g,function(e){var n=16*Math.random()|0;return(e<2?n:3&n|8).toString(16)})}var s,u="https:",t="error",r=o.console,e="doNotTrack",i=o.navigator,f=o.location,p=o.document,a="Not sending requests ",h=encodeURIComponent,d=decodeURIComponent,l=JSON.stringify,m=o.addEventListener,v="https://queue."+n,g=undefined,y={version:2},w=function(e){r&&r.warn&&r.warn("Simple Analytics:",e)},E=Date.now,O=function(){for(var e={},n=0;n<arguments.length;n++){var t=arguments[n];if(t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};try{s=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(ie){}m(t,function(e){e.filename&&-1<e.filename.indexOf(n)&&re(e.message)},!1);function b(e,n){return e&&e.getAttribute("data-"+n)}var x,S,_="pushState",T=o.dispatchEvent,q=E(),M=0,B=p.querySelector('script[src*="'+n+'"]'),$=b(B,"mode"),k="true"==b(B,"skip-dnt"),I=b(B,"hostname")||f.hostname,R=b(B,"sa-global")||"sa_event";if(y.hostname=I,!k&&e in i&&"1"==i[e])return w(a+"when "+e+" is enabled");if(-1==f.hostname.indexOf("."))return w(a+"from "+f.localhost);try{function j(e){var n=f.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),t=n?n.map(function(e){return e.split("=")[1]}):[];if(t&&t[0])return t[0]}var A,C,N={},U=c(),z="(utm_)?",D={source:j(z+"source|source|ref"),medium:j(z+"medium"),campaign:j(z+"campaign"),referrer:(p.referrer||"").replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)\/$/,"$1")||g},F=0;o.addEventListener("visibilitychange",function(){p.hidden?C=E():F+=E()-C},!1);function L(e,n){var t={type:"append",original_id:n?e:U};t.duration=Math.round((E()-q+F)/1e3),F=0,q=E(),t.scrolled=Math.max(0,M,W()),!n&&H in i?i[H](v+"/append",l(O(y,t))):te(t)}var H="sendBeacon";m("unload",L,!1);var J="scroll",P=p.body||{},V=p.documentElement||{},W=function(){try{var e="Height",n=J+e,t="offset"+e,r="client"+e,i=V[r]||0,a=Math.max(P[n]||0,P[t]||0,V[r]||0,V[n]||0,V[t]||0);return Math.min(100,5*Math.round(100*((V.scrollTop||0)+i)/a/5))}catch(o){return 0}};m("load",function(){M=W(),m(J,function(){M<W()&&(M=W())},!1)});function Z(e){var n=d(f.pathname);if("hash"==$&&f.hash&&(n+=f.hash.split("?")[0]),A!=n){var t={path:A=n},r=o.performance,i="navigation",a=r&&r.getEntriesByType&&r.getEntriesByType(i)[0]&&r.getEntriesByType(i)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(i)[0].type):r&&r[i]&&-1<[1,2].indexOf(r[i].type);t.unique=!e&&!a&&(!p.referrer||p.referrer.split("/")[2]!=f.hostname),N=t,function(e,n){e&&L(""+U,!0),U=c(),N.id=U,te(O(N,n?null:D,{https:f.protocol==u,timezone:s,width:o.innerWidth,type:"pageview"}))}(e,e||a)}}var G=o.history;if((G?G.pushState:g)&&Event&&T){G.pushState=(S=G[x=_],function(){var e,n=S.apply(this,arguments);return"function"==typeof Event?e=new Event(x):(e=p.createEvent("Event")).initEvent(x,!0,!0),e.arguments=arguments,T(e),n}),m(_,function(){Z(1)},!1),m("popstate",function(){Z(1)},!1)}"hash"==$&&"onhashchange"in o&&m("hashchange",function(){Z(1)},!1),Z();function K(e){var n=e instanceof Function;if(["string","number"].indexOf(typeof e)<0&&!n)return w("event is not a string: "+e);try{if(n&&(e=e(),["string","number"].indexOf(typeof e)<0))return w("event function output is not a string: "+e)}catch(t){return w("in your event function: "+t.message)}(e=(""+e).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,""))&&te(O(D,{type:"event",event:e,session_id:X}))}function Q(e){K(e)}var X=c();o[R]||(o[R]=Q);var Y=o[R],ee=Y&&Y.q?Y.q:[];for(var ne in o[R]=Q,ee)K(ee[ne])}catch(ie){re(ie)}}function te(n){n=O(y,n),(new Image).src=v+"/simple.gif?"+Object.keys(n).filter(function(e){return n[e]!=g}).map(function(e){return h(e)+"="+h(n[e])}).join("&")}function re(e){e=e.message||e,w(e),te({type:t,error:e,url:I+f.pathname})}}(window,"simpleanalyticscdn.com");