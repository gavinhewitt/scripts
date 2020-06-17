/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2020-06-17; 3978) */

!function(s,e,n){var r,i,t;if(s)try{var u="https:",a="error",o=s.console,c="doNotTrack",p=s.navigator,f=s.location,l=f.hostname,h=s.document,d=p.userAgent,g="Not sending request ",m=encodeURIComponent,v=decodeURIComponent,y=JSON.stringify,w=s.addEventListener,_="https://queue."+n,E=undefined,b=h.documentElement||{},O="language",x="Height",A="scroll",M=A+x,S="offset"+x,T="client"+x,k=s.screen,q=p.webdriver||s.__nightmare||"callPhantom"in s||"_phantom"in s||"phantom"in s||/(bot|spider|crawl)/i.test(d)||s.chrome&&(""===p.languages||!p.plugins.length||!(p.plugins instanceof PluginArray)),R={version:0};q&&(R.bot=!0);function $(e){o&&o.warn&&o.warn("Simple Analytics:",e)}function B(){var n=s.crypto||s.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11;return n&&n.getRandomValues?e.replace(/[018]/g,function(e){return(e^n.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}):e.replace(/[018]/g,function(e){var n=16*Math.random()|0;return(e<2?n:3&n|8).toString(16)})}function C(){for(var e={},n=arguments,t=0;t<n.length;t++){var r=n[t];if(r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}function D(e){var n=f.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),t=n?n.map(function(e){return e.split("=")[1]}):[];if(t&&t[0])return t[0]}function P(n,e){n=C(R,n);var t=new Image;e&&(t.onerror=e,t.onload=e),t.src=_+"/simple.gif?"+Object.keys(n).filter(function(e){return n[e]!=E}).map(function(e){return m(e)+"="+m(n[e])}).join("&")}var I=Date.now,j=function(e){e=e.message||e,$(e),P({type:a,error:e,url:J+f.pathname})};w(a,function(e){e.filename&&-1<e.filename.indexOf(n)&&j(e.message)},!1);var F,N="pushState",U=s.dispatchEvent,W=I(),z=0;try{F=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(be){}function H(e,n){return e&&e.getAttribute("data-"+n)}var L=h.querySelector('script[src*="'+n+'"]'),V=e.mode||H(L,"mode"),G=!!(t=e.skipDnt)===t?e.skipDnt:"true"==H(L,"ignore-dnt")||"true"==H(L,"skip-dnt"),J=e.hostname||H(L,"hostname")||l,Y=e.ignorePages||H(L,"ignore-pages"),Z=!("false"==H(L,"auto-collect")||!1===e.autoCollect),K=e.saGlobal||H(L,"sa-global")||"sa_event",Q=Array.isArray(Y)?Y:"string"==typeof Y&&Y.length?Y.split(/, ?/):[];if(R.hostname=J,h.doctype||$("Add DOCTYPE html for more accurate dimensions"),J!==l&&(R.hostname_original=l),!G&&c in p&&"1"==p[c])return $(g+"when "+c+" is enabled");if(-1==l.indexOf(".")||/^[0-9]+$/.test(l.replace(/\./g,"")))return $(g+"from "+l);var X,ee,ne={},te=B(),re=(h.referrer||"").replace(l,J).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||E,ie="(utm_)?",ae={source:D(ie+"source|ref"),medium:D(ie+"medium"),campaign:D(ie+"campaign"),term:D(ie+"term"),content:D(ie+"content"),referrer:re},oe=0;s.addEventListener("visibilitychange",function(){h.hidden?ee=I():oe+=I()-ee},!1);function ce(e,n){var t={type:"append",original_id:n?e:te};t.duration=Math.round((I()-W+oe)/1e3),oe=0,W=I(),t.scrolled=Math.max(0,z,pe()),!n&&se in p?p[se](_+"/append",y(C(R,t))):P(t)}var se="sendBeacon";w("unload",ce,!1);var ue=h.body||{},pe=function(){try{var e=b[T]||0,n=Math.max(ue[M]||0,ue[S]||0,b[T]||0,b[M]||0,b[S]||0);return Math.min(100,5*Math.round(100*((b.scrollTop||0)+e)/n/5))}catch(t){return 0}};w("load",function(){z=pe(),w(A,function(){z<pe()&&(z=pe())},!1)});function fe(e){var n=e||v(f.pathname);if(!function(e){for(var n in Q){var t=Q[n];if(t){var r="/"==t[0]?t:"/"+t;if(r===e||new RegExp(r.replace(/\*/gi,"(.*)"),"gi").test(e))return!0}}return!1}(n))return"hash"==V&&f.hash&&(n+=f.hash.split("?")[0]),n;$(g+"because "+n+" is ignored")}function le(e,n){var t=fe(n);if(t&&X!=t){var r={path:X=t,viewport_width:Math.max(b.clientWidth||0,s.innerWidth||0)||null,viewport_height:Math.max(b[T]||0,s.innerHeight||0)||null};p[O]&&(r[O]=p[O]),k&&(r.screen_width=k.width,r.screen_height=k.height);var i=s.performance,a="navigation",o=i&&i.getEntriesByType&&i.getEntriesByType(a)[0]&&i.getEntriesByType(a)[0].type?-1<["reload","back_forward"].indexOf(i.getEntriesByType(a)[0].type):i&&i[a]&&-1<[1,2].indexOf(i[a].type),c=!!re&&re.split("/")[0]==J;r.unique=!e&&!o&&!c,ne=r,function(e,n,t){e&&ce(""+te,!0),te=B(),ne.id=te;var r=J+fe();P(C(ne,n?{referrer:t?re:null}:ae,{https:f.protocol==u,timezone:F,width:s.innerWidth,type:"pageview"})),re=r}(e,e||o,c)}}var he=s.history,de=he?he.pushState:E;if(Z&&de&&Event&&U){he.pushState=(i=he[r=N],function(){var e,n=arguments,t=i.apply(this,n);return"function"==typeof Event?e=new Event(r):(e=h.createEvent("Event")).initEvent(r,!0,!0),e.arguments=n,U(e),t}),w(N,function(){le(1)},!1),w("popstate",function(){le(1)},!1)}Z&&"hash"==V&&"onhashchange"in s&&w("hashchange",function(){le(1)},!1),Z?le():s.sa_pageview=function(e){le(0,e)};function ge(e,n){var t=e instanceof Function,r=n instanceof Function?n:function(){};if(ye.indexOf(typeof e)<0&&!t)return $("event is not a string: "+e),r();try{if(t&&(e=e(),ye.indexOf(typeof e)<0))return $("event function output is not a string: "+e),r()}catch(i){return $("in your event function: "+i.message),r()}(e=(""+e).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,""))&&P(C(ae,{type:"event",event:e,page_id:ne.id,session_id:ve}),r)}function me(e,n){ge(e,n)}var ve=B(),ye=["string","number"];s[K]||(s[K]=me);var we=s[K],_e=we&&we.q?we.q:[];for(var Ee in s[K]=me,_e)ge(_e[Ee])}catch(be){j(be)}}(window,{},"simpleanalyticscdn.com");
//# sourceMappingURL=hello.js.map