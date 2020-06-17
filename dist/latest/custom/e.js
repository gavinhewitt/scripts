/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2020-06-17; 6c38) */

!function(s,e,n){var r,i,t;if(s)try{var u="https:",a="error",o=s.console,c="doNotTrack",p=s.navigator,f=s.location,l=f.hostname,h=s.document,g=p.userAgent,d="Not sending request ",m=encodeURIComponent,v=decodeURIComponent,y=JSON.stringify,w=s.addEventListener,E="https://"+n,_=undefined,b=h.documentElement||{},x="language",O="Height",A="scroll",M=A+O,S="offset"+O,T="client"+O,k=s.screen,R=p.webdriver||s.__nightmare||"callPhantom"in s||"_phantom"in s||"phantom"in s||/(bot|spider|crawl)/i.test(g)||s.chrome&&(""===p.languages||!p.plugins.length||!(p.plugins instanceof PluginArray)),$={version:3};R&&($.bot=!0);function q(e){o&&o.warn&&o.warn("Simple Analytics:",e)}function B(){var n=s.crypto||s.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11;return n&&n.getRandomValues?e.replace(/[018]/g,function(e){return(e^n.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}):e.replace(/[018]/g,function(e){var n=16*Math.random()|0;return(e<2?n:3&n|8).toString(16)})}function C(){for(var e={},n=arguments,t=0;t<n.length;t++){var r=n[t];if(r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}function D(e){var n=f.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),t=n?n.map(function(e){return e.split("=")[1]}):[];if(t&&t[0])return t[0]}function P(n,e){n=C($,n);var t=new Image;e&&(t.onerror=e,t.onload=e),t.src=E+"/simple.gif?"+Object.keys(n).filter(function(e){return n[e]!=_}).map(function(e){return m(e)+"="+m(n[e])}).join("&")}var I=Date.now,j=function(e){e=e.message||e,q(e),P({type:a,error:e,url:J+f.pathname})};w(a,function(e){e.filename&&-1<e.filename.indexOf(n)&&j(e.message)},!1);var F,H="pushState",N=s.dispatchEvent,U=I(),W=0;try{F=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(be){}function z(e,n){return e&&e.getAttribute("data-"+n)}var L=h.querySelector('script[src*="'+n+'"]'),V=e.mode||z(L,"mode"),G=!!(t=e.skipDnt)===t?e.skipDnt:"true"==z(L,"ignore-dnt")||"true"==z(L,"skip-dnt"),J=e.hostname||z(L,"hostname")||l,Y=e.ignorePages||z(L,"ignore-pages"),Z=!("false"==z(L,"auto-collect")||!1===e.autoCollect),K=e.saGlobal||z(L,"sa-global")||"sa",Q=Array.isArray(Y)?Y:"string"==typeof Y&&Y.length?Y.split(/, ?/):[];if($.hostname=J,h.doctype||q("Add DOCTYPE html for more accurate dimensions"),J!==l&&($.hostname_original=l),!G&&c in p&&"1"==p[c])return q(d+"when "+c+" is enabled");if(-1==l.indexOf(".")||/^[0-9]+$/.test(l.replace(/\./g,"")))return q(d+"from "+l);var X,ee,ne={},te=B(),re=(h.referrer||"").replace(l,J).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||_,ie="(utm_)?",ae={source:D(ie+"source|ref"),medium:D(ie+"medium"),campaign:D(ie+"campaign"),term:D(ie+"term"),content:D(ie+"content"),referrer:re},oe=0;s.addEventListener("visibilitychange",function(){h.hidden?ee=I():oe+=I()-ee},!1);function ce(e,n){var t={type:"append",original_id:n?e:te};t.duration=Math.round((I()-U+oe)/1e3),oe=0,U=I(),t.scrolled=Math.max(0,W,pe()),!n&&se in p?p[se](E+"/append",y(C($,t))):P(t)}var se="sendBeacon";w("unload",ce,!1);var ue=h.body||{},pe=function(){try{var e=b[T]||0,n=Math.max(ue[M]||0,ue[S]||0,b[T]||0,b[M]||0,b[S]||0);return Math.min(100,5*Math.round(100*((b.scrollTop||0)+e)/n/5))}catch(t){return 0}};w("load",function(){W=pe(),w(A,function(){W<pe()&&(W=pe())},!1)});function fe(e){var n=e||v(f.pathname);if(!function(e){for(var n in Q){var t=Q[n];if(t){var r="/"==t[0]?t:"/"+t;if(r===e||new RegExp(r.replace(/\*/gi,"(.*)"),"gi").test(e))return!0}}return!1}(n))return"hash"==V&&f.hash&&(n+=f.hash.split("?")[0]),n;q(d+"because "+n+" is ignored")}function le(e,n){var t=fe(n);if(t&&X!=t){var r={path:X=t,viewport_width:Math.max(b.clientWidth||0,s.innerWidth||0)||null,viewport_height:Math.max(b[T]||0,s.innerHeight||0)||null};p[x]&&(r[x]=p[x]),k&&(r.screen_width=k.width,r.screen_height=k.height);var i=s.performance,a="navigation",o=i&&i.getEntriesByType&&i.getEntriesByType(a)[0]&&i.getEntriesByType(a)[0].type?-1<["reload","back_forward"].indexOf(i.getEntriesByType(a)[0].type):i&&i[a]&&-1<[1,2].indexOf(i[a].type),c=!!re&&re.split("/")[0]==J;r.unique=!e&&!o&&!c,ne=r,function(e,n,t){e&&ce(""+te,!0),te=B(),ne.id=te;var r=J+fe();P(C(ne,n?{referrer:t?re:null}:ae,{https:f.protocol==u,timezone:F,width:s.innerWidth,type:"pageview"})),re=r}(e,e||o,c)}}var he=s.history,ge=he?he.pushState:_;if(Z&&ge&&Event&&N){he.pushState=(i=he[r=H],function(){var e,n=arguments,t=i.apply(this,n);return"function"==typeof Event?e=new Event(r):(e=h.createEvent("Event")).initEvent(r,!0,!0),e.arguments=n,N(e),t}),w(H,function(){le(1)},!1),w("popstate",function(){le(1)},!1)}Z&&"hash"==V&&"onhashchange"in s&&w("hashchange",function(){le(1)},!1),Z?le():s.sa_pageview=function(e){le(0,e)};function de(e,n){var t=e instanceof Function,r=n instanceof Function?n:function(){};if(ye.indexOf(typeof e)<0&&!t)return q("event is not a string: "+e),r();try{if(t&&(e=e(),ye.indexOf(typeof e)<0))return q("event function output is not a string: "+e),r()}catch(i){return q("in your event function: "+i.message),r()}(e=(""+e).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,""))&&P(C(ae,{type:"event",event:e,page_id:ne.id,session_id:ve}),r)}function me(e,n){de(e,n)}var ve=B(),ye=["string","number"];s[K]||(s[K]=me);var we=s[K],Ee=we&&we.q?we.q:[];for(var _e in s[K]=me,Ee)de(Ee[_e])}catch(be){j(be)}}(window,{},"<!--# echo var="http_host" default="" -->");
//# sourceMappingURL=e.js.map