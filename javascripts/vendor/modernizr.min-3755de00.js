window.Modernizr=function(e,t,n){function r(e){m.cssText=e}function o(e,t){return typeof e===t}var a,i,c,l="2.7.0",s={},u=!0,f=t.documentElement,p="modernizr",d=t.createElement(p),m=d.style,h={}.toString,g={svg:"http://www.w3.org/2000/svg"},v={},y=[],E=y.slice,b={}.hasOwnProperty;c=o(b,"undefined")||o(b.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return b.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=E.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(E.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(E.call(arguments)))};return r}),v.svg=function(){return!!t.createElementNS&&!!t.createElementNS(g.svg,"svg").createSVGRect},v.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==g.svg},v.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(h.call(t.createElementNS(g.svg,"clipPath")))};for(var S in v)c(v,S)&&(i=S.toLowerCase(),s[i]=v[S](),y.push((s[i]?"":"no-")+i));return s.addTest=function(e,t){if("object"==typeof e)for(var r in e)c(e,r)&&s.addTest(r,e[r]);else{if(e=e.toLowerCase(),s[e]!==n)return s;t="function"==typeof t?t():t,"undefined"!=typeof u&&u&&(f.className+=" "+(t?"":"no-")+e),s[e]=t}return s},r(""),d=a=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function a(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||d.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function i(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,c=r(),l=c.length;l>i;i++)a.createElement(c[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function l(e){e||(e=t);var r=o(e);return y.shivCSS&&!s&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||c(e,r),e}var s,u,f="3.7.0",p=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",s="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){s=!0,u=!0}}();var y={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:f,shivCSS:p.shivCSS!==!1,supportsUnknownElements:u,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:l,createElement:a,createDocumentFragment:i};e.html5=y,l(t)}(this,t),s._version=l,f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(u?" js "+y.join(" "):""),s}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function o(e){return"string"==typeof e}function a(){}function i(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=v.shift();y=1,e?e.t?m(function(){("c"==e.t?p.injectCss:p.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):y=0}function l(e,n,r,o,a,l,s){function u(t){if(!d&&i(f.readyState)&&(E.r=d=1,!y&&c(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&m(function(){S.removeChild(f)},50);for(var r in F[n])F[n].hasOwnProperty(r)&&F[n][r].onload()}}var s=s||p.errorTimeout,f=t.createElement(e),d=0,g=0,E={t:r,s:n,e:a,a:l,x:s};1===F[n]&&(g=1,F[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){u.call(this,g)},v.splice(o,0,E),"img"!=e&&(g||2===F[n]?(S.insertBefore(f,b?null:h),m(u,s)):F[n].push(f))}function s(e,t,n,r,a){return y=0,t=t||"j",o(e)?l("c"==t?j:C,e,t,this.i++,n,r,a):(v.splice(this.i++,0,e),1==v.length&&c()),this}function u(){var e=p;return e.loader={load:s,i:0},e}var f,p,d=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,E="MozAppearance"in d.style,b=E&&!!t.createRange().compareNode,S=b?d:h.parentNode,d=e.opera&&"[object Opera]"==g.call(e.opera),d=!!t.attachEvent&&!d,C=E?"object":d?"script":"img",j=d?"script":C,w=Array.isArray||function(e){return"[object Array]"==g.call(e)},N=[],F={},x={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};p=function(e){function t(e){var t,n,r,e=e.split("!"),o=N.length,a=e.pop(),i=e.length,a={url:a,origUrl:a,prefixes:e};for(n=0;i>n;n++)r=e[n].split("="),(t=x[r.shift()])&&(a=t(a,r));for(n=0;o>n;n++)a=N[n](a);return a}function i(e,o,a,i,c){var l=t(e),s=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(o&&(o=r(o)?o:o[e]||o[i]||o[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,o,a,i,c):(F[l.url]?l.noexec=!0:F[l.url]=1,a.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(r(o)||r(s))&&a.load(function(){u(),o&&o(l.origUrl,c,i),s&&s(l.origUrl,c,i),F[l.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(f=function(){var e=[].slice.call(arguments);p.apply(this,e),d()}),i(e,f,t,0,s);else if(Object(e)===e)for(l in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(l)&&(!n&&!--c&&(r(f)?f=function(){var e=[].slice.call(arguments);p.apply(this,e),d()}:f[l]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),d()}}(p[l])),i(e[l],f,t,l,s))}else!n&&d()}var c,l,s=!!e.test,u=e.load||e.both,f=e.callback||a,p=f,d=e.complete||a;n(s?e.yep:e.nope,!!u),u&&n(u)}var l,s,f=this.yepnope.loader;if(o(e))i(e,0,f,0);else if(w(e))for(l=0;l<e.length;l++)s=e[l],o(s)?i(s,0,f,0):w(s)?p(s):Object(s)===s&&c(s,f);else Object(e)===e&&c(e,f)},p.addPrefix=function(e,t){x[e]=t},p.addFilter=function(e){N.push(e)},p.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,l,s){var u,f,d=t.createElement("script"),o=o||p.errorTimeout;d.src=e;for(f in r)d.setAttribute(f,r[f]);n=s?c:n||a,d.onreadystatechange=d.onload=function(){!u&&i(d.readyState)&&(u=1,n(),d.onload=d.onreadystatechange=null)},m(function(){u||(u=1,n(1))},o),l?d.onload():h.parentNode.insertBefore(d,h)},e.yepnope.injectCss=function(e,n,r,o,i,l){var s,o=t.createElement("link"),n=l?c:n||a;o.href=e,o.rel="stylesheet",o.type="text/css";for(s in r)o.setAttribute(s,r[s]);i||(h.parentNode.insertBefore(o,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};